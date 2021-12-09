import React from "react";
const SendButton = ({ className }) => {
  return (
    <div
      role="button"
      aria-label="download app"
      className={`bg-secondary hover:bg-secondary-hover text-white border rounded-full px-8 py-2 flex items-center justify-center cursor-pointer  ${className}`}
    >
      <p className="text-tertiary">Download App</p>
    </div>
  );
};

export default SendButton;
