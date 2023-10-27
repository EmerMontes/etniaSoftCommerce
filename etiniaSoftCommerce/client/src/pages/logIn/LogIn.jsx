import React from 'react';
import LogoEtniablanco from '../../assets/png/LogoEtniablanco.png';
import Google from '../../assets/png/Google.png';
import './LogIn.css'

function LogIn(props) {
  return (
    <div className="login-container">
      <h2>Welcome to</h2>
      <img src={LogoEtniablanco} alt="Etnia Logo" />

      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Contraseña" />
        </div>

        <button type="submit">Log In</button>
      </form>

      <p>¿No tienes cuenta? Regístrate</p>

      <button className="google-login"><img className='googlelogo' src={Google} alt="google Logo" /> Iniciar con Google</button>
    </div>
  );
}

export default LogIn;
