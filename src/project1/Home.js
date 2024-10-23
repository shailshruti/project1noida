import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import AccountPage from './AccountPage';
import EnquiryPage from './EnquiryPage';
import "./index.css"

const accounts = [
    { accountName: 'Account 1' },
    { accountName: 'Account 2' },
    { accountName: 'Account 3' }
];

const HomePage = () => {
    return (
        <div>
            <div style={{textAlign:"center",marginTop:"10px"}}>
            <Link to="/" >Home Page</Link>

            </div>
          
            <nav>
                <Link to="/account">Create Account</Link>
                <Link to="/enquiry">Create Enquiry</Link>
            </nav>
            <Routes>
            <Route path="/account" element={<AccountPage />} />
            <Route path="/enquiry" element={<EnquiryPage accounts={accounts} />} />
                  
              
            </Routes>
           
        </div>
    );
};



export default HomePage;
