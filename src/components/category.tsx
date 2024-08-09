import Link from "next/link";
import { slug } from "github-slugger";
import { buttonVariants } from "./ui/button";
import { BiSolidCategory } from "react-icons/bi";

interface CategoryProps {
  type: string;
  category: string;
  current?: boolean;
  count?: number;
  isSingle? : boolean;
}

export function Category({ type, category, current, count, isSingle = false }: CategoryProps) {
  return (
    <>
      {type == "projects" ? (
        <Link
          href={`/projects/categories/${slug(category)}`}
          className={buttonVariants({
            variant: "outline",
            size: isSingle ? "sm" : "xs",
            bgColor: current ? "theme" : "default",
            className: "no-underline",
          })}
        >
          <BiSolidCategory className="text-white mr-2" /> {category}{" "}
          {count ? `(${count})` : null}
        </Link>
      ) : (
        <Link
          href={`/blogs/categories/${slug(category)}`}
          className={buttonVariants({
            variant: "outline",
            size: isSingle ? "sm": "xs",
            bgColor: current ? "theme" : "default",
            className: "no-underline",
          })}
        >
          <BiSolidCategory className="text-white mr-2" /> {category}{" "}
          {count ? `(${count})` : null}
        </Link>
      )}
    </>
  );
}
