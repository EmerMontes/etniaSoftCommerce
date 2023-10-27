import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { getProductsname } from '../../redux/actions';


function SearchBar(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event)=>{
    setName(event.target.value)
 };

 const handleSearch = (event)=>{
  dispatch(getProductsname(name));
  setName("");
}

  return (
    <div className="search-bar">
      <input type="search" onChange={handleChange} value={name} placeholder="Search for a product..." />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchBar;
