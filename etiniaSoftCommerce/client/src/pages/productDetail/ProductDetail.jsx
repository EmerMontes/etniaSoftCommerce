import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getByID, addToCart } from "../../redux/actions";
import NavBar from '../../components/navBar/NavBar'
import ReactImageMagnify from 'react-image-magnify';

import { useLocalStorage } from "../../functions/useLocalStorage";
import styles from './ProductDetail.module.css';

export default function ProductDetail({handleChange}) {
    const dispatch = useDispatch();
    const Product = useSelector((state) => state.productDetail);
    const { id } = useParams();
    const [productAdded, setProductAdded] = useState(false);
    const [inputCantidad, setInputCantidad] = useState('');
    const [inputSelect, setInputSelect] = useState('');

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
     const handleInput = (event) => {
      setInputCantidad(event.target.value)
      setInputSelect(event.target.name)
    }

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
     if(inputCantidad === '') {
       return setIsHovered(true);
     }
     return
    }

   const handleMouseLeave = () => {
    if(inputCantidad === '') {
      setIsHovered(false);
    }
    return
   }

    return (
      <div className={styles.centrardiv}>
        
        <NavBar/>
        <div className={styles.space}>
        </div>

          <div className={styles.productdetail}>
            <div className={styles.productdeta} style={{ width: '50vh'}}>
            <ReactImageMagnify 
             {...{
               smallImage: {
                 alt: 'product etnia',
                 isFluidWidth: true,
                 src: `${Product.img}` ,
                   },
                   largeImage: {
                     src: `${Product.img}`,
                     width: 1426,
                     height: 2200
                   },
                 }}
            />
            </div>
  
            <div>
              {Product && (
                <div className={styles.productinfo}>
                  <h2 className={styles.productname}>{Product.name}</h2>
                  <p>${Product.price} | {Product.sale}% OFF</p>
                  <p>Descripcion: {Product.description}</p>
                  <p className={isHovered ? styles.error : null }>Select talla:</p> 
                  <div className={styles.contentLabel}>
                       {Product.size?.map(siz => (
                         <label key={Object.keys(siz)} className={styles.label}>
                         <input className={styles.inputSelect} onChange={handleInput} type="radio" name={"talla"} value={Object.values(siz)}/>
                           {Object.keys(siz)}
                         </label>  
                        ))}  
                  </div>
              <button 
              disabled={isHovered===true ? true: false}
              onMouseEnter={()=>handleMouseEnter()}
              onMouseLeave={()=>handleMouseLeave()}              
              onClick={handleAddToCart} className={styles.addToCartButton}>
                Agregar al carrito
                  {productAdded && (
                    <p className={styles.productAddedMessage}>añadido</p>
                    )}
              </button>
              <p>      </p>
                  <p>Marca: {Product.brand} | Categoria: {Product.category}</p>
                  <p>Colores: {Product.color} | Genero: {Product.gender} | Stock: {Product.quantity}</p>
                </div>
              )}
            </div>
         </div>
      </div>
    );
  }