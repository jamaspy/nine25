import React from "react";
import Benefit from "./Benefit";
import { home_benefits } from "./data/home_benefits";
const HomeBenefits = ({ children }) => {
  return (
    <div className="p-4 w-full grid gap-4 grid-cols-1 md:grid-cols-2 bg-gray-lighter md:px-12 md:py-24">
      {home_benefits.map((benefit, index) => (
        <Benefit
          key={index}
          index={index}
          title={benefit.title}
          subtitle={benefit.subtitle}
          paragraphs={benefit.paragraphs}
          isWide={benefit.isWide}
          isComingSoon={benefit.isComingSoon}
        />
      ))}
    </div>
  );
};

export default HomeBenefits;
