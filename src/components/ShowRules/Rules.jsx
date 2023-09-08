import React from "react";
import Styles from "./Rules.module.css";
const Rules = () => {
  return (
    <div className={Styles.RulesContainer}>
      <h1>How to play dice game</h1>
      <p>
        Select any number. <br/>Click on dice image. <br/>After click on dice if selected
        number is equal to dice number you will get same point as dice.<br/> If you
        get wrong guess then 2 point will be dedcuted.
      </p>
    </div>
  );
};

export default Rules;
