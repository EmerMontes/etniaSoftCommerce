
import React, { useEffect,  useState } from 'react';
import LogoEtniablanco from '../../assets/png/LogoEtniablanco.png';
import Google from '../../assets/png/Google.png';
import styles from './LogIn.module.css';
import LoginButton from './logInButton.jsx';
import LogoutButton from './logOutButton.jsx';
import { useAuth0 } from "@auth0/auth0-react";
function LogIn(props) {
  const { isAuthenticated } = useAuth0();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Load the Google Sign-In API script
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Initialize the Google Sign-In API after the script has finished loading
    const intervalId = setInterval(() => {
      if (window.gapi) {
        clearInterval(intervalId);
        window.gapi.load('auth2', () => {
          window.gapi.auth2.init({
            client_id: '404517917936-cigse4isaarorplnlpq4qhrjh99e6vbo.apps.googleusercontent.com',
          });
        });
      }
    }, 100);
  }, []);

  function onSignIn(googleUser) {
    // Get the user's ID token and send it to the server for verification
    const id_token = googleUser.getAuthResponse().id_token;
    // Send the `id_token` to the server using an AJAX request or similar method
  }
  const handleLogin = async (event) => {
    event.preventDefault();

    console.log({ email, password });
    const response = await fetch('http://localhost:3001/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'edueliasxez@gmail.com',
        password: 'qweqwe',
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text().then(text => text ? JSON.parse(text) : {})
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      // Mostrar un mensaje de error
      alert(data.message || 'Ha ocurrido un error');
    } else {
      // Iniciar sesión del usuario
    }
  };

  return (
    <div className={styles['login-container']}>
      <h2>Welcome to</h2>
      <img src={LogoEtniablanco} alt="Etnia Logo" />

      <form className={styles['login-form']} onSubmit={handleLogin}>
        <div className={styles['form-group']}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit">Log In</button>
        
      </form>

      <p>¿No tienes cuenta? Regístrate</p>

      <div className={styles['google-login']} onClick={() => window.gapi.auth2.getAuthInstance().signIn({ prompt: 'select_account' }).then(onSignIn)}>
  <img className={styles['googlelogo']} src={Google} alt="Google Logo" /> Iniciar con Google
</div>
{isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
    
  );
}
export default LogIn;