import styles from './SearchBar.module.css'; // Importa los estilos CSS
import Lupa from '../../assets/png/Lupa.png';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { getProductsname } from '../../redux/actions';



function SearchBar(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };


 const handleSearch = (event)=>{
  dispatch(getProductsname(name));
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
