import React from "react";
import Feature from "./Feature";
import { home_features } from "./data/home_features";

const HomeFeatures = () => {
  return (
    <div className="shrink flex flex-col ">
      <div className="w-full pt-24">
        <p className="text-3xl text-center text-blacked font-semibold">
          What we provide
        </p>
      </div>
      <div className="container grid gap-4 grid-cols-1 md:grid-cols-3 lg:mx-auto">
        {home_features.map((feature, index) => (
          <Feature
            key={index}
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
