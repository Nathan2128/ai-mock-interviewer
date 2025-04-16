import { getTechLogos } from "@/lib/utils";
import { TechIconProps } from "@/types";
import Image from "next/image";
import React from "react";

const DisplayTechIcons = async ({ techstack }: TechIconProps) => {
  const techLogos = await getTechLogos(techstack);
  return (
    <div className="flex flex-row">
      {techLogos.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className="relative group bg-dark-300 rounded-full p-2 flex-center"
        >
          <span className="tech-tooltip">{tech}</span>
          <Image
            src={url}
            alt={tech}
            height={100}
            width={100}
            className="size-5"
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcons;
