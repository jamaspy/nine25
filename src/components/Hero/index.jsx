import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { radialFill } from "../../styles/textGradientStyleObjects";
import { Download_Android, Download_IOS } from "../Buttons";
import HeroSVG from "../../assets/hero.svg";
import StarSVG from "../../assets/yellow_star.svg";
const index = () => {
  return (
    <div className="flex flex-col md:flex-row relative overflow-hidden">
      <div className="flex-1">
        <div className="flex flex-col items-center justify-center xl:justify-start lg:items-start md:mt-24 md:ml-24">
          <p className="text-4xl md:text-5xl font-black">Now Streaming:</p>
          <p
            className="text-4xl md:text-5xl font-semibold my-2"
            style={radialFill}
          >
            Your salary
          </p>
          <p className="mt-4 text-xl text-center md:text-left px-4 md:p-0">
            The <span className="bg-primary">smartest</span> way to spend,
            manage & invest your salary.
          </p>
          <div className="flex flex-row w-full justify-start mt-12">
            <Download_IOS className="mr-8" />
            <Download_Android className="hidden md:inline-block" />
          </div>
        </div>
        <div className="absolute -bottom-20 left-0 hidden md:block">
          <StarSVG />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-end md:mr-24">
        <HeroSVG />
      </div>
    </div>
  );
};

export default index;
