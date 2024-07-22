import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { HTMLProps } from "react";

interface PortfolioCardProps {
  webSrc: string;
  title: string;
  description: string;
  imgSrc: string;
  tools: Array<string>;
  toolIcons: Array<string>;
}

export const PortfolioCard = ({
  webSrc,
  title,
  description,
  imgSrc,
  tools,
  toolIcons,
}: PortfolioCardProps) => {
  return (
    <Link href={webSrc}>
      <CardContainer>
        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#110e1b] border-white/[0.2] w-[20rem] sm:w-[30rem] h-fit rounded-xl p-5 sm:p-6 border">
          <CardItem
            translateZ="50"
            className="flex w-full justify-between items-center text-xl font-medium text-white"
          >
            {title}
            <p className="hidden sm:block text-xs text-gray-300 font-light">
              Click to Visit
            </p>
          </CardItem>
          <CardItem
            as="div"
            translateZ="60"
            className="text-sm max-w-sm my-4 text-neutral-400 line-clamp-3 hover:line-clamp-none"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={imgSrc}
              height="500"
              width="500"
              className="h-36 sm:h-60 w-full object-fit rounded-xl group-hover/card:shadow-xl"
              alt="webimg"
            />
          </CardItem>
          <CardItem as="div" translateZ="60" className="w-full">
            <div className="flex flex-wrap gap-y-4 sm:flex-nowrap items-center justify-center gap-x-6 mt-8">
              {Array.from({ length: tools.length }).map((_, index) => (
                <div className="flex flex-col items-center justify-center gap-y-2">
                  <Image
                    src={toolIcons[index]}
                    alt="icon"
                    height={25}
                    width={25}
                    className="object-contain"
                  />
                  <h3 className="text-sm font-light text-white text-center skills_font">
                    {tools[index]}
                  </h3>
                </div>
              ))}
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </Link>
  );
};
