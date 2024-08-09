import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoMdMail } from "react-icons/io";
import { RxChatBubble } from "react-icons/rx";
import { iconVariants } from "@/components/ui/iconButton";
import { BsChatTextFill } from "react-icons/bs";


export default function ContactLayout() {
  return (
    <>
      <section className="section my-10 w-full pt-24 sm:px-16 px-16" id="contact">
        <div className="flex sm:flex-row flex-col justify-center gap-12 mt-10">
          <div className="w-full">
            <div className="text-center sm:text-left">
              <h1
                // style={{ textShadow: "0px 4px 0px rgba(200,200,200)" }}
                className="font-bold mb-5 text-4xl md:text-5xl"
              >
                {"Lets's Talk"}
              </h1>
            </div>
            <p className="font-medium text-[#522528] sm:text-lg text-md mb-10 text-center sm:text-left">
              {
                "Looking to connect and discuss projects, collaborate, or explore business opportunities? Reach out via email, social media, or chat. Let's engage and explore how we can work together to bring your ideas to life."
              }
            </p>
            <div className="w-full shrink-0 grow-0 basis-auto">
              <div className="flex flex-col flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto">
                  <div className="flex items-center">
                    <Link
                      href="mailto:adityabagusp345@gmail.com"
                      className={iconVariants({
                        shape: "default",
                        bgColor: "danger",
                      })}
                    >
                      <IoMdMail className="text-white"/>
                    </Link>

                    <div className="ml-6 grow">
                      <p className="mb font-bold">Email Me</p>
                      <p className="text-base ">adityabagusp345@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto">
                  <div className="flex items-center">
                    <Link
                      href="https://wa.me/6285749383186"
                      className={iconVariants({
                        shape: "default",
                        bgColor: "success",
                      })}
                    >
                      <BsChatTextFill className="text-white"/>
                    </Link>
                    <div className="ml-6 grow">
                      <p className="mb font-bold ">Chat Me</p>
                      <p className="text-base ">(+62)85749383186</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl text-center font-semibold block sm:hidden">
              Or fill this form...
            </h2>
          </div>
          <ContactForm></ContactForm>
        </div>
      </section>
    </>
  );
}
