import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { ContactDropDown } from "./ContactDropDown";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full mt-12 z-10 shadow-lg shadow-black/30">
      <div className="flex flex-col lg:w-1/2 gap-y-4 m-10 lg:mr-0 z-10">
        <h3 className="text-4xl sm:text-6xl md:text-7xl font-extralight">
          I'm
        </h3>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-light text-[#324a5f]">
          Syed Dawood
        </h1>
        <h3 className="text-3xl md:text-5xl font-bold">
          A Full Stack Web Developer
        </h3>
        <ContactDropDown
          trigger={
            <Button
              asChild
              size={"default"}
              className="w-[200px] mt-4 rounded-full bg-[#0c1821] text-lg font-medium hover:bg-[#324a5f]"
            >
              <Link href="/">
                Let's Connect{" "}
                <span className="ml-3">
                  <IoIosArrowDown color="#ffffff" size={20} />
                </span>
              </Link>
            </Button>
          }
          items={["Email", "Phone", "LinkedIn", "Github"]}
          icons={[
            <MdEmail color="#fff" size={20} />,
            <FaPhone color="#fff" size={20} />,
            <FaLinkedinIn color="#fff" size={20} />,
            <TbBrandGithubFilled color="#fff" size={20} />,
          ]}
        />
      </div>

      <div className="flex mt-8 sm:mt-0 lg:w-1/2 w-full justify-end">
        <div className="flex">
          <Image
            src="/me.png"
            alt="me"
            width={550}
            height={550}
            className="object-contain overflow-scroll w-[400px] sm:w-[450px] md:[500px] lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
