import React from "react";
import Links from "./Links";
import Socials from "./Socials";
import Disclaimer from "./Disclaimer";
import LogoCopyright from "./LogoCopyright";
import { DownloadAndroid, DownloadIOS } from "../../Buttons";
const Footer = ({ device }) => {
  return (
    <div className="bg-blacked text-white p-8">
      <p className="text-xl text-center font-semibold">Start Streaming Now</p>
      <div className="my-8">
        {device() === "ios" && <DownloadIOS />}
        {device() === "android" && <DownloadAndroid />}
        {device() === "desktop" && (
          <>
            <DownloadIOS className="mr-8" />
            <DownloadAndroid />
          </>
        )}
      </div>
      <Links />
      <Socials />
      <Disclaimer />
      <LogoCopyright />
    </div>
  );
};

export default Footer;
