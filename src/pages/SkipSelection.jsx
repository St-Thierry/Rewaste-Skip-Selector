import React, { useContext } from "react";
import SkipCard from "../components/SkipCard";
import { SkipContext } from "../context/SkipContext";
import styles from "../styles/SkipSelection.module.css";

const SkipSelection = () => {
  const { skips, selectSkip } = useContext(SkipContext);

  return (
    <div className={styles.container}>
      <h2>Select Your Skip</h2>
      <div className={styles.skipGrid}>
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            size={skip.size}
            hirePeriod={skip.hirePeriod}
            price={skip.price}
            allowedOnRoad={skip.allowedOnRoad}
            heavyWaste={skip.heavyWaste}
            onSelect={() => selectSkip(skip)}
          />
        ))}
      </div>
    </div>
  );
};

export default SkipSelection;
