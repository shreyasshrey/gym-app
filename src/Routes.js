import React, { useState } from "react";
import Home from "./Components/Home";
import Plans from "./Components/Plans";
import Programs from "./Components/Programs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Utils/Footer";
import {
  FacebookIcon,
  InstagramIcon,
  WatsappIcon,
  YoutubeIcon,
} from "./Utils/icons";
import Header from "./Utils/Header";
import Sidebar from "./Utils/Sidebar";

const Routes = () => {
  const [slider, setSlider] = useState(false);

  return (
    <div className="app-body">
      {slider && <Sidebar setSlider={setSlider} />}
      {/* <div className="social-icons">
        
      </div> */}
      <Header setSlider={setSlider} />
      <Home />
      <Programs />
      <Plans />
      <ContactUs />
      <Footer />
      {/* <Switch>
                <Route exact path='/' render={() => <Redirect to='/home' />} />
                <Route exact path='/home' render={() => <Home />} />
                <Route exact path='/programs' render={() => <Programs />} />
                <Route exact path='/plans' render={() => <Plans />} />
                <Route
                    exact
                    path='/testimonials'
                    render={() => <Testimonials />}
                />
            </Switch> */}
    </div>
  );
};

export default Routes;
