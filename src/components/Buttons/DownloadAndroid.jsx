import React from "react";
import PlaySVG from "../../assets/google_play.svg";
const DownloadAndroid = ({ className }) => {
  return (
    <div
      aria-label="Download app on Play store"
      style={{ minWidth: "286px", minHeight: "85px" }}
      className={`bg-blacked text-white border rounded-full flex items-center justify-center hover:cursor-pointer ${className} m-auto z-10`}
    >
      <PlaySVG />
    </div>
  );
};

export default DownloadAndroid;
