import React from 'react';
import CategoryList from "../../components/CategoryList/CategoryList";
import { Link } from "react-router-dom";
import "./HomePage.css";
import splash from '../../images/splash.webp'
const HomePage = (props) => {
  return (
    <main id="home-page">
      <section id="splash" style={{backgroundImage: `url(${splash})`}}>
        
        <h1>Welcome to Vranas Climbing Gear</h1>
      </section>
      <section id="shop-all-products-button-holder">
        <Link to="/products/0">
          <button aria-label="All products" className="important-button">Shop all products</button>
        </Link>
      </section>
      <h2 className="container">Shop By Category</h2>
      <CategoryList />
      <h2 className="container">About Us</h2>
      <section className="container" id="about-us">
        <p>
          Vranas Climbing Gear is an e-commerce app made by{" "}
          <a href="https://github.com/avranas"> Alex Vranas</a>. It was made by
          the developer to practice building full stack web apps. This site does
          not actually sell any climbing gear, but it can do just about
          everything that an e-commerce app should be capable of.
        </p>
        <p>
          For payments, this site uses Stripe, which is currently set to test
          mode. If you would like to see how payments are processed, enter the
          credit card number: "4242 4242 4242 4242" with fake data for
          everything else.
        </p>
        <p>
          <a href="https://github.com/avranas/Vranas-Climbing-Gear">
            Link to GitHub repository
          </a>
        </p>
      </section>
    </main>
  );
};

export default HomePage;
