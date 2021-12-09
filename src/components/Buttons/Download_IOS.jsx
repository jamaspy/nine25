import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const Download_IOS = ({ className }) => {
  return (
    <div
      role="button"
      aria-label="dowloand app on iOS"
      className={`bg-blacked text-white border rounded-full px-8 flex items-center justify-center hover:cursor-pointer ${className} m-auto`}
    >
      <StaticImage src="../../images/download_itunes.svg" quality={100} />
    </div>
  );
};

export default Download_IOS;
