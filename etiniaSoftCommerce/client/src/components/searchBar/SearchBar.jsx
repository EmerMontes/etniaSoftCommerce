import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFiltersAndPagination } from '../../redux/actions';
import { useLocalStorage } from '../../functions/useLocalStorage';
import styles from './SearchBar.module.css';
import Lupa from '../../assets/png/Lupa.png';

function SearchBar() {
  const [name, setName] = useLocalStorage("name", "")
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

  useEffect(()=>{
    console.log(name)
  },[])

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
