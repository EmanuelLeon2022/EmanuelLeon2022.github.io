import '../App.css'
import Form from './Form'
import Display from './Display'
import Directory from './Directory'
import { useState } from 'react'

function Zelda() {
    const [name, setName] = useState(null)

    // Functions
  const getName = async(searchterm) =>{
    const response = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${searchterm}`)
    const dot = await response.json()

    setName(dot);
    console.log(dot)
  }

  return (
    <div className='zelda'>
        <Directory/>
        <h1>ZELDA API</h1>
        <div>
        <p>Here you can look up anything from the </p>
        <Form gamesearch={getName} />
        <div className='disp'>
        <Display currentName={name} />
        </div>
        </div>
    </div>
  )
}

export default Zelda