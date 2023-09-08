import "./App.css";
import DicePlay from "./components/DicePlay/DicePlay";
import { useState } from "react";
import StartPlay from "./components/Play/StartPlay";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };


  return (
    <>
      {isGameStarted ? <StartPlay /> : <DicePlay toggle={toggleGamePlay} />}

    </>
  );
}

export default App;
