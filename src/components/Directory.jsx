import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Directory() {
  return (
    <div className='dir'>
      <Link to="/">
      <h5>Home</h5>
      </Link>
      <Link to="/Zelda">
      <h5>Zelda API</h5>
      </Link>
      <Link to="/Me">
      <h5>About Me</h5>
      </Link>
    </div>
  )
}

export default Directory