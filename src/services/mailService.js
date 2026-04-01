import nodemailer from "nodemailer";
import { env } from "../config/config.js";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.emailUser,
    pass: env.emailPass,
  },
});




export const sendContactEmail = async ({ name, email, phone, message , projectType }) => {
  const mailOptions = {
    from: env.emailUser,
    to: env.emailTo,
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Project Type</strong>: ${projectType || 'Not Provided'}</p>
      <p><strong>Message:</strong>${message}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
};