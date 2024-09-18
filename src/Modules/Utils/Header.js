import React, { useState, useEffect, useRef } from 'react';
// import logo from '../../assets/images/login-logo.png';
// import { BarIcon, LogoutIcon, UserProfileIcon } from "../../../Utils/Icons";

// import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // let navigate = useNavigate();
  const inputRef = useRef();

  const [userOpen, setUserOpen] = useState(false);
  // const [profileImage, setProfileImage] = useState('');

  /* Commented this line of code for demo purpose */

  // let userLoggedInData = localStorage.getItem("user");
  // userLoggedInData = localStorage.getItem("user")
  //   ? JSON.parse(userLoggedInData)
  //   : SampleData;
  // userLoggedInData = userLoggedInData.userDetails;
  // console.log(userLoggedInData);

  const userValues = [
    // {
    //   label: "Settings",
    //   icon: "",
    // },
    // {
    //   label: "Plans and Pricing",
    //   icon: "",
    // },
    {
      label: 'User Profile',
      icon: '',
      path: 'user-profile',
    },
    {
      label: 'Logout',
      // icon: <LogoutIcon />,
      icon: '',
      path: 'logout',
    },
  ];

  // const toggle = () => setIsOpen(!isOpen);
  const toggleUser = () => setUserOpen(!userOpen);

  const handler = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setUserOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  });

  /* Commented this line of code for demo purpose */

  // useEffect(() => {
  //   if (
  //     userLoggedInData.ProfileImage &&
  //     userLoggedInData.ProfileImage !== null
  //   ) {
  //     let image = userLoggedInData.ProfileImage.filename;
  //     setProfileImage(image);
  //   }
  // });

  // const navigateToProfile = (path) => {
  //   if (path === "logout") {
  //     // Clear user data from localStorage
  //     // localStorage.removeItem("user");
  //     localStorage.clear();
  //     // Redirect to the login page
  //     navigate("/auth-login");
  //   } else {
  //     setUserOpen(false);
  //     navigate(`${path}`);
  //   }
  // };

  return (
    <div className="header-container">
      <div className="nav-icon">
        {/* <div style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </div> */}
        {/* <div className="bars"> */}
        {/* <div className="bar-icon" onClick={toggle}>
          <BarIcon />
        </div> */}
        {/* </div> */}
      </div>
      <div className="top-section">
        {/* <div className="logo-section">
          <img src={logo} alt="logo" className="head-logo" />
          <div className="logo-name">Fit Life</div>
        </div> */}
        <div className="user-dropdown" ref={inputRef}>
          <div className="user-icon" onClick={toggleUser}>
            {/* <UserProfileIcon /> */}
            {/* Commented this line of code for demo purpose */}
            {/* {userLoggedInData.name.charAt(0)} */}D
          </div>
          {/* <button
            className='btn btn-secondary dropdown-toggle'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            User Name
          </button> */}
          {userOpen && (
            <ul className="user-menu">
              {/* <div className="user-img">
                <div className="image-section">
                  {profileImage ? (
                    <img src={`/Images/${profileImage}`} alt="" />
                  ) : (
                    <div className="profile-letter">{userLoggedInData.name.charAt(0)}</div>
                    // <div className="profile-letter">{name.charAt(0)}</div>
                  )}
                </div>
              </div> */}
              {userValues.map((nav, index) => {
                return (
                  <li
                    className={
                      nav.path === 'logout' ? 'user-item logout' : 'user-item'
                    }
                    key={index}
                    // onClick={() => navigateToProfile(nav.path)}
                  >
                    <a>
                      {nav.icon && nav.icon}
                      {nav.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
