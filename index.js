const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

// Database Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL username (default is 'root')
    password: 'your_password_here', // Your MySQL password
    database: 'bookings' // Ensure this matches the database name
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection error:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

// API Endpoint to handle form submission
app.post('/book', (req, res) => {
    const { name, email, phoneNumber, address, date, time, service } = req.body;

    const insertQuery = `
        INSERT INTO bookingsTable (name, email, phoneNumber, address, date, time, service)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    connection.query(insertQuery, [name, email, phoneNumber, address, date, time, service], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Database error');
            return;
        }

        // Send confirmation email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com', // Replace with your email
                pass: 'your-email-password'  // Replace with your email password
            }
        });

        const mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: 'Booking Confirmation',
            text: `Hi ${name},\n\nYour booking is confirmed for ${date} at ${time} for the service: ${service}.`
        };

        transporter.sendMail(mailOptions, (emailErr, info) => {
            if (emailErr) {
                console.error('Error sending email:', emailErr);
                res.status(500).send('Email sending error');
                return;
            }
            res.status(200).send('Booking confirmed and email sent!');
        });
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
