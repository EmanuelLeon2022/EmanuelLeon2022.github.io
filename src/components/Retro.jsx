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
  }
  const push = () =>{
    setCurrentSprite(Sprites[2])
  }
  const taunt = () =>{
    setCurrentSprite(Sprites[3])
  }
  class person{
    constructor(name){
        this.name = name
        this.speed = 0
    }
    move(){
        this.speed ++
    }
}

const Sonic = new person('Sonic')

//Sonic's movement key
window.addEventListener('keydown', e =>{
    if(e.keyCode === 39){
        Sonic.move();
        console.log(Sonic.speed);
        push();
    }
})
//This registers keyup as the idle animation
window.addEventListener('keyup', e =>{
  if(e.keyCode === 39){
      idle();
  }
})

window.addEventListener('keydown', e =>{
    if(e.keyCode === 38){
        taunt();
    }
})
window.addEventListener('keyup', e =>{
  if(e.keyCode === 38){
      idle();
  }
})
  return (
    <div className='grade'>
      <Directory />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h1 style={{fontFamily: 'face'}}>Emanuel's Cooler Resume</h1>
      <div className='steam' style={{ position: 'relative', transform: `translateX(${Sonic.speed})` }}>
        <img src={currentSprite} alt="Sonic the Hedgehog" style={{ height: '120px'}} />
        <div className='prof'>
          <h1 style={{fontFamily: 'face', color: 'white'}}>Professional Summary</h1>
          <p> A rising software engineer with extensive training in Javascript(ES6), HTML5 & CSS3, React, and SQL. Able to utilize PostgreSQL, Git, Github, Node.js, set up firewalls, and databases. Experience in problem solving with a background in construction, and some knowledge in mechanical engineering. Solution drive candidate who is seeking to join a software engineering team within an organization.</p>
        </div>
        </div>
        <h2>&nbsp;</h2>
        <div className='hyrule'>
          <img src="" alt="" />
        <div className='exp'>
          <h1 style={{fontFamily: 'face', color: 'white'}}>Professional Experience</h1>
          <p>&nbsp;</p>
          <div>
          <h3 style={{fontFamily: 'sans-serif'}}>Leones Construction - Construction Worker  - Pittsburgh, PA 06/2023 - 08/2023</h3>
          <p>&nbsp;</p>
          <p style={{fontFamily: 'cursive'}}> Drywall Installation - requires measurement of the workspace, framing 2x4 beams, and drilling the drywall onto the frame to keep it locked in place. Once that is complete, the wall needs to be taped (a process in which you use joint compound to seal crevices in the wall), then painted with a coat of primer.</p>
          <p>&nbsp;</p>
          <p style={{fontFamily: 'cursive'}}> Decking Installation - requires measurement of where the platform will be placed, placing multiple 2x8 boards in a row form and jointing them with solid brackets and decking screws, and lastly pacing out the decking floor boards in a way where they are properly spaced between to walk on.</p>
        </div>
        <p>&nbsp;</p>
        <div>
          <h3 style={{fontFamily: 'sans-serif'}}> Cornerstone Christian Preparatory Academy- Custodial - Pittsburgh, PA 05/2023 - 06/2023</h3>
          <p>&nbsp;</p>
          <p style={{fontFamily: 'cursive'}}> School maintenance- the job was restocking the school bathrooms, restocking classroom cleaning supplies, and cleaning up cafeterias. Cataloging items - required me to identify what items were in stock such as toilet paper, paper towels, soap, rags and record what items were needed.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Retro