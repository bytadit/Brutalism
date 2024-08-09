"use client";
import { useEffect, useRef, useState } from "react";

export interface ContentNode {
  data: {
    hProperties: {
      id: string;
    };
  };
  children?: ContentNode[];
  depth: number;
  value: string;
}

interface TOCLinkProps {
  node: ContentNode;
}

interface TableOfContentsProps {
  nodes?: ContentNode[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ nodes }) => {
  if (!nodes?.length) {
    return null;
  }
  return (
    <div className={"max-h-[calc(100vh-5rem)] overflow-y-auto my-2"}>
      {renderNodes(nodes)}
    </div>
  );
};

function renderNodes(nodes: ContentNode[]) {
  return (
    <ul>
      {nodes.map((node) => (
        <li key={node.data.hProperties.id} className={`pl-${node.depth}`}>
          <TOCLink node={node} />
          {node.children?.length ? renderNodes(node.children) : null}
        </li>
      ))}
    </ul>
  );
}

function useHighlighted(
  id: string
): [boolean, React.Dispatch<React.SetStateAction<string>>] {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "0% 0% -35% 0px",
    });

    const elements = document.querySelectorAll("h1, h2, h3, h4");
    elements.forEach((elem) => observer.current?.observe(elem));
    return () => observer.current?.disconnect();
  }, []);

  return [activeId === id, setActiveId];
}

const TOCLink: React.FC<TOCLinkProps> = ({ node }) => {
  const fontSizes: { [key: number]: string } = {
    1: "xl",
    2: "base",
    3: "sm",
    4: "xs",
  };
  const id = node.data.hProperties.id;
  const [highlighted, setHighlighted] = useHighlighted(id);
  return (
    <a
      href={`#${id}`}
      className={`py-1 px-2 w-full block hover:text-[#522528] hover:border-[#522528] hover:border-l-4 hover:font-semibold rounded-md text-${
        fontSizes[node.depth]
      } ${highlighted ? "font-semibold border-[#522528] border-l-4 text-[#522528]" : "font-normal"}`}
      onClick={(e) => {
        e.preventDefault();
        setHighlighted(id);
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {node.value}
    </a>
  );
};
