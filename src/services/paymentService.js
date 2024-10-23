const paymentService = {
    processPayment: (amount) => {
        // Simulate payment processing
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Payment of ₹${amount} processed successfully!`);
            }, 2000);
        });
    }
};

export default paymentService;
