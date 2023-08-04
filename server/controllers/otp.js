import nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config();
import Otp from "../models/otp.js"

const transporter = nodemailer.createTransport({
    service: 'gmail',

    auth: {
        user: process.env.OTP_AUTH_EMAIL,
        pass: process.env.OTP_AUTH_PASSWORD,
    },
});

export const sendOpt = async(req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);

    const mailOptions = {
        from: "amritcopy19@gmail.com",
        to: email,
        subject: 'OTP for Chatbot Access',
        text: `Your OTP: ${otp}`,
    };

    try {
        transporter.sendMail(mailOptions, async(error, info) => {
            if (error) {
                console.error('Error sending OTP email:', error);
                res.status(500).json({ error: 'Failed to send OTP via email' });
            } else {
                const existemail = await Otp.findOne({ email })

                if (existemail) {
                    await Otp.findOneAndUpdate({ email }, { otp: otp })
                    res.json({ message: "Otp updated" })
                } else {
                    await Otp.create({
                        email: email,
                        otp: otp
                    })
                    console.log('OTP email sent:', info.response);
                    res.json({ message: 'OTP sent via email' });
                }
            }
        })
    } catch (err) {
        console.log(err)
    };
}

export const verifyOtp = async(req, res) => {
    const email = req.body.email
    const otp = Number(req.body.otp)
    try {
        const validotp = await Otp.findOne({ email })
        if (validotp.otp === otp) {
            res.status(200).json({ email: email, message: 'OTP verified. Access granted to the chatbot.', success: true });
        } else {
            res.status(200).json({ email: email, message: 'Invalid OTP. Access denied to the chatbot.', success: false });
        }
    } catch (error) {
        console.log(error)
    }
}