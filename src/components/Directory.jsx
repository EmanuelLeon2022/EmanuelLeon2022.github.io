import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Directory() {
  return (
    <div className='dir'>
      <Link to="/">
      <h5 style={{fontFamily: 'face'}}>Home</h5>
      </Link>
      <Link to="/Zelda">
      <h5 style={{fontFamily: 'face'}}>Zelda API</h5>
      </Link>
      <Link to="/Me">
      <h5 style={{fontFamily: 'face'}}>About Me</h5>
      </Link>
    </div>
  )
}

export default Directory