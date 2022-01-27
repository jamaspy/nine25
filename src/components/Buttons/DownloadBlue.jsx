import React, { useContext } from "react";
import { ModalContext } from "../../context";
const DownloadBlueButton = ({ className, text }) => {
  const { dispatch } = useContext(ModalContext);
  return (
    <button
      aria-label="Download App"
      onClick={() => dispatch({ type: "SHOW_MODAL" })}
      onKeyDown={() => dispatch({ type: "SHOW_MODAL" })}
      className={`bg-secondary hover:bg-secondary-hover transition ease-in-out duration-200 text-white rounded-full px-8 py-4 flex items-center justify-center cursor-pointer ${className} w-64 lg:w-80`}
      // style={{ minWidth: 305, minHeight: 65 }}
    >
      <p className="text-tertiary lg:text-xl md:text-base font-bold">{text}</p>
    </button>
  );
};

export default DownloadBlueButton;
