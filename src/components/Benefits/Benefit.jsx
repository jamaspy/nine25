import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Benefit = ({ title, subtitle, key }) => {
  return (
    <div key={key} className="flex flex-row my-8">
      <div className="flex-1 flex items-center justify-center">
        <StaticImage src="../../images/placeholder.webp" />
      </div>
      <div className="flex-1 p-4">
        <p className="text-xl font-medium">{title}</p>
        <p className="text-base">{subtitle}</p>
      </div>
    </div>
  );
};

export default Benefit;
