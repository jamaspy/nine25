import React, { useContext } from "react";
import { ModalContext } from "../../context";
const PrimaryButton = ({ className, text }) => {
  const { dispatch } = useContext(ModalContext);
  return (
    <button
      aria-label="Download App"
      onClick={() => dispatch({ type: "SHOW_MODAL" })}
      onKeyDown={() => dispatch({ type: "SHOW_MODAL" })}
      className={`bg-primary hover:bg-primary-hover transition ease-in-out duration-200 text-white border rounded-full px-8 py-3 flex items-center justify-center cursor-pointer ${className}`}
    >
      <p className="text-white">{text}</p>
    </button>
  );
};

export default PrimaryButton;
