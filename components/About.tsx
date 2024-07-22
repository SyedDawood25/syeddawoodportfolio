"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

interface AboutProps {
  aboutRef: RefObject<HTMLDivElement>;
}

export const About = ({ aboutRef }: AboutProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [clip, setClip] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      setClip(textRef.current.offsetHeight < textRef.current.scrollHeight);
    }
  }, [clip]);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="flex flex-col bg-[#B3B0C5] px-8 sm:px-16 lg:py-24 py-16 gap-y-6 items-center justify-center"
    >
      <div className="flex w-full">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#0c1821]">About</h1>
      </div>
      <div className="flex text-base lg:text-xl font-medium text-[#324a5f] leading-tight">
        <span className="border-2 border-[#0c1821] rounded-full h-0 w-28 md:w-32 relative top-2 lg:top-3 mr-3" />
        <p ref={textRef} className={showMore ? "" : "line-clamp-[8]"}>
          I am a passionate full stack web developer specializing in Next.js and
          Tailwind CSS. With a keen eye for design and a strong foundation in
          backend integration, I create responsive and dynamic webpages that not
          only look great but also perform seamlessly. My toolkit includes the
          latest and modern technologies, and I'm adept at incorporating AI to
          enhance functionality and user experience. Whether it's building a
          robust web application or crafting a visually appealing website, I am
          committed to delivering high-quality solutions that meet and exceed
          expectations.
        </p>
      </div>
      <Button
        size={"sm"}
        className={`font-thin rounded-full bg-[#110e1b] hover:bg-[#324a5f] ${
          clip ? "" : "hidden"
        }`}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Read Less" : "Read More"}
      </Button>
    </section>
  );
};
