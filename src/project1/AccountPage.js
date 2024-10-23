import React, { useState } from 'react';


const AccountPage = () => {
    const [accountData, setAccountData] = useState({
        accountName: '',
        accountNumber: '',
        fromDate: '',
        throughDate: '',
        address: '',
        email: '',
        phoneNumber: '',
        country: '',
        legalEntity: ''
    });

    const legalEntities = ["Entity 1", "Entity 2", "Entity 3"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountData({ ...accountData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(accountData);
        // Handle form submission
    };

    return (
        <div className="account-page">
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <input name="accountName" placeholder="Account Name" onChange={handleChange} required />
                <input name="accountNumber" placeholder="Account Number" onChange={handleChange} required />
                <input type="date" name="fromDate" onChange={handleChange} required />
                <input type="date" name="throughDate" onChange={handleChange} required />
                <textarea name="address" placeholder="Address" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
                <input name="country" placeholder="Country" onChange={handleChange} required />
                <select name="legalEntity" onChange={handleChange} required>
                    <option value="">Select Legal Entity</option>
                    {legalEntities.map((entity, index) => (
                        <option key={index} value={entity}>{entity}</option>
                    ))}
                </select>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default AccountPage;
