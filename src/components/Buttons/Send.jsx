import React from "react";
const SendButton = ({ className, clickFn, type, label, state }) => {
  return (
    <button
      type={type}
      onClick={clickFn}
      aria-label="send contact form"
      style={{ minWidth: "286px", minHeight: "72px" }}
      disabled={state?.succeeded}
      className={`${
        state?.succeeded ? "bg-success" : "bg-primary hover:bg-primary-hover"
      } transition ease-in-out duration-200 text-white border rounded-full  flex items-center justify-center cursor-pointer  ${className}`}
    >
      <p className="text-white text-xl">{label}</p>
    </button>
  );
};

export default SendButton;
