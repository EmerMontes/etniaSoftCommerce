import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import LogoEtniablanco from '../../assets/png/LogoEtniablanco.png';
import styles from './Header.module.css'; // Importa los estilos CSS

function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={LogoEtniablanco} alt="Etnia Logo" />
      </div>
      <SearchBar />
    </div>
  );
}

export default Header;
