import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserDetail(props) {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios(`/users/${id}`);
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
