import React from "react";
import Feature from "./Feature";
import { home_features } from "./data/home_features";
import { StaticImage } from "gatsby-plugin-image";
const HomeFeatures = () => {
  return (
    <>
      <div className="w-full">
        <p className="text-3xl text-center text-blacked font-semibold">
          What we provide
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-around items-center my-8 px-8">
        {home_features.map((feature, index) => (
          <Feature
            imgNumber={index}
            title={feature.title}
            subtitle={feature.subtitle}
          />
        ))}
        {/* <div className="flex flex-col items-center justify-center my-2">
        <StaticImage
          quality={100}
          src="../../images/img_privacy.svg"
          alt="privacy"
        />

        <p className="mb-1 font-medium">Security</p>
        <p className="text-sm">
          Your privacy is number one and there’s no cross app tracking. We’ve
          got your back.
        </p>
      </div> */}
      </div>
    </>
  );
};

export default HomeFeatures;
