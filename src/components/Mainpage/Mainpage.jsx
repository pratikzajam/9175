import React from "react";

import Slider from "./Slider";
import "./Mainpage.css";

const Mainpage = () => {
  return (
    <>
      <section className="main-page">
        <div className="container slider-container">
       
          <Slider />
        </div>
      </section>
    </>
  );
};

export default Mainpage;
