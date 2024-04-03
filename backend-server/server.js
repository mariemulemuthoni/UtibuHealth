const express = require('express');
const app = express();
const port = 3000; // Choose any port you prefer
const sql = require('mssql');
const dbConfig = require('./dbConfig');

// Middleware
app.use(express.json());

// Database connection pool
const pool = new sql.ConnectionPool(dbConfig);

pool.connect().then((pool) => {
    console.log('Connected to the SQL Server');
}).catch((err) => {
    console.error('Connection Error:', err);
    // More descriptive error message for debugging
    console.error('Failed to connect to database. Please check the server address and credentials.');
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