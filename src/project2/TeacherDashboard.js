import React from 'react';


const TeacherDashboard = () => {
    // Mock payment data
    const payments = [
        { student: 'Shruti', amount: 1000, status: 'Received' },
        { student: 'Rani', amount: 1500, status: 'Failed' },
        { student: 'Abhinav', amount: 1500, status: 'Pending' }
    ];

    return (
        <div className="dashboard">
            <h1>Payments Received</h1>
            <ul className="payment-list">
                {payments.map((payment, index) => (
                    <li key={index} className="payment-item">
                        <span className="student-name">{payment.student}</span> - 
                        <span className="payment-amount">Rs{payment.amount}</span> - 
                        <span className="payment-status" style={{color:payment.status=="Received"?"green":payment.status=="Pending"?"orange":"red"}}>{payment.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeacherDashboard;
