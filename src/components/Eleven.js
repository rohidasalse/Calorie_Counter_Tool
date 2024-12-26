import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Eleven.css";

export default function Eleven({ cartCount, handleAddToCart, eachProduct }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
    eachProduct();
  };
  const goToViewPage = () => {
    navigate("/page");
  };

  useEffect(() => {
    // Fetch products from the API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.slice(0, 20));
        setFilteredProducts(data.slice(0, 20)); // Initially show all products
      });
  }, []);

  // Handle category change and filter products
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category === "all") {
      setFilteredProducts(products); // Show all products for "all"
    } else {
      // Filter products by category
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">MyWebsite</div>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="cart-icon" onClick={goToCart}>
          🛒 <span className="cart-count">{cartCount}</span>
        </div>
      </header>
      <div className="grid-container">
        {/* Filter Section */}
        <div className="filter-section">
          <h2 className="product-h2">Filters</h2>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="all">All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>

        {/* Product Section */}
        <div className="product-section">
          <h2 className="product-h2">Products</h2>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div
                className="product-card"
                key={product.id}
                onClick={() => {
                  goToViewPage();
                  eachProduct(product);
                }}
              >
                <img src={product.image} alt={product.title} />
                <h3 id={product.title}>{product.title}</h3>
                <p id={product.price}>${product.price}</p>

                <button
                  className=""
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        <ul className="social-links">
          <li>
            <a href="#facebook">Facebook</a>
          </li>
          <li>
            <a href="#twitter">Twitter</a>
          </li>
          <li>
            <a href="#linkedin">LinkedIn</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
