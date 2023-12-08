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

  // const reverseCount = () => {
  //   setCount(count - 1);
  //   setCurrentPic(cardImages[count]);
  //   console.log(count)
  //   if(count<=0){
  //       setCount(count == 5);
  //       setCurrentPic(cardImages[count])
  //   }
  // };
  const reverseCount = () => {
    setCount(count - 1);
    setCurrentPic(cardImages[count]);
    console.log(count)
    if(count<=-1 && count>=5){
        setCount(count == -1);
        setCurrentPic(cardImages[count])
    }
  };

  const changeCount = () => {
    setCount(count + 1);
    setCurrentPic(cardImages[count]);
    console.log(count)
    if(count>=5){
        setCount(count == 0);
        setCurrentPic(cardImages[count])
    }
  };
  
  return (
    <div className="App">
      <Card currentCount={count} currentPic={cardImages[count]} />

      <div className="buton">
        {/* <Button className='lb' togglePic={reverseCount} icon={symbols.left} /> */}
        <div className='lb'>
        <Button togglePic={reverseCount} icon={symbols.left}/>
        </div>
        <div className='rb'>
        <Button togglePic={changeCount} icon={symbols.right} />
        </div>
      </div>
    </div>
  );
}

export default Carol;