import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getByID, addToCart } from "../../redux/actions";
import NavBar from '../../components/navBar/NavBar'
import { useLocalStorage } from "../../functions/useLocalStorage";
import styles from './ProductDetail.module.css';

export default function ProductDetail({handleChange}) {
    const dispatch = useDispatch();
    const Product = useSelector((state) => state.productDetail);
    const { id } = useParams();
    const [productAdded, setProductAdded] = useState(false);

    const loadIdProduct = () => {
        if (id === Product.id) return;
        else dispatch(getByID(id));
    }

    useEffect(() => {
        loadIdProduct()
    }, [])

    const handleAddToCart = () => {
      if (Product) {
        dispatch(addToCart(Product));
        setProductAdded(true);
      }
    }
    
    return (
      <div className={styles.centrardiv}>
        
        <NavBar/>
        <div className={styles.space}>
        </div>
  
          <div className={styles.productdetail}>
            <div>
              {Product && (
                <img className={styles.productimage} src={Product.img} alt={Product.name} />
              )}
            </div>
  
            <div>
              {Product && (
                <div className={styles.productinfo}>
                  <h2 className={styles.productname}>{Product.name}</h2>
                  <p>${Product.price} | {Product.sale}% OFF</p>
                  <p>Descripcion:</p>
                  <p>{Product.description}</p>
                  <p>......................................................</p>
                  <p>Caracteristicas:</p>
                  <p>Marca: {Product.brand} | Categoria: {Product.category}</p>
                  <p>Talles: {Product.size} | Colores: {Product.color}</p>
                  <p> Genero: {Product.gender} | Stock: {Product.quantity}</p>
                </div>
              )}
            </div>
              </div>
              {productAdded && (
                <p className={styles.productAddedMessage}>añadido correctamente</p>
              )}

              <button onClick={handleAddToCart} className={styles.addToCartButton}>
                Agregar al carrito
              </button>
      </div>
    );
  }