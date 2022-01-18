import React from "react";
import { Layout } from "../components/Layout";
import Seo from "../components/SEO";
import { checkDevice } from "../utils";
import TopBox from "../components/Employers/TopBox";
import Attract from "../assets/img_attract.svg";
import Retain from "../assets/img_retain.svg";
import Engage from "../assets/img_engage.svg";
import Health from "../assets/img_health.svg";
import Debit from "../assets/img_debit.svg";
import Analytics from "../assets/img_analytics.svg";
const aboutus = () => {
  return (
    <Layout device={checkDevice}>
      <Seo title="Employers" />
      <div className=" flex flex-col items-center justify-center bg-gray-lighter px-2 lg:px-0">
        <div className="container mb-12 h-full">
          <TopBox />
        </div>
        <div className="lg:w-1/2">
          <p className="lg:text-5xl md:text-4xl text-3xl font-bold text-center my-8 px-2 lg:leading-relaxed">
            Why incorporate Nine25’s salary streaming technology into your
            business?
          </p>
        </div>
        <div className="container grid gap-8 grid-cols-1 md:grid-cols-2 md:px-2">
          <div className="rounded-2xl shadow bg-white flex flex-col items-center justify-center p-4">
            <Attract />
            <div className="">
              <p className="text-2xl font-bold mb-4">Attract</p>
              <p className="text-xl mb-4 font-medium">
                Show the candidate market that you care
              </p>
              <p className="mb-4">
                Too talent are actively seeking out companies that care about
                their financial wellbeing. An employer of choice places the
                mental & financial health of their people at the centre of their
                corporate strategy & identity. This is more important than ever
                given:
              </p>
              <p className="mb-4 pl-1">
                • 58% of Australian employees call out financial stress as the
                biggest issue in their lives.
              </p>
              <p className="mb-4 pl-1">
                • Gen Z & Millenials are choosing employers that will help them
                to avoid debt & grow their wealth.
              </p>
            </div>
          </div>
          <div className="rounded-2xl shadow bg-white flex flex-col items-center justify-center p-4">
            <Retain />
            <div className="">
              <p className="text-2xl font-bold mb-4">Retain</p>
              <p className="text-xl mb-4 font-medium">
                It’s expensive and time consuming replacing people
              </p>
              <p className="mb-4">
                According to EY, 20% of employee turnover is attributable to
                financial stress.
              </p>
              <p className="mb-4">
                It’s expensive! Replacing a $60,000 position can cost your
                business $90,000 in recruitment costs & time.Nine25’s Salary
                Streaming technology will help to increase employee retention by
                an average of 30% and can help to reduce lost productivity.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white flex md:flex-row flex-col-reverse items-center justify-between mx-auto md:mx-4  mt-8 rounded-2xl shadow">
          <div className="md:mr-8 md:w-1/2">
            <p className="text-2xl font-bold mb-4">Engage</p>
            <p className="text-xl mb-4 font-medium">
              Invest in a benefit program that will change lives
            </p>
            <p className="mb-4">
              Nine25’s personalised analytics will lead to better decesion
              making & budget allocation. Are you sure that investments being
              made within your health & wellbeing programs are having the
              maximum benefit to your team? 84% of employees say they are
              embarrased to ask for help with financial stress.
            </p>
            <p className="mb-4">
              Coming soon: Nine25 will be delivering insights that your business
              can leverage to onform better decision making.
            </p>
          </div>

          <div className="w-full my-4 md:w-1/2">
            <Engage />
          </div>
        </div>
        <div className="w-full bg-white mt-12 pb-12 text-center">
          <p className="text-4xl font-bold text-center my-8">What we offer</p>
          <div className="w-full flex flex-col md:flex-row justify-around">
            <div className="flex flex-col items-center justify-center mb-8">
              <Health />
              <p className="font-semibold text-xl mt-4">
                Financial Health & Responsible Money Management App
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-8">
              <Debit />
              <p className="font-semibold text-xl mt-4">
                Real Time Salary Streaming & Debit Card
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Analytics />
            <p className="font-semibold text-xl mt-4">
              Personalised analytics & reporting
            </p>
          </div>
        </div>
        {/* <div className="container rounded-3xl bg-white shadow-sm p-12 my-12">
          <Form
            heading="Please, tell us what’s on your mind"
            pageTitle="Employers"
          />
        </div> */}
      </div>
    </Layout>
  );
};

export default aboutus;
