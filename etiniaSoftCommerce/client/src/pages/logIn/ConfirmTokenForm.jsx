/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function ConfirmTokenForm(props) {
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleConfirmToken = (event) => {
    event.preventDefault();

    if (!token) {
      setError("El campo de token no puede estar vacío.");
      return;
    }

    // Realiza las validaciones necesarias del token
    // Asegúrate de tener un mecanismo para verificar si el token es válido

    // Luego, confirma el token utilizando tu acción `confirmToken`
    // dispatch(confirmToken(token))
    //   .then((response) => {
    //     console.log(response);
    //     // Aquí puedes continuar con el código después de confirmar el token con éxito
    //   })
    //   .catch((error) => {
    //     setError("Error al confirmar el token");
    //     // Determina el código de estado según el tipo de error
    //   });
  };

  return (
    <div>
      <h2>Confirmar Token</h2>
      <form onSubmit={handleConfirmToken}>
        <label>Token de Confirmación</label>
        <input
          type="text"
          placeholder="Ingresa el token de confirmación"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button type="submit">Confirmar Token</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default ConfirmTokenForm;
