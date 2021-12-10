import React from "react";
import Feature from "./Feature";
import { home_features } from "./data/home_features";
import { StaticImage } from "gatsby-plugin-image";
const HomeFeatures = () => {
  return (
    <div className="flex-1 flex justify-between flex-col">
      <div className="w-full pt-24">
        <p className="text-3xl text-center text-blacked font-semibold">
          What we provide
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-around">
        {home_features.map((feature, index) => (
          <Feature
            imgNumber={index}
            title={feature.title}
            subtitle={feature.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeFeatures;
