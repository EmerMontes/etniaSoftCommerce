import React from 'react';
import Header from '../../components/header/Header';
import CardContainer from '../../components/cardsContainer/CardsContainer';
import NavBar from '../../components/navBar/NavBar';
import products from "../../utils/db.json"
import SearchBar from '../../components/searchBar/SearchBar';
import Select from '../../components/sizeSelector/SizeSelector';

function Home(props) {

  const handleChange = (event)=>{
    const {name, value} = event.target
    if(name === "Gender"){
      console.log(value)
    }
    if(name === "Category"){
      console.log(value);
    }
    if(name === "Color"){
      console.log(value);
    }
    if(name === "Sale"){
      console.log(value);
    }
    if(name === "Size"){
      console.log(value);
    }
    if(name === "Price"){
      console.log(value);
    }
    }

  const genderOpt = ["male", "female"];
  const categoryOpt = ["Running", "Crossfit", "Gimnasio", "Ciclismo"];
  const colorOpt = ["Azul", "Verde", "Negro", "Gris", "Rojo", "Blanco", "Rosa"];
  const saleOpt = [ "5%", "10%", "15%", "30%" ];
  const sizeOpt = [ "S", "L", "M", "XS", "XXL"];
  const PriceOpt = ["highest", "lowest"]


  return (
    <div className="home">
      <Header />
      <Select name={"Gender"} options={genderOpt} handleChange={handleChange} state={null}/>
      <Select name={"Category"} options={categoryOpt} handleChange={handleChange} state={null}/>
      <Select name={"Color"} options={colorOpt} handleChange={handleChange} state={null}/>
      <Select name={"Sale"} options={saleOpt} handleChange={handleChange} state={null}/>
      <Select name={"Size"} options={sizeOpt} handleChange={handleChange} state={null}/>
      <Select name={"Price"} options={PriceOpt} handleChange={handleChange} state={null}/>
      <h2>Bienvenido al Home</h2>
      <NavBar />
      <CardContainer products={products}/>
    </div>
  );
}

export default Home;
