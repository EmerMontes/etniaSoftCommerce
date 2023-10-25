import React from 'react';
import SearchBar from '../searchBar/SearchBar'; // Asegúrate de importar el componente SearchBar
import Logo-Etnia-blanco from "../../assets/png/Logo-Etnia-blanco";

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

