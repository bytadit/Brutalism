import GoogleCaptchaWrapper from "@/app/google-captcha-wrapper";
import About from "./about/AboutLayout";
import BlogLayout from "./blogs/components/BlogLayout";
import ContactLayout from "./contact/ContactLayout";
import HeroLayout from "./hero/HeroLayout";
import NavbarLayout from "./navbar/components/NavbarLayout";
import ProjectLayout from "./projects/components/ProjectLayout";
import { SkillCarousel } from "./skills/components/SkillCarousel";
import { ToolsCarousel } from "./tools/components/ToolsCarousel";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"),
  title: "Bytadit | Welcome to My Site",
  description: "Portfolio of Aditya Bagus Pratama",
  authors: [{ name: "Aditya Bagus Pratama", url: `${process.env.NEXT_PUBLIC_API_URL}` }],
  icons: {
    icon: "/th-nobord.webp",
  },
  openGraph: {
    title: "Bytadit | Welcome to My Site",
    description: "Portfolio of Aditya Bagus Pratama",
    url: `${process.env.NEXT_PUBLIC_API_URL}`,
    siteName: "Bytadit",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_API_URL}/adit-side-slate.png`,
        width: 1920,
        height: 1080,
      },
    ]
  },
}
export default function Home() {
  return (
    <main className="wrapper flex min-h-screen flex-col items-center justify-between">
      <NavbarLayout isBlog={false}></NavbarLayout>
      <HeroLayout></HeroLayout>
      {/* <SkillLayout></SkillLayout> */}
      <About></About>
      <SkillCarousel></SkillCarousel>
      <ToolsCarousel></ToolsCarousel>
      <ProjectLayout></ProjectLayout>
      {/* <BlogLayout></BlogLayout> */}
      <GoogleCaptchaWrapper>
        <ContactLayout></ContactLayout>
      </GoogleCaptchaWrapper>
      {/* <ShowAlert/> */}
    </main>
  );
}
