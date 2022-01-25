import React from "react";
import { Link } from "gatsby";
import { DownloadBlueButton } from "../Buttons";
import LogoSVG from "../../assets/logo.svg";
import StarSVG from "../../assets/yellow_star_small.svg";

const Menu = () => {
  return (
    <>
      <nav className="relative flex  items-center justify-between px-2 py-3 ">
        <Link
          className="text-xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  "
          to="/"
        >
          <LogoSVG style={{ maxWidth: "200px" }} />
        </Link>
        <div className=" flex flex-row">
          <Link
            to="/employers"
            className="px-3 py-2 flex items-center text-xs font-bold leading-snug  text-blacked hover:text-hover-blue hover:underline z-10"
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
