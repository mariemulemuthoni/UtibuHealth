const express = require('express');
const app = express();
const port = 3000; // Choose any port you prefer
const mssql = require('mssql');
const dbConfig = require('./dbConfig');

// Middleware
app.use(express.json());

// Database connection pool
const pool = new mssql.ConnectionPool(dbConfig);
const poolConnect = pool.connect();

poolConnect.then((pool) => {
    console.log('Connected to the database');
}).catch((err) => {
    console.error('Error connecting to the database:', err);
});

// Define API endpoints
app.get('/', (req, res) => {
    res.send('Backend server is running');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});