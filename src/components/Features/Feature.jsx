import React from "react";
import PrivacySVG from "../../assets/img_privacy.svg";
import InnovationSVG from "../../assets/img_innovation.svg";
import SecuritySVG from "../../assets/img_security.svg";
const Feature = ({ title, subtitle, imgNumber }) => {
  const renderImage = () => {
    switch (imgNumber) {
      case 0:
        return <PrivacySVG />;
      case 1:
        return <SecuritySVG />;
      case 2:
        return <InnovationSVG />;
      default:
        break;
    }
  };
  return (
    <div key={imgNumber} className="flex-1 flex flex-col items-center m-12">
      <div className="">{renderImage()}</div>
      <p className="font-medium text-blacked text-xl mt-2">{title}</p>
      <p className="text-center">{subtitle}</p>
    </div>
  );
};

export default Feature;
