import React from "react";
import { radialFill } from "../../styles/textGradientStyleObjects";
import { DownloadAndroid, DownloadIOS } from "../Buttons";
import HeroSVG from "../../assets/hero.svg";
import HeroMobileSVG from "../../assets/hero_mobile.svg";
import HeroTabletSVG from "../../assets/hero_tablet.svg";
import StarSVG from "../../assets/yellow_star.svg";
import DownloadModal from "../DownloadModal";
import Typical from "./Typing";
const index = ({ device }) => {
  return (
    <div className="flex flex-col flex-grow-0 flex-shrink mt-12 md:flex-row md:justify-between relative overflow-hidden">
      <DownloadModal />

      <div className="px-2 ">
        <p className="text-4xl md:text-5xl font-black text-center md:text-left">
          Now Streaming:
        </p>
        <p
          className="text-4xl md:text-5xl font-bold my-2 text-center md:text-left"
          style={radialFill}
        >
          Your salary.
        </p>
        <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center md:items-start md:justify-start mt-4 text-xl text-center md:text-left px-4 md:p-0 ">
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
        <div className="flex flex-row border justify-start items-start mt-12">
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
      <div className=" absolute lg:-bottom-20 left-0 hidden lg:block">
        <StarSVG />
      </div>

      <div className="flex md:hidden flex-shrink items-center">
        <HeroSVG />
      </div>
      <div className="hidden md:flex xl:hidden flex-shrink items-end mt-36">
        <HeroTabletSVG />
      </div>
      <div className="hidden xl:flex flex-shrink items-end justify-end">
        <HeroMobileSVG />
      </div>
    </div>
  );
};

export default index;
