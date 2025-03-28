import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to WeWantWaste</h1>
      <p>Find the perfect skip for your waste management needs.</p>
      <Link to="/skip-selection">
        <button className={styles.startBtn}>Select a Skip</button>
      </Link>
    </div>
  );
};

export default Home;
