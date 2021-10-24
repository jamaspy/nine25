import React from "react";

const Social = ({ platform }) => (
  <div className="w-8 h-8 border rounded-full flex items-center justify-center mx-2">
    <p>{platform}</p>
  </div>
);

const Socials = () => {
  return (
    <div className="w-full flex items-center justify-center my-4">
      <Social platform="F" />
      <Social platform="I" />
      <Social platform="T" />
      <Social platform="Y" />
    </div>
  );
};

export default Socials;
