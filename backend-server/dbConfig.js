const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const config = {
    user: process.env.DB_USER,
    password: '', // Leave blank for Windows Authentication
    server: process.env.DB_SERVER, // Use ".\\" for local instance
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true, // For Microsoft SQL Server
        trustServerCertificate: true, // For Microsoft SQL Server
    },
};

module.exports = config;