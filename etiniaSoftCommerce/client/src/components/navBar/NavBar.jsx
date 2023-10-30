import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Carrito from '../../assets/png/Carrito.png';
import Home from '../../assets/png/Home.png';
import Usuario from '../../assets/png/Usuario.png';
import Configuraciones from '../../assets/png/Configuraciones.png';
import styles from './NavBar.module.css';

function NavBar(props) {
  const navigate = useNavigate();

  const handleUserClick = () => {
    const isUserLoggedIn = false; // Reemplazar con lógica real

    if (isUserLoggedIn) {
      navigate('/user/:id'); // Usuario registrado, redirige a la página de detalles de usuario.
    } else {
      navigate('/user'); // Usuario no registrado, redirige a la página de inicio de sesión.
    }
  };

  return (
    <div className={styles.navbar}>
      <button onClick={handleUserClick}>
        <img className={styles.Usuario} src={Usuario} alt="Usuario" />
      </button>

      <button>
        <Link to="/"><img className={styles.Home} src={Home} alt="Home" /></Link>
      </button>

      <button>
        <Link to="/carrito"><img className={styles.Carrito} src={Carrito} alt="Carrito" /></Link>
      </button>

      <button>
        <Link to="/home"><img className={styles.Configuraciones} src={Configuraciones} alt="Configuraciones" /></Link>
      </button>
    </div>
  );
}

export default NavBar;
