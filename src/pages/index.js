import * as React from "react";
import { HomeFeatures } from "../components/Features";
import { HomeBenefits } from "../components/Benefits";
import { Layout } from "../components/Layout";
import Hero from "../components/Hero";
import Cta from "../components/CTA";
import SEO from "../components/SEO";
import { get } from "lodash";
const IndexPage = () => {
  const navigator = get(window, ["navigator", "userAgent"], [])
    .split("(")[1]
    .split(")")[0];

  const isIOS = navigator.includes("iPhone") || navigator.includes("iPad");
  const isAndroid = navigator.includes("Android");

  const checkDevice = () => {
    if (isIOS) {
      return "ios";
    } else if (isAndroid) {
      return "android";
    } else {
      return "desktop";
    }
  };

  return (
    <Layout device={checkDevice}>
      <SEO title="Home" />
      <Hero device={checkDevice} />
      <HomeBenefits />
      <HomeFeatures />
      <Cta />
    </Layout>
  );
};

export default IndexPage;
