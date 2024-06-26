import React from "react";
import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  WatsappIcon,
  YoutubeIcon,
} from "../../Utils/icons";
import "./Sidebar.css";

const Sidebar = ({ setSlider }) => {
  const sidebarContent = [
    { name: "Instagram", icon: <InstagramIcon /> },
    { name: "Watsapp", icon: <WatsappIcon /> },
    { name: "Facebook", icon: <FacebookIcon /> },
    { name: "YouTube", icon: <YoutubeIcon /> },
  ];

  return (
    <div className="sidebar-container">
      <section>
        <div className="sidebar-header">
          <div>Fit Life</div>
          <div className="close-icon" onClick={() => setSlider(false)}>
            <CloseIcon />
          </div>
        </div>
        <div className="sidebar-body">
          {sidebarContent.map((social, index) => {
            return (
              <div className="body-section" key={index}>
                <div className="social-icon">{social.icon}</div>
                <div className="social-label">{social.name}</div>
              </div>
            );
          })}
        </div>
        <div className="sidebar-footer">
          <div className="contact-info">+91 1234567890</div>
          <div className="mail-info">fitlife@email.com</div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
