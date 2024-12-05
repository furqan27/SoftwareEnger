const mysql = require('mysql2');

//create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: ''
});

//Connect to MySQL
connection.connect(err => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected: ' + connection.threadId);
});

//Create the database and table
connection.query('CREATE DATABASE IF NOT EXISTS bookings', (err, results) => {
    if (err) {
        console.error('Error creating database: ' + err.stack);
        return;
    }
    console.log('Database created or already exists');
});

connection.query('USE bookings', (err) => {
    if (err) {
        console.error('Error selecting database: ' + err.stack);
        return;
    }
    console.log('Using bookings database');
});

//Create the table.
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS bookingsTable (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        phoneNumber VARCHAR(15),
        address VARCHAR(255),
        date DATE,
        time TIME,
        service VARCHAR(255)
    )
`;
connection.query(createTableQuery, (err, results) => {
    if (err) {
        console.error('Error creating table: ' + err.stack);
        return;
    }
    console.log('Table created or already exists');
});

// Closing the connection
connection.end();
