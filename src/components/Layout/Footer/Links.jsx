import React from "react";
import * as links from "../data";
import FooterLink from "./FooterLink";
const Links = () => {
  const {
    company_footer_links,
    discovery_footer_links,
    learn_footer_links,
    legal_footer_links,
  } = links;
  console.log(company_footer_links);
  return (
    <div className="w-full flex flex-row justify-around items-start">
      <div className="flex flex-col">
        <p className="font-semibold text-sm mb-1">Company</p>
        {company_footer_links.map((link, index) => (
          <FooterLink label={link.label} to={link.to} key={index} />
        ))}
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-sm  mb-1">Discover</p>
        {discovery_footer_links.map((link, index) => (
          <FooterLink label={link.label} to={link.to} key={index} />
        ))}
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-sm  mb-1">Learning</p>
        {learn_footer_links.map((link, index) => (
          <FooterLink label={link.label} to={link.to} key={index} />
        ))}
      </div>
      <div className="flex flex-col ">
        <p className="font-semibold text-sm mb-1">Legal</p>
        {legal_footer_links.map((link, index) => (
          <FooterLink label={link.label} to={link.to} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Links;
