import { experience } from "@/constants";
import { RefObject } from "react";

interface ExperienceProps {
  experienceRef: RefObject<HTMLDivElement>;
}

export const Experience = ({ experienceRef }: ExperienceProps) => {
  return (
    <section
      id="experience"
      ref={experienceRef}
      className="flex flex-col w-full py-16 px-8 md:px-12 gap-y-12"
    >
      <h1 className="flex text-4xl justify-center sm:justify-start lg:text-5xl font-bold text-[#0c1821]">
        Experience
      </h1>
      <div className="flex flex-col mx-6 gap-y-8 md:gap-y-6">
        {experience.map((exp) => (
          <div className="flex gap-x-10 bg-[#B3B0C5] p-6 rounded-lg">
            <div className="hidden sm:flex flex-col">
              <div className="flex flag items-center text-2xl font-semibold leading-tight text-white justify-center skills_font">
                {exp.startYear}
              </div>
              <div className="border-2 border-gray-800 w-0 h-16 lg:h-20 relative left-7" />
              <div className="relative top-[-10px] left-[14px]  w-8 h-8 rounded-full bg-orange-300 blur-sm z-10" />
              <div className="relative top-[-38px] left-[18px] w-6 h-6 rounded-full bg-orange-200  z-10" />
            </div>
            <div className="flex flex-col gap-y-4">
              <div>
                <h1 className="text-xl lg:text-2xl font-bold">{exp.title}</h1>
                <h3 className="text-sm lg:text-lg font-light text-gray-600">
                  {exp.company}
                </h3>
                <h3 className="flex text-sm lg:text-lg skills_font font-medium text-gray-600">
                  {exp.startMonth} {exp.startYear} - {exp.endMonth}{" "}
                  {exp.endYear}
                </h3>
              </div>
              <p className="text-sm md:text-lg">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
