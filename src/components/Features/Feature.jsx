import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const Feature = ({ title, subtitle, key }) => {
  return (
    <div key={key} className="flex flex-col items-center justify-center my-2">
      <div className="rounded-full border w-12 h-12 mb-1 overflow-hidden">
        <StaticImage src="../images/icon.png" />
      </div>
      <p className="mb-1 font-medium">{title}</p>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
};

export default Feature;
