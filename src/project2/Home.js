import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import ConfigurePage from './ConfigurePage';
import PaymentPage from './PaymentPage';
import TeacherDashboard from './TeacherDashboard';
import "./index.css"

const HomeProject2 = () => {
    return (
 
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/configure" element={<ConfigurePage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/dashboard" element={<TeacherDashboard />} />
            </Routes>
     
    );
};

export default HomeProject2;
