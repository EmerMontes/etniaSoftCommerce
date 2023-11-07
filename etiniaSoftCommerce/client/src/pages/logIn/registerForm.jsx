/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions";

import LogoEtniablanco from "../../assets/png/LogoEtniablanco.png";

import styles from "./LogIn.module.css";

import { Link, useNavigate } from "react-router-dom";

function RegisterForm(props) {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  // const transport = nodemailer.createTransport({
  //   host: "smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "5bee669b086010",
  //     pass: "17320da4ab0d5b"
  //   }
  // });

  const handleRegister = (event) => {
    event.preventDefault();

    if (!email) {

      setError("El campo de correo electrónico no puede estar vacío.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (!password) {
      setError("El campo de contraseña no puede estar vacío.");
      return;
    }

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    if (!confirmPassword) {
      setError("Por favor, confirma tu contraseña.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    const payload = {
      email: email,
      password: password,
      // Agrega otros campos del payload si es necesario
    };

    
    

    // Realiza las validaciones necesarias de los campos del formulario de registro
    // Asegúrate de tener un mecanismo para verificar si el usuario ya existe

    // Luego, registra al usuario utilizando tu acción `userRegister`
    dispatch(registerUser(payload))
      .then((response) => {
        if (response.success) {
          setError("");
          setMensaje(
            "Registro exitoso: Revisa tu correo para confirmar tu contraseña"
          );
          console.log(
            "Registro exitoso: Revisa tu correo para confirmar tu contraseña",
            response.message
          );
          // Aquí puedes continuar con el código después de registrar al usuario con éxito
        } else {
          console.error("Error durante el registro:", response.message);
          setError(response.message);
          // Determina el código de estado según el tipo de error
        }
      })
      .catch((error) => {
        console.error("Error en la promesa:", error);
        setError("Error al registrar el usuario");
      });
  };

  return (
    <div className={styles["login-container"]}>
      <h2>Registro</h2>
      <img src={LogoEtniablanco} alt="Etnia Logo" />

      <form className={styles["login-form"]} onSubmit={handleRegister}>
        <div className={styles["form-group"]}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      {error && <div className={styles["error-message"]}>{error}</div>}
      {mensaje && <div className={styles["exito-message"]}>{mensaje}</div>}
      <nav>
        <ul>
          <li>
            <Link to="/user">¿Ya tienes cuenta? Iniciar Sesión</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default RegisterForm;
