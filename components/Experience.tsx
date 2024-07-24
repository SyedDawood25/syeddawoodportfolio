import { RefObject } from "react";

interface ExperienceProps {
  experienceRef: RefObject<HTMLDivElement>;
}

export const Experience = ({ experienceRef }: ExperienceProps) => {
  return (
    <section
      id="experience"
      ref={experienceRef}
      className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full py-16 px-12 gap-y-12"
    >
      <h1 className="text-5xl font-bold text-[#0c1821]">Experience</h1>
      <div className="flex flex-col mx-6 border border-black">
        <div className="flag">
            
        </div>
      </div>
    </section>
  );
};
