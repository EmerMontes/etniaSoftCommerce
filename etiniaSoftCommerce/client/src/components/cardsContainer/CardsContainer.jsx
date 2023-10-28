import React from 'react';
import Card from '../card/Card';
import './CardsContainer.css';

function CardContainer(props) {
 
  const productArray = Object.values(props.products || {});
  
  return (
    <div className="card-container">
      {productArray[1].map(product => (
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
    <div><button>previous</button><button>next</button>
      </div>
    </div>
  ); 
}

export default CardContainer;