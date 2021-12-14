import React, { useState } from "react";
import * as links from "../data";
import FooterLink from "./FooterLink";
import { Link } from "gatsby";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import Socials from "./Socials";
const Links = () => {
  const [showCompany, setShowCompany] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  const [showLearn, setShowLearn] = useState(false);

  const { company_footer_links, learn_footer_links, legal_footer_links } =
    links;

  return (
    <>
      <div className="w-full lg:flex flex-row justify-around items-start hidden">
        <div className="flex flex-col">
          <p className="font-semibold text-sm mb-1">Company</p>
          {company_footer_links.map((link, index) => (
            <FooterLink label={link.label} to={link.to} key={index} />
          ))}
        </div>
        {/* <div className="flex flex-col">
          <p className="font-semibold text-sm  mb-1">Learning</p>
          {learn_footer_links.map((link, index) => (
            <FooterLink label={link.label} to={link.to} key={index} />
          ))}
        </div> */}
        <div className="flex flex-col ">
          <p className="font-semibold text-sm mb-1">Legal</p>
          {legal_footer_links.map((link, index) => (
            <FooterLink label={link.label} to={link.to} key={index} />
          ))}
        </div>
        <div className="hidden lg:inline-block">
          <p className="font-semibold text-sm mb-1">Social</p>
          <Socials />
        </div>
      </div>
      <div className="w-full flex flex-col justify-around items-start lg:hidden">
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => setShowCompany(!showCompany)}
          onClick={() => setShowCompany(!showCompany)}
          className={`flex flex-row w-full justify-between items-center ${
            showCompany
              ? ""
              : "border-b border-gray-dark mb-4 focus:outline-none"
          }`}
        >
          <p className="font-semibold text-sm mb-3">Company</p>
          {showCompany ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </div>

        <div
          className={`transition-all mb-4 ${
            showCompany
              ? "flex flex-col border-b border-gray-dark w-full"
              : "hidden"
          }`}
        >
          <Link to="/aboutus">
            <p className="text-xs my-2">About</p>
          </Link>
          <Link to="/contactus">
            <p className="text-xs my-2 mb-4">Contact Us</p>
          </Link>
        </div>
        {/* <div
          role="button"
          tabIndex={-1}
          onClick={() => setShowLearn(!showLearn)}
          onKeyDown={() => setShowLearn(!showLearn)}
          className={`flex flex-row w-full justify-between items-center ${
            showLearn ? "" : "border-b border-gray-dark mb-4 focus:outline-none"
          }`}
        >
          <p className="font-semibold text-sm mb-3">Learn</p>
          {showLearn ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </div>

        <div
          className={`transition-all mb-4 ${
            showLearn
              ? "flex flex-col border-b border-gray-dark w-full"
              : "hidden"
          }`}
        >
          <Link to="/aboutus">
            <p className="text-xs my-2 mb-4">Blog</p>
          </Link>
        </div> */}
        <div
          role="button"
          tabIndex={-2}
          onKeyDown={() => setShowLegal(!showLegal)}
          onClick={() => setShowLegal(!showLegal)}
          className={`flex flex-row w-full justify-between items-center ${
            showLegal ? "" : "border-b border-gray-dark focus:outline-none"
          }`}
        >
          <p className="font-semibold text-sm mb-3">Legal</p>
          {showLegal ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </div>

        <div
          className={`transition-all mb-4 ${
            showLegal
              ? "flex flex-col border-b border-gray-dark w-full"
              : "hidden"
          }`}
        >
          <Link to="/privacy">
            <p className="text-xs my-2">Privacy</p>
          </Link>
          <Link to="/terms">
            <p className="text-xs my-2 mb-4">Terms</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Links;
