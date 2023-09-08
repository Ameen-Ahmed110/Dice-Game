import React from "react";
import TotalScore from "../TotalScore/TotalScore";
import NumberSelector from "../NumberSelector/NumberSelector";
import styles from "./StartPlay.module.css";
import RolleDice from "../RolleDcie/RolleDice";
import { useState } from "react";
import Rules from "../ShowRules/Rules";
const StartPlay = () => {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    if (!selectNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }
    setSelectNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  return (
    <main className={styles.container}>
      <div className={styles.topSection}>
        <TotalScore score={score} />
        <NumberSelector className ={styles.numberSelector}
          error={error}
          setError={setError}
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <RolleDice currentDice={currentDice} rollDice={rollDice} />
      <div className={styles.btns}>
        <button onClick={resetScore} className={styles.reset}>Reset Score</button>
        <button onClick={() =>setShowRules((prev)=>!prev)}>
          {showRules ? "Hide" : "Show"} Rules </button>
      </div>
      {showRules && <Rules />}
    </main>
  );
};

export default StartPlay;
