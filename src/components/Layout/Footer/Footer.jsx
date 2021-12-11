import React from "react";
import Links from "./Links";
import Socials from "./Socials";
import Disclaimer from "./Disclaimer";
import LogoCopyright from "./LogoCopyright";
import { DownloadAndroid, DownloadIOS } from "../../Buttons";
import FooterLogoLarge from "../../../assets/logo_white_large.svg";
const Footer = ({ device }) => {
  return (
    <div className="bg-blacked text-white p-8">
      <div className="flex flex-row w-full md:justify-between justify-center lg:hidden items-start bg-red-500">
        <div className="hidden md:flex lg:hidden">
          <FooterLogoLarge className="z-10 lg:hidden inline-block" />
        </div>
        <div className="flex justify-center flex-col">
          <p className="text-xl text-center font-semibold">
            Start Streaming Now
          </p>
          <div className="my-8  w-full">
            {device() === "ios" && <DownloadIOS />}
            {device() === "android" && <DownloadAndroid />}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="">
            <FooterLogoLarge className="z-10" />
            <Disclaimer />
            <div className="">
              <p className="text-xl text-center lg:text-left font-semibold">
                Start Streaming Now
              </p>
              <div className="my-8">
                {device() === "ios" && <DownloadIOS />}
                {device() === "android" && <DownloadAndroid />}
                {device() === "desktop" && <>Download App Modal Button Here</>}
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
