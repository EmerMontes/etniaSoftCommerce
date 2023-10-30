import React from 'react';
import { Link } from "react-router-dom";
import styles from './Card.module.css';

function Card({id, name, gender, sale, img, color, price}) {

  return (
    <div className={styles.card}>
      <Link to={`/product/${id}`}>
      <div>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <h2>${price}</h2>
        {sale > 0 && <h2>{sale}% OFF</h2>}
      </div>
      </Link>
    </div>
  );
}

export default Card;
