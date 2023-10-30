import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserDetail(props) {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simula una solicitud de datos del usuario a través de una API
    // Reemplaza esto con tu lógica real para obtener los datos del usuario.
    // Puedes usar una llamada a la API o cargar los datos desde donde los tengas.
    const fetchUser = async () => {
      try {
        // Realiza una solicitud al servidor para obtener los datos del usuario por ID.
        const response = await fetch(`/api/users/${id}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div>
      {user ? (
        <div>
          <img src={user.profileImage || "../../assets/p"} alt="User Profile" />
          <p>{user.name}</p>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
}
