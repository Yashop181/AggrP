const mongoose = require('mongoose');

// Define a new Mongoose schema for a transaction
const TransactionSchema = new mongoose.Schema({
    // Field for transaction description, type String
    description: String,
    // Field for transaction amount, type Number
    amount: Number,
    // Field for transaction date, type Date with default value of current date/time
    date: {
        type: Date,
        default: Date.now
    }
});

// Export the Mongoose model based on the schema, named 'Transaction'
module.exports = mongoose.model('Transaction', TransactionSchema);
