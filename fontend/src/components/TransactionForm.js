import React, { useState } from 'react';
import axios from 'axios';

function TransactionForm({ fetchTransactions, fetchSummary }) {
    // State variables to store description and amount input values
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Make a POST request to add a new transaction
        await axios.post('http://localhost:8000/api/transactions', { description, amount: parseFloat(amount) });
        // Clear input fields after submission
        setDescription('');
        setAmount('');
        // Fetch updated transactions and summary data
        fetchTransactions();
        fetchSummary();
    };

    // Internal CSS styles
    const formStyle = {
        maxWidth: '300px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    // Return JSX for rendering the transaction form
    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            {/* Input field for transaction description */}
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} // Update description state on change
                required
                style={{ marginBottom: '10px' }} // Internal style for input field
            />
            {/* Input field for transaction amount */}
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} // Update amount state on change
                required
                style={{ marginBottom: '10px' }} // Internal style for input field
            />
            {/* Submit button for adding transaction */}
            <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Add Transaction</button>
        </form>
    );
}

// Export TransactionForm component as the default export
export default TransactionForm;
