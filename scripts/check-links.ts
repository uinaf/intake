import { access, readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const root = join(process.cwd(), "dist");
const htmlFiles: Array<string> = [];

async function visit(directory: string): Promise<void> {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, item.name);
    if (item.isDirectory()) await visit(path);
    if (item.isFile() && extname(item.name) === ".html") htmlFiles.push(path);
  }
}

await visit(root);
const errors: Array<string> = [];

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (!href || href.startsWith("#") || /^[a-z]+:/i.test(href)) continue;
    const pathname = href.split(/[?#]/)[0];
    if (!pathname?.startsWith("/")) continue;
    const destination =
      pathname.endsWith("/") || extname(pathname) === ""
        ? join(root, pathname, "index.html")
        : join(root, pathname);
    try {
      await access(destination);
    } catch {
      errors.push(`${file.replace(`${root}/`, "")}: missing ${href}`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`checked internal links in ${htmlFiles.length} HTML files`);
