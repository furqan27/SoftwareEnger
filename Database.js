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

//Table manipulation code
const exBooking = ['John J. Jon', 'johnjon@gmail.com', '1234567890', '123 Johnathon St, City', '2024-12-01', '14:30:00', 'Lawn care'];

//Prepare SQL query to insert data into the bookingsTable
const insertQuery = 'INSERT INTO bookingsTable (name, email, phoneNumber, address, date, time, service) VALUES (?, ?, ?, ?, ?, ?, ?)';

//Insert values into the table (no need to use map)
connection.query(insertQuery, exBooking, (err, results) => {
    if (err) {
        console.error('Error inserting data: ' + err.stack);
        return;
    }
    console.log(`Inserted ${results.affectedRows} row(s)`);
});

// Closing the connection uneeded
//connection.end();
