import Link from "next/link";
import { slug } from "github-slugger";
import { buttonVariants } from "./ui/button";
import { IoPricetags } from "react-icons/io5";

interface TagProps {
  type: string;
  tag: string;
  current?: boolean;
  count?: number;
  isSingle?: boolean;
}

export function Tag({ type, tag, current, count, isSingle = false }: TagProps) {
  return (
    <>
      {type == "projects" ? (
        <Link
          href={`/projects/tags/${slug(tag)}`}
          className={buttonVariants({
            variant: "outline",
            size: isSingle ? "sm": "xs",
            bgColor: current ? "theme" : "default",
            className: "no-underline",
          })}
        >
          <IoPricetags className="text-white mr-2" /> {tag}{" "}
          {count ? `(${count})` : null}
        </Link>
      ) : (
        <Link
          href={`/blogs/tags/${slug(tag)}`}
          className={buttonVariants({
            variant: "outline",
            size: isSingle ? "sm": "xs",
            bgColor: current ? "theme" : "default",
            className: "no-underline opacity-60 hover:opacity-90",
          })}
        >
          <IoPricetags className="text-white text-xs mr-2" />
          {tag} {count ? `(${count})` : null}
        </Link>
      )}
    </>
  );
}
