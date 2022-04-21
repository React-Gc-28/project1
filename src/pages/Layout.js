import React from "react";
import { Outlet } from "react-router-dom";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </>
  );
};

export default Layout;
