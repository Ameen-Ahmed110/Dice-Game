import React from "react";
import styles from "./NumberSelector.module.css";
const NumberSelector = ({ selectNumber, setSelectNumber, error, setError }) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  // const [selectNumber, setSelectNumber] = useState();

  const numberSelectorHandler = (value) => {
    setSelectNumber(value);
    setError("");
  };
  return (
    <>
      <div className={styles.container}>
        <span className={styles.error}>{error}</span>
        <div className={styles.mainBox}>
          {arrayNumber.map((value, i) => (
            <main
              className={
                value === selectNumber ? styles.selected : styles.notSelected
              }
              key={i}
              onClick={() => numberSelectorHandler(value)}
            >
              <h1>{value}</h1>
            </main>
          ))}
        </div>
        <p>Select Number</p>
      </div>
    </>
  );
};

export default NumberSelector;
