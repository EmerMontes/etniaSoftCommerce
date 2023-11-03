import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddFavorites, removeFav } from '../../redux/actions';
import { useLocalStorage } from "../../functions/useLocalStorage";
import styles from './Card.module.css';


function Card({id, name, gender, sale, img, color, price}) {
  const favorites = useSelector((state)=> state.allFavorites)
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);


  const product = {id, name, gender, sale, img, color, price};

  const handleFavorite = () => {
    if(isFav){
       setIsFav(false);
      dispatch(removeFav(id))
    }
    else{
       setIsFav(true);
      dispatch(getAddFavorites(product))
    }
 };

 useEffect(() => {
  favorites?.forEach((fav) => {
     if (fav.id === id) {
        setIsFav(true);
     }
  });
}, [id, favorites]);

  return (
  <div>
    <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
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
      </div>
  );
}

export default Card;
