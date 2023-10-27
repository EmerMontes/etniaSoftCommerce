import React, { useState } from 'react';
import styles from './SearchBar.module.css'; // Importa los estilos CSS
import Lupa from '../../assets/png/Lupa.png';

function SearchBar(props) {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = (event) => {
    //dispatch()
    setName("");
  }

  return (
    <div className={styles.searchbar}>
      <input type="search" onChange={handleChange} value={name} placeholder="Search for a product..." />
      <button onClick={handleSearch}><img className={styles.Lupa} src={Lupa}/></button>
    </div>
  );
}

export default SearchBar;
