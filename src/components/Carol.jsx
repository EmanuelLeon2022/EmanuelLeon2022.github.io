import "../App.css";
import { useState } from "react";
import Card from "./buttons/Card";
import cardImages from "./models/cardImg";
import symbols from "./models/symbols";
import Button from './buttons/Button';

//This is from Jordan's example on how to setup a carousel.
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
//   const resetCount =() =>{
//         setCount(count=0);
//         setCurrentPic(cardImages[count]);
//         console.log(count);
//   }
  return (
    <div className="App">
      <Card currentCount={count} currentPic={cardImages[count]} />

      <div style={{ display: "flex" }}>
        <Button togglePic={reverseCount} icon={symbols.left} />
        <Button togglePic={changeCount} icon={symbols.right} />
        {/* <Button togglePic={resetCount} icon={symbols.hiyaa} /> */}
      </div>
    </div>
  );
}

export default Carol;