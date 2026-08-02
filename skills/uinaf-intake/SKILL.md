---
name: uinaf-intake
description: Save, capture, or intake a useful public article, video, tweet, podcast, paper, or research source into the shared uinaf/intake library. Use for explicit $uinaf-intake requests and natural requests such as "save this", "capture this source", or "intake this" when the target is public research material. Do not use for private documents, attachments, accounting intake, internal notes, or source material that cannot be retrieved well enough to summarize faithfully.
---

# uinaf intake

Publish a compact agent-written summary to the public
[`uinaf/intake`](https://github.com/uinaf/intake) repository. The Markdown entry
is canonical; `intake.uinaf.dev` is generated from it.

## Boundary

Only intake public source material. Never publish credentials, private context,
personal data, paid/private source text, screenshots, media, full articles, or
full transcripts.

If the source cannot be retrieved and the user has not supplied enough of it to
write an accurate summary, stop. Do not create a hollow bookmark or infer the
missing content.

## Workflow

1. Read the source completely enough to understand its claims and context.
2. Find the registered `uinaf/intake` checkout. Prefer the workspace project
   registry, then `~/projects/uinaf/intake`. Do not invent another permanent
   checkout.
3. Run `bun run intake:find -- "<source-url>"` in that checkout.
   - Exit 0 prints an existing entry: improve that file instead of duplicating it.
   - Exit 1 means the normalized source is new.
4. Read [entry format](references/entry-format.md), select existing tags where
   they fit, and write the proposed Markdown to a temporary file outside the
   checkout.
5. Publish it with:

   ```bash
   skills/uinaf-intake/scripts/publish-entry.sh \
     "<registered-checkout>" \
     "<temporary-markdown-file>" \
     "entries/YYYY/YYYY-MM-DD-kebab-case.md"
   ```

6. Report the resulting commit and public entry URL. If the push loses a race,
   the script rebases and retries without force-pushing. If rebasing reveals a
   duplicate source, merge the summaries deliberately and rerun.

## Writing Rules

- Summarize in your own words. Preserve important nuance and uncertainty.
- Start with a short overview, followed by useful takeaways or structured notes.
- Attribute claims through the `source` URL; do not reproduce the source.
- Use `article`, `video`, `tweet`, `podcast`, `paper`, or `research`.
- Use lowercase kebab-case tags and reuse existing tags before creating synonyms.
- Keep the original `saved` date and file stem when improving an existing entry.
- Do not add workflow fields, review states, or private annotations.

Normal single-source intake publishes directly to `main`. Bulk imports, schema
changes, site changes, and skill changes require a pull request.

## Verification

The publish script runs entry validation before committing and uses a signed
commit. Do not bypass failed checks or disable signing. Never force-push
`main`.
