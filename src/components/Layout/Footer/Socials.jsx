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

const Socials = ({ classes }) => {
  return (
    <div className="w-full flex lg:flex-col items-center justify-center lg:mt-2 mt-8 mb-4">
      {socialPlatofrms.map(({ platform, link }) => (
        <div
          key={platform}
          className="w-8 h-8 cursor-pointer bg-gray-dark rounded-full flex items-center justify-center mx-2 lg:my-2"
        >
          <a href={link} target="_blank" rel="noreferrer noopener">
            {renderIcon(platform)}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
