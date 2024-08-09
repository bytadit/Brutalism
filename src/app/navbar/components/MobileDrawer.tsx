import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function MobileDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ["home", "skills", "about", "projects", "blogs", "contact"];

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
    <>
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-[#522528] text-[#292729] transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute right-7 top-4 p-3 text-white" onClick={onClose}>
          <FontAwesomeIcon className="text-3xl" icon={faXmark} />
        </button>
        <ul className="flex flex-col justify-center items-center space-y-8">
          <li
            className={`text-2xl text-white font-semibold ${
              activeSection === "home"
                ? "border-b-4 border-[#fff] ease-in-out transition-all"
                : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`text-2xl text-white font-semibold ${
              activeSection === "about"
                ? "border-b-4 border-[#fff] ease-in-out transition-all"
                : ""
            }`}
          >
            <Link href="/#about">About</Link>
          </li>
          <li
            className={`text-2xl text-white font-semibold ${
              activeSection === "skills"
                ? "border-b-4 border-[#fff] ease-in-out transition-all"
                : ""
            }`}
          >
            <Link href="/#skills">Skills</Link>
          </li>
          <li
            className={`text-2xl text-white font-semibold ${
              activeSection === "projects"
                ? "border-b-4 border-[#fff] ease-in-out transition-all"
                : ""
            }`}
          >
            <Link href="/#projects">Projects</Link>
          </li>
          <li
            className={`text-2xl text-white font-semibold ${
              activeSection === "blogs"
                ? "border-b-4 border-[#fff] ease-in-out transition-all"
                : ""
            }`}
          >
            <Link href="/#blogs">Posts</Link>
          </li>
          <li
            className={`text-2xl text-white font-semibold ${
              activeSection === "contact"
                ? "border-b-4 border-[#fff] ease-in-out transition-all"
                : ""
            }`}
          >
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
