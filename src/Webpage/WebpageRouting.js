import React from 'react';
import WebpageHeader from './WebpageUtils/WebpageHeader';
import Home from './Home';
import Programs from './Programs';
import Plans from './Plans';
import ContactUs from './ContactUs';
import Footer from './WebpageUtils/Footer';
import WebpageSidebar from './WebpageUtils/WebpageSidebar';

const WebpageRouting = ({ slider, setSlider }) => {
  return (
    <div>
      {slider && <WebpageSidebar setSlider={setSlider} />}
      <WebpageHeader setSlider={setSlider} />
      <Home />
      <Programs />
      <Plans />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default WebpageRouting;
