import React, { useState } from "react";
import Logo from "../assets/images/login-logo.png";
import "./Login.css";

const Login = () => {
  const [loginDesign, setLoginDesign] = useState("normal");
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div className="login-container">
      <div className="login-left-section">
        <div className="login-logo">
          <img src={Logo} alt="logo" />
        </div>
        {loginDesign === "normal" && (
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={userData.email || ""}
                required
              />
            </div>
            <div className="login-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={userData.password || ""}
                required
              />
            </div>
            <div className="login-btn">
              <button type="submit">Login</button>
            </div>
            <div className="login-btn-otp">
              <button onClick={() => setLoginDesign("otpLogin")}>
                Login with OTP
              </button>
            </div>
          </form>
        )}
        {loginDesign === "otpLogin" && (
          <form className="login-form">
            <div className="login-input">
              <label htmlFor="email">Mobile Number</label>
              <input
                type="number"
                name="number"
                onChange={handleChange}
                value={userData.number || ""}
                required
                // minLength={10}
                // maxLength={10}
                maxLength={10}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 10);
                }}
              />
            </div>
            <div className="continue-btn">
              <button onClick={() => console.log(userData)}>Continue</button>
            </div>
            <div className="login-btn">
              <button onClick={() => setLoginDesign("normal")}>
                Login with email
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="login-right-section"></div>
    </div>
  );
};

export default Login;
