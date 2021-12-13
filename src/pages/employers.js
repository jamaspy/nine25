import React from "react";
import { Layout } from "../components/Layout";
import { checkDevice } from "../utils";
import ModalBg from "../assets/employers_modal_bg.svg";
import Attract from "../assets/img_attract.svg";
import Retain from "../assets/img_retain.svg";
import Engage from "../assets/img_engage.svg";
import Health from "../assets/img_health.svg";
import Debit from "../assets/img_debit.svg";
import Analytics from "../assets/img_analytics.svg";
const aboutus = () => {
  return (
    <Layout device={checkDevice}>
      <div className=" flex flex-col items-center justify-center bg-gray-lighter">
        <div className="w-full h-full">
          <ModalBg className="mt-12 mx-auto" />
        </div>

        <div className="container grid gap-8 grid-cols-2">
          <div className="rounded-xl bg-white flex flex-col items-center justify-center">
            <Attract />
            <div className="p-4">
              <p className="text-2xl font-semibold">Attract</p>
              <p className="text-xl">Show the candidate market that you care</p>
              <p>
                Too talent are actively seeking out companies that care about
                their financial wellbeing.An employer of choice places the
                mental & financial health of their people at the centre of their
                corporate strategy & identity. This is more important than ever
                given:
              </p>
              <p>
                • 58% of Australian employees call out financial stress as the
                biggest issue in their lives.
              </p>
              <p>
                • Gen Z & Millenials are choosing employers that will help them
                to avoid debt & grow their wealth.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-white flex flex-col items-center justify-center">
            <Retain />
            <div className="p-4">
              <p className="text-2xl font-semibold">Retain</p>
              <p className="text-xl">
                It’s expensive and time consuming replacing people
              </p>
              <p>
                According to EY, 20% of employee turnover is attributable to
                financial stress.
              </p>
              <p>
                It’s expensive! Replacing a $60,000 position can cost your
                business $90,000 in recruitment costs & time.Nine25’s Salary
                Streaming technology will help to increase employee retention by
                an average of 30% and can help to reduce lost productivity.
              </p>
            </div>
          </div>
        </div>
        <div className="p-12 container bg-white flex flex-row items-center mx-auto w-full mt-12">
          <div className="">
            <div className="p-4">
              <p className="text-2xl font-semibold">Engage</p>
              <p className="text-xl">
                Invest in a benefit program that will change lives
              </p>
              <p>
                Nine25’s personalised analytics will lead to better decesion
                making & budget allocation.Are you sure that investments being
                made within your health & wellbeing programs are having the
                maximum benefit to your team? 84% of employees say they are
                embarrased to ask for help with financial stress.Coming soon:
                Nine25 will be delivering insights that your business can
                leverage to onform better decision making.
              </p>
            </div>
          </div>
          <div className="">
            <Engage />
          </div>
        </div>
        <div className="w-full bg-white mt-12 pb-12">
          <p className="text-2xl font-semibold text-center my-8">
            What we offer
          </p>
          <div className="w-full flex flex-col md:flex-row justify-around">
            <div className="flex flex-col items-center justify-center">
              <Health />
              <p className="font-semibold text-xl">
                Financial Health & Responsible Money Management App
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Debit />
              <p className="font-semibold text-xl">
                Real Time Salary Streaming & Debit Card
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Analytics />
            <p className="font-semibold text-xl">
              Personalised analytics & reporting
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default aboutus;
