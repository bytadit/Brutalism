import { getAllTags, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import { posts } from "#site/contents";
import { Tag } from "@/components/tag";
import { TagCard } from "@/components/tagCard";
import NavbarLayout from "@/app/navbar/components/NavbarLayout";

export const metadata: Metadata = {
  title: "Bytadit | Post Tags",
  description: "Post Tags by Aditya Bagus Pratama",
  authors: [
    { name: "Aditya Bagus Pratama", url: `${process.env.NEXT_PUBLIC_API_URL}` },
  ],
  icons: {
    icon: "/th-nobord.webp",
  },
};

export default async function TagPage() {
  const allTags = getAllTags(posts);
  const sortedTags = sortTagsByCount(allTags);
  return (
    <main className="wrapper flex min-h-screen flex-col items-center justify-between">
      <NavbarLayout isBlog={true}></NavbarLayout>
      <section className="m-auto">
        <div className="max-h-screen w-full flex flex-col justify-center items-center">
          <div className="sm:max-text-2xl md:max-w-full lg:max-w-screen-xl">
            <div className="mb-10 md:mx-auto text-center md:mb-12">
              <h1 className="font-bold text-5xl my-5">All Tags</h1>
            </div>
            <div className="container mx-auto">
              <TagCard>
                <div className="flex flex-col gap-2">
                  <ul className="flex flex-row gap-2 flex-wrap justify-center">
                    {sortedTags?.map((tag) => (
                      <Tag
                      isSingle={true}
                      type="blogs"
                        key={tag}
                        tag={tag}
                        current={false}
                        count={allTags[tag]}
                      ></Tag>
                    ))}
                  </ul>
                </div>
              </TagCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
