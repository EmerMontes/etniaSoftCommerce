import React from 'react';
import Header from '../../components/header/Header';
import CardContainer from '../../components/cardsContainer/CardsContainer';
import NavBar from '../../components/navBar/NavBar';
import products from "../../utils/db.json"
import SearchBar from '../../components/searchBar/SearchBar';

function Home(props) {

  return (
    <div className="home">
      <Header />
      <h2>Bienvenido al Home</h2>
      <NavBar />
      <CardContainer products={products}/>
    </div>
  );
}

export default Home;
