import React from "react";
import ITunesSVG from "../../assets/download_itunes.svg";
const DownloadIOS = ({ className }) => {
  return (
    <div
      role="button"
      aria-label="dowloand app on iOS"
      className={`bg-blacked text-white border rounded-full px-14 py-4 flex items-center justify-center hover:cursor-pointer ${className} m-auto`}
    >
      <ITunesSVG />
    </div>
  );
};

export default DownloadIOS;
