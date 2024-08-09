import { getAllProjectCategories, sortCategoriesByCount } from "@/lib/utils";
import { Metadata } from "next";
import { projects } from "#site/contents";
import { Category } from "@/components/category";
import { CategoryCard } from "@/components/categoryCard";
import NavbarLayout from "@/app/navbar/components/NavbarLayout";

export const metadata: Metadata = {
  title: "Bytadit | Project Categories",
  description: "Project Categories by Aditya Bagus Pratama",
  authors: [
    { name: "Aditya Bagus Pratama", url: `${process.env.NEXT_PUBLIC_API_URL}` },
  ],
  icons: {
    icon: "/th-nobord.webp",
  },
};

export default async function CategoryPage() {
  const allCategories = getAllProjectCategories(projects);
  const sortedCategories = sortCategoriesByCount(allCategories);
  return (
    <main className="wrapper flex min-h-screen flex-col items-center justify-between">
      <NavbarLayout isBlog={true}></NavbarLayout>
      <section className="m-auto">
        <div className="max-h-screen w-full flex flex-col justify-center items-center">
          <div className="sm:max-text-2xl md:max-w-full lg:max-w-screen-xl">
            <div className="mb-10 md:mx-auto text-center md:mb-12">
              <h1 className="font-bold text-5xl my-5">All Project Categories</h1>
            </div>
            <div className="container mx-auto">
              <CategoryCard>
                <div className="flex flex-col gap-2">
                  <ul className="flex flex-row gap-2 flex-wrap justify-center">
                    {sortedCategories?.map((category) => (
                      <Category
                      isSingle={true}
                      type="projects"
                        key={category}
                        category={category}
                        current={false}
                        count={allCategories[category]}
                      ></Category>
                    ))}
                  </ul>
                </div>
              </CategoryCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
