import React from "react";
import Links from "./Links";
import Socials from "./Socials";
import Disclaimer from "./Disclaimer";
import LogoCopyright from "./LogoCopyright";
import LargeFooterLogo from "../../../images/Large_Footer_Logo.svg";
import {
  DownloadAndroidWhite,
  DownloadIOSWhite,
  WhiteButton,
} from "../../Buttons";
import FooterLogoLarge from "../../../assets/logo_white_large.svg";
const Footer = ({ device }) => {
  return (
    <div className="bg-blacked text-white p-8">
      <div className="flex flex-row w-full md:justify-between justify-center lg:hidden items-start">
        <div className="hidden md:flex lg:hidden">
          <FooterLogoLarge className="z-10 lg:hidden inline-block" />
        </div>
        <div className="flex justify-center flex-col">
          <p className="text-2xl text-center font-semibold">
            Start Streaming Now
          </p>
          <div className="my-8  w-full">
            {device() === "ios" && <DownloadIOSWhite location="footer" />}
            {device() === "android" && <DownloadAndroidWhite />}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="">
            <img src={LargeFooterLogo} alt="nine25 footer logo large" />
            <Disclaimer />
            <div className="">
              <p className="text-2xl text-center lg:text-left font-semibold">
                Start Streaming Now
              </p>
              <div className="my-8">
                {device() === "ios" && <DownloadIOSWhite location="footer" />}
                {device() === "android" && (
                  <DownloadAndroidWhite location="footer" />
                )}
                {device() === "desktop" && (
                  <WhiteButton
                    // className="hidden md:inline-block"
                    text="Download App"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-full">
            <Links />
          </div>
        </div>
      </div>
      <div className="lg:hidden flex">
        <Links />
      </div>
      <div className="lg:hidden flex">
        <Socials />
      </div>
      <div className="lg:hidden block">
        <Disclaimer />
        <LogoCopyright />
      </div>
    </div>
  );
};

export default Footer;
