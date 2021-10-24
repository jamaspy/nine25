import React from "react";
import { Link } from "gatsby";
const FooterLink = ({ label, to }) => (
  <Link to={to}>
    <p className="text-xs hover:cursor-pointer">{label}</p>
  </Link>
);

export default FooterLink;
