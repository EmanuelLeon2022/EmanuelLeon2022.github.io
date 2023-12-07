import "../App.css";
import { useState } from "react";
// import Card from "./buttons/Card";
import Card from "./buttons/Card";
import cardImages from "./models/cardImg";
import symbols from "./models/symbols";
import Button from './components/buttons/Button';

function Carol() {
  // where our function and state will reside

  const [count, setCount] = useState(0);

  const [currentPic, setCurrentPic] = useState(cardImages[count]);

  const reverseCount = () => {
    setCount(count - 1);
    setCurrentPic(cardImages[count]);
    console.log(count)
  };

  const changeCount = () => {
    setCount(count + 1);
    setCurrentPic(cardImages[count]);
    console.log(count)
  };
  return (
    <div className="App">
      <Card currentCount={count} currentPic={cardImages[count]} />

      <div style={{ display: "flex" }}>
        <Button togglePic={reverseCount} icon={symbols.left} />
        <Button togglePic={changeCount} icon={symbols.right} />
      </div>
    </div>
  );
}

export default Carol;