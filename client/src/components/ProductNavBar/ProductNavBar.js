import React from 'react';
import { Link } from "react-router-dom";
import "./ProductNavBar.css";

const ProductNavBar = (props) => {
  return (
    <nav id="product-navigation-bar" className="container styled-box">
      <ul id="product-navigation-list">
        <li>
          <Link to="/products/0">All Products</Link>
        </li>
        <li>
          <Link to="/products/0?category=shoes">Shoes</Link>
        </li>
        <li>
          <Link to="/products/0?category=harnesses">Harnesses</Link>
        </li>
        <li>
          <Link to="/products/0?category=ropes">Ropes</Link>
        </li>
        <li>
          <Link to="/products/0?category=hardware">Hardware</Link>
        </li>
        <li>
          <Link to="/products/0?category=chalk">Chalk</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProductNavBar;
