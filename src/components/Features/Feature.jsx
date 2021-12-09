import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const Feature = ({ title, subtitle, imgNumber }) => {
  const renderImage = () => {
    switch (imgNumber) {
      case 0:
        return <StaticImage src="../../images/img_privacy.svg" alt="privacy" />;
      case 1:
        return (
          <StaticImage src="../../images/img_security.svg" alt="security" />
        );
      case 2:
        return (
          <StaticImage src="../../images/img_innovation.svg" alt="innovation" />
        );
      default:
        break;
    }
  };
  return (
    <div
      key={imgNumber}
      className="flex-1 flex flex-col items-center justify-center mx-8"
    >
      <div className="rounded-full  mb-1 overflow-hidden">{renderImage()}</div>
      <p className="mb-1 font-medium text-blacked text-xl">{title}</p>
      <p className="text-lg text-center">{subtitle}</p>
    </div>
  );
};

export default Feature;
