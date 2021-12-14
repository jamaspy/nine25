import React from "react";
import ModalBg from "../../assets/employers_modal_bg.svg";
const TopBox = () => {
  return (
    <div className="relative mt-12">
      <ModalBg />
      <p
        className="lg:text-4xl md:text-2xl text-xl font-semibold text-center w-full"
        style={{
          position: "absolute",
          top: "30%",
          left: "49%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Improving the financial health of your emloyees starts today
      </p>
      <div
        className="flex flex-row"
        style={{
          position: "absolute",
          top: "40%",
          left: "49%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <p>[BUTTON]</p>
        <p>[BUTTON]</p>
      </div>
    </div>
  );
};

export default TopBox;
