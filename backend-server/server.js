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

// Test endpoint to check database connection
app.get('/test-db-connection', async (req, res) => {
    try {
        // Execute a simple SQL query to fetch the current date and time
        const result = await pool.query('SELECT GETDATE() AS CurrentDateTime');

        // Send the result as JSON
        res.json({ currentDateTime: result.recordset[0].CurrentDateTime });
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error testing database connection:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Backend server is running');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});