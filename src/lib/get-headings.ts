import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import { headingTree } from "./toc-function";

const postsDirectory = path.join(process.cwd(), "contents", "blogs");
export async function getHeadings(id: string) {

  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
//   const fileContents = `
// # markdown-syntax-guide

// ![Car Image](/static/car-image-1-64f270.jpg)

// ## Headers

// ::: danger
// Hello im callout
// :::

// # This is a Heading h1

// ## This is a Heading h2

// ###### This is a Heading h6

// ## Emphasis

// *This text will be italic*  
// **This text will also be bold**  
// *You **can** combine them*

// The activities I am currently doing...

// Other activities I am currently doing...
// `;
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(headingTree)
    .process(matterResult.content);

  return processedContent.data.headings;
}
