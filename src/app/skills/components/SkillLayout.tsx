import SkillContainer from "./SkillContainer";
import { FaLaravel } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { FaLanguage } from "react-icons/fa6";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";
import { FaChartPie } from "react-icons/fa";
import { BsBuildingFillGear } from "react-icons/bs";

export default function SkillLayout() {
  return (
    <section className="w-full pt-24 px-16" id="skills">
      <div className="mx-auto sm:max-text-2xl md:max-w-full lg:max-w-screen-xl">
        <div className="mb-10 md:mx-auto text-center md:mb-12">
          <h1
            // style={{ textShadow: "0px 4px 0px rgba(200,200,200)" }}
            className="font-extrabold text-4xl md:text-5xl mb-5"
          >
            My Skills
          </h1>
          <p className="mb-6 font-medium text-[#522528] md:mb-8 sm:text-lg md:text-xl dark:text-gray-400">
            {"Here are my skills, specific in Web Development and Data Science"}
          </p>
        </div>
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <SkillContainer
            iconType={<FaLaravel className="text-white text-2xl"/>}
            title={"Laravel"}
            description={""}
          />
          <SkillContainer
            iconType={<SiNextdotjs className="text-white text-2xl"/>}
            title={"Next.JS"}
            description={""}
          />
          <SkillContainer
            iconType={<SiDjango className="text-white text-2xl"/>}
            title={"Django"}
            description={""}
          />
          <SkillContainer
            iconType={<SiDotnet className="text-white text-2xl"/>}
            title={"ASP.Net"}
            description={""}
          />
          <SkillContainer
            iconType={<FaLanguage className="text-white text-2xl"/>}
            title={"Natural Language Processing"}
            description={""}
          />
          <SkillContainer
            iconType={<BsBuildingFillGear className="text-white text-2xl"/>}
            title={"Data Mining"}
            description={""}
          />
          <SkillContainer
            iconType={<GrDeploy className="text-white text-2xl"/>}
            title={"Model Deployment"}
            description={""}
          />
          <SkillContainer
            iconType={<FaChartPie className="text-white text-2xl"/>}
            title={"Data Storytelling"}
            description={""}
          />
        </div>
      </div>
    </section>
  );
}
