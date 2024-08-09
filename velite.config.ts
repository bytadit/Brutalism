import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight"; // Import rehype-highlight
import moonlightTheme from './src/assets/moonlight-ii.json' with { type: 'json' };
import rehypeShiki from '@shikijs/rehype'
import {fromMarkdown} from 'mdast-util-from-markdown'
import {visit} from 'unist-util-visit'
import { postProcess, preProcess } from "@/lib/rehype-raw";
import {
  transformerNotationDiff,
  // ...
} from '@shikijs/transformers'
const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post",
  pattern: "blogs/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      category: s.string().max(99),
      bgImage: s.string().max(999).optional(),
      tags: s.array(s.string()).optional(),
      draft: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      category: s.string().max(99),
      bgImage: s.string().max(999).optional(),
      tags: s.array(s.string()).optional(),
      draft: s.boolean().default(true),
      body: s.mdx(),
      repoLink: s.string().optional(),
      siteLink: s.string().optional(),
      notebookLink: s.string().optional(),
    })
    .transform(computedFields),
});
const options = {
  keepBackground: false,
  theme: "andromeeda",
  transformers: [
    transformerNotationDiff(), 
    // ...
  ],
};
// get themes here : https://shiki.style/themes#themes

export default defineConfig({
  root: "contents",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, projects },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, options],
      [rehypeShiki, options],
      [
        rehypeAutoLinkHeadings,
        {
          behavior: "wrap",
          properties: { className: "subheading-anchor" },
          ariaLabel: "Link to section",
        },
      ],
      rehypeHighlight,
      preProcess,
      postProcess,
    ],
    remarkPlugins: [],
  },
});

