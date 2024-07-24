"use client";

import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Skills } from "@/components/Skills";
import { useRef } from "react";

const Home = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const scrollToPortfolio = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  const scrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <main className="flex flex-col w-full bg-[#ccc9dc]">
      <Navbar
        refs={[skillsRef, portfolioRef, experienceRef, contactRef]}
        scrollToSkills={scrollToSkills}
        scrollToPortfolio={scrollToPortfolio}
        scrollToExperience={scrollToExperience}
        scrollToContact={scrollToContact}
      />
      <div className="flex flex-col mt-10 md:mt-20">
        <Hero />
        <About />
        <Skills skillsRef={skillsRef} />
        <Portfolio portfolioRef={portfolioRef} />
        {/* <Experience experienceRef={experienceRef} /> */}
      </div>
    </main>
  );
};

export default Home;
