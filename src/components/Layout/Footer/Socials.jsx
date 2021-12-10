import React from "react";
import { socialPlatofrms } from "../data";
import {
  GrInstagram,
  GrFacebookOption,
  GrTwitter,
  GrLinkedinOption,
} from "react-icons/gr";
import { SiTiktok } from "react-icons/si";

const renderIcon = (platform) => {
  switch (platform) {
    case "instagram":
      return <GrInstagram />;
    case "facebook":
      return <GrFacebookOption />;
    case "twitter":
      return <GrTwitter />;
    case "tiktok":
      return <SiTiktok />;
    case "linkedin":
      return <GrLinkedinOption />;
    default:
      return null;
  }
};

const Socials = () => {
  console.log(socialPlatofrms);
  return (
    <div className="w-full flex items-center justify-center  mt-8 mb-4">
      {socialPlatofrms.map((platform) => (
        <div className="w-8 h-8 cursor-pointer bg-gray-dark rounded-full flex items-center justify-center mx-2">
          {renderIcon(platform)}
        </div>
      ))}
    </div>
  );
};

export default Socials;
