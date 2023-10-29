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
        <div className={styles.productdetailcontainer}>
          <Link to="/" className={styles.homeButton}>
            <img className={styles.arrow} src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/return-up-back-128.png"/>
          </Link>
        <div className={styles.productdetail}>
            
          <div className={styles.productimage}>
            {Product && <img src={Product.img} alt={Product.name} />}
          </div>

          <div className={styles.productinfo}>
            {Product && (
              <div>
                <h2 className={styles.productname}>{Product.name}</h2>
                <h2>{Product.brand}</h2>
                <h2>{Product.gender}</h2>
                <h2>{Product.size}</h2>
                <h2>{Product.color}</h2>
                <h2>{Product.sale}</h2>
                <h2>{Product.category}</h2>
                <h2>{Product.description}</h2>
                <h2>{Product.price}</h2>
                <h2>{Product.quantity}</h2>
              </div>
            )}</div>

        </div>
        </div>
      );
    }