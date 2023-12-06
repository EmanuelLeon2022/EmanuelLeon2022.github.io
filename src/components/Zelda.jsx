import '../App.css'
import Form from './Form'
import Display from './Display'
import Directory from './Directory'
import Footer from './Footer'
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
        <div className='Form'>
        <h1> &nbsp;  </h1>
        <h1>ZELDA API</h1>
        <p>Here you can look up anything from the hit game</p>
        <p>The Legend of Zelda Breath of the Wild.</p>
        <Form gamesearch={getName} />
        </div>
        <div className='disp'>
        <Display currentName={name} />
        </div>
        <div className='open'>
          <p>As you can see from what is above, this is an API for the Legend of Zelda API. The site is open source meaning anyone can use it, and as a bonus the community that developed it has made so that you do not need to place an API key within it, meaning you can input any search however many times you want. Here is their link if you want to check them out</p>
          <p>&nbsp;</p>
          <p>↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓</p>
          <a href='https://gadhagod.github.io/Hyrule-Compendium-API/#/' target='_blank'><p>Zelda Comendium</p></a>
        </div>
        <div>
          <Display/>
        </div>
        <div className='.feeter'>
        <Footer/>
        </div>
    </div>
  )
}

export default Zelda