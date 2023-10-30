import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ShoppingCart.module.css';
import NavBar from '../../components/navBar/NavBar'

function calculateTotalPrice(cart) {
  return cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
}


function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const totalPrice = calculateTotalPrice(cart);

  return (
    <div className={styles['shopping-cart']}>
      <NavBar />
      <div>
      <h1 className={styles.title}>Carrito de compras</h1>
      </div>
      <div className={styles['product-list']}>
        {cart.map((product) => (
          <div key={product.id} className={styles['cart-item']}>
            <img src={product.img} alt={product.name} />
            <div className={styles['product-details']}>
              <h2>{product.name}</h2>
              <p className={styles.price}>Precio: ${product.price}</p>

            </div>
          </div>
        ))}
      </div>
      <div className={styles.totalPrice}>
        <p>Precio Total: ${totalPrice}</p>
      </div>
      <button className={styles['checkout-button']}>Finalizar compra</button>
    </div>
  );
}

export default ShoppingCart;
