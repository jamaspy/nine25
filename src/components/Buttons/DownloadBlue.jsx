import React, { useContext } from "react";
import { ModalContext } from "../../context/";
const Download_Blue = ({ className, clickFn }) => {
  const { dispatch } = useContext(ModalContext);
  return (
    <button
      aria-label="Download App"
      onClick={() => dispatch({ type: "SHOW_MODAL" })}
      onKeyDown={() => dispatch({ type: "SHOW_MODAL" })}
      className={`bg-secondary hover:bg-secondary-hover text-white border rounded-full px-8 py-3 flex items-center justify-center cursor-pointer ${className}`}
    >
      <p className="text-tertiary">Download App</p>
    </button>
  );
};

export default Download_Blue;
