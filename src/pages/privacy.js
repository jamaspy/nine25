import React from "react";
import { Layout } from "../components/Layout";
import ContactForm from "../components/Form";
import Seo from "../components/SEO";
import { checkDevice } from "../utils";
const aboutus = () => {
  return (
    <Layout device={checkDevice}>
      <Seo title="Privacy Policy" />
      <div className="container m-auto px-8 md:px-36">
        <p className="text-2xl font-semibold">Privacy Policy</p>
        <p className="text-xs mb-4">Last updated: March 5, 2021</p>
        <p className="mb-4">
          This Privacy Policy is designed to empower and inform you about your
          privacy while using Nine25’s Services.{" "}
        </p>
        <p className="mb-4">
          Nine25 Pty Ltd ("Nine25," "we," "us" and/or "our") is dedicated to
          protecting your personal information and informing you about how we
          use it. This privacy policy (the "Privacy Policy" or the "Policy") is
          intended to provide information to our visitors ("you," "your") about
          how we collect, protect, share and use your information as part of our
          technology platforms, including, without limitation, our company
          website (the "Site"), mobile sites and/or applications (together with
          the Site, the "Services"). This Privacy Policy outlines how and when
          Nine25 collects, protects, shares, and uses information that can
          identify you individually ("Personal Information"), such as your name,
          email, date of birth, social security number, telephone number,
          employment information, financial information (such as paycheck
          information, account information (including account balance and
          transaction history) or debit card numbers), or identifiers and login
          information, such as your username and password, or a security token.
        </p>
        <p className="mb-4">
          Personal Information does not include information that is anonymous,
          aggregated, or can no longer be used to identify you as an individual.
          Please be sure to read this entire Privacy Policy before using or
          submitting information through the Services. By using or submitting
          information through the Services, you are indicating that you agree to
          be bound by the terms of this Privacy Policy. This Privacy Policy
          covers the privacy practices of Nine25 only. This Policy does not
          apply to the practices of third party websites, services or
          applications, including third parties with which we partner. These
          third-party services are governed by each such third party's privacy
          policy. Nine25 is not responsible for the privacy policies and
          practices of technology platforms other than that of Nine25, and
          Nine25 is not responsible for the failure of unaffiliated third
          parties to honor their privacy obligations. By including a link to a
          third-party website, we do not endorse or recommend any products or
          services offered or information contained at the third-party website.
          If you decide to visit a third-party website via a link contained on
          the Services, you do so at your own risk.
        </p>
        <p className="text-xl font-medium mt-8 mb-4">How we use information</p>
        <p className="mb-4">
          Examples of specific ways in which Nine25 may use your Personal
          Information include, but are not limited to the following:
        </p>
        <ul className="list-disc list-inside pl-4 mb-4">
          <li>
            Assessing your eligibility for an Account; Configuring your Account
            settings;
          </li>
          <li>
            Responding to your requests (including, for example, if you contact
            us to ask a question or report an issue with the Services, we may
            use the Personal Information you provide to verify your identity,
            answer your question or resolve your issue);
          </li>
          <li> Processing transactions and payments;</li>
          <li>
            Improving the content, appearance and utility of the Services,
            including through analytics; Tracking your use of the Services for
            internal research purposes and to enhance our product messaging to
            you;
          </li>
          <li>
            Providing necessary notices to you and notifying you about updates
            to the Services;
          </li>
          <li>
            Communicating with you about your Account and use of the Services;
          </li>
          <li>
            Debugging to identify and repair errors that impair existing
            intended Services;
          </li>
          <li>
            Debugging to identify and repair errors that impair existing
            functionality;
          </li>
          <li>
            Detecting security incidents, protecting against malicious,
            deceptive, fraudulent, or illegal activity, and prosecuting those
            responsible for that activity;
          </li>
          <li>
            Providing interactive features, such as product reviews or research
            surveys;
          </li>
          <li>
            Undertaking internal research for technological development and
            demonstration.
          </li>
        </ul>
        <p className="text-xl font-medium mt-8 mb-4">
          When do we disclose the Personal Information we collect?
        </p>
        <p className="mb-4">
          Email Communications. We may use your Personal Information to provide
          you with marketing or other promotional communications via email. If,
          at any time, you would like to stop receiving these promotional
          e-mails, you may follow the opt-out instructions contained in any such
          e-mail. Please note that by opting out, you may prohibit Nine25 from
          informing you of offerings that may be of interest to you. It may take
          up to ten business days for us to process opt-out requests. If you
          opt-out of receiving emails or promotions from us, we still may send
          you e-mails about your Account or any products or services you have
          requested or received from us, or for other customer service purposes.
        </p>
        <p className="text-xl font-medium mt-8 mb-4">
          Marketing or promotional purposes
        </p>
        <p className="mb-4">
          Except as provided herein, Nine25 will not sell, rent or otherwise
          disclose Personal Information about you to third parties. Employer
          partners. We may share limited Personal Information with your
          employer, including your name, employee identification number, place
          of employment, and information related to your paycheck, along with
          non-Personal Information, such as your partial account number, to
          facilitate providing the services, for joint marketing purposes, or to
          enhance your use of Nine25's service. We will not disclose to your
          employer Personal Information concerning your use of the Services
          other than as necessary to provide the Services, the transactions to
          or from your bank account, the balance of your account, or Personal
          Information regarding your individualized financial situation.
          Third-party providers. We may share your Personal Information with
          unaffiliated third parties that provide certain services to us,
          including, but not limited to data analysis, payment processing, and
          risk management. These third parties may have access to Personal
          Information or non-Personal Information in order to perform their
          functions on our behalf. However, these third parties are only
          permitted to use your Personal Information for the purpose for which
          it has been provided or to administer, service or process transactions
          that you have authorized, and may not disclose it to any other third
          party except at our express direction and in accordance with this
          Policy. We do not share your Personal Information with: (1) other
          financial companies for joint marketing purposes; (2) affiliated
          companies for their everyday business purposes; or (3) any third
          parties so that they can market to you.
        </p>
        <p className="text-xl font-medium mt-8 mb-4">
          Security of your Personal Information
        </p>
        <p className="mb-12">
          Nine25 maintains reasonable administrative, technical and physical
          safeguards to protect your Personal Information. Nine25 restricts
          authorized access to your Personal Information to those persons who
          have a legitimate purpose to know that information to provide products
          or services to you and those persons you have authorized to have
          access to such information. However, no electronic data transmission
          or storage of information can be guaranteed to be 100% secure. Please
          note that we cannot ensure or warrant the security of any information
          that you transmit to us. You use the Services and provide us with your
          Personal Information at your own risk.
        </p>
      </div>
      <div className="bg-gray-lighter w-full flex items-center justify-center flex-col p-12">
        <div className="container rounded-xl bg-white shadow-sm p-12">
          <ContactForm heading="Still have questions? Please, contact us" />
        </div>
      </div>
    </Layout>
  );
};

export default aboutus;
