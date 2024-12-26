import React from "react";
import styles from "./ViewPage.module.css";
export default function ViewPage(message) {
  console.log(Object.values(message));
  return (
    <>
      <div className={styles.productGrid}>
        {Object.values(message).map((product) => (
          <div className={styles.productCard} key={product.id}>
            {/* Product Image */}
            <img
              className={styles.productImage}
              src={product.image}
              alt={product.title}
            />

            {/* Product Details */}
            <div className={styles.productDetails}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productPrice}>${product.price}</p>
              <button className={styles.buyNowButton}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
