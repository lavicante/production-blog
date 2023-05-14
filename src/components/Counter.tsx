import React, { useState } from "react";
import styles from "./style.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.counter}>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};
