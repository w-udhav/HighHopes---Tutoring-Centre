const path = require('path');
const express = require('express');

const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
app.use(cors())
const buildPath = path.json(__dirname,'..', 'build');
app.use(express.json());
app.use(express.static(buildPath));


app.post('/users',(req,res) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ambrewster24@gmail.com',
            pass:'TanmayW247@'
        }
    });

    var mailOptions = {
        from: 'ambrewster24@gmail.com',  //sender address
        to: 'ambrewster24@gmail.com',
        subject: 'Free Assessment Filled',
        text: req.body.message,
        html: `
            <div>
                <p> Name : ${req.body.name} </p>
            </div>
        `
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            res.json({status:true, respMsg: 'Error in the code'})
        } else {
            res.json({status: true, respMsg: 'Email Sent'})
        }
    });
});

app.listen(5000, () => {
    console.log('server start on [port 3030')
});