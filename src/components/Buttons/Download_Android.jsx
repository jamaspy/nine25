import React from "react";
import PlaySVG from "../../assets/download_play.svg";
const Download_Android = ({ className }) => {
  return (
    <div
      aria-label="Download app on Play store"
      className={`bg-blacked text-white border rounded-full px-14 py-4 flex items-center justify-center hover:cursor-pointer ${className} m-auto`}
    >
      <PlaySVG />
    </div>
  );
};

export default Download_Android;
