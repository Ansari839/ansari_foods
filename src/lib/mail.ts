"use server";  // Make sure this is here for server-side functions

import nodemailer from 'nodemailer';

const SMTP_PASSWORD = 'pldt xywc xdaa zebq'
const SMTP_EMAIL = 'almashanif126@gmail.com'


export async function sendMail({ to, name, subject, body }) {
   

    // const { SMTP_EMAIL, SMTP_PASSWORD } = process.env; // Ensure env variables are accessed correctly

    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
        throw new Error('SMTP credentials are missing!');
    }

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SMTP_EMAIL,  // Your Gmail address from .env
            pass: SMTP_PASSWORD,  // App password generated from Google
        },
    });

    try {
        await transport.verify();  // Verifying SMTP connection
        console.log('SMTP connection verified');
    } catch (error) {
        console.error('SMTP connection error:', error);
        throw new Error('Failed to verify SMTP connection');
    }

    try {
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL,
            to,
            subject,
            html: body,
        });
        console.log('Email sent:', sendResult);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}
