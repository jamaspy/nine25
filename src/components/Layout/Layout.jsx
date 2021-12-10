import React from "react";
import Header from "./Header";
import Footer from "./Footer/Footer";
const Layout = ({ children, device }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer device={device} />
    </div>
  );
};

export default Layout;
