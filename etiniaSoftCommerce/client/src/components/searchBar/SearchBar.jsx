import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFiltersAndPagination } from '../../redux/actions';
import styles from './SearchBar.module.css';
import Lupa from '../../assets/png/Lupa.png';

function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    setName('');
  };

  const handleChange = (event) => {
    setName(event.target.value);

    const initialFilters = {
      name,
    };

    dispatch(getFiltersAndPagination(initialFilters, 1));
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
