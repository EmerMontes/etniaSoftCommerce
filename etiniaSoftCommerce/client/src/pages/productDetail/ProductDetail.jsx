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
            <div style={{width: '420px' , height: '400px'}}>
            <ReactImageMagnify 
             {...{
               smallImage: {
                 alt: 'product etnia',
                 isFluidWidth: true,
                 src: `${Product.img}` ,
                    // srcSet: src.srcSet,
                    //sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                   },
                   largeImage: {
                     src: `${Product.img}` ,
                     width: 1426,
                     height: 2000
                   },
                   // lensStyle: { backgroundColor: {'rgba(0,0,0,.6)'} }
                 }}
            />
            </div>
  
            <div>
              {Product && (
                <div className={styles.productinfo}>
                  <h2 className={styles.productname}>{Product.name}</h2>
                  <p>${Product.price} | {Product.sale}% OFF</p>
                  <p>Descripcion:</p>
                  <p>{Product.description}</p>
                  <p className={isHovered ? styles.error : null }>Select talla:</p> 
                  <div className={styles.contentLabel}>
                       {Product.size?.map(siz => (
                         <label key={Object.keys(siz)} className={styles.label}>
                         <input className={styles.inputSelect} onChange={handleInput} type="radio" name={"talla"} value={Object.values(siz)}/>
                           {Object.keys(siz)}
                         </label>  
                        ))}  
                  </div>
                    <p> Cantidad en tienda:{inputCantidad} </p>
              <button 
              disabled={isHovered===true ? true: false}
              onMouseEnter={()=>handleMouseEnter()}
              onMouseLeave={()=>handleMouseLeave()}              
              onClick={handleAddToCart} className={styles.addToCartButton}>
                Agregar al carrito
              </button>
                  <p>......................................................</p>
                  <p>Caracteristicas:</p>
                  <p>Marca: {Product.brand} | Categoria: {Product.category}</p>
                  <p> Colores: {Product.color}</p>
                  <p> Genero: {Product.gender} | Stock: {Product.quantity}</p>
                </div>
              )}
            </div>
              </div>
              {productAdded && (
                <p className={styles.productAddedMessage}>añadido correctamente</p>
                )}
      </div>
    );
  }