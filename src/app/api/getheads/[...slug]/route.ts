import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import { headingTree } from "../../../../lib/toc-function";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug[0];
  const folderPath = path.resolve('./contents');
  const postsDirectory = path.join(folderPath, slug);
  const paramSlug = params.slug[1];

  // Ensure paramSlug is not null or undefined
  if (!paramSlug) {
    return NextResponse.json({ 
      error: 'Slug parameter is missing',
      slug: slug,
      folderPath: folderPath,
      postsDirectory: postsDirectory,
      paramSlug: paramSlug 
    }, { status: 500 })
  }

  const fullPath = path.join(postsDirectory, `${paramSlug}.mdx`);

  // Check if the file exists
  if (!fs.existsSync(fullPath)) {
    return NextResponse.json({ error: `File not found at ${fullPath}` }, { status: 500 })
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(headingTree)
    .process(matterResult.content);

  return NextResponse.json(processedContent.data.headings);
}
