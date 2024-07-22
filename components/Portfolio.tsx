import { portfolio } from "@/constants";
import { RefObject } from "react";
import { PortfolioCard } from "./PortfolioCard";

interface PortfolioProps {
  portfolioRef: RefObject<HTMLDivElement>;
}

export const Portfolio = ({ portfolioRef }: PortfolioProps) => {
  return (
    <section
      ref={portfolioRef}
      id="portfolio"
      className="flex flex-col items-center justify-center gap-y-12 pt-16 lg:py-24 px-12 bg-[#B3B0C5]"
    >
      <h1 className="text-4xl lg:text-5xl font-bold text-[#110e1b]">
        Portfolio
      </h1>

      <div className="grid xl:grid-cols-3 gap-6 w-full justify-center">
        {portfolio.map(
          ({ title, image, description, tools, toolIcons, webSrc }, index) => (
            <div
              className={
                index === 0
                  ? "max-lg:col-span-1 max-lg:mb-0 max-lg:flex max-lg:w-full max-lg:justify-center max-xl:col-span-2 max-xl:mb-12 max-xl:flex max-xl:w-full max-xl:justify-center"
                  : ""
              }
            >
              <PortfolioCard
                webSrc={webSrc}
                key={title}
                title={title}
                description={description}
                imgSrc={image}
                toolIcons={toolIcons}
                tools={tools}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};
