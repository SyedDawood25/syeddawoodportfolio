"use client";

import Image from "next/image";
import Link from "next/link";
import { RefObject, useEffect, useState } from "react";

interface NavbarProps {
  refs: Array<RefObject<HTMLDivElement>>;
  scrollToAbout: () => void;
  scrollToSkills: () => void;
  scrollToPortfolio: () => void;
  scrollToContact: () => void;
}

export const Navbar = ({
  refs,
  scrollToAbout,
  scrollToSkills,
  scrollToPortfolio,
  scrollToContact,
}: NavbarProps) => {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <header className="flex fixed z-20 items-center px-6 sm:px-12 py-6 w-full justify-between bg-[#110e1b] shadow-lg shadow-black/40">
      <div className="flex">
        <Image
          src="/logo.svg"
          alt="logo"
          width={60}
          height={60}
          className="w-[30px] sm:w-[50px] md:w-[60px]"
        />
      </div>

      <div className="flex gap-x-2 sm:gap-x-4 text-sm sm:text-xl">
        <nav
          className={`
        ${
          currentSection === "about" ? "text-white" : "text-gray-400"
        } font-light`}
        >
          <Link href="/" onClick={() => scrollToAbout()}>
            About
          </Link>
        </nav>
        <nav
          className={`
        ${
          currentSection === "skills" ? "text-white" : "text-gray-400"
        } font-light`}
        >
          <Link href="/" onClick={() => scrollToSkills()}>
            Skills
          </Link>
        </nav>
        <nav
          className={`
        ${
          currentSection === "portfolio" ? "text-white" : "text-gray-400"
        } font-light`}
        >
          <Link href="/" onClick={() => scrollToPortfolio()}>
            Portfolio
          </Link>
        </nav>
        <nav
          className={`
        ${
          currentSection === "contact" ? "text-white" : "text-gray-400"
        } font-light`}
        >
          <Link href="/" onClick={() => scrollToContact()}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
