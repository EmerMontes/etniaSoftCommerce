import React from 'react';
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="nav-bar">
      <button>
      <Link to="/user/:id">Usuario</Link>
      </button>

      <button>
        <Link to="/home">Home</Link>
      </button>

      <button>
        <Link to="/carrito">Carrito</Link>
      </button>

      <button>
      <Link to="/home">Configuraciones</Link>
      </button>
    </div>
  );
}

export default NavBar;
