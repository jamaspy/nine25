import React, { useContext } from "react";

import AppleQR from "../../assets/apple_QR.svg";
import AppleLogo from "../../images/AppStore.png";
import AndroidQR from "../../assets/android_QR.svg";
import AndroidLogo from "../../images/GooglePlay.png";
import { CgClose } from "react-icons/cg";
import ModalBg from "../../assets/modal_bg.svg";
import { FiLink } from "react-icons/fi";
import { ModalContext } from "../../context";
const DownloadModal = ({ zIndex, blurLevel }) => {
  const { state, dispatch } = useContext(ModalContext);
  if (!state.showModal) return null;
  return (
    <div
      className={`fixed flex justify-center items-center m-0 p-0 w-full z-${
        zIndex ? zIndex : "10"
      } bg-white inset-0 rounded bg-opacity-50 min-h-screen h-full`}
      style={{
        backdropFilter: `blur(${blurLevel}px)`,
        WebkitBackdropFilter: `blur(${blurLevel}px)`,
      }}
    >
      <div
        className="border rounded-2xl bg-white shadow relative"
        style={{ width: 654, height: 434 }}
      >
        <ModalBg className="absolute top-0 left-0 w-full h-full z-0" />
        <div className="absolute top-5 right-5 z-10">
          <CgClose
            role="button"
            aria-label="Close"
            onClick={() => dispatch({ type: "HIDE_MODAL" })}
            onKeyDown={() => dispatch({ type: "HIDE_MODAL" })}
            tabIndex={0}
            className="hover:text-secondary hover:cursor-pointer"
          />
        </div>
        <div className="z-50 flex items-center flex-col justify-center h-full ">
          <p className="text-2xl font-semibold text-center z-30 mb-8">
            Scan to download Nine25 app
          </p>
          <div className="flex flex-row">
            <div
              onClick={() =>
                navigator.clipboard.writeText(
                  "https://apps.apple.com/app/apple-store/id1540723857?pt=122259206&ct=website-header&mt=8"
                )
              }
              className="flex flex-col items-center justify-center"
            >
              <img width={100} src={AppleLogo} alt="Android Logo" />
              <AppleQR />
              <div className="flex flex-row items-center justify-center text-secondary hover:bg-hover-blue hover:cursor-pointer">
                <FiLink className="mr-2" />
                <p>copy link</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img width={100} src={AndroidLogo} alt="Android Logo" />
              <AndroidQR />
              <div
                onClick={() =>
                  navigator.clipboard.writeText("ANDROID LINK HERE")
                }
                className="flex flex-row items-center justify-center text-secondary hover:bg-hover-blue hover:cursor-pointer"
              >
                <FiLink className="mr-2" />
                <p>copy link</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
