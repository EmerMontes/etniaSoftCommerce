import React from 'react';
import { Link } from "react-router-dom";
import './Card.css';

function Card({id, name, gender, sale, img, color, price}) {
  return (
    <div className="card">
      <Link to={`/product/${id}`}>
      <div>
        <h2>{name}</h2>
        <img src={img} alt={name}/>
        <h2>{price}</h2>
        <h2>{sale}</h2>
      </div>
      </Link>
    </div>
  );
}

export default Card;
