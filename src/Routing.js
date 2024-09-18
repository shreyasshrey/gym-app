import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login';
import WebpageRouting from './Webpage/WebpageRouting';
import ErrorPage from './ErrorPage/ErrorPage';
import Modules from './Modules/Modules';

const Routing = () => {
  const [slider, setSlider] = useState(false);

  return (
    <div className="app-body">
      <Routes>
        <Route
          exact
          path="/"
          element={<WebpageRouting slider={slider} setSlider={setSlider} />}
        />
        {/* {userLoggedIn && userLoggedIn !== null && (
          <Route exact path="/feature/*" element={<BillingApp />} />
        )} */}
        {/* {loggedIn && <Route exact path="/feature/*" element={<BillingApp />} />} */}
        <Route
          exact
          path="/modules/*"
          // element={<Login setLoggedIn={setLoggedIn} />}
          element={<Modules />}
        />
        <Route
          exact
          path="/login"
          // element={<Login setLoggedIn={setLoggedIn} />}
          element={<Login />}
        />
        <Route exact path="/*" element={<ErrorPage />} />
        {/* <Route exact path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </div>
  );
};

export default Routing;
