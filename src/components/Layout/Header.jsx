import React from "react";
import { Link } from "gatsby";
import { DownloadBlueButton } from "../Buttons";
import LogoSVG from "../../images/logo.svg";
import StarSVG from "../../assets/yellow_star_small.svg";

const Menu = () => {
  return (
    <>
      <nav className="relative flex  items-center justify-between px-4 lg:px-20 py-3 ">
        <Link className="mr-4 py-2 whitespace-nowrap  " to="/">
          <img
            src={LogoSVG}
            alt=""
            height={60}
            width={197}
            className="hidden lg:inline-block"
          />
          <img
            src={LogoSVG}
            alt=""
            height={32}
            width={106}
            className="inline-block lg:hidden"
          />
        </Link>
        <div className=" flex flex-row">
          <Link
            to="/employers"
            className="pr-6 pl-3 py-2 flex items-center text-md lg:text-xl font-bold leading-snug  text-blacked hover:text-hover-blue hover:underline z-10"
          >
            For Employers
          </Link>
          <DownloadBlueButton
            className="hidden md:inline-block"
            text="Download App"
          />
          <div className="absolute md:hidden top-3 right-0 z-0">
            <StarSVG className="" />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Menu;
