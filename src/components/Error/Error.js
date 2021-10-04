import React from "react";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Error.css";

const Error = () => {
  return (
    <div className="">
      <MenuBar></MenuBar>
      <h1 className="text-danger error-bg">Can't Found This page 404 !!!</h1>
      <Footer />
    </div>
  );
};

export default Error;
