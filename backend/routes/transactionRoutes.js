const express = require('express');
const Transaction = require('../models/Transaction'); // Import the Transaction model
const router = express.Router();

// Create a transaction
router.post('/', async (req, res) => {
    // Extract description and amount from the request body
    const { description, amount } = req.body;
    try {
        // Create a new transaction instance using the Transaction model
        const newTransaction = new Transaction({ description, amount });
        // Save the new transaction to the database
        await newTransaction.save();
        // Send the new transaction as JSON response
        res.json(newTransaction);
    } catch (err) {
        // Handle errors and send a 500 status code with the error message
        res.status(500).send(err.message);
    }
});

// Get all transactions
router.get('/', async (req, res) => {
    try {
        // Fetch all transactions from the database using the Transaction model
        const transactions = await Transaction.find();
        // Send the transactions as JSON response
        res.json(transactions);
    } catch (err) {
        // Handle errors and send a 500 status code with the error message
        res.status(500).send(err.message);
    }
});

// Get aggregated data (summary)
router.get('/summary', async (req, res) => {
    try {
        // Perform aggregation to calculate summary data (totalAmount and transactionCount)
        const summary = await Transaction.aggregate([
            {
                $group: {
                    _id: null,
                    totalAmount: { $sum: "$amount" }, // Calculate total amount
                    transactionCount: { $sum: 1 }     // Count total number of transactions
                }
            }
        ]);
        // Send the summary data as JSON response
        res.json(summary[0]);
    } catch (err) {
        // Handle errors and send a 500 status code with the error message
        res.status(500).send(err.message);
    }
});

// Export the router
module.exports = router;
