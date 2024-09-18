import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/login-logo.png';
import './SideBar.css';

const SideBar = () => {
  const menuItem = [
    {
      path: 'dashboard',
      name: 'Dashboard',
      // icon: <DashboardIcon />,
      icon: '',
    },
    {
      path: 'client-management',
      name: 'Clients',
      // icon: <SalesIcon />,
      icon: '',
    },
    {
      path: 'plan-builder',
      name: 'Plan Builder',
      // icon: <AppointmentIcon />,
      icon: '',
    },
    {
      path: 'bookings',
      name: 'Bookings',
      // icon: <CustomerIcon />,
      icon: '',
    },
    // {
    //   path: "services",
    //   name: "Services",
    //   // icon: <ServiceIcon />,
    //   icon: "",
    // },
  ];

  return (
    <div className="sidebar open">
      <div className="nav-items">
        <div className="logo-section">
          <img src={logo} alt="logo" className="head-logo" />
          <div className="logo-name">Fit Life</div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
            title={item.name}
          >
            <div className="icon">{item.icon}</div>
            <div
              // style={{ display: isOpen ? "block" : "none" }}
              className="link-text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
