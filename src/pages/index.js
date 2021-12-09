import * as React from "react";
import { HomeFeatures } from "../components/Features";
import { HomeBenefits } from "../components/Benefits";
import { Layout } from "../components/Layout";
import Hero from "../components/Hero";
import Cta from "../components/CTA";
import { Carousel } from "../components/Carousel";
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <HomeBenefits />
      <HomeFeatures />
      <Cta />
    </Layout>
  );
};

export default IndexPage;
