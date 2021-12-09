import React from "react";
const SendButton = ({ className, clickFn, type }) => {
  return (
    <button
      type={type}
      onClick={clickFn}
      aria-label="send contact form"
      className={`bg-primary hover:bg-primary-hover text-white border rounded-full px-8 py-4 flex items-center justify-center cursor-pointer  ${className}`}
    >
      <p className="text-white">Send</p>
    </button>
  );
};

export default SendButton;
