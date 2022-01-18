import React, { useContext } from "react";
import { ModalContext } from "../../context";
const SecondaryButton = ({ className, text }) => {
  const { dispatch } = useContext(ModalContext);
  return (
    <button
      aria-label="Download App"
      onClick={() => dispatch({ type: "SHOW_MODAL" })}
      onKeyDown={() => dispatch({ type: "SHOW_MODAL" })}
      style={{ minWidth: "286px", minHeight: "72px" }}
      className={`bg-secondary hover:bg-secondary-hover transition ease-in-out duration-200 text-white rounded-full flex items-center justify-center cursor-pointer ${className}`}
    >
      <p className="text-tertiary font-bold">{text}</p>
    </button>
  );
};

export default SecondaryButton;
