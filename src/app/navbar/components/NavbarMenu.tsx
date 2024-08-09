"use client"; // This is a client component 👈🏽

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavbarMenu({ bgColor }: { bgColor: string }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = [
        "home",
        "skills",
        "about",
        "projects",
        // "blogs",
        "contact",
      ];

      // Determine which section is currently in view based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 50;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition > offsetTop &&
            scrollPosition <= offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ul className="flex flex-row gap-6 items-center">
      <li
        className={`text-md font-semibold ${
          activeSection === "home"
            ? `border-b-2 border-[${bgColor}] ease-in-out transition-all`
            : ""
        }`}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={`text-md font-semibold ${
          activeSection === "about"
            ? `border-b-2 border-[${bgColor}] ease-in-out transition-all`
            : ""
        }`}
      >
        <Link href="/#about">About</Link>
      </li>
      <li
        className={`text-md font-semibold ${
          activeSection === "skills"
            ? `border-b-2 border-[${bgColor}] ease-in-out transition-all`
            : ""
        }`}
      >
        <Link href="/#skills">Skills</Link>
      </li>
      <li
        className={`text-md font-semibold ${
          activeSection === "projects"
            ? `border-b-2 border-[${bgColor}] ease-in-out transition-all`
            : ""
        }`}
      >
        <Link href="/#projects">Projects</Link>
      </li>
      {/* <li
        className={`text-md font-semibold ${
          activeSection === "blogs"
            ? `border-b-2 border-[${bgColor}] ease-in-out transition-all`
            : ""
        }`}
      >
        <Link href="/#blogs">Posts</Link>
      </li> */}
      <li
        className={`text-md font-semibold ${
          activeSection === "contact"
            ? `border-b-2 border-[${bgColor}] ease-in-out transition-all`
            : ""
        }`}
      >
        <Link href="/#contact">Contact</Link>
      </li>
      <Link
        target="_blank"
        href="/cv/CV-ATS-AdityaBagusPratama.pdf"
        className={buttonVariants({
          variant: "default",
          size: "md",
          bgColor: "secondary",
        })}
      >
        Download My CV
      </Link>
    </ul>
  );
}
