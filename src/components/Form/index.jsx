import React from "react";
import SendButton from "../Buttons/Send";
const index = () => {
  return (
    <form action="https://formspree.io/f/{form_id}" method="post">
      <input
        name="name"
        id="name"
        type="text"
        className="border-b focus:outline-none"
        placeholder="Name"
      />
      <input
        name="email"
        id="email"
        type="email"
        className="border-b focus:outline-none"
        placeholder="Email"
      />
      <input
        name="details"
        id="details"
        type="text"
        className="border-b focus:outline-none"
        placeholder="Details"
      />
      <input name="optin" type="checkbox" />
      <label htmlFor="optin" className="ml-4">
        I want to get updates &amp; offers
      </label>
      <SendButton type="submit">Submit</SendButton>
    </form>
  );
};

export default index;
