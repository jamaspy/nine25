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
const AboutUs = () => {
  return (
    <Layout device={checkDevice}>
      <Seo title="About Us" />
      <div className="lg:w-1/2 w-3/4 mx-auto px-4">
        <p className="lg:text-4xl md:text-3xl text-2xl font-semibold mb-4">
          Our Story
        </p>
        <p className="text-lg">
          Nine25 (pronounced nine-to-five) wants to bring the way we get paid to
          the digital era. The concept of a paycheque is alien to anyone who's
          under 30 years. It's a relic from the pre-computerised age when an
          actual person had to sit and write out a cheque for every employee.
          That work took weeks. So people got paid once a fortnight or once a
          month. At Nine25, we're upending this old world relic with our
          real-time salarystreaming service.
        </p>
        <div
          className="mx-auto  rounded-lg shadow my-12 "
          style={{
            background:
              "linear-gradient(144.21deg, #6C39FE 4.6%, #4100FB 70.53%)",
          }}
        >
          <StaticImage
            src="../images/aboutus_blue.png"
            alt="about us"
            layout="constrained"
            width={845}
            placeholder="blurred"
            quality={100}
          />
        </div>
        <p className="lg:text-4xl md:text-3xl text-2xl font-semibold mb-4">
          Our Mission
        </p>
        <p className="mb-12 text-lg">
          Technology is progressing at a rapid rate and our lifestyles are
          thriving because of it. The financial world on the other hand, is
          lagging In comparison to our fast paced, quick access way of living,
          the ancient idea of a 'Pay Day' is becoming harder to comprehend. Why
          do we still wait up to a week, a fortnight or even a month for our
          pockets to replenish and our freedoms to carry on. We want to have
          live-access to our pay as we earn it. We stream movies, tv shows,
          music - we even stream our personal lives online. It's time we are
          able to do the same with our money. Managing finances is tricky - on
          your own. Nine25 has the financial know-how and we believe financial
          freedom is possible for everyone, so we are building the technology to
          enable it.
        </p>
      </div>
      <div className=" bg-gray-lighter px-4 pt-12">
        <div className="container mx-auto">
          <p className="lg:text-4xl md:text-3xl text-2xl font-semibold">
            Our values
          </p>
        </div>
        <div className="container py-12 grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto">
          <div className="border flex flex-col items-center justify-between rounded-3xl bg-white shadow overflow-hidden">
            <div className="p-4">
              <p className="text-2xl font-semibold mb-4">Be responsible</p>
              <p className="mb-2 text-lg">
                We dont believe in profiteering at all costs and that financial
                freedom is possible for everyone. We are definitely not about
                young adults being shoved toward a lifetime of debt and
                repayments.
              </p>
            </div>
            <Responsible />
          </div>
          <div className="border flex flex-col items-center justify-between rounded-3xl bg-white shadow overflow-hidden">
            <div className="p-4">
              <p className="text-2xl font-semibold mb-4">
                Drive positive outcomes
              </p>
              <p className="mb-2 text-lg">
                This is why we do what we do. At heart of every decision freedom
                is possible for every at all costs and we definitely not about
                young adults being shoved toward a lifetime of debt and
                repayments.
              </p>
              <p className="mb-2 text-lg">
                From the logic profiteering at all costs and we definitely not
                about young adults being shoved toward a lifetime of debt and
                repayments.
              </p>
            </div>
            <Positive />
          </div>
          <div className="border flex flex-col items-end justify-between rounded-3xl bg-white shadow overflow-hidden">
            <div className="p-4">
              <p className="text-2xl font-semibold mb-4">We keep it simple</p>
              <p className="mb-2 text-lg">
                This is why we do what we do.At heart of every dicision freedom
                is possible for every at all costs and we definitely not about
                young adults being shoved toward a lifetime of debt and
                repayments.
              </p>
            </div>
            <Simple />
          </div>
          <div className="flex flex-col justify-between rounded-3xl bg-white shadow">
            <div className="p-4">
              <p className="text-2xl font-semibold mb-4">Don't be a d*ckhead</p>
              <p className="mb-2 text-lg">
                Just some advice on how to be a better human.
              </p>
              <p className="mb-2 text-lg">
                The world already has enough of them - embrace individuality and
                don’t be one.
              </p>
            </div>
            <DHead />
          </div>
        </div>
      </div>
      <div className="container bg-white mx-auto py-12 px-4 lg:px-0">
        <MeetTeam />
      </div>
    </Layout>
  );
};

export default AboutUs;
