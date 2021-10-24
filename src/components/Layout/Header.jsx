import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <div className="bg-gray-light p-2">
      <StaticImage
        src="../../images/icon.png"
        placeholder="blurred"
        layout="fixed"
        width={30}
        height={30}
      />
    </div>
  );
};

export default Header;
