import React, { useEffect, useSelector } from 'react';
import Card from '../card/Card';
import './CardsContainer.css';
import { pagination } from '../../redux/actions';


function CardContainer(props) {
  const page = useSelector((state) => state.pagination)
  
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(pagination(2))},[])
 
  console.log(page)
  const productArray = Object.values(props.products || {});
  
  return (
    <div className="card-container">
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
    <div><button>previous</button><button>next</button>
      </div>
    </div>
  ); 
}

export default CardContainer;