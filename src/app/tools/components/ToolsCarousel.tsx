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
import { SiApacheairflow } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { BsBuildingFillGear } from "react-icons/bs";
import ToolsContainer from "./ToolsContainer";

export function ToolsCarousel() {
  const ToolsContainers = [
    <ToolsContainer
      key="laravel"
      iconType={<FaLaravel className="text-white text-2xl" />}
      title={"Laravel"}
      description={""}
    />,
    <ToolsContainer
      key="tableau"
      iconType={<SiTableau className="text-white text-2xl" />}
      title={"Tableau"}
      description={""}
    />,
    <ToolsContainer
      key="nextjs"
      iconType={<SiNextdotjs className="text-white text-2xl" />}
      title={"Next.JS"}
      description={""}
    />,
    <ToolsContainer
      key="postgresql"
      iconType={<SiPostgresql className="text-white text-2xl" />}
      title={"PostgreSQL"}
      description={""}
    />,
    <ToolsContainer
      key="docker"
      iconType={<SiDocker className="text-white text-2xl" />}
      title={"Docker"}
      description={""}
    />,
    <ToolsContainer
      key="fastapi"
      iconType={<SiFastapi className="text-white text-2xl" />}
      title={"FastAPI"}
      description={""}
    />,
    <ToolsContainer
      key="airflow"
      iconType={<SiApacheairflow className="text-white text-2xl" />}
      title={"Airflow"}
      description={""}
    />,
    <ToolsContainer
      key="kafka"
      iconType={<SiApachekafka className="text-white text-2xl" />}
      title={"Kafka"}
      description={""}
    />,
  ];

  return (
    <section className="w-full pt-24 sm:px-16 px-16" id="skills">
      <div className="flex items-center justify-center gap-5 md:gap-20 lg:flex-row flex-col mx-auto sm:max-text-2xl md:max-w-full lg:max-w-screen-xl">
        <div className="block md:hidden text-center md:text-left">
          <h1
            // style={{ textShadow: "0px 4px 0px rgba(200,200,200)" }}
            className="font-extrabold text-5xl mb-5"
          >
            Tools
          </h1>
          <p className="font-medium text-[#522528] sm:text-lg md:text-xl dark:text-gray-400">
            {"These are tools i always use in my projects"}
          </p>
        </div>
        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-2xl items-center"
        >
          <CarouselContent>
            {ToolsContainers.map((ToolsContainer, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">{ToolsContainer}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="hidden md:block text-center md:text-right">
          <h1
            // style={{ textShadow: "0px 4px 0px rgba(200,200,200)" }}
            className="font-extrabold text-5xl mb-5"
          >
            Tools
          </h1>
          <p className="font-medium text-[#522528] sm:text-lg md:text-xl dark:text-gray-400">
            {"These are tools i use in my projects"}
          </p>
        </div>
      </div>
    </section>
  );
}
