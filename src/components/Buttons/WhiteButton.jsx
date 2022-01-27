import React, { useContext } from "react";
import { ModalContext } from "../../context";
const WhiteButton = ({ className, text }) => {
  const { dispatch } = useContext(ModalContext);
  return (
    <button
      aria-label="Download App"
      onClick={() => dispatch({ type: "SHOW_MODAL" })}
      onKeyDown={() => dispatch({ type: "SHOW_MODAL" })}
      className={`bg-white hover:bg-gray-light transition ease-in-out duration-200 text-white rounded-full py-4 flex items-center justify-center cursor-pointer ${className} w-72`}
    >
      <p className="text-blacked text-xl font-bold">{text}</p>
    </button>
  );
};

export default WhiteButton;
