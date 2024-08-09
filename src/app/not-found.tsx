import Link from "next/link";
import NavbarLayout from "./navbar/components/NavbarLayout";
import { buttonVariants } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Not Found",
  description: "Page Not Found",
  icons: {
    icon: "/th-nobord.webp",
  },
}

export default function NotFound() {
  return (
    <main className="wrapper flex min-h-screen flex-col items-center justify-between">
      <NavbarLayout isBlog={true}></NavbarLayout>
      <section className="m-auto" id="404">
        <div className="max-h-screen w-full flex flex-col justify-center items-center">
          <h1 className="text-9xl font-extrabold text-[#522528] tracking-widest">
            404
          </h1>
          <div className="bg-white border border-[#522528] text-[#522528] px-2 text-sm rounded rotate-12 absolute">
            Page Not Found
          </div>
          <Link
          style={{ marginBottom: "20px" }}
            href="/"
            className={buttonVariants({ variant: "default", bgColor: "theme" })}
          >
            Back To Home
          </Link>
        </div>
      </section>
    </main>
  );
}
