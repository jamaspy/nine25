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
        <div className="mx-2 xl:mx-0 flex flex-row justify-center md:justify-center xl:justify-start items-center">
          <div
            key={platform}
            className="lg:w-10 lg:h-10 md:w-14 md:h-14 w-10 h-10 cursor-pointer bg-gray-dark rounded-full flex items-center justify-center mr-2 lg:my-2"
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="md:text-2xl lg:text-xl"
            >
              {renderIcon(platform)}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Socials;
