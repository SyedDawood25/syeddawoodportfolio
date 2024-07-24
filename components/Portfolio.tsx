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
      className="flex flex-col items-center justify-center gap-y-12 py-16 lg:py-24 px-12 bg-[#B3B0C5]"
    >
      <h1 className="text-4xl lg:text-5xl font-bold text-[#110e1b]">
        Portfolio
      </h1>

      <div className="grid 2xl:grid-cols-3 gap-8 w-full justify-center">
        {portfolio.map(
          ({ title, image, description, tools, toolIcons, webSrc }, index) => (
            <div
              className={
                index === 0
                  ? "max-xl:col-span-1 max-2xl:col-span-2 flex max-2xl:w-full justify-center"
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
