import React from 'react';
import LogoEtniablanco from '../../assets/png/LogoEtniablanco.png';
import Google from '../../assets/png/Google.png';
import styles from './LogIn.module.css';

function LogIn(props) {
  return (
    <div className={styles['login-container']}>
      <h2>Welcome to</h2>
      <img src={LogoEtniablanco} alt="Etnia Logo" />

      <form className={styles['login-form']}>
        <div className={styles['form-group']}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Contraseña" />
        </div>

        <button type="submit">Log In</button>
      </form>

      <p>¿No tienes cuenta? Regístrate</p>

      <button className={styles['google-login']}>
        <img className={styles['googlelogo']} src={Google} alt="Google Logo" /> Iniciar con Google
      </button>
    </div>
  );
}

export default LogIn;
