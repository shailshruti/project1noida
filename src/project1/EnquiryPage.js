import React, { useState } from 'react';


const EnquiryPage = ({ accounts }) => {
    const [enquiryData, setEnquiryData] = useState({
        enquiryName: '',
        accountName: '',
        typeOfDisease: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEnquiryData({ ...enquiryData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(enquiryData);
        // Handle form submission
    };

    return (
        <div className="enquiry-page">
            <h1>Create Enquiry</h1>
            <form onSubmit={handleSubmit}>
                <input name="enquiryName" placeholder="Enquiry Name" onChange={handleChange} required />
                <select name="accountName" onChange={handleChange} required>
                    <option value="">Select Account</option>
                    {accounts.map((account, index) => (
                        <option key={index} value={account.accountName}>{account.accountName}</option>
                    ))}
                </select>
                <input name="typeOfDisease" placeholder="Type of Disease" onChange={handleChange} required />
                <textarea name="additionalInfo" placeholder="Additional Info" onChange={handleChange} />
                <button type="submit">Submit Enquiry</button>
            </form>
        </div>
    );
};

export default EnquiryPage;
