import styles from "./RolleDice.module.css";
const RolleDice = ({currentDice, rollDice}) => {
 
  return (
    <div className={styles.diceContainer} onClick={rollDice}>
      <div className={styles.diceImg}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to Roll</p>
    </div>
  );
};

export default RolleDice;
