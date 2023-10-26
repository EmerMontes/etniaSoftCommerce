import React from 'react';
import Card from '../card/Card';

function CardContainer(props) {
  return (
    <div className="card-container">
      {props.products.products?.map(product => (
        <Card 
          key={product.id}
          id={product.id}
          name={product.name}
          gender={product.gender}
          sale={product.sale}
          img={product.img} 
          color={product.color}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default CardContainer;