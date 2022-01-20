import React from "react";
import ITunesSVG from "../../assets/app_store_standardised.svg";
const DownloadIOS = ({ className, location }) => {
  return (
    <button
      aria-label="dowloand app on iOS"
      onClick={() => {
        typeof window !== "undefined" &&
          window.open(
            `https://apps.apple.com/app/apple-store/id1540723857?pt=122259206&ct=website-${location}&mt=8`
          );
      }}
      style={{ minWidth: "250px", minHeight: "65px" }}
      className={`bg-blacked text-white border rounded-full flex items-center justify-center hover:cursor-pointer ${className} mx-auto`}
    >
      <ITunesSVG />
    </button>
  );
};

export default DownloadIOS;
