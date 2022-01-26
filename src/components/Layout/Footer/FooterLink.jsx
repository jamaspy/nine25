import React from "react";
import { Link } from "gatsby";
const FooterLink = ({ label, to }) => (
  <Link to={to}>
    <p className="text-lg font-normal hover:cursor-pointer my-2">{label}</p>
  </Link>
);

export default FooterLink;
