import React from "react";
import "./loader.css";
const Loader = () => {
  return (
    <>
      <div className="jumping-dots-loader">
        <span></span> <span></span> <span></span>
      </div>
      <div className="moving-gradient"></div>
    </>
  );
};

export default Loader;
