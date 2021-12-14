import React from "react";
import ModalBg from "../../assets/employers_modal_bg.svg";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";
const TopBox = () => {
  return (
    <div className="relative mt-12 mx-2">
      <ModalBg className="" />
      <p
        className="lg:text-5xl md:text-2xl text-xl font-semibold text-center"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Improving the financial health of your emloyees starts today
      </p>
      <div
        className="flex flex-col md:flex-row justify-center items-center mt-8 w-full"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <SecondaryButton text="Get Started" className="mr-8" />
        <PrimaryButton text="Schedule a Meeting" />
      </div>
    </div>
  );
};

export default TopBox;
