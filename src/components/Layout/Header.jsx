import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { SendButton } from "../Buttons";
import LogoSVG from "../../assets/logo.svg";
export default function Menu({ fixed }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 ">
            <div className="w-full px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full h-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <a
                  className="text-xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
                  href="#pablo"
                >
                  <LogoSVG />
                </a>
                <div
                  role="button"
                  className=" cursor-pointer text-3xl leading-none border border-solid border-transparent flex items-center justify-center lg:hidden outline-none focus:outline-none rounded-full"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {/* {!menuOpen ? <HiMenu /> : <HiOutlineX />} */}
                </div>
              </div>
              <div
                className={
                  "transition-all lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  {/* <li className="nav-item">
                    <Link
                      to="/"
                      className="px-3 py-2 flex items-center text-xs font-bold leading-snug  hover:opacity-75"
                    >
                      Home
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      to="/employers"
                      className="px-3 py-2 flex items-center text-xs font-bold leading-snug  text-blacked hover:text-hover-blue hover:underline"
                    >
                      For Employers
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      to="/employers"
                      className="px-3 py-2 flex items-center text-xs font-bold leading-snug  hover:opacity-75"
                    >
                      Employers
                    </Link>
                  </li> */}
                  {/* <li className="nav-item">
                    <Link
                      to="/contactus"
                      className="px-3 py-2 flex items-center text-xs font-bold leading-snug  hover:opacity-75"
                    >
                      Contact Us
                    </Link>
                  </li> */}
                </ul>
                <SendButton />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
