const express = require('express');
const emailRouter = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
emailRouter.post('/send-email', (req, res) => {
    const { email, subject, text } = req.body;
  
    const msg = {
      to: email,
      from: 'clickyticketg18pf@gmail.com',
      subject: subject,
      text: text,
    };
  
    sgMail
      .send(msg)
      .then(() => res.status(200).send('Email enviado con éxito'))
      .catch((error) => res.status(500).send('Error al enviar el email'));
  });

module.exports = emailRouter;