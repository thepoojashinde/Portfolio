const nodemailer = require('nodemailer');
require('dotenv').config();

exports.connect = () => {
    try{
        // Check for required environment variables
        if (!process.env.MAIL_HOST || !process.env.MAIL_USER || !process.env.MAIL_PASS) {
            console.warn("Email configuration is incomplete. Email functionality may not work.");
            return null;
        }

        //transporter 
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT || 587,
            secure: process.env.MAIL_SECURE === 'true' || false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        return transporter;
    }
    catch(error){
        console.error("Error creating email transporter:", error);
        return null;
    }
}



