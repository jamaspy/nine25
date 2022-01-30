import React from "react";
import { Link } from "gatsby";
import { HiOutlineChevronRight } from "react-icons/hi";
const Breadcrumb = ({ rootLabel, rootRoute, currentLabel }) => {
  return (
    <div className="flex-row flex items-center justify-start mt-12 ml-3 mb-8 lg:px-20 ">
      <Link to={rootRoute} className="mr-4">
        {rootLabel}
      </Link>
      <HiOutlineChevronRight /> <p className="ml-4">{currentLabel}</p>
    </div>
  );
};

export default Breadcrumb;
