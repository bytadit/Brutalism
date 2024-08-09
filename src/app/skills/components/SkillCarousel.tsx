import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaLaravel } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import { FaLanguage } from "react-icons/fa6";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { GiOilPump } from "react-icons/gi";
import { GrDeploy } from "react-icons/gr";
import { FaChartPie } from "react-icons/fa";
import { BsBuildingFillGear } from "react-icons/bs";
import SkillContainer from "./SkillContainer";

export function SkillCarousel() {
  const skillContainers = [
    // <SkillContainer
    //   key="data-mining"
    //   iconType={<BsBuildingFillGear className="text-white text-2xl" />}
    //   title={"Data Mining"}
    //   description={""}
    // />,
    <SkillContainer
      key="web-dev"
      iconType={<FaGlobe className="text-white text-2xl" />}
      title={"Web Development"}
      description={""}
    />,
    <SkillContainer
      key="nlp"
      iconType={<FaLanguage className="text-white text-xl" />}
      title={"NLP"}
      description={""}
    />,
    <SkillContainer
      key="data-analysis"
      iconType={<TbDeviceAnalytics className="text-white text-2xl" />}
      title={"Data Analysis"}
      description={""}
    />,
    <SkillContainer
      key="data-storytelling"
      iconType={<FaChartPie className="text-white text-2xl" />}
      title={"Data Storytelling"}
      description={""}
    />,
    <SkillContainer
      key="model-deployment"
      iconType={<GrDeploy className="text-white text-2xl" />}
      title={"Model Deployment"}
      description={""}
    />,
    <SkillContainer
      key="etl"
      iconType={<GiOilPump className="text-white text-2xl" />}
      title={"ETL Data Pipeline"}
      description={""}
    />,
  ];

  return (
    <section className="w-full pt-24 sm:px-16 px-16" id="skills">
      <div className="flex items-center justify-center gap-5 md:gap-20 lg:flex-row flex-col mx-auto sm:max-text-2xl md:max-w-full lg:max-w-screen-xl">
        <div className="text-center md:text-left">
          <h1
            // style={{ textShadow: "0px 4px 0px rgba(200,200,200)" }}
            className="font-extrabold text-5xl mb-5"
          >
            Expertise
          </h1>
          <p className="font-medium text-[#522528] sm:text-lg md:text-xl dark:text-gray-400">
            {"These are the skills that I constantly hone"}
          </p>
        </div>
        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-2xl items-center"
        >
          <CarouselContent>
            {skillContainers.map((skillContainer, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">{skillContainer}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
