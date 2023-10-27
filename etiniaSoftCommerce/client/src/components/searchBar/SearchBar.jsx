import { useState } from 'react';

function SearchBar(props) {
  const [name, setName] = useState("");

  const handleChange = (event)=>{
    setName(event.target.value)
 };

 const handleSearch = (event)=>{
  //dispatch()
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
