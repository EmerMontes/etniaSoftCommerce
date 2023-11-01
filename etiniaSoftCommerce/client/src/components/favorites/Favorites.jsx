import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { removeFav } from '../../redux/actions';
import NavBar from '../navBar/NavBar';
import styles from "../card/Card.module.css"
import stylesContainer from "../cardsContainer/CardsContainer.module.css"


export default function Favorites(props){
    const favorites = useSelector((state)=> state.allFavorites);
    const dispatch = useDispatch();

    const handleFavorite = (id) => {
        dispatch(removeFav(id))
     };

    return (
    <div>
        <NavBar/>
        <h2>FAVORITES</h2>
        <div className={stylesContainer['card-container']}>

        {favorites.length > 0 && favorites.map(fav => (
            <div key={fav.id} className={styles.card}>
                <button onClick={()=> handleFavorite(fav.id)}>{"❤️"}</button>
                <Link to={`/product/${fav.id}`}>
                    <div>
                        <img src={fav.img} alt={name}/>
                        <h2>{fav.name}</h2>
                        <h2>${fav.price}</h2>
                        {fav.sale > 0 && <h2>{fav.sale}% OFF</h2>}
                        </div>
                        </Link>
                    </div>
        ))}
        </div>
    </div>
)
}