import React from "react";
import Links from "./Links";
import Socials from "./Socials";
import Disclaimer from "./Disclaimer";
const Footer = () => {
  return (
    <div className="bg-blacked text-white p-2">
      <Links />
      <Socials />
      <Disclaimer />
    </div>
  );
};

export default Footer;
