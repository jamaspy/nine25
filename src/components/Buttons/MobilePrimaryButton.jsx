import React, { useContext } from "react";
import { ModalContext } from "../../context";
const MobilePrimaryButton = ({ className, text }) => {
  const { dispatch } = useContext(ModalContext);
  return (
    <button
      aria-label="Download App"
      onClick={() => dispatch({ type: "SHOW_MODAL" })}
      onKeyDown={() => dispatch({ type: "SHOW_MODAL" })}
      style={{ minWidth: "255px", minHeight: "58px" }}
      className={`bg-primary hover:bg-primary-hover transition ease-in-out duration-200 text-white rounded-full  flex items-center justify-center cursor-pointer ${className}`}
    >
      <p className="text-white font-bold">{text}</p>
    </button>
  );
};

export default MobilePrimaryButton;
