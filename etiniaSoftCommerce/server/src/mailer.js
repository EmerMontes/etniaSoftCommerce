const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5bee669b086010",
    pass: "17320da4ab0d5b"
  }
});

module.exports = transport;
