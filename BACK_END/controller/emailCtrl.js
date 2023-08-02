// const nodemailer = require("nodemailer");
// const asyncHandler = require("express-async-handler");

// const sendEmail = asyncHandler(async (data, req, res) => {
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS,
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Hey 👻" <abc@gmail.com>', // sender address
//     to: data.to, // list of receivers
//     subject: data.subject, // Subject line
//     text: data.text, // plain text body
//     html: data.html, // html body
//   });

//   console.log("Message sent : ", info.messageId);
//   console.log("Preview URL  : ", nodemailer.getTestMessageUrl(info));
// });

// module.exports = sendEmail;

//=======

const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Your Name" <your.email@example.com>', // Replace with a valid sender address
      to: data.to,
      subject: data.subject,
      text: data.text,
      html: data.html,
    });

    console.log("Message sent : ", info.messageId);
    console.log("Preview URL  : ", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("Error sending email:", error);
    // Handle the error and send a response
    res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
});

module.exports = sendEmail;
