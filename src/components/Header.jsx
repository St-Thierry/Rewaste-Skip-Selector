import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/logo.png" alt="WeWantWaste Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skip-selection">Skips</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
