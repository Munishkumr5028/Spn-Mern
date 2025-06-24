require("dotenv").config();
const nodemailer = require("nodemailer");
const { ACCOUNT_VERIFY } = require("./emailTemplate");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// General Send Function
async function sendMail(to, subject, html) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Email error:", error);
        return reject(error);
      }
      console.log("Email sent: " + info.response);
      resolve(info);
    });
  });
}

// For Login OTP
async function verifyAccount(email, otp, name) {
  const subject = "OTP for Account Login";
  const html = ACCOUNT_VERIFY(name, otp);
  return sendMail(email, subject, html);
}

// For Forgot Password OTP
async function forgotPassword(email, name, otp) {
  const subject = "OTP to Reset Your Password";
  const html = ACCOUNT_VERIFY(name, otp); // reuse same template
  return sendMail(email, subject, html);
}

module.exports = {
  sendMail,
  verifyAccount,
  forgotPassword,
};
