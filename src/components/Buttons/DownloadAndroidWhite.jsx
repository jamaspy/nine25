import React from "react";
import PlaySVG from "../../assets/google_play_black.svg";
const DownloadAndroidWhite = ({ className, location }) => {
  return (
    <button
      aria-label="download app on Android"
      style={{ minWidth: "286px", minHeight: "85px" }}
      onClick={() => {
        typeof window !== "undefined" &&
          window.open(
            `https://play.google.com/store/apps/details?id=au.com.nine25.app&referrer=utm_source%3Dwebsite%26utm_medium%3D${location}`
          );
      }}
      className={`bg-white text-black border rounded-full flex items-center justify-center hover:cursor-pointer ${className} m-auto z-10`}
    >
      <PlaySVG />
    </button>
  );
};

export default DownloadAndroidWhite;
