import React from "react";
import Header from "./Header";
import Footer from "./Footer/Footer";
import DownloadModal from "../DownloadModal";
import { ModalProvider } from "../../context";
const Layout = ({ children, device }) => {
  return (
    <ModalProvider>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <DownloadModal />
        <main className="flex-1">{children}</main>
        <Footer device={device} />
      </div>
    </ModalProvider>
  );
};

export default Layout;
