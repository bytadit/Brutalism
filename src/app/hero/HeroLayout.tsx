import Link from "next/link";
import React from "react";
import Image from "next/image";
import BannerImageDesktop from "../../../public/banner-adit-1.png";
import BannerImageMobile from "../../../public/banner-mobile-low.png";
import { buttonVariants } from "@/components/ui/button";
import { RxArrowRight } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaKaggle } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { iconVariants } from "@/components/ui/iconButton";

export default function HeroLayout() {
  return (
    <section className="dark:bg-gray-900 sm:px-16 pt-10 px-4" id="home">
      <div className="grid max-w-screen-xl mx-auto md:gap-8 xl:gap-0 md:py-10 md:grid-cols-12">
        <div className="mr-auto place-self-center md:col-span-7">
          <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none xl:text-6xl dark:text-white">
            {"Hi! I'm Aditya"}
          </h1>
          <p className="max-w-2xl mb-6 font-medium text-[#522528] md:mb-8 sm:text-lg md:text-xl dark:text-gray-400">
            {
              "I'm fullstack engineer with speciality in Web Development and Data Science"
            }
          </p>
          <div className="w-full flex flex-row gap-4 sm:gap-6 justify-left">
            <Link
              href="/#contact"
              className={buttonVariants({
                variant: "default",
                bgColor: "theme",
              })}
            >
              {"Let's Connect"}
              <RxArrowRight className="ml-2 text-white text-lg font-bold" />
            </Link>
            <div className="grid grid-flow-col gap-3 justify-between">
              <Link
                href="https://linkedin.com/in/aditya-bagus-pratama"
                target="_blank"
                className={iconVariants({
                  shape: "default",
                  bgColor: "secondary",
                })}
              >
                <RxLinkedinLogo />
              </Link>
              <Link
                href="https://github.com/bytadit"
                target="_blank"
                className={iconVariants({
                  shape: "default",
                  bgColor: "secondary",
                })}
              >
                <RxGithubLogo />
              </Link>
              <Link
                href="https://kaggle.com/bytadit"
                target="_blank"
                className={iconVariants({
                  shape: "default",
                  bgColor: "secondary",
                })}
              >
                <FaKaggle />
              </Link>
              <Link
                href="https://x.com/bytadit"
                target="_blank"
                className={iconVariants({
                  shape: "default",
                  bgColor: "secondary",
                })}
              >
                <BsTwitterX />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:mt-0 md:col-span-5 md:flex">
          <Image
            src={BannerImageDesktop}
            className="w-full"
            alt="banner-aditya"
            priority
          ></Image>
        </div>
        <div className="flex mt-10 md:col-span-5 md:hidden">
          <Image
            src={BannerImageMobile}
            className="w-full"
            alt="banner-aditya"
          ></Image>
        </div>
      </div>
    </section>
  );
}
