"use client";

import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Skills } from "@/components/Skills";
import { useRef } from "react";

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
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
        refs={[aboutRef, skillsRef, portfolioRef, contactRef]}
        scrollToAbout={scrollToAbout}
        scrollToSkills={scrollToSkills}
        scrollToPortfolio={scrollToPortfolio}
        scrollToContact={scrollToContact}
      />
      <div className="flex flex-col mt-10 md:mt-20">
        <Hero />
        <About aboutRef={aboutRef} />
        <Skills skillsRef={skillsRef} />
        <Portfolio portfolioRef={portfolioRef} />
      </div>
    </main>
  );
};

export default Home;
