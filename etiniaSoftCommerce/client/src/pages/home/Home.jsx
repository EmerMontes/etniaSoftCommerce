import React from 'react';
import Header from '../../components/header/Header'; // Asegúrate de importar el componente Header
import CardContainer from '../../components/cardsContainer/CardsContainer; // Asegúrate de importar el componente CardContainer
import NavBar from '../../components/navBar/NavBar'; // Asegúrate de importar el componente NavBar

function Home(props) {
  // Supongamos que tienes una lista de productos en el estado local
  const products = [
    /* Aquí debes tener una lista de productos para mostrar en CardContainer */
  ];

  return (
    <div className="home">
      <Header />
      <CardContainer products={products} />
      <NavBar />
    </div>
  );
}

export default Home;
