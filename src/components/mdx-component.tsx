import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import Pre from "./pre";
// import Toc from "./../components/toc";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  pre: Pre,
  Callout,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}