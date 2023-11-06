import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../../redux/actions'; // Añadir las acciones necesarias
import styles from './ShoppingCart.module.css';
import NavBar from '../../components/navBar/NavBar';


function calculateTotalPrice(cart) {
  return cart.reduce((total, product) => {
    let quantity = (product.cantidad || 1)
    return total + product.price * quantity;
  }, 0);
}

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch(); // Obtener el dispatcher
  const totalPrice = calculateTotalPrice(cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId)); // Acción para eliminar un producto del carrito
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCartItemQuantity(productId, newQuantity)); // Acción para actualizar la cantidad de un producto
  };

  const uniqueCartItems = Array.from(new Set(cart.map((item) => item.id))); // Filtrar elementos únicos

  return (
    <div className={styles['shopping-cart']}>
      <NavBar />
      <div>
        <h1 className={styles.title}>Carrito de compras</h1>
      </div>
      <div className={styles['product-list']}>
        {uniqueCartItems.map((productId) => {
          const item = cart.find((product) => product.id === productId);
          return (
            <div key={productId} className={styles['cart-item']}>
              <img src={item.img} alt={item.name} />
              <div className={styles['product-details']}>
                <h2>{item.name}</h2>
                <p className={styles.price}>Precio: ${item.price}</p>
                <div className={styles['cart-controls']}>
                  <p>Cantidad: </p>
                  <input
                    type="number"
                    min="1"
                    value={item.cantidad || 1}
                    onChange={(e) => handleQuantityChange(productId, e.target.value)}
                  />
                  <button onClick={() => handleRemoveFromCart(productId)}>X</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.totalPrice}>
        <p>Precio Total: ${totalPrice}</p>
      </div>
      <button className={styles['checkout-button']}>Finalizar compra</button>
    </div>
  );
}

export default ShoppingCart;
