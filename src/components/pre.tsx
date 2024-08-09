import CopyButton from "@/components/CopyButton";
import clsx from "clsx";
import React from "react";

interface PreProps extends React.HTMLProps<HTMLPreElement> {
  raw: string;
  buttonClasses?: string;
  "data-language"?: string;
  "data-rehype-pretty-code-title"?: string // Define the type for "data-language"
}

const Pre: React.FC<PreProps> = ({
  children,
  raw,
  buttonClasses = "absolute top-3 right-3 bg-zinc-900",
  ...props
}) => {
  const lang = props["data-language"] || "shell";
  const title = props["data-rehype-pretty-code-title"] || "";
  return (
    <>
      <div
        className={
          "code-header items-center flex text-sm flex-row justify-between px-4 py-2 bg-[#522228] text-[#fcf1d8] font-bold"
        }
      >
        {lang}
        {title}
        <CopyButton text={raw} />
      </div>
      <pre
        {...props}
        className={clsx(
          "relative p-0 border border-[#592229]",
          props.className
        )}
      >
        <div className="py-4">{children}</div>
      </pre>
    </>
  );
};

export default Pre;
