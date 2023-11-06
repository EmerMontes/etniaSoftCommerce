const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("")
//DEBRIA ENTRAR DESDE .ENV
const msg = {
  to: 'santiagoqm99.9@gmail.com', // Change to your recipient
  from: 'clickyticketg18pf@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'PRUEBA DE CAMBIO DE TEXTO',
  html: '<strong>PRUEBA DE CAMBIO DE TEXTO</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

// como enviar un email con sendgrid

