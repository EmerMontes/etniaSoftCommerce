export function sendEmail(userEmail, subject, text) {
    return fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        subject: subject,
        text: text,
      }),
    })
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
  }