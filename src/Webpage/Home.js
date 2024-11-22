import React from 'react';
import home_1 from '../assets/images/home1.png';
import home_2 from '../assets/images/home2.png';
import home_3 from '../assets/images/home3.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import NumberCounter from 'number-counter';

// import { goToContactus } from './WebpageUtils/HelperFunction';
// import heroimg from '../assets/images/body-pic.jpg';
// import heart from '../assets/images/heart.png'

import './Home.css';
// import { HeartIcon } from '../Utils/icons';

const Home = () => {
  // let images = [home_1, home_2, home_3];
  // const [homeImage, setHomeImage] = useState(home_1);
  // let index = 0;
  // const change = () => {
  //   setHomeImage(images[index]);
  //   index > 1 ? (index = 0) : index++;
  // };

  // useEffect(() => {
  //   setInterval(change, 5000);
  // }, [index]);

  return (
    <div id="home" className="home-container">
      <Carousel
        autoPlay={true}
        interval={5000}
        showStatus={false}
        infiniteLoop={true}
        showArrows={false}
        stopOnHover={false}
        showThumbs={false}
      >
        <div className="home-wordings">
          <div className="carousel-name">
            <span>
              <span className="highlight">Challenge</span>
              <br /> your limits
            </span>
          </div>
          <div className="carousel-image">
            <img src={home_1} alt="home_1" />
          </div>
        </div>
        <div className="home-wordings">
          <div className="carousel-name">
            <span>
              Get&nbsp;<span className="highlight">strong</span>
              <br /> today
            </span>
          </div>
          <div className="carousel-image">
            <img src={home_2} alt="home_2" />
          </div>
        </div>
        <div className="home-wordings">
          <div className="carousel-name">
            <span>
              Track your
              <br /> <span className="highlight">progress</span>
            </span>
          </div>
          <div className="carousel-image">
            <img src={home_3} alt="home_3" />
          </div>
        </div>
      </Carousel>
      {/* <div className="blur home-blur"></div>
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
            <span className="details-label">expert coaches</span>
          </div>
          <div className="details-card">
            <NumberCounter
              end={290}
              preFix="+"
              delay="2"
              className="details-values"
            />
            <span className="details-label">members joined</span>
          </div>
          <div className="details-card">
            <NumberCounter
              end={10}
              preFix="+"
              delay="2"
              className="details-values"
            />
            <span className="details-label">fitness programs</span>
          </div>
        </div>
        <div className="get-started">
          <button onClick={() => goToContactus('contactus')}>
            get started
          </button>
          <button onClick={() => goToContactus('contactus')}>
            learn more...
          </button>
        </div>
      </div>
      <div className="right-side">
        <img src={heroimg} className="hero-image" alt="" />
      </div> */}
    </div>
  );
};

export default Home;
