import React from "react";
import { radialFill } from "../../styles/textGradientStyleObjects";
import { DownloadAndroid, DownloadIOS } from "../Buttons";
import HeroSVG from "../../assets/hero.svg";
import StarSVG from "../../assets/yellow_star.svg";
import DownloadModal from "../DownloadModal";
import Typical from "./Typing";
const index = ({ device }) => {
  return (
    <div className="flex flex-col flex-shrink mt-12 md:flex-row md:justify-center relative overflow-hidden">
      <DownloadModal />
      <div className="md:pl-4">
        <div className="flex flex-col items-center justify-center xl:justify-start lg:items-start lg:mt-24 lg:ml-24">
          <p className="text-4xl md:text-5xl font-black">Now Streaming:</p>
          <p className="text-4xl md:text-5xl font-bold my-2" style={radialFill}>
            Your salary
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center mt-4 text-xl text-center md:text-left px-4 md:p-0">
            <p>The</p>{" "}
            <span className="bg-primary mx-1">
              <Typical
                steps={[
                  "revolutionary",
                  2000,
                  "dependable",
                  2000,
                  "adaptable",
                  2000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </span>
            <p className="">way to spend, manage & invest your salary.</p>
          </div>
          <div className="flex flex-row w-full justify-center md:justify-start mt-12">
            {device() === "ios" && <DownloadIOS location="body" />}
            {device() === "android" && <DownloadAndroid />}
            {device() === "desktop" && (
              <>
                <DownloadIOS className="mr-8" />
                <DownloadAndroid />
              </>
            )}
          </div>
        </div>
        <div className="absolute -bottom-10 left-0 hidden md:block">
          <StarSVG />
        </div>
      </div>
      <div className="flex flex-shrink items-center -mt-36 lg:mt-0 justify-end xl:mr-24 md:max-w-md lg:max-w-none">
        <HeroSVG />
      </div>
    </div>
  );
};

export default index;
