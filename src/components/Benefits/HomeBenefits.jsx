import React from "react";
import Benefit from "./Benefit";
import { home_benefits } from "./data/home_benefits";
const HomeBenefits = ({ children }) => {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      {home_benefits.map((benefit, index) => (
        <Benefit
          key={index}
          title={benefit.title}
          subtitle={benefit.subtitle}
        />
      ))}
    </div>
  );
};

export default HomeBenefits;
