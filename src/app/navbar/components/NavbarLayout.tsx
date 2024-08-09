"use client"; // This is a client component 👈🏽

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import Hamburger from "./Hamburger";
import MobileDrawer from "./MobileDrawer";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function NavbarLayout({ isBlog }: { isBlog: boolean }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={cn(
          `hidden ${isBlog} sm:flex justify-between w-full px-16 items-center transition-all duration-300 z-50`,
          {
            "relative top-0 bg-[#522528] text-white": isBlog == true,
            "sticky top-0": isBlog == false,
            "bg-[#522528]": isBlog == false && scrollPosition > 50,
            "bg-transparent": isBlog == false && scrollPosition <= 50,
            "py-2": scrollPosition > 50,
            "py-4": scrollPosition <= 50,
            "border-[#292729]": isBlog == true || scrollPosition > 50,
            "border-[#522528]": isBlog == false && scrollPosition <= 50,
            "text-white": isBlog == false && scrollPosition > 50,
            "text-[#522528]": isBlog == false && scrollPosition <= 50,
            "border-b-4": isBlog == true || scrollPosition > 50,
            "border-b-0": isBlog == false && scrollPosition <= 50,
          }
        )}
      >
        <NavbarLogo
          bgColor={isBlog || scrollPosition > 50 ? "#fff" : "#522528"}
        />
        <NavbarMenu
          bgColor={isBlog || scrollPosition > 50 ? "#fff" : "#522528"}
        ></NavbarMenu>
      </div>
      <div
        className={cn(
          "sm:hidden justify-between bg-[#522528] w-full px-4 sticky top-0 flex flex-row items-center transition-all duration-300 z-50",
          {
            "bg-[#522528]": isBlog == false && scrollPosition > 50,
            "bg-transparent": isBlog == false && scrollPosition <= 50,
            "py-2": scrollPosition > 50,
            "py-4": scrollPosition <= 50,
            "border-[#292729]": scrollPosition > 50,
            "border-[#522528]": scrollPosition <= 50,
            "text-white": isBlog == false && scrollPosition > 50,
            "text-[#522528]": isBlog == false && scrollPosition <= 50,
            "border-b-4": scrollPosition > 50,
            "border-b-0": scrollPosition <= 50,
          }
        )}
      >
        <NavbarLogo
          bgColor={isBlog || scrollPosition > 50 ? "#fff" : "#522528"}
        />
        <div className="flex flex-row gap-4">
          <Link
            target="_blank"
            href="/cv/CV-ATS-AdityaBagusPratama.pdf"
            className={buttonVariants({
              variant: "revDefault",
              size: "md",
              bgColor: scrollPosition > 50 || isBlog ? "secondary" : "theme",
            })}
          >
            Download My CV
          </Link>
          <Hamburger
            onClick={handleDrawerToggle}
            color={cn({
              "text-[#fff]": scrollPosition > 50 || isBlog,
              "text-[#522528]": !isBlog && scrollPosition <= 50,
            })}
          />
        </div>
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </>
  );
}
