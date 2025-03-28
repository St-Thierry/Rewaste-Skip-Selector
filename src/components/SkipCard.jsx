import React from "react";
import styles from "../styles/SkipCard.module.css";
import { FaTruck, FaExclamationTriangle } from "react-icons/fa";

const SkipCard = ({ size, hirePeriod, price, onSelect, allowedOnRoad, heavyWaste }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.size}>{size}</h3>
      <p className={styles.hirePeriod}>{hirePeriod} days hire</p>
      <p className={styles.price}>₦{price}</p>

      <div className={styles.features}>
        <span className={allowedOnRoad ? styles.allowed : styles.notAllowed}>
          <FaTruck /> {allowedOnRoad ? "Allowed on Road" : "Not Allowed on Road"}
        </span>
        <span className={heavyWaste ? styles.allowed : styles.notAllowed}>
          <FaExclamationTriangle /> {heavyWaste ? "Heavy Waste Allowed" : "No Heavy Waste"}
        </span>
      </div>

      <button className={styles.selectBtn} onClick={onSelect}>
        Select This Skip
      </button>
    </div>
  );
};

export default SkipCard;
