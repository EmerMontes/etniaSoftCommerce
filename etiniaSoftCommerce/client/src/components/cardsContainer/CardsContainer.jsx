/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useSelector } from 'react';
import Card from '../card/Card';
import styles from './CardsContainer.module.css';

function CardContainer(props) {

  const productArray = props.products ? Object.values(props.products) : [];

 // console.log(productArray);

  return (
    <div className={styles['card-container']}>
    {productArray[1]?.map(product => (
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