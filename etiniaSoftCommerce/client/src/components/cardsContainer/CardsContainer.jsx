import React from 'react';
import Card from './Card'; // Asegúrate de importar el componente Card

function CardContainer(props) {
  return (
    <div className="card-container">
      {props.products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
}

export default CardContainer;
