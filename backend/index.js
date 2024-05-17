const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const transactionRoutes = require('./routes/transactionRoutes'); // Import transaction routes
const app = express();
const PORT = process.env.PORT || 8000; // Set the port for the server

// Middleware to parse JSON bodies of incoming requests
app.use(bodyParser.json());
// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// MongoDB connection URI
const MONGODB_URI = 'mongodb://127.0.0.1:27017/already';
// Connect to MongoDB database
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use transaction routes defined in transactionRoutes
app.use('/api/transactions', transactionRoutes);

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
