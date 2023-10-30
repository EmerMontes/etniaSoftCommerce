import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getByID } from "../../redux/actions";
import { Link } from "react-router-dom";
import styles from './ProductDetail.module.css';

export default function ProductDetail(props) {
    const dispatch = useDispatch();
    const Product = useSelector((state) => state.productDetail);
    const { id } = useParams();

    const loadIdProduct = () => {
        if (id === Product.id) return;
        else dispatch(getByID(id));
    }

    useEffect(() => {
        loadIdProduct()
    }, [])

    return (
      <div className={styles.centrardiv}>
        <div>
          <Link to="/" className={styles.homeButton}>
            <img className={styles.arrow} src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/return-up-back-128.png" alt="Back" />
          </Link>
  
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
                  <p>Marca: {Product.brand} | Genero: {Product.gender}</p>
                  <p>Talles: {Product.size} | Colores: {Product.color}</p>
                  <p>Categoria: {Product.category} | Stock: {Product.quantity}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }