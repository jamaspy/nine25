import React from "react";
import { Layout } from "../components/Layout";
import { checkDevice } from "../utils";
const aboutus = () => {
  return <Layout device={checkDevice}>Contact Us</Layout>;
};

export default aboutus;
