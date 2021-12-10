import React from "react";
const Download_Blue = ({ className }) => {
  return (
    <div
      className={`bg-secondary hover:bg-secondary-hover text-white border rounded-full px-8 py-3 flex items-center justify-center cursor-pointer ${className}`}
    >
      <p className="text-tertiary">Download App</p>
    </div>
  );
};

export default Download_Blue;
