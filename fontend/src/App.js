import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';

function App() {
    // State variables to store transactions and summary data
    const [transactions, setTransactions] = useState([]);
    const [summary, setSummary] = useState({ totalAmount: 0, transactionCount: 0 });

    // useEffect hook to fetch initial data when the component mounts
    useEffect(() => {
        fetchTransactions(); // Fetch transactions
        fetchSummary(); // Fetch summary data
    }, []);

    // Function to fetch transactions from the backend API
    const fetchTransactions = async () => {
        try {
            // Make a GET request to fetch transactions
            const response = await axios.get('http://localhost:8000/api/transactions');
            // Update the transactions state with the response data
            setTransactions(response.data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    // Function to fetch summary data from the backend API
    const fetchSummary = async () => {
        try {
            // Make a GET request to fetch summary data
            const response = await axios.get('http://localhost:8000/api/transactions/summary');
            // Update the summary state with the response data
            setSummary(response.data);
        } catch (error) {
            console.error('Error fetching summary:', error);
        }
    };

    return (
        <div className="App">
            {/* Header */}
            <h1>Transaction Tracker</h1>
            
            {/* TransactionForm component for adding new transactions */}
            <TransactionForm fetchTransactions={fetchTransactions} fetchSummary={fetchSummary} />
            
            {/* TransactionList component for displaying list of transactions */}
            <TransactionList transactions={transactions} />
            
            {/* Summary component for displaying summary data */}
            <Summary summary={summary} />
        </div>
    );
}

export default App;
