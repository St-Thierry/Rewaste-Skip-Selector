import React, { useContext } from "react";
import { SkipContext } from "../context/SkipContext";
import styles from "../styles/Checkout.module.css";

const Checkout = () => {
  const { selectedSkip } = useContext(SkipContext);

  if (!selectedSkip) {
    return <p className={styles.error}>No skip selected. Please choose a skip first.</p>;
  }

  return (
    <div className={styles.checkout}>
      <h2>Checkout</h2>
      <div className={styles.details}>
        <p><strong>Skip Size:</strong> {selectedSkip.size}</p>
        <p><strong>Hire Period:</strong> {selectedSkip.hirePeriod} days</p>
        <p><strong>Price:</strong> ₦{selectedSkip.price}</p>
      </div>
      <button className={styles.payBtn}>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
