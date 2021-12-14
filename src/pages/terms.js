import React from "react";
import { Layout } from "../components/Layout";
import ContactForm from "../components/Form";
import Seo from "../components/SEO";
import { checkDevice } from "../utils";
const aboutus = () => {
  return (
    <Layout device={checkDevice}>
      <Seo title="Terms of Service" />
      <div className="container m-auto px-8 md:px-36">
        <p className="text-2xl font-semibold">Terms of service</p>

        <p className="text-xl font-medium mt-8 mb-4">Summary</p>
        <p className="mb-4">
          Before the internet, the investment world was a bit of a boys’ club.
          It used to be expensive, exclusive and, for most people, out of reach.
          But the internet has been the ultimate equalizer. Anyone can now learn
          everything they need to about investing online and get started
          straight away. You don’t have to jump in at the deep end and chuck
          your life savings into your first purchase because there are plans for
          every budget.
        </p>
        <p className="mb-4">Our Services</p>
        <p className="mb-4">
          Before the internet, the investment world was a bit of a boys’ club.
          It used to be expensive, exclusive and, for most people, out of reach.
          But the internet has been the ultimate equalizer.{" "}
        </p>
        <p className="mb-4">Eligibility and Acceptable Use</p>
        <p className="mb-4">
          Before the internet, the investment world was a bit of a boys’ club.
          It used to be expensive, exclusive and, for most people, out of reach.
          But the internet has been the ultimate equalizer.
        </p>
        <p className="mb-4">Other Important Legal Terms</p>
        <p className="mb-4">
          Before the internet, the investment world was a bit of a boys’ club.
          It used to be expensive, exclusive and, for most people, out of reach.
          But the internet has been the ultimate equalizer. It used to be
          expensive, exclusive and, for most people, out of reach. But the
          internet has been the ultimate equalizer.
        </p>

        <p className="text-xl font-medium mt-8 mb-4">
          1. Complete Terms of Service
        </p>
        <p className="mb-4">
          These Terms of Service and any terms expressly incorporated herein
          ("Terms") apply to your access to and use of the websites and mobile
          applications provided by Payward, Inc. and its wholly owned
          subsidiaries (collectively, "Payward", "Kraken", "we", or "us"), and
          the trading, direct sale, staking and other services provided by
          Payward as described in these Terms. (collectively, our "Services").
        </p>
        <p className="mb-4">
          Our products and services are provided through local operating
          entities that are subsidiaries of Payward, Inc. Except as provided in
          Annex B for the Parachain Slot Auction Services, Annex C for the
          On-Chain Staking Services and Annex D for the Off-chain Staking
          Program (as defined therein), your sole and exclusive counterparty to
          these Terms is as follows:
        </p>
        <p className="mb-4">
          1.1 If you reside in Australia - Bit Trade Pty Limited, Unit 610, 478
          George Street, Sydney, NSW 2000, Australia.
        </p>
        <p className="mb-4">
          1.2 If you reside in Canada - Bit Trade Pty Limited, Unit 610, 478
          George Street, Sydney, NSW 2000, Australia.
        </p>
        <p className="mb-4">
          1.3 If you reside in Europe - Bit Trade Pty Limited, Unit 610, 478
          George Street, Sydney, NSW 2000, Australia.
        </p>
        <p className="text-xl font-medium mt-8 mb-4">2. Eligibility</p>
        <p>
          These Terms of Service and any terms expressly incorporated herein
          ("Terms") apply to your access to and use of the websites and mobile
          applications provided by Payward, Inc. and its wholly owned
          subsidiaries (collectively, "Payward", "Kraken", "we", or "us"), and
          the trading, direct sale, staking and other services provided by
          Payward as described in these Terms. (collectively, our "Services").
        </p>
        <p>
          Our products and services are provided through local operating
          entities that are subsidiaries of Payward, Inc. Except as provided in
          Annex B for the Parachain Slot Auction Services, Annex C for the
          On-Chain Staking Services and Annex D for the Off-chain Staking
          Program (as defined therein), your sole and exclusive counterparty to
          these Terms is as follows:
        </p>
        <p className="text-xl font-medium mt-8 mb-4">3. Privacy Notice</p>
        <p>
          Please refer to our Privacy Notice for information about how we
          collect, use and share your information.
        </p>
        <p className="text-xl font-medium mt-8 mb-4">
          4. Complete Terms of Service
        </p>
        <p className="mb-4">
          These Terms of Service and any terms expressly incorporated herein
          ("Terms") apply to your access to and use of the websites and mobile
          applications provided by Payward, Inc. and its wholly owned
          subsidiaries (collectively, "Payward", "Kraken", "we", or "us"), and
          the trading, direct sale, staking and other services provided by
          Payward as described in these Terms. (collectively, our "Services").
          Our products and services are provided through local operating
          entities that are subsidiaries of Payward, Inc. Except as provided in
          Annex B for the Parachain Slot Auction Services, Annex C for the
          On-Chain Staking Services and Annex D for the Off-chain Staking
          Program (as defined therein), your sole and exclusive counterparty to
          these Terms is as follows:
        </p>
        <p className="mb-4">
          4.1 If you reside in Australia - Bit Trade Pty Limited, Unit 610, 478
          George Street, Sydney, NSW 2000, Australia.
        </p>
        <p className="mb-4">
          4.2 If you reside in Canada - Bit Trade Pty Limited, Unit 610, 478
          George Street, Sydney, NSW 2000, Australia.
        </p>
        <p className="mb-4">
          4.3 If you reside in Europe - Bit Trade Pty Limited, Unit 610, 478
          George Street, Sydney, NSW 2000, Australia.
        </p>
      </div>
      <div className="bg-gray-lighter w-full flex items-center justify-center flex-col p-12">
        <div className="container rounded-3xl bg-white shadow-sm p-12">
          <ContactForm heading="Still have questions? Please, contact us" />
        </div>
      </div>
    </Layout>
  );
};

export default aboutus;
