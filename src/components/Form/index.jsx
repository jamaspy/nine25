import React from "react";
import SendButton from "../Buttons/Send";
import Switch from "./Switch";
const index = () => {
  return (
    <form action="https://formspree.io/f/{form_id}" method="post">
      <div className="flex flex-row">
        <input
          name="name"
          id="name"
          type="text"
          className="border-b focus:outline-none mr-8"
          placeholder="Name"
        />
        <input
          name="email"
          id="email"
          type="email"
          className="border-b focus:outline-none"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col mt-8">
        <input
          name="details"
          id="details"
          type="text"
          className="border-b focus:outline-none"
          placeholder="Details"
        />
      </div>
      <div className="my-4">
        <Switch />
      </div>
      <div className="w-full flex items-center justify-center">
        <SendButton type="submit">Submit</SendButton>
      </div>
    </form>
  );
};

export default index;
