import * as React from "react";
import { HomeFeatures } from "../components/Features";
import { HomeBenefits } from "../components/Benefits";
import { Layout } from "../components/Layout";
import Hero from "../components/Hero";
import Seo from "../components/SEO";
import { checkDevice } from "../utils/checkDevice";

const IndexPage = () => {
  return (
    <Layout device={checkDevice}>
      <Seo title="Home" />
      <Hero device={checkDevice} />
      <HomeBenefits />
      <HomeFeatures />
    </Layout>
  );
};

export default IndexPage;
