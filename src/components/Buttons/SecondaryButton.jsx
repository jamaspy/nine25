import React, { useContext } from "react";
import { ModalContext } from "../../context";
const SecondaryButton = ({ className, text }) => {
  const { dispatch } = useContext(ModalContext);
  return (
    <button
      aria-label="Download App"
      onClick={() => dispatch({ type: "SHOW_MODAL" })}
      onKeyDown={() => dispatch({ type: "SHOW_MODAL" })}
      className={`bg-secondary hover:bg-secondary-hover transition ease-in-out duration-200 text-white border rounded-full px-8 py-3 flex items-center justify-center cursor-pointer ${className}`}
    >
      <p className="text-tertiary">{text}</p>
    </button>
  );
};

export default SecondaryButton;
