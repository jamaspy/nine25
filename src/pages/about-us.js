import React from "react";
import { Layout } from "../components/Layout";
import Seo from "../components/SEO";
import { checkDevice } from "../utils";
import Responsible from "../assets/img_response.svg";
import DHead from "../assets/img_duckHead.svg";
import Positive from "../assets/img_positive.svg";
import Simple from "../assets/img_simple.svg";
import { StaticImage } from "gatsby-plugin-image";
import MeetTeam from "../components/AboutUs/MeetTeam";
import { Breadcrumbs } from "../components/Layout";
const AboutUs = () => {
  return (
    <Layout device={checkDevice}>
      <Seo title="About Us" />
      <Breadcrumbs rootLabel="Home" rootRoute="/" currentLabel="About Us" />
      <div className="lg:w-1/2  mx-auto px-4">
        <p className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4">
          Our Story
        </p>
        <p className="text-lg">
          Nine25 (pronounced nine-to-five) wants to bring the way we get paid to
          the digital era. The concept of a paycheque is alien to anyone who's
          under 30. It's a relic from the pre-computerised age when an actual
          person had to sit and write out a cheque for every employee. That work
          took weeks. So, people got paid once a fortnight or once a month. At
          Nine25, we're upending this old world relic with our real-time Salary
          Streaming service.
        </p>
      </div>
      <div
        className="mx-auto rounded-lg shadow my-12 xl:max-w-4xl md:max-w-2xl max-w-sm flex items-center justify-center"
        style={{
          background:
            "linear-gradient(144.21deg, #6C39FE 4.6%, #4100FB 70.53%)",
        }}
      >
        <StaticImage
          src="../images/team_final.png"
          alt="about us"
          layout="constrained"
          width={845}
          placeholder="blurred"
          quality={100}
        />
      </div>
      <div className="lg:w-1/2 mx-auto px-4">
        <p className="lg:text-5xl md:text-4xl text-3xl font-bold mb-4">
          Our mission
        </p>
        <p className="mb-4 text-lg">
          Technology is progressing at a rapid rate and our lifestyles are
          thriving because of it. The financial world on the other hand, is
          lagging. In comparison to our quick access way of living, the old
          school idea of a 'pay day' is becoming harder to comprehend. Why do we
          still wait up to a week, a fortnight or even a month for our pockets
          to replenish and our freedoms to carry on. We want to have live-access
          to our pay, as we earn it. We stream movies, TV shows, music - we even
          stream our personal lives online. It's time we are able to do the same
          with our money.{" "}
        </p>
        <p className="mb-12 text-lg">
          Managing finances is tricky - on your own. Nine25 has the financial
          know-how and the confidence that financial freedom is reachable for
          everyone. That's why we are building the technology to help you snatch
          it!
        </p>
      </div>
      <div className=" bg-gray-lighter px-4 pt-12">
        <div className="container mx-auto">
          <p className="lg:text-5xl md:text-4xl text-3xl font-bold">
            Our values
          </p>
        </div>
        <div className="container py-12 grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto">
          <div className="border flex flex-col items-center justify-between rounded-3xl bg-white shadow overflow-hidden xl:px-8 xl:pt-8 px-4 pt-4">
            <div className="p-4">
              <p className="text-2xl font-bold mb-4">Be Responsible</p>
              <p className="mb-2 text-lg">
                We don???t believe in profiteering at all costs and we are
                definitely not about young adults being shoved toward a lifetime
                of debt and repayments. We believe financial freedom is
                reachable for everyone!
              </p>
            </div>
            <Responsible />
          </div>
          <div className="border flex flex-col items-center justify-between rounded-3xl bg-white shadow overflow-hidden xl:px-8 xl:pt-8 px-4 pt-4">
            <div className="p-4">
              <p className="text-2xl font-bold mb-4">Drive Positive Outcomes</p>
              <p className="mb-2 text-lg">
                This is why we do what we do! At the heart of every decision we
                make, now and in the future, is the wellbeing of our Nine25er's
                and the world.
              </p>
              <p className="mb-2 text-lg">
                From the logic that powers our money management algorithm to our
                Nine25er's spending sustainably. We, at Nine25, want to ensure a
                positive impact for our customers, stakeholders, employees and
                the planet.
              </p>
            </div>
            <Positive />
          </div>
          <div className="border flex flex-col items-end justify-between rounded-3xl bg-white shadow overflow-hidden xl:pl-8 xl:pt-8 pl-4 pt-4">
            <div className="p-4">
              <p className="text-2xl font-bold mb-4">We Keep It Simple</p>
              <p className="mb-2 text-lg">
                We make finances manageable for the everyday person. With a
                seamless integration into your lifestyle, Nine25 does all the
                heavy lifting for you (but not at the gym - thats all you!).
              </p>
            </div>
            <Simple />
          </div>
          <div className="flex flex-col justify-between rounded-3xl bg-white shadow xl:pl-8 xl:pt-8 pl-4 pt-4">
            <div className="p-4">
              <p className="text-2xl font-bold mb-4">Don't Be A D*ckhead</p>
              <p className="mb-2 text-lg">
                Simple advice on how to be a better human.
              </p>
              <p className="mb-2 text-lg">
                The world already has enough of them - embrace individuality and
                don't be one.
              </p>
            </div>
            <DHead />
          </div>
        </div>
      </div>
      <div className="container bg-white mx-auto pt-12 pb-24 px-4 lg:px-0">
        <p className="lg:text-5xl md:text-4xl text-3xl font-bold mb-12 text-center">
          Meet our team
        </p>
        <MeetTeam />
      </div>
    </Layout>
  );
};

export default AboutUs;
