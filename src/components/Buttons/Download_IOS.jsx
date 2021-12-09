import React from "react";
import ITunesSVG from "../../assets/download_itunes.svg";
const Download_IOS = ({ className }) => {
  return (
    <div
      role="button"
      aria-label="dowloand app on iOS"
      className={`bg-blacked text-white border rounded-full px-8 py-4 flex items-center justify-center hover:cursor-pointer ${className} m-auto`}
    >
      <ITunesSVG />
    </div>
  );
};

export default Download_IOS;