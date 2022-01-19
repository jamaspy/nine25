import React from "react";
import PlaySVG from "../../assets/google_play_black.svg";
const DownloadAndroidWhite = ({ className }) => {
  return (
    <button
      aria-label="download app on Android"
      style={{ minWidth: "286px", minHeight: "85px" }}
      className={`bg-white text-black border rounded-full flex items-center justify-center hover:cursor-pointer ${className} m-auto z-10`}
    >
      <PlaySVG />
    </button>
  );
};

export default DownloadAndroidWhite;
