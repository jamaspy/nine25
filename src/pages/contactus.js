import React from "react";
import { Layout } from "../components/Layout";
import { checkDevice } from "../utils";
import ContactForm from "../components/Form";
import AnswerList from "../components/FAQ/AnswerList";
const aboutus = () => {
  return (
    <Layout device={checkDevice}>
      <div className="w-3/4 lg:w-1/2 mx-auto">
        <ContactForm
          heading="Please, tell us what’s on your mind"
          pageTitle="Contact Us"
        />
      </div>
      <div className="container mx-auto mt-12">
        <p className="lg:text3xl md:text-2xl text-xl font-semibold text-center">
          Frequently asked questions:
        </p>
        <AnswerList />
      </div>
    </Layout>
  );
};

export default aboutus;
