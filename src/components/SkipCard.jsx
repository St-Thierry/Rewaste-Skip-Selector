import React from "react";
import formatPrice from "../utils/formatPrice";
import styles from "../styles/SkipCard.module.css";

const SkipCard = ({ skip, onSelect }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.skipTitle}>{skip.name}</h3>
      <p className={styles.price}>{formatPrice(skip.price)}</p>
      <p className={styles.duration}>{skip.hirePeriod} days hire</p>
      <button className={styles.selectBtn} onClick={() => onSelect(skip)}>
        Select This Skip
      </button>
    </div>
  );
};

export default SkipCard;
