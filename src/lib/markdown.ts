import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypePrism from "@mapbox/rehype-prism";

export async function parseMarkdown(content: string) {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeFormat)
    // @ts-ignore
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(content);

  return processedContent.toString();
}