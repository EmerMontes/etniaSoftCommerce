import React from 'react';
import SearchBar from './SearchBar'; // Asegúrate de importar el componente SearchBar

function Header(props) {
  return (
    <div className="header">
      <div className="logo">
        {/* Aquí debes mostrar el logo de la marca */}
      </div>
      <SearchBar />
    </div>
  );
}

export default Header;
