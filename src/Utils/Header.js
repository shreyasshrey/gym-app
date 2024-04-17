import React, { useState } from "react";
import { Link } from "react-scroll";

import { BarIcon, SocialIcons } from "./icons";
import "./Header.css";

const Header = ({ setSlider }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const headings = [
    { name: "Home", path: "home" },
    { name: "Programs", path: "programs" },
    { name: "Plans", path: "plans" },
    { name: "Contact Us", path: "contactus" },
  ];

  return (
    <div className="header-container">
      <div className="app-title">Fit Life</div>
      <div className="icon-bar" onClick={() => setMenuOpened(!menuOpened)}>
        <BarIcon />
      </div>
      {menuOpened && (
        <div className="header-tab-mobile">
          {headings.map((header, index) => {
            return (
              <Link
                key={index}
                activeClass="app-tab active"
                className="app-tab"
                spy={true}
                smooth={true}
                to={header.path}
                onClick={() => setMenuOpened(false)}
              >
                {header.name}
              </Link>
            );
          })}
        </div>
      )}
      <div className="header-tab">
        {headings.map((header, index) => {
          return (
            <Link
              key={index}
              activeClass="app-tab active"
              className="app-tab"
              spy={true}
              smooth={true}
              to={header.path}
              offset={-60}
              onClick={() => setMenuOpened(false)}
            >
              {header.name}
            </Link>
          );
        })}
      </div>
      <div className="sidebar-icon" onClick={() => setSlider(true)}>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Header;
