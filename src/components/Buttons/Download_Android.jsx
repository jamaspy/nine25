import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const Download_Android = ({ className }) => {
  console.log("🚀  TESTY:  : className ", className);
  return (
    <div
      aria-label="Download app on Play store"
      className={`bg-blacked text-white border rounded-full px-8 flex items-center justify-center hover:cursor-pointer ${className}`}
    >
      <StaticImage
        src="../../images/download_play.svg"
        backgroundColor="transparent"
        quality={100}
      />
    </div>
  );
};

export default Download_Android;
