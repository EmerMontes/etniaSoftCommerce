import React from 'react';
import { Link } from "react-router-dom";
import Carrito from '../../assets/png/Carrito.png';
import Home from '../../assets/png/Home.png';
import Usuario from '../../assets/png/Usuario.png';
import Configuraciones from '../../assets/png/Configuraciones.png';
import styles from './NavBar.module.css'; // Importa los estilos CSS

function NavBar(props) {
  return (
    <div className={styles.navbar}>
      <button>
        <Link to="/user/:id"><img className={styles.Usuario} src={Usuario} alt="Usuario" /></Link>
      </button>

      <button>
        <Link to="/home"><img className={styles.Home} src={Home} alt="Home" /></Link>
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
