import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import './Modules.css';
import Header from './Utils/Header';
import SideBar from './Utils/SideBar';
import Clients from './Clients/Clients';

const Modules = () => {
  return (
    <div className="billing-app-container">
      <SideBar />
      <div className="billing-container">
        <Header />
        <div className="content-container open">
          <Routes>
            <Route exact element={<Navigate to="/dashboard" />} />
            <Route exact path="dashboard" element={<Dashboard />} />
            <Route exact path="client-management" element={<Clients />} />
            {/* <Route exact path="appointments" element={<Appointments />} />
            <Route exact path="customers" element={<Customers />} />
            <Route exact path="services" element={<ServiceProductsTab />} />
            <Route exact path="staffs" element={<Staffs />} />
            <Route exact path="membership" element={<Membership />} />
            <Route exact path="user-profile" element={<UserProfile />} />
            <Route exact path="offers" element={<OfferSection />} />
            <Route exact path="expense" element={<Expenses />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Modules;
