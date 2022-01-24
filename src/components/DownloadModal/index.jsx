import React, { useContext } from "react";

import AppleQR from "../../images/appleqrcode.png";
import AppleLogo from "../../images/AppStore.png";
import AndroidQR from "../../images/androidqrcode.png";
import AndroidLogo from "../../images/GooglePlay.png";
import { CgClose } from "react-icons/cg";
import ModalBg from "../../assets/modal_bg.svg";
import { FiLink } from "react-icons/fi";
import { ModalContext } from "../../context";
const DownloadModal = ({ zIndex, blurLevel }) => {
  const [iosCopied, setIosCopied] = React.useState(false);
  const [androidCopied, setAndroidCopied] = React.useState(false);
  const { state, dispatch } = useContext(ModalContext);
  if (!state.showModal) return null;
  return (
    <div
      className={`fixed flex justify-center items-center z-40 m-0 p-0 w-full z-${
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
            onClick={() => {
              setIosCopied(false);
              setAndroidCopied(false);
              dispatch({ type: "HIDE_MODAL" });
            }}
            onKeyDown={() => {
              setIosCopied(false);
              setAndroidCopied(false);
              dispatch({ type: "HIDE_MODAL" });
            }}
            tabIndex={0}
            className="hover:text-secondary hover:cursor-pointer transition ease-in-out duration-200 focus:outline-none"
          />
        </div>
        <div className="z-50 flex items-center flex-col justify-center h-full ">
          <p className="text-2xl font-semibold text-center z-30 mb-8">
            Scan to download Nine25 app
          </p>
          <div className="flex flex-row z-50">
            <div
              role="button"
              tabIndex={-1}
              onKeyDown={() => {
                navigator.clipboard.writeText(
                  "https://apps.apple.com/au/app/nine25-app/id1540723857?utm_source=QRcode&utm_medium=website&utm_id=QRcode"
                );
                setIosCopied(true);
              }}
              onClick={() => {
                navigator.clipboard.writeText(
                  "https://apps.apple.com/au/app/nine25-app/id1540723857?utm_source=QRcode&utm_medium=website&utm_id=QRcode"
                );
                setIosCopied(true);
              }}
              className="flex flex-col items-center justify-center mr-2"
            >
              <img width={100} src={AppleLogo} alt="Apple Logo" />
              <img src={AppleQR} alt="Download on iTunes QR Code" width="150" />
              <div
                className={`transition ease-in-out duration-150 flex flex-row items-center justify-center ${
                  iosCopied
                    ? "text-success"
                    : "text-secondary hover:text-hover-blue hover:underline"
                } hover:cursor-pointer`}
              >
                <FiLink className="mr-2" />
                <p>{iosCopied ? "link copied" : "copy link"}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ml-8">
              <img width={100} src={AndroidLogo} alt="Android Logo" />
              <img
                src={AndroidQR}
                alt="Download on PLay Store QR Code"
                width="151"
              />
              <div
                role="button"
                tabIndex={-2}
                onKeyDown={() => {
                  navigator.clipboard.writeText(
                    "https://play.google.com/store/apps/details?id=au.com.nine25.app&referrer=utm_source%3DQRcode%26utm_medium%3DQRcode"
                  );
                  return setAndroidCopied(true);
                }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://play.google.com/store/apps/details?id=au.com.nine25.app&referrer=utm_source%3DQRcode%26utm_medium%3DQRcode"
                  );
                  return setAndroidCopied(true);
                }}
                className={`transition ease-in-out duration-150 flex flex-row items-center justify-center ${
                  androidCopied
                    ? "text-success"
                    : "text-secondary hover:text-hover-blue hover:underline"
                } hover:cursor-pointer`}
              >
                <FiLink className="mr-2" />
                <p>{androidCopied ? "link copied" : "copy link"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
