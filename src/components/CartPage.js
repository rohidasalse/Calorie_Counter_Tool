import React from "react";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";

export default function CartPage({ cartItems, eachProduct }) {
  const navigate = useNavigate();
  const goToViewPage = () => {
    navigate("/page");
  };
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="product-section">
          <h2 className="product-h2">Card Products</h2>
          <div className="product-grid">
            {cartItems.map((product) => (
              <div
                className="product-card"
                key={product.id}
                onClick={() => {
                  goToViewPage();
                  eachProduct(product);
                }}
              >
                <img src={product.image} alt={product.title} />
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                  <button>Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
