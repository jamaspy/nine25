import React from "react";
import Links from "./Links";
import Socials from "./Socials";
import Disclaimer from "./Disclaimer";
import LogoCopyright from "./LogoCopyright";
import { Download_Android, Download_IOS } from "../../Buttons";
const Footer = ({ device }) => {
  return (
    <div className="bg-blacked text-white p-8">
      <p className="text-xl text-center font-semibold">Start Streaming Now</p>
      <div className="my-8">
        {device() === "ios" && <Download_IOS />}
        {device() === "android" && <Download_Android />}
        {device() === "desktop" && (
          <>
            <Download_IOS className="mr-8" />
            <Download_Android />
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
