import React from "react";
import styles from "./DicePlay.module.css";

const DicePlay = ({toggle}) => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className={styles.content}>
        <h1>DICE GAME</h1>
        <button onClick={toggle}>Play Now</button>
      </div>
    </div>
  );
};

export default DicePlay;
