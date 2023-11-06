/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { confirmToken } from "../../redux/actions";

import { Link, useNavigate } from "react-router-dom";

function ConfirmTokenForm() {
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Utiliza useEffect para obtener el token de la URL cuando el componente se carga
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get("token");

    if (tokenParam) {
      setToken(tokenParam);
    }
  }, []);

  const handleConfirmToken = (event) => {
    event.preventDefault();

    if (!token) {
      setError("El campo de token no puede estar vacío.");
      return;
    }

    // Luego, confirma el token utilizando tu acción `confirmToken`
    dispatch(confirmToken(token))
      .then((response) => {
        console.log("formulario dispatch");
        console.log(response.success);
        if (response.success) {
          navigate("/");
          // Aquí puedes continuar con el código después de confirmar el token con éxito
        }
      })
      .catch((error) => {
        console.log(error);
        //setError("Error al confirmar el token");
        // Determina el código de estado según el tipo de error
      });
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
