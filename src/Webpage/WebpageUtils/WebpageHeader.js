/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { BarIcon, SocialIcons } from '../../Utils/icons';
import './WebpageHeader.css';

const WebpageHeader = ({ setSlider }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const headings = [
    { name: 'Home', path: 'home' },
    { name: 'Programs', path: 'programs' },
    { name: 'Plans', path: 'plans' },
    { name: 'Contact Us', path: 'contactus' },
  ];

  return (
    <div className="web-header-container">
      <div className="app-title">Fit Life</div>
      <div className="icon-bar" onClick={() => setMenuOpened(!menuOpened)}>
        <BarIcon />
      </div>
      {menuOpened && (
        <div className="web-header-tab-mobile">
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
      <div className="web-header-tab">
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

export default WebpageHeader;
