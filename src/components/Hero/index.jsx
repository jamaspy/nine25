import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const index = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 p-12">
        <p className="text-2xl font-semibold">Now Streaming:</p>
        <p className="text-2xl font-semibold">Your salary</p>
        <p>The new way to spend, manage & invest your money </p>
        <div className="flex flex-row w-full justify-start mt-4">
          <div className="bg-black text-white border rounded p-2 mr-8">
            App Store
          </div>
          <div className="bg-black text-white border rounded p-2">
            App Store
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <StaticImage src="../../images/placeholder.webp" quality={100} />
      </div>
    </div>
  );
};

export default index;
