import { skills } from "@/constants";
import Image from "next/image";
import { RefObject } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface SkillsProps {
  skillsRef: RefObject<HTMLDivElement>;
}

export const Skills = ({ skillsRef }: SkillsProps) => {
  return (
    <section
      ref={skillsRef}
      id="skills"
      className="flex flex-col justify-center items-center py-16 lg:py-24 px-12 gap-y-12 bg-[#110e1b]"
    >
      <h1 className="text-4xl lg:text-5xl font-bold text-white">My Skills</h1>

      <Carousel
        className="w-full mx-8 px-8 md:mx-16 md:px-16 lg:hidden"
        plugins={[Autoplay({ delay: 2000 })]}
      >
        <CarouselContent>
          {Array.from(skills).map(({ title, src }) => (
            <CarouselItem key={title} className="basis-1/2 md:basis-1/3">
              <div className="flex flex-col items-center justify-center rounded-md bg-[#324A5F] bg-opacity-45 md:px-10 px-6 py-8 gap-y-8">
                <Image src={src} alt={title} width={80} height={80} />
                <h2 className="text-white skills_font text-lg md:text-2xl text-center font-medium">
                  {title}
                </h2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-8 md:ml-16 bg-[#324A5F] bg-opacity-45 text-white border-none" />
        <CarouselNext className="mr-8 md:mr-16 bg-[#324A5F] bg-opacity-45 text-white border-none" />
      </Carousel>

      <div className="hidden lg:grid lg:grid-cols-5 xl:grid-cols-7 gap-8">
        {skills.map(({ title, src }) => (
          <div
            key={title}
            className="flex flex-col items-center justify-center rounded-md bg-[#324A5F] bg-opacity-45 px-10 py-8 gap-y-8"
          >
            <Image src={src} alt={title} width={80} height={80} />
            <h2 className="text-white skills_font text-lg md:text-2xl text-center font-medium">
              {title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};
