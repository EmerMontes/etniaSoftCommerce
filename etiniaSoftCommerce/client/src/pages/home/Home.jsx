import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import CardContainer from '../../components/cardsContainer/CardsContainer';
import NavBar from '../../components/navBar/NavBar';
import SearchBar from '../../components/searchBar/SearchBar';
import Select from '../../components/sizeSelector/SizeSelector';
import { getAllProducts, getFilterGenero, getAllCategories, getFilterColor, getFilterTalla, getOrderPrecio, filtrarPorDescuento } from '../../redux/actions';

function Home(props) {
  const Products = useSelector((state)=> state.productShow)
  const dispatch = useDispatch();

  const loadProducts = async () => {
    if (!Products.length) {
      await dispatch(getAllProducts());
    }
  };

  useEffect(() => {
    loadProducts();
    console.log(Products)
  }, []);

  const handleChange = (event)=>{
    const {name, value} = event.target
    if(name === "Gender"){
      console.log(value)
      dispatch(getFilterGenero(value));
    }
    if(name === "Category"){
      console.log(value);
      dispatch(getAllCategories(value));
    }
    if(name === "Color"){
      console.log(value);
      dispatch(getFilterColor(value));
    }
    if(name === "Sale"){
      console.log(value);
      dispatch(filtrarPorDescuento(value));
    }
    if(name === "Size"){
      console.log(value);
      dispatch(getFilterTalla(value));
    }
    if(name === "Price"){
      console.log(value);
      dispatch(getOrderPrecio(value));
    }
    }

  const genderOpt = ["male", "female"];
  const categoryOpt = ["Camisetas", "Vestidos", "Pantalones", "Faldas", "Chaquetas", "Blusas"];
  const colorOpt = ["Azul", "Verde", "Negro", "Gris", "Rojo", "Blanco", "Rosa"];
  const saleOpt = [ 0, 1];
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
      <CardContainer products={Products}/>
      <br />
      <button onClick={()=> dispatch(getAllProducts())}>RESET</button>
    </div>
  );
}

export default Home;
