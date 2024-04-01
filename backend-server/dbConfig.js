const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_server_address',
    database: 'your_database_name',
    options: {
        encrypt: true, // For Microsoft SQL Server
        trustServerCertificate: true, // For Microsoft SQL Server
    },
};

module.exports = config;