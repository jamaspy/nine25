import React from "react";

const Switch = () => {
  return (
    <>
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
          name="toggle"
          id="toggle"
          onChange={(e) => {
            console.log(e.target.checked);
          }}
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
        htmlFor="toggle"
        class="text-xs text-blacked block mt-2 md:inline md:mt-0"
      >
        I want to get updates & offers
      </label>
    </>
  );
};

export default Switch;
