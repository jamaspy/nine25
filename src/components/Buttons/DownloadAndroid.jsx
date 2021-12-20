import React from "react";
import PlaySVG from "../../assets/google_play.svg";
const DownloadAndroid = ({ className }) => {
  return (
    <button
      aria-label="download app on Android"
      style={{ minWidth: "286px", minHeight: "85px" }}
      className={`bg-blacked text-white border rounded-full flex items-center justify-center hover:cursor-pointer ${className} m-auto z-10`}
    >
      <PlaySVG />
    </button>
  );
};

export default DownloadAndroid;
