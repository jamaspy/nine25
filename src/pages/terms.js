import React from "react";
import { Layout } from "../components/Layout";

import Seo from "../components/SEO";
import { checkDevice } from "../utils";
import { Breadcrumbs } from "../components/Layout";
const aboutus = () => {
  return (
    <Layout device={checkDevice}>
      <Seo title="Terms of Service" />
      <Breadcrumbs
        rootLabel="Home"
        rootRoute="/"
        currentLabel="Terms of Service"
      />
      <div className="container m-auto px-8 md:px-36">
        <p className="text-5xl font-semibold">Terms of service</p>

        <p className="text-3xl font-medium mt-8 mb-4">Welcome</p>
        <p className="mb-4">Welcome to Livin' On The Stream™!</p>
        <p className="mb-4">
          The Nine25 App grants you the ability to stream - spend, manage,
          invest - your salary in real-time. After working for your money, make
          your money work for you, with Nine25's Salary Streaming, Bill
          Streaming and Safe Spend features. Before we kick off, there are just
          a few terms and conditions we need to cover to make sure we’re all on
          the same page.
        </p>
        <div className="border p-2">
          <p className="text-3xl font-medium mb-4">Key Terms</p>
          <p className="mb-4">
            Our complete terms and conditions are contained below, but some
            important points for you to know before you start using our Nine25
            App are set out here:
          </p>
          <p className="mb-2 ml-8">
            • we may change the Terms (including the fees) and provide the
            updated Terms in the Nine25 App or on our Website. If you do not
            agree to these changes, you may cancel your Account as set out in
            these Terms;
          </p>
          <p className="mb-2 ml-8">
            • we may disclose your personal information to third parties, such
            as our technical partners like Assembly, as set out in our Privacy
            Policy;
          </p>
          <p className="mb-2 ml-8">
            • subject to your consumer law rights, our Liability arising from or
            in connection with these Terms will be limited to us re-providing
            you the Nine25 App including its features;
          </p>
          <p className="mb-2 ml-8">
            • subject to your consumer law rights, we exclude our liability for
            any Consequential Loss, your acts or omissions, any Third Party
            Inputs, and any reason beyond our reasonable control; and
          </p>
          <p className="mb-4 ml-8">
            • we may, at any time, discontinue the Nine25 App or exclude any
            person from the Nine25 App, for which we will not be responsible for
            any loss or damage.
          </p>
          <p className="mb-2">
            Nothing in these terms limits your rights under the Australian
            Consumer Law.
          </p>
        </div>
        <p className="text-3xl my-4 font-bold">1. Introduction</p>
        <p className="mb-4">
          These terms and conditions (Terms) are entered into between you and
          Nine25 Pty Ltd (ABN 26 644 914 625) (we, us or our), together the
          Parties and each a Party. These Terms govern your use of the Nine25
          App
        </p>
        <p className="mb-4 text-center">
          We may change these Terms at any time and provide the updated Terms in
          the Nine25 App or on our Website. We will contact you regarding
          changes to these Terms via the Nine25 App:
        </p>
        <ul>
          <li className="mb-2">
            (a) if we make material changes to our Terms, including to introduce
            new fees or make changes to existing fees, we will provide you with
            30 days’ notice. If you do not agree to these changes then you may
            cancel your Account prior to the changes being implemented
            (otherwise you will be subject to the changes including charged any
            new fees); and
          </li>
          <li>
            (b) if we make non-material changes to our Terms, we will provide
            you with 30 days’ notice prior to the implementation of the changes.
            You may only use the Nine25 App if you are least 16 years of age.
          </li>
        </ul>
        <p className="text-3xl my-4 font-bold">2. Acceptance</p>
        <p className="mb-4">
          By creating an account on the Nine25 App, you accept and agree to
          comply with the Terms, and acknowledge that we [are a credit provider
          exempt from holding an AFS licence under the Corporations Act 2001
          Cth)], and we only assist to facilitate the provision of credit to
          you.{" "}
        </p>
        <p className="mb-4">
          If you access or download our mobile application from (1) the Apple
          App Store, you agree to any Usage Rules set forth in the App Store
          <a
            href="https://www.apple.com/au/legal/internet-services/itunes/au/terms.html"
            className="underline text-secondary mx-1"
          >
            Terms of Service
          </a>
          or (2) the Google Play Store, the Android, Google Inc. Terms and
          Conditions including the Google Apps{" "}
          <a
            href="https://www.google.com/accounts/hosted/en/standard_terms.html"
            className="underline text-secondary"
          >
            Terms of Service.
          </a>
        </p>
        <p className="mb-4">By downloading and using the Nine25 App, you:</p>
        <ul className="mb-4">
          <li className="mb-2">
            (a) warrant to us that you have read and understood these Terms and
            our Privacy Policy; and
          </li>
          <li className="mb-4">
            (b) agree to use the Nine25 App in accordance with these Terms.
          </li>
          <p className="my-4">
            When using the Nine25 App, you must not do or attempt to do anything
            that is unlawful or inappropriate, including:
          </p>
          <li className="mb-2">
            (c) anything that would be a breach of an individual’s privacy or
            any other legal rights;
          </li>
          <li className="mb-2">
            (d) using the Nine25 App to defame, harass, threaten, menace or
            offend any person;
          </li>
          <li className="mb-2">
            (e) using the Nine25 App for unlawful purposes;
          </li>
          <li className="mb-2">
            (f) tampering with or modifying the Nine25 App (including by
            transmitting viruses and using trojan horses);
          </li>
          <li className="mb-2">
            (g) using data mining, robots, screen scraping or similar data
            gathering and extraction tools on the Nine25 App; or
          </li>
          <li className="mb-2">
            (h) facilitating or assisting a third party to do any of the above
            acts.
          </li>
        </ul>

        <p className="text-3xl my-4 font-bold">3. Privacy</p>
        <p className="mb-4">
          We will handle your Personal Information in accordance with our
          Privacy Policy.
        </p>
        <p className="mb-4">
          By accepting these Terms, you consent to our collection, use, storage
          and disclosure of your Personal Information as set out in the Privacy
          Policy and these Terms.
        </p>
        <p className="text-3xl my-4 font-bold">4. Communications</p>
        <p className="mb-4">
          We may contact you via the Nine25 App using in-Account notifications
          or via phone call, text message or email.
        </p>
        <p className="text-3xl my-4 font-bold">5. Your Account</p>
        <p className="my-4 font-bold">5.1 Open your acount</p>
        <p className="mb-4">
          You may register and create an account (Account) by following the
          steps in the Nine25 App. Your Account is personal and you must not
          transfer it to others, except with our written permission. You can
          have a maximum of one account in your name.
        </p>
        <p className="mb-4">
          You agree to provide accurate, current and complete information and
          regularly keep your Account information accurate, current and
          complete.
        </p>
        <p className="mb-4">
          You are responsible for keeping your Account details and your username
          and password confidential and you will be liable for all activity on
          your Account. You agree to immediately notify us of any unauthorised
          use of your Account.
        </p>
        <p className="mb-4">
          You understand that it is a legal requirement for us to verify your
          identity before you use the Nine25 App and its features, and you agree
          to provide us with such information as is required for us to verify
          your identity and any other information we require from time to time.
        </p>
        <p className="mb-4">
          You can start using the Nine25 App once your identity and Account
          information has been verified to our satisfaction.
        </p>
        <p className="my-4 font-bold">5.2 Cancelling your account</p>
        <p className="mb-4">You may only cancel your Account at any time if:</p>
        <ul className="mb-4">
          <li className="mb-2">
            (a) you don’t have any outstanding obligations related to your
            Account;
          </li>
          <li className="mb-2">
            (b) there is no ongoing investigation of any nature in connection
            with your Account;
          </li>
          <li className="mb-2">
            (c) you don’t have a pending or disputed transaction;
          </li>
          <li className="mb-2">
            (d) your Nine25 Account doesn’t have a negative balance or you don’t
            have an outstanding balance on a loan from us;
          </li>
          <li className="mb-4">
            (e) your Account isn’t subject to a hold or suspension.
          </li>
        </ul>
        <p className="mb-4">
          We will deduct any fees and any other amounts you owe us under these
          Terms from your Available Balance in your Nine25 Account at the time
          of cancelling your Account. The remaining funds will be paid to you by
          our third party payment provider.
        </p>
        <p className="mb-4">
          When you cancel your Account, we will no longer allow any payments to
          be made in relation to your Account.
        </p>
        <p className="mb-4">
          Your Nine25 Account is the digital e-wallet for your Account which
          displays your Available Balance.
        </p>
        <p className="text-3xl my-4 font-bold">6. Your Pay</p>
        <p className="my-4 font-bold">6.1 Accessing your Pay</p>
        <p className="mb-4">
          You may request us to provide you with your Pay as enabled or as
          outlined in the Nine25 App. Subject to section 8, we will facilitate
          the transfer of your Pay to your linked bank account.
        </p>

        <p className="my-4 font-bold">6.2 Third Party Payment Provider</p>
        <p className="mb-4">
          We use a third party payment processor for that third party to provide
          payment services to you via the Nine25 App. In doing so, we are not
          acting as your agent. Assembly Payments Platform Pty Ltd, trading as
          Assembly Payments which holds Australian Financial Services Licence
          number 478497 (Assembly) is the entity we use to facilitate the
          payment process for all payment transactions in connection with the
          Nine25 App including holding your funds on your behalf.{" "}
        </p>
        <p className="mb-4">By agreeing to these Terms, you agree that:</p>
        <ul className="mb-4">
          <li className="mb-2">
            (a) you enter into the End User Agreement{" "}
            <a
              href="https://assemblypayments.com/company/policies/end-user-agreement"
              className="mx-1 underline text-secondary"
            >
              here
            </a>
            directly with Assembly; and
          </li>
          <li className="mb-2">
            (b) you are bound by the End User Agreement when making or receiving
            a payment in the Nine25 App as a binding contract between you and
            Assembly. You are not bound by the End User Agreement through us as
            your agent. For the avoidance of doubt, we are not acting as your
            agent at any time.
          </li>
        </ul>
        <p className="mb-4">
          If you breach the End User Agreement, you also breach these Terms.
        </p>
        <p className="my-4 font-bold">6.3 Fees &amp; Billing</p>

        <p className="mb-4">
          The fees payable by you for your use of the Nine25 App are set out in
          the Nine25 App, and are billed by us as set out in the Nine25 App. We
          do not charge fees on a pro-rata basis.
        </p>
        <p className="mb-4">
          What this means is if you close your Account or you change certain
          features in the Nine25 App, you will be billed for that monthly cycle
          before any changes to your billing are implemented for the following
          month.
        </p>

        <p className="my-4 font-bold">6.4 Link or Unlink a Payment Method</p>
        <p className="mb-4">
          You can link or unlink a prepaid card or an Australian bank account to
          your Account as a payment method. You can also manually make payments
          into your Nine25 Account by bank transfer.
        </p>
        <p className="text-3xl my-4 font-bold">7. Promotions</p>
        <p className="mb-4">
          We may run promotions on the Nine25 App which will be governed by
          their own terms and conditions as set out in the Nine25 App. If there
          is any inconsistency between those terms and conditions and these
          Terms, these Terms apply.
        </p>
        <p className="text-3xl my-4 font-bold">8. Your Nine25 Account</p>
        <p className="mb-4 font-bold">8.1 Nine25 Account Funds</p>
        <ul className="mb-4">
          <li className="mb-2">
            (a) The amount of funds available in your Nine25 Account (held by
            Assembly) is considered your Available Balance. You will not receive
            interest or any other earnings on funds held on your behalf by
            Assembly.
          </li>
          <li className="mb-2">
            (b) You acknowledge that the Available Balance can be used at any
            time to meet any of your financial obligations in respect of your
            Account.
          </li>
          <li className="mb-2">
            (c) You acknowledge that the funds in your Nine25 Account will be
            held on trust for you in an account maintained and held by Assembly.
          </li>
          <li className="mb-2">
            (d) You acknowledge and agree that it is a requirement for the
            provision of the Nine25 App that you:
            <li className="my-2 ml-8">
              (i) continue to be employed and be entitled to receive a recurring
              and consistent wage payment from your employer in timing of
              payment and amount of payment (and agree for us to take any
              reasonable steps to check your credit score); and
            </li>
          </li>
          <li className="mb-4">
            (e) You acknowledge and agree that we may, acting reasonably,
            recover any amounts due and payable and/or owing to us by you by:
            <li className="mb-2 ml-8">
              (i) sending direct debit requests to your bank account provided by
              you to us until your financial obligations to us are satisfied; or
            </li>
            <li className="mb-2 ml-8">
              (ii) using a debt collection agency if you are unable to resolve
              any issues with us within 7 days of us notifying you of any issue,
            </li>
          </li>
        </ul>
        <p className="mb-4">
          and you agree that we may take the above actions before using the
          dispute resolution clause in clause 19 below.
        </p>
        <p className="my-4 font-bold">8.2 Withdrawing Money</p>
        <p className="mb-4">
          You may withdraw funds from your Nine25 Account, subject to your
          Available Balance, at any time using the methods set out in the Nine25
          App.
        </p>
        <p className="text-3xl my-4 font-bold">9. Features</p>
        <p className="mb-4">
          We provide a range of features and services to you in the Nine25 App.
          You may select and change certain features associated with your
          Account in the Nine25 App at any time and we will make the selected
          changes to your Account shortly afterwards.
        </p>
        <p className="text-3xl my-4 font-bold">10. Complaints</p>
        <p className="mb-4">
          We are committed to dealing with your complaints fairly and resolving
          issues in accordance with our policies. You can make a complaint or
          lodge a dispute by emailing us at help@nine25.app.
        </p>
        <p className="text-3xl my-4 font-bold">11. Australian Consumer Law</p>
        <p className="mb-4">
          Certain legislation, including the Australian Consumer Law (ACL) in
          Schedule 2 of the Competition and Consumer Act 2010 (Cth), and similar
          consumer protection laws and regulations, may confer you with rights,
          warranties, guarantees and remedies relating to the provision of the
          Nine25 App by us to you which cannot be excluded, restricted or
          modified (Statutory Rights).
        </p>
        <p className="mb-4">
          If the ACL applies to you as a consumer, nothing in these Terms
          excludes your Statutory Rights as a consumer under the ACL. You agree
          that our Liability for the Nine25 App provided to an entity defined as
          a consumer under the ACL is governed solely by the ACL and these
          Terms.
        </p>
        <p className="mb-4">
          Subject to your Statutory Rights, we exclude all express and implied
          warranties, and all material, work and services (including the Nine25
          App) are provided to you without warranties of any kind, either
          express or implied, whether in statute, at law or on any other basis.
        </p>
        <p className="mb-4">
          This clause will survive the termination or expiry of these Terms.
        </p>
        <p className="text-3xl my-4 font-bold">12. Liability</p>
        <p className="mb-4 font-bold">12.1 Exclusion of liability</p>
        <p className="mb-4">
          Despite anything to the contrary, to the maximum extent permitted by
          law, we will not be liable for, and you waive and release us from and
          against, any Liability caused or contributed to by, arising from or
          connected with:
        </p>
        <ul className="mb-4">
          <li className="mb-2">(a) your acts or omissions;</li>
          <li className="mb-2">
            (b) any use of the Nine25 App by a person or entity other than you,
            or other than as reasonably contemplated by these Terms;
          </li>
          <li className="mb-2">(c) any Third Party Inputs;</li>
          <li className="mb-2">
            (d) any illness, injury or death resulting from use of the Nine25
            App; and/or
          </li>
          <li className="mb-2">
            (e) any event outside of our reasonable control.
          </li>
        </ul>
        <p className="mb-4">
          This clause will survive the termination or expiry of these Terms.
        </p>
        <p className="mb-4 font-bold">12.2 Limitation of Liability</p>
        <p className="mb-4">
          Despite anything to the contrary, to the maximum extent permitted by
          law:{" "}
        </p>
        <ul className="mb-4">
          <li className="mb-2">
            (a) we will not be liable for Consequential Loss;{" "}
          </li>
          <li className="mb-2">
            (b) each Party’s Liability under these Terms will be reduced
            proportionately to the extent the relevant Liability was caused or
            contributed to by the acts or omissions of the other Party (or any
            of that Party’s personnel); and
          </li>
          <li className="mb-2">
            (c) our aggregate liability for any Liability arising from or in
            connection with these Terms will be limited to us reperforming our
            obligations under these Terms.
          </li>
        </ul>
        <p className="mb-4">
          This clause will survive the termination or expiry of these Terms.
        </p>
        <p className="text-3xl my-4 font-bold">13. Termination</p>
        <p className="mb-4">
          Your Account and these Terms may be terminated by you at any time, by
          cancelling your Account as set out above in these Terms.
        </p>
        <p className="mb-4">
          We may terminate these Terms at any time by giving 1 day written
          notice to you.
        </p>
        <p className="mb-4">
          We may suspend your Account or terminate these Terms immediately upon
          written notice to you, without limitation, if:
        </p>
        <ul className="mb-4">
          <li className="mb-2">
            (a) you breach any provision of these Terms and that breach has not
            been remedied within 5 business days of being notified by us;
          </li>
          <li className="mb-2">
            (b) there is any reason outside our control which has the effect of
            compromising our ability to provide the Nine25 App; or
          </li>
          <li className="mb-2">
            (c) you are unable to pay your debts as they fall due.
          </li>
        </ul>
        <p className="mb-4">
          These Terms will terminate immediately upon written notice by you, if
          we:
        </p>
        <ul>
          <li className="mb-2">
            (d) are in breach of a material term of these Terms, and that breach
            has not been remedied within 10 business days of being notified by
            you; or
          </li>
          <li className="mb-2">
            (e) are unable to pay our debts as they fall due.
          </li>
        </ul>
        <p className="mb-4">Upon expiry or termination of these Terms:</p>
        <ul>
          <li className="mb-2">
            (f) we will remove your access to the Nine25 App;
          </li>
          <li className="mb-2">
            (g) we will immediately cease providing the Nine25 App to you; and
          </li>
          <li className="mb-2">
            (h) where we terminate the Terms for any reason, you also agree to
            pay us our additional costs arising from, or in connection with,
            such termination.
          </li>
        </ul>
        <p className="mb-4">
          Termination of these Terms will not affect any rights or liabilities
          that a Party has accrued under it.{" "}
        </p>
        <p className="mb-4">
          This clause will survive the termination or expiry of these Terms.
        </p>
        <p className="text-3xl my-4 font-bold">14. User Data</p>
        <p className="mb-4">
          You grant us a limited licence to copy, transmit, store and back-up or
          otherwise access the information, and other data provided by you to us
          or inputted by you into the Nine25 App, stored by the Nine25 App or
          generated by the Nine25 App as a result of your use of the Nine25 App
          (User Data) and for a reasonable period after the cancellation or
          suspension of your Account to:{" "}
        </p>
        <ul>
          <li className="mb-2">
            (a) provide the Nine25 App (including for back-ups) to you;
          </li>
          <li className="mb-2">(b) diagnose problems with the Nine25 App;</li>
          <li className="mb-2">
            (c) develop other services, provided we de-identify the User Data;
          </li>
          <li className="mb-2">
            (d) enhance and otherwise modify the Nine25 App; and
          </li>
          <li className="mb-2">
            (e) required to perform our obligations under these Terms.
          </li>
        </ul>
        <p className="mb-4">
          We do not endorse or approve and are not responsible for any User
          Data. We may, at any time at our sole discretion, remove any User
          Data.
        </p>
        <p className="text-3xl my-4 font-bold">15. Analytics</p>
        <p className="mb-4">
          We may monitor, analyse and compile statistical and performance
          information based on and/or related to your use of the Nine25 App, in
          an aggregated and anonymised format (Analytics). You agree that we may
          make such Analytics publicly available, including by commercialising
          the Analytics, provided that it:
        </p>
        <ul>
          <li className="mb-2">
            (a) does not contain identifying information; and
          </li>
          <li className="mb-2">
            (b) is not compiled using a sample size small enough to make the
            underlying personal information you provide identifiable.
          </li>
        </ul>
        <p className="mb-4">
          We, and our licensors own all right, title and interest in and to the
          Analytics and all related software, technology, documentation and
          content used or provided in connection with the Analytics, including
          all intellectual property rights in the foregoing.
        </p>
        <p className="text-3xl my-4 font-bold">16. Feedback</p>
        <p className="mb-4">You agree that:</p>
        <ul>
          <li className="mb-2">
            (a) all intellectual property rights in any idea, suggestion,
            recommendation or request by you, whether made verbally, in writing,
            directly or indirectly, in connection with the Nine25 App
            (Feedback), will at all times vest, or remain vested, in us; and
          </li>
          <li className="mb-2">
            (b) we may use Feedback in any manner which we see fit (including to
            develop new features) and no benefit will be due to you as a result
            of any use by us of any Feedback.
          </li>
        </ul>
        <p className="text-3xl my-4 font-bold">17. Third Party Inputs</p>
        <p className="mb-4">
          You agree that the provision of the Nine25 App may be contingent on,
          or impacted by, third parties or any goods and services provided by
          the third parties, including third parties that provide us with IT
          services, end users, merchants, suppliers, or other subcontractors
          (Third Party Inputs). Despite anything to the contrary, to the maximum
          extent permitted by law, we will not be responsible and will have no
          liability for any default or breach of these Terms or any law if such
          default or breach was caused or contributed to by any Third Party
          Inputs.{" "}
        </p>
        <p className="text-3xl my-4 font-bold">18. Notice regarding Apple</p>
        <p className="mb-4">
          To the extent that you are using or accessing our Nine25 App on an iOS
          device, you further acknowledge and agree to the terms of this clause.
          You acknowledge that these Terms are between you and us only, not with
          Apple Inc. (Apple), and Apple is not responsible for the Nine25 App
          and any content available on the Nine25 App.
        </p>
        <p className="mb-4">
          Apple has no obligation to furnish you with any maintenance and
          support services with respect to our Nine25 App.
        </p>
        <p className="mb-4">
          If our mobile application fails to conform to any applicable warranty,
          you may notify Apple and Apple will refund the purchase price of the
          mobile application to you. To the maximum extent permitted by
          applicable law, Apple will have no other warranty obligation
          whatsoever with respect to the mobile application and any other
          claims, losses, liabilities, damages, costs or expenses attributable
          to any failure to conform to any warranty will be our responsibility.
        </p>
        <p className="mb-4">
          Apple is not responsible for addressing any claims by you or any third
          party relating to our mobile application or your use of our mobile
          application, including but not limited to (1) product liability
          claims; (2) any claim that our mobile application fails to conform to
          any applicable legal or regulatory requirement; and (3) claims arising
          under consumer protection or similar legislation.
        </p>
        <p className="mb-4">
          Apple is not responsible for the investigation, defence, settlement
          and discharge of any third-party claim that our mobile application
          infringes that third party’s intellectual property rights.
        </p>
        <p className="mb-4">
          You agree to comply with any applicable third-party terms when using
          our mobile application, including any Usage Rules set forth in the
          Apple App Store Agreement of Service.
        </p>
        <p className="mb-4">
          Apple and Apple’s subsidiaries are third-party beneficiaries of these
          Terms, and upon your acceptance of these Terms, Apple will have the
          right (and will be deemed to have accepted the right) to enforce these
          Terms against you as a third-party beneficiary of these Terms.
        </p>
        <p className="mb-4">
          You hereby represent and warrant that (1) you are not located in a
          country that is subject to a U.S. Government embargo, or that has been
          designated by the U.S. Government as a "terrorist supporting" country;
          and (2) you are not listed on any U.S. Government list of prohibited
          or restricted parties.
        </p>
        <p className="text-3xl my-4 font-bold">19. General</p>
        <p className="mb-4">
          <span className="font-bold">Assignment: </span> You must not assign or
          deal with the whole or any part of your rights or obligations under
          these Terms without our prior written consent.
        </p>
        <p className="mb-4">
          <span className="font-bold">Assignment of Debt: </span> You agree that
          we may assign or transfer any debt owed by you to us, arising under or
          in connection with this Agreement, to a debt collector, debt
          collection agency, or other third party.
        </p>
        <p className="mb-4">
          <span className="font-bold">Competitors: </span> You are prohibited
          from using our Nine25 App in any way that competes with our business.
          If you breach this term, we will hold you responsible for Liability we
          suffer, and hold you accountable for any profits that you may make
          from non-permitted use.
        </p>
        <p className="mb-4">
          <span className="font-bold">Discontinuance: </span> We may, with
          written notice to you, discontinue our Nine25 App, in whole or in
          part. We may also exclude any person from using our Nine25 App, at any
          time at our sole discretion. We are not responsible for any Liability,
          howsoever arising, whether direct or indirect and/or whether present,
          unascertained, future or contingent you may suffer arising from or in
          connection with any such discontinuance or exclusion.
        </p>
        <p className="mb-4">
          <span className="font-bold">Disputes: </span> Subject to clause
          8.1(e), in the event of any dispute arising from, or in connection
          with, these Terms (Dispute), the Party claiming there is a Dispute
          must give written notice to the other Party setting out the details of
          the Dispute and proposing a resolution. Within 7 days after receiving
          the notice, the Parties must meet at least once to attempt to resolve
          the Dispute or agree on the method of resolving the Dispute by other
          means, in good faith. All aspects of every such conference, except the
          fact of the occurrence of the conference, will be privileged.
        </p>
        <p className="mb-4">
          If the Parties do not resolve the Dispute or (if the Dispute is not
          resolved) agree on an alternate method to resolve the Dispute, within
          21 days after receipt of the notice, the Dispute may be referred by
          either Party (by notice in writing to the other Party) to litigation.
          Nothing in this clause will operate to prevent a Party from seeking
          urgent injunctive or equitable relief from a court of an appropriate
          jurisdiction. This clause will survive the termination or expiry of
          these Terms
        </p>
        <p className="mb-4">
          <span className="font-bold">Email: </span> You agree that we are able
          to send electronic mail to you and receive electronic mail from you.
          You release us from any Liability you may have as a result of any
          unauthorised copying, recording, reading or interference with that
          document or information after transmission, for any delay or
          non-delivery of any document or information and for any damage caused
          to your system or any files by a transfer.
        </p>
        <p className="mb-4">
          <span className="font-bold">Force Majeure: </span> We will not be
          liable for any delay or failure to perform our obligations under these
          Terms if such delay is due to any circumstance beyond our reasonable
          control.
        </p>
        <p className="mb-4">
          <span className="font-bold">Governing law: </span> These Terms are
          governed by the laws of New South Wales, Australia. Each Party
          irrevocably and unconditionally submits to the exclusive jurisdiction
          of the courts operating in New South Wales, Australia and any courts
          entitled to hear appeals from those courts and waives any right to
          object to proceedings being brought in those courts.
        </p>
        <p className="mb-4">
          <span className="font-bold">Notices: </span> Any notice given under
          these Terms must be in writing addressed to us at the address at the
          end of these Terms or to you at the address in your Account. Any
          notice may be sent by standard post or email, and will be deemed to
          have been served on the expiry of 48 hours in the case of post, or at
          the time of transmission in the case of transmission by email and for
          in-App communications, at the time you receive the in-App
          communication
        </p>
        <p className="mb-4">
          <span className="font-bold">Relationship of Parties: </span> These
          Terms are not intended to create a partnership, joint venture,
          employment or agency relationship between the Parties. We do not act
          as an escrow agent in relation to your funds held by Assembly, or
          guarantee or assume responsibility for your Pay, or collect or receive
          your Pay on your behalf.
        </p>
        <p className="mb-4">
          <span className="font-bold">Severance: </span> If a provision of these
          Terms is held to be void, invalid, illegal or unenforceable, that
          provision is to be read down as narrowly as necessary to allow it to
          be valid or enforceable, failing which, that provision (or that part
          of that provision) will be severed from these Terms without affecting
          the validity or enforceability of the remainder of that provision or
          the other provisions in these Terms.
        </p>
        <p className="mb-4">
          <span className="font-bold">Third party sites: </span> The App may
          contain links to websites operated by third parties. Unless we tell
          you otherwise, we do not control, endorse or approve, and are not
          responsible for, the content on those websites. We recommend that you
          make your own investigations with respect to the suitability of those
          websites. If you purchase goods or services from a third party website
          linked from the Nine25 App, such third party provides the goods and
          services to you, not us. We may receive a benefit (which may include a
          referral fee or a commission) should you visit certain third-party
          websites via a link on the Nine25 App (Affiliate Link) or for
          featuring certain products or services on the Nine25 App. We will make
          it clear by notice to you which (if any) products or services we
          receive a benefit to feature on the Nine25 App, or which (if any)
          third party links are Affiliate Links.
        </p>
        <p className="my-4 font-bold">20. Contact us</p>
        <p className="mb-4">
          If you would like to contact us, you can email us at help@nine25.app
          or use the contact form on our Website or mail to us at Level 20/171
          Sussex Street, Sydney NSW 2000.
        </p>
        <p className="my-4 font-bold">21. Definitions</p>
        <p className="mb-4">
          <span className="font-bold">Consequential Loss</span> means any loss,
          damage or costs incurred by you that is indirect or consequential, as
          well as loss of revenue; loss of income; loss of business; loss of
          profits; loss of production; loss of or damage to goodwill or credit;
          loss of business reputation, future reputation or publicity; loss of
          use; loss of interest; losses arising from claims by third parties;
          loss of or damage to credit rating; loss of anticipated savings and/or
          loss or denial of opportunity.
        </p>
        <p className="mb-4">
          <span className="font-bold">Liability</span> means any expense, cost,
          liability, loss, damage, claim, notice, entitlement, investigation,
          demand, proceeding or judgment (whether under statute, contract,
          equity, tort (including negligence), indemnity or otherwise),
          howsoever arising, whether direct or indirect and/or whether present,
          unascertained, future or contingent and whether involving a third
          party or a party to these Terms or otherwise
        </p>
        <p className="mb-4">
          <span className="font-bold">Pay</span> means the amount of credit
          requested by you which may be adjusted or rejected by us at our
          discretion.
        </p>
        <p className="mb-4">
          <span className="font-bold">Nine25 Account</span> means the digital
          e-wallet for your Account which sets out your Available Balance
        </p>
        <p className="mb-4">
          <span className="font-bold">Website</span> means https://nine25.app/
        </p>

        <p className="my-4 font-bold text-xl mb-24">
          Last update: 20 December 2021
        </p>
      </div>

      {/* <div className="bg-gray-lighter w-full flex items-center justify-center flex-col p-12">
        <div className="container rounded-3xl bg-white shadow-sm p-12">
          <ContactForm
            heading="Still have questions? Please, contact us"
            pageTitle="Term of Service"
          />
        </div>
      </div> */}
    </Layout>
  );
};

export default aboutus;
