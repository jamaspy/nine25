import React from "react";
import Feature from "./Feature";
import { home_features } from "./data/home_features";
const HomeFeatures = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-around items-center my-8 px-8">
      {home_features.map((feature) => (
        <Feature
          key={feature.id}
          title={feature.title}
          subtitle={feature.subtitle}
        />
      ))}
    </div>
  );
};

export default HomeFeatures;
