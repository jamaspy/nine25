import React from "react";
import { Layout } from "../components/Layout";
import Seo from "../components/SEO";
import { checkDevice } from "../utils";
import Responsible from "../assets/img_responsible.svg";
import DHead from "../assets/img_diHead.svg";
import Positive from "../assets/img_positive.svg";
import Simple from "../assets/img_simple.svg";
import { StaticImage } from "gatsby-plugin-image";
const aboutus = () => {
  return (
    <Layout device={checkDevice}>
      <Seo title="About Us" />
      <div className="container mx-auto px-4">
        <p className="text-2xl font-semibold">Our Story</p>
        <p>
          Nine25 (pronounced nine-to-five) wants to bring the way we get paid to
          the digital era.The concept of a paycheque is alien to anyone who's
          under 30 years. It's a relic from the pre-computerised age when an
          actual person had to sit and write out a cheque for every employee.
          That work took weeks. So people got paid once a fortnight or once a
          month. At Nine 25, we're upending this old world relic with our
          real-time salarystreaming service.
        </p>
        <div
          className="mx-auto lg:w-1/2 rounded-lg shadow my-12 "
          style={{
            background:
              "linear-gradient(144.21deg, #6C39FE 4.6%, #4100FB 70.53%)",
          }}
        >
          <StaticImage
            src="../images/aboutus_blue.png"
            alt="about us"
            placeholder="blurred"
            quality={100}
          />
        </div>
        <p className="text-2xl font-semibold">Our Mission</p>
        <p className="mb-12">
          Technology is progressing at a rapid rate and our lifestyles are
          thriving because of it. The financial world, on the other hand, is
          lagging.n comparison to our fast paced, quick access way of living,
          the ancient idea of a 'Pay Day' is becoming harder tocomprehend. Why
          do we still wait up to a week, a fortnight or even a month for our
          pockets to replenish and our freedoms to carry on. We want to
          havelive-access to our pay as we earn it. Westream movies, tv shows,
          music - weeven stream our personal lives online. It's time we are able
          to do the same with our money. Managing finances is tricky - on your
          own. Nine25 has the financial know-how and we believe financial
          freedom is possible for everyone so we are building the technology to
          enable it.
        </p>
      </div>
      <div className=" bg-gray-lighter px-4">
        <div className="container py-12 grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto">
          <div className="border flex flex-col items-center justify-center rounded-3xl bg-white shadow overflow-hidden">
            <div className="p-4">
              <p className="text-2xl font-semibold">Be responsible</p>
              <p>
                We dont believe in profiteering at all costs and we definitely
                not about young adults being shoved toward a lifetime of debt
                and repayments.
              </p>
              <p>
                We believe in financial freedom is possible for every at all
                costs and we definitely not about young adults being shoved
                toward a lifetime of debt and repayments.
              </p>
            </div>
            <Responsible />
          </div>
          <div className="border flex flex-col items-center justify-center rounded-3xl bg-white shadow overflow-hidden">
            <div className="p-4">
              <p className="text-2xl font-semibold">Drive positive outcomes</p>
              <p>
                This is why we do what we do.At heart of every dicision freedom
                is possible for every at all costs and we definitely not about
                young adults being shoved toward a lifetime of debt and
                repayments.
              </p>
              <p>
                From the logic profiteering at all costs and we definitely not
                about young adults being shoved toward a lifetime of debt and
                repayments.
              </p>
            </div>
            <Positive />
          </div>
          <div className="border flex flex-col items-end justify-end rounded-3xl bg-white shadow overflow-hidden">
            <div className="p-4">
              <p className="text-2xl font-semibold">We keep it simple</p>
              <p>
                This is why we do what we do.At heart of every dicision freedom
                is possible for every at all costs and we definitely not about
                young adults being shoved toward a lifetime of debt and
                repayments.
              </p>
            </div>
            <Simple />
          </div>
          <div className="flex flex-col items-end justify-end rounded-3xl bg-white shadow relative">
            <div className="p-4">
              <p className="text-2xl font-semibold">Don't be a d*ckhead</p>
              <p>Just some advice on how to be a better human.</p>
              <p>
                The world already has enough of them - embrace individuality and
                don’t be one.
              </p>
            </div>

            <DHead />
          </div>
        </div>
      </div>
      <div className="container bg-white mx-auto py-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="rounded-lg bg-primary shadow">Person</div>
          <div className="rounded-lg bg-secondary shadow">Person</div>
          <div className="rounded-lg bg-tertiary shadow">Person</div>
          <div className="rounded-lg bg-blacked shadow">Person</div>
          <div className="rounded-lg bg-blacked shadow">Person</div>
          <div className="rounded-lg bg-tertiary shadow">Person</div>
          <div className="rounded-lg bg-secondary shadow">Person</div>
          <div className="rounded-lg bg-primary shadow">Person</div>
          <div className="rounded-lg bg-primary shadow">Person</div>
          <div className="rounded-lg bg-secondary shadow">Person</div>
          <div className="rounded-lg bg-tertiary shadow">Person</div>
          <div className="rounded-lg bg-blacked shadow">Person</div>
        </div>
      </div>
    </Layout>
  );
};

export default aboutus;
