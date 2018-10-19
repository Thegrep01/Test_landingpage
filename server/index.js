const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json());



app.post('/mail', (req, res, next) => {

    const msg = {
        name: req.body.name,
        text: req.body.text
    };


    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '',
                pass: ''
            }
        });
        const mailOptions = {
            from: '',
            to: '',
            html: '<h1>' + msg.name + '</h1><br/><p>' + msg.text
        };


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log(info);
            }
        });
    });

});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});