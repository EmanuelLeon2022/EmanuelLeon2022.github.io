import React from 'react'
import './Retro.css'
import Directory from './Directory'

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
    }
})
window.addEventListener('keydown', e =>{
    if(e.keyCode === 37){
        Sonic.slow();
    }
    console.log(Sonic.speed)
})
window.addEventListener('keypress', e =>{
    if(e.keyCode === 32){
        Sonic.move();
    }
})

function Retro() {
  return (
    <div className='grade'>
        <Directory/>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h1 className='mot'>{Sonic.name} {Sonic.speed}</h1>
        <img src="" alt="Sonic the Hedgehog" style={{color: 'white',transform: `${Sonic.speed}`, height: '80px'}}/>
    </div>
  )
}

export default Retro