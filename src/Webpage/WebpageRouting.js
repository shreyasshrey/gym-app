/* eslint-disable react/prop-types */
import React from 'react';
import WebpageHeader from './WebpageUtils/WebpageHeader';
import Home from './Home';
import Programs from './Programs';
import Plans from './Plans';
import ContactUs from './ContactUs';
import Footer from './WebpageUtils/Footer';
import WebpageSidebar from './WebpageUtils/WebpageSidebar';
import Goals from './Goals';

const WebpageRouting = ({ slider, setSlider }) => {
  return (
    <div>
      {slider && <WebpageSidebar setSlider={setSlider} />}
      <WebpageHeader setSlider={setSlider} />
      <Home />
      <Programs />
      <Goals />
      <Plans />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default WebpageRouting;
