/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";


function RegisterForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

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
      
    // Realiza las validaciones necesarias de los campos del formulario de registro
    // Asegúrate de tener un mecanismo para verificar si el usuario ya existe

    // Luego, registra al usuario utilizando tu acción `userRegister`
    // dispatch(userRegister(email, password))
    //   .then((response) => {
    //     console.log(response);
    //     // Aquí puedes continuar con el código después de registrar al usuario con éxito
    //   })
    //   .catch((error) => {
    //     setError("Error al registrar al usuario");
    //     // Determina el código de estado según el tipo de error
    //   });
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirmar Contraseña</label>
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default RegisterForm;
