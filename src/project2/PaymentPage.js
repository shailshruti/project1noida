import React, { useState } from 'react';
import paymentService from '../services/paymentService';
import './index.css'; // Import the main CSS
import PaytmLogo from "./paytmlogo.jpg"

const PaymentPage = () => {
    const [amount, setAmount] = useState('');
    const [response, setResponse] = useState('');

    const handlePayment = async (e) => {
        e.preventDefault();
        const result = await paymentService.processPayment(amount);
        setResponse(result);
    };

    return (
        <div className="payment-page">
            <h1>Pay School Fees</h1>
            <form onSubmit={handlePayment} className="payment-form">
                <input
                    type="number"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
     
                <button type="submit">Pay with           <img src={PaytmLogo} alt="Paytm Logo" style={{height:"30px",width:"50px"}}></img></button>
            </form>
            {response && <p className='blink'>{response}</p>}
        </div>
    );
};

export default PaymentPage;
