"use client"; // Error components must be Client Components

import { useEffect } from "react";
import NavbarLayout from "./navbar/components/NavbarLayout";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "500 | Something Went Wrong!",
  description: "Error - Something Went Wrong!",
  icons: {
    icon: "/th-nobord.webp",
  },
}
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="wrapper flex min-h-screen flex-col items-center justify-between">
      <NavbarLayout isBlog={true}></NavbarLayout>
      <section className="m-auto" id="500">
        <div className="max-h-screen w-full flex flex-col justify-center items-center">
          <h1 className="text-9xl font-extrabold text-[#522528] tracking-widest">
            500
          </h1>
          <div className="bg-white border border-[#522528] text-[#522528] px-2 text-sm rounded rotate-12 absolute">
            Something went wrong!
          </div>
          <Button
            style={{ marginBottom: "20px" }}
            variant={"default"}
            bgColor={"theme"}
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try Again
          </Button>
        </div>
      </section>
    </main>
  );
}
