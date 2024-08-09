import fs from "fs";
import { join } from "path";
import { parseMarkdown } from "./markdown";

const postsDirectory = join(process.cwd(), "posts");

// function getMarkdown() {
//   const fullPath = join(postsDirectory, "first-post.md");
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   return fileContents;
// }

// export async function getHtml() {
//   const markdown = getMarkdown();
//   const html = await parseMarkdown(markdown);
//   return html;
// }