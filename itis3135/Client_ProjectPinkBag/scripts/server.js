const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/process_donation', (req, res) => {
    const { name, email, phone, anonymous } = req.body;

    const message = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAnonymous Donation: ${anonymous ? 'Yes' : 'No'}`;

    const transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'jashimhowlader@yahoo.com', // Update with your recipient's email
        subject: 'New Donation',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ success: true, message: 'Thank you for your donation!' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
