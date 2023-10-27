import React from 'react';
import { useSelector } from 'react-redux'; // Importa useSelector para acceder al estado de Redux

function ShoppingCart() {
    const cart = useSelector((state) => state.cart);
  
    return (
      <div className="shopping-cart">
        <h1>Carrito de compras</h1>
        <div className="product-list">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.img} alt={product.name} />
              <div className="product-details">
                <h2>{product.name}</h2>
                <p>Precio: ${product.price}</p>
                <p>Cantidad: {product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="checkout-button">Finalizar compra</button>
      </div>
    );
  }
  
  export default ShoppingCart;
  