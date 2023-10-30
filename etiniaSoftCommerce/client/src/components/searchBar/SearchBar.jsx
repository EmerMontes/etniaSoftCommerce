import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFiltersAndPagination } from '../../redux/actions';
import styles from './SearchBar.module.css'; // Asegúrate de importar los estilos CSS correctamente
import Lupa from '../../assets/png/Lupa.png';

function SearchBar() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    const initialFilters = {
      name, // Agrega el filtro de nombre
    };

    // Llama a la acción para obtener productos con los filtros
    dispatch(getFiltersAndPagination(initialFilters, 1));

    // Limpia el campo de búsqueda
    setName('');
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={styles.searchbar}>
      <input
        type="search"
        onChange={handleChange}
        value={name}
        placeholder="Search for a product..."
      />
      <button onClick={handleSearch}>
        <img className={styles.Lupa} src={Lupa} alt="Search" />
      </button>
    </div>
  );
}

export default SearchBar;
