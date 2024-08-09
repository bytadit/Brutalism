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
import { ImProfile } from "react-icons/im";
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function About() {
  return (
    <section className="dark:bg-gray-900 sm:px-16 px-10 my-10 pt-24" id="about">
      <div className="grid max-w-screen-xl mx-auto md:gap-8 xl:gap-0 md:py-10 md:grid-cols-12">
        <div className="hidden md:mt-0 md:col-span-5 md:flex max-w-sm">
          <Image
            src={BannerImageMobile}
            className="w-full"
            alt="banner-aditya"
          ></Image>
        </div>
        <div className="ml-auto md:flex md:flex-col md:gap-5 place-self-center md:col-span-7 text-center md:text-right">
          <h1 className="max-w-2xl mb-10 sm:mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {"About Me"}
          </h1>
          <p className="max-w-2xl mb-6 font-medium text-[#522528] md:mb-8 text-lg md:text-xl dark:text-gray-400">
            {"My name is "}
            <span className="font-bold text-white bg-[#522528] px-1">
              {"Aditya Bagus Pratama"}
            </span>
            {", a final year Computer Science student enthusiastic about AI's widespread use in everyday life. I'm particularly interested in Natural Language Processing "}
            <span className="font-bold text-white bg-[#522528] px-1">
              {"(NLP)"}
            </span>
            {". Through bootcamps and internships, I've honed my skills in "}
            <span className="font-bold text-white bg-[#522528] px-1">
              {"Data Science"}
            </span>{" "}
            {"and "}
            <span className="font-bold text-white bg-[#522528] px-2">
              {"Web Development"}
            </span>
            {", enabling me to contribute to projects that integrate AI into applications."}
          </p>
          <div className="flex flex-row gap-8 md:justify-end justify-center">
            <Link
              target="_blank"
              href="/cv/CV-ATS-AdityaBagusPratama.pdf"
              className={buttonVariants({
                variant: "default",
                bgColor: "theme",
                size: "lg",
              })}
            >
              {"Get My CV"}
              <FaArrowAltCircleDown className="ml-4 text-white text-lg font-bold" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
