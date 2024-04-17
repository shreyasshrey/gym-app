import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  let navigate = useNavigate();

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
        <div className="back-home-btn">
          <button onClick={() => navigate("/")}>Go to Home Page</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
