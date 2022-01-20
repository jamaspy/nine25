import React from "react";
import FooterLogoSmall from "../../../assets/footer_logo_2.svg";
import FooterLogo from "../../../assets/logo_white_large.svg";
const LogoCopyright = () => {
  return (
    <div className="flex flew-row justify-between items-center ">
      <div className="z-10 hidden lg:inline-block">
        <FooterLogo />
      </div>
      <FooterLogoSmall className="z-10 md:hidden inline-block" />
      <p className="text-gray-dark text-xs md:text-center text-right w-full">
        © 2021 Nine25
      </p>
    </div>
  );
};

export default LogoCopyright;
