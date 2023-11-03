import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Carrito from '../../assets/png/Carrito.png';
import Home from '../../assets/png/Home.png';
import Usuario from '../../assets/png/Usuario.png';
import Configuraciones from '../../assets/png/Configuraciones.png';
import styles from './NavBar.module.css';

function NavBar(props) {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();

  const handleUserClick = () => {
    if (isAuthenticated) {
      navigate(`/user/${user.sub}`); // User is logged in, redirect to user details page.
    } else {
      navigate('/user'); // User is not logged in, redirect to login page.
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
      
      <button>
        <Link to="/favorites"> FAVORITES </Link>
      </button>
    </div>
  );
}

export default NavBar;
