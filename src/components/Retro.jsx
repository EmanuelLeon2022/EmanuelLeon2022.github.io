import React from 'react'
import './Retro.css'
import Sprites from './models/Sprites'
import { useState } from 'react'
import Directory from './Directory'

function Retro() {
    const [count, setSprite] = useState(0);

  const [currentSprite, setCurrentSprite] = useState(Sprites[count]);
  
  const idle = () =>{
    setCurrentSprite(Sprites[0])
  }
  const run = () =>{
    setCurrentSprite(Sprites[1])
    // console.log(count)
  }
  const push = () =>{
    setCurrentSprite(Sprites[2])
    // console.log(count)
  }
  const taunt = () =>{
    setCurrentSprite(Sprites[3])
    // console.log(count)
  }
  class person{
    constructor(name){
        this.name = name
        this.speed = 0
    }
    move(){
        this.speed ++
    }
    slow(){
        this.speed --
    }
}

const Sonic = new person('Sonic')

window.addEventListener('keydown', e =>{
    if(e.keyCode === 39){
        Sonic.move();
        run();
    }
})
window.addEventListener('keydown', e =>{
    if(e.keyCode === 37){
        Sonic.slow();
        push();
    }
})
window.addEventListener('keydown', e =>{
    if(e.keyCode === 40){
        taunt();
    }
})
console.log(Sonic.speed)
  return (
    <div className='grade'>
        <Directory/>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <img src={currentSprite} alt="Sonic the Hedgehog" style={{height:'100px', transform: `translateX${Sonic.speed}`}}/>
    </div>
  )
}

export default Retro