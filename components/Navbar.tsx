import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  scrollToSkills: () => void;
  scrollToPortfolio: () => void;
  scrollToExperience: () => void;
}

export const Navbar = ({
  scrollToSkills,
  scrollToPortfolio,
  scrollToExperience,
}: NavbarProps) => {
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
        <nav className="text-white font-light">
          <Link href="/" onClick={() => scrollToSkills()}>
            Skills
          </Link>
        </nav>
        <nav className="text-white font-light">
          <Link href="/" onClick={() => scrollToPortfolio()}>
            Portfolio
          </Link>
        </nav>
        <nav className="text-white font-light">
          <Link href="/" onClick={() => scrollToExperience()}>
            Experience
          </Link>
        </nav>
      </div>
    </header>
  );
};
