import { iconVariants } from "@/components/ui/iconButton";
import Link from "next/link";
import { RxCode } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaKaggle } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import logoIcon from "../../../public/byt-logo-2.webp";
import { SiNextdotjs } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";

export default function FooterLayout() {
  return (
    <>
      <footer
        className="p-4 bg-[#522528] sm:p-6 border-t-4 border-[#292729] w-full"
        id="footer"
      >
        <div className="flex sm:flex-row flex-col w-100 justify-between items-center my-2">
          <aside className="flex sm:flex-row flex-col justify-between gap-4 items-center mb-4 sm:m-0">
            <Image
              priority
              src={logoIcon}
              alt="Byts Logo"
              height={64}
              width={64}
            />
            <span className="text-normal flex flex-col gap-.5 text-white">
              <p className="font-semibold">Aditya B. Pratama</p>
              <hr />
              <p>Fullstack Engineer</p>
            </span>
          </aside>
          <nav className="flex flex-col justify-between gap-4 mt-4 sm:m-0">
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
            <span className="footer-title text-sm sm:text-center m-auto text-white">
              © 2020{"-"}
              {new Date().getFullYear()}{" "}
              <a href="https://bytadit.me" className="hover:underline">
                {" | "}bytadit.me™
              </a>
              <p className="flex flex-row gap-2 items-center justify-center">Made using <span><SiNextdotjs/></span> and <span><SiShadcnui /></span></p>
            </span>
          </nav>
        </div>
      </footer>
    </>
  );
}
