import React from "react";
import NumberCounter from "number-counter";

import { goToContactus } from "../Utils/HelperFunction";
import heroimg from "../assets/images/body-pic.jpg";
// import heart from '../assets/images/heart.png'

import "./Home.css";
import { HeartIcon } from "../Utils/icons";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="blur home-blur"></div>
      <div className="left-side">
        <div className="wording-1">
          <span>
            <div></div>THE BEST FITNESS CLUB IN MYSORE
          </span>
        </div>
        <div className="wording-2">
          <div className="line-1">
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div className="line-2">
            <span>ideal body</span>
          </div>
        </div>
        <div className="details">
          <div className="details-card">
            <NumberCounter
              end={20}
              preFix="+"
              delay="2"
              className="details-values"
            />
            {/* <span className='details-values'>+ 20</span> */}
            <span className="details-label">expert coaches</span>
          </div>
          <div className="details-card">
            <NumberCounter
              end={290}
              preFix="+"
              delay="2"
              className="details-values"
            />
            {/* <span className='details-values'>+ 290</span> */}
            <span className="details-label">members joined</span>
          </div>
          <div className="details-card">
            <NumberCounter
              end={10}
              preFix="+"
              delay="2"
              className="details-values"
            />
            {/* <span className='details-values'>+ 10</span> */}
            <span className="details-label">fitness programs</span>
          </div>
        </div>
        <div className="get-started">
          <button onClick={() => goToContactus("contactus")}>
            get started
          </button>
          <button onClick={() => goToContactus("contactus")}>
            learn more...
          </button>
        </div>
      </div>
      <div className="right-side">
        <img src={heroimg} className="hero-image" alt="" />
        {/* <div className="heart-rate-card">
          <HeartIcon />
          <div>
            <span className="heart-rate-label">Heart Rate</span>
            <br />
            <span className="heart-rate-value">116 bpm</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
