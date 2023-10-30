import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ShoppingCart.module.css';
import NavBar from '../../components/navBar/NavBar'

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className={styles['shopping-cart']}>
      <NavBar />
      <h1>Carrito de compras</h1>
      <div className={styles['product-list']}>
        {cart.map((product) => (
          <div key={product.id} className={styles['cart-item']}>
            <img src={product.img} alt={product.name} />
            <div className={styles['product-details']}>
              <h2>{product.name}</h2>
              <p>Precio: ${product.price}</p>
              <p>Cantidad: {product.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles['checkout-button']}>Finalizar compra</button>
    </div>
  );
}

export default ShoppingCart;
