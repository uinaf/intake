#!/bin/sh
set -eu

if [ "$#" -ne 3 ]; then
  echo "usage: publish-entry.sh <repository> <draft.md> <entries/YYYY/YYYY-MM-DD-slug.md>" >&2
  exit 2
fi

repository=$1
draft=$2
entry_path=$3

case "$entry_path" in
  entries/[0-9][0-9][0-9][0-9]/*.md) ;;
  *)
    echo "entry path must match entries/YYYY/YYYY-MM-DD-slug.md" >&2
    exit 2
    ;;
esac

git -C "$repository" rev-parse --git-dir >/dev/null
test -f "$draft"
git -C "$repository" fetch origin main

scratch=$(mktemp -d "${TMPDIR:-/tmp}/uinaf-intake.XXXXXX")
worktree="$scratch/worktree"

cleanup() {
  git -C "$repository" worktree remove --force "$worktree" >/dev/null 2>&1 || true
  rmdir "$scratch" >/dev/null 2>&1 || true
}
trap cleanup EXIT INT TERM

git -C "$repository" worktree add --detach "$worktree" origin/main
mkdir -p "$worktree/$(dirname "$entry_path")"
cp "$draft" "$worktree/$entry_path"

(
  cd "$worktree"
  pnpm install --frozen-lockfile
  pnpm run check:entries
  git add -- "$entry_path"
  if git diff --cached --quiet; then
    echo "entry is unchanged"
    exit 0
  fi
  git commit -S -m "content(intake): publish $(basename "$entry_path" .md)"

  attempt=1
  while [ "$attempt" -le 3 ]; do
    if git push origin HEAD:main; then
      git rev-parse HEAD
      exit 0
    fi
    git fetch origin main
    git rebase origin/main
    pnpm run check:entries
    attempt=$((attempt + 1))
  done

  echo "push failed after 3 attempts" >&2
  exit 1
)

