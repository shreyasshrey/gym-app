import React from "react";
import Header from "./WebpageUtils/Header";
import Home from "./Home";
import Programs from "./Programs";
import Plans from "./Plans";
import ContactUs from "./ContactUs";
import Footer from "./WebpageUtils/Footer";
import Sidebar from "./WebpageUtils/Sidebar";

const WebpageRouting = ({slider, setSlider }) => {
  return (
    <div>
      {slider && <Sidebar setSlider={setSlider} />}
      <Header setSlider={setSlider} />
      <Home />
      <Programs />
      <Plans />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default WebpageRouting;
