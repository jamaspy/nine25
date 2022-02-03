import React from "react";
import SendButton from "../Buttons/Send";
import { Link } from "gatsby";
import { useForm, ValidationError } from "@formspree/react";
import { HiOutlineChevronLeft } from "react-icons/hi";
const ContactForm = ({ heading, pageTitle }) => {
  const [state, handleSubmit] = useForm("mvolovqz", {
    data: {
      subject: `Message from webite. Page: ${pageTitle}`,
    },
  });

  return (
    <>
      <p className="font-semibold lg:text-4xl text-2xl text-center mb-4">
        {heading}
      </p>
      {state?.succeeded && (
        <div className="w-full bg-success text-white text-center rounded p-1 my-2">
          <p className="font-semibold text-lg">Message Sent</p>
          <p>Thank you, we will get back to you shortly</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full px-4 my-8">
        <div className="flex flex-col w-full justify-between md:flex-row ">
          <div className="flex-1 md:pr-2">
            <input
              name="name"
              id="name"
              type="text"
              className="border-b focus:outline-none mr-8 my-4 w-full"
              placeholder="Name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="flex-1 md:pl-2">
            <input
              name="email"
              id="email"
              type="email"
              className="border-b focus:outline-none my-4 w-full"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="flex flex-col my-4 md:mt-8">
          <input
            name="details"
            id="details"
            type="text"
            className="border-b focus:outline-none "
            placeholder="Details"
          />
          <ValidationError
            prefix="Details"
            field="details"
            errors={state.errors}
          />
        </div>
        <div className="my-8">
          <div
            className="relative
    inline-block
    w-10
    mr-2
    align-middle
    select-none
    transition
    duration-200
    ease-in"
          >
            <input
              type="checkbox"
              name="consent"
              id="toggle"
              className="
      toggle-checkbox
      absolute
      block
      w-6
      h-6
      rounded-full
      bg-white
      border-4
      appearance-none
      cursor-pointer
    "
            />
            <label
              htmlFor="toggle"
              className="
      toggle-label
      block
      overflow-hidden
      h-6
      rounded-full
      bg-gray-light
      cursor-pointer
      text-secondary
      text-xs
    "
            >
              .
            </label>
          </div>
          <label
            htmlFor="consent"
            class="text-lg font-normal text-blacked mt-2 inline md:mt-0"
          >
            I want to get updates & offers
          </label>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-12 mb-24">
          <SendButton
            type="submit"
            label={`${state?.succeeded ? "Sent" : "Send"}`}
            state={state}
          >
            Submit
          </SendButton>
          {state?.succeeded && (
            <Link
              to="/"
              className="flex flex-row items-center justify-center text-secondary hover:text-secondary-hover text-xs cursor-pointer my-4"
            >
              <HiOutlineChevronLeft className="mr-1" />
              <p className="">Back Home</p>
            </Link>
          )}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
