import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Item = ({ title, description }) => {
  return (
    <div className="flex flex-row text-white h-full m-4">
      <div className="flex flex-col h-full items-center justify-center">
        <div className="h-12 w-12">
          <StaticImage src="../../images/icon.png" />
        </div>
      </div>
      <div className="flex flex-col h-full  items-start justify-center ml-4">
        <p className="font-medium text-lg">{title}</p>
        <p className="foont-sm">{description}</p>
      </div>
    </div>
  );
};

export default Item;
