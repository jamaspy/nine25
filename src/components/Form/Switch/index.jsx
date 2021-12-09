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
          for="toggle"
          className="
      toggle-label
      block
      overflow-hidden
      h-6
      rounded-full
      bg-gray-300
      cursor-pointer
    "
        ></label>
      </div>
      <label for="toggle" class="text-xs text-blacked">
        I want to get updates & offers
      </label>
    </>
  );
};

export default Switch;
