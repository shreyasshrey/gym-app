import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <div className="footer-container">
      {/* <div className='footer-blur'></div> */}
      <div className="footer-logo">fit life</div>
      <div className="footer-description">
        Treadmills, stationary bikes, and elliptical machines are commonly used
        for cardiovascular workouts, helping to improve endurance, burn
        calories, and enhance heart health.
      </div>
      <form onSubmit={handleSubmit} className="connect-section">
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email || ''}
          required
          placeholder="Enter your email address..."
        />
        <div className="submit-btn">
          <button type="submit">subscribe</button>
        </div>
      </form>
      <div className="copyright-title">
        Copyright 2024 Fitlife. All Rights Reserved.
      </div>
      {/* <CopyRightIcon /> */}
    </div>
  );
};

export default Footer;
