import { posts } from "#site/contents";
import { notFound } from "next/navigation";
import NavbarLayout from "../../navbar/components/NavbarLayout";
import BlogSingle from "../components/BlogSingle";
import { MDXContent } from "@/components/mdx-component";
import "./../../../styles/mdx.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  authors: [{ name: "Aditya Bagus Pratama", url: `${process.env.NEXT_PUBLIC_API_URL}` }],
  icons: {
    icon: "/th-nobord.webp",
  },
};

interface PostPageProps {
  params: {
    slug: string[];
  };
}
async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  // const html = await getHtml();

  const post = await getPostFromParams(params);
  if (!post || post.draft) {
    notFound();
  }
  const postTitle = post.title.split("|")[0].trim();
  metadata.title = `Post | ${postTitle}`;
  metadata.description = post.description?.split("|")[0].trim();
  return (
    <main className="wrapper flex min-h-screen flex-col items-center justify-between">
      <NavbarLayout isBlog={true}></NavbarLayout>
      <BlogSingle post={post} className="js-toc-content">
        <MDXContent code={post.body}></MDXContent>
      </BlogSingle>
    </main>
  );
}
