import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Directory() {
  return (
    <div className='dir'>
      <Link to="/">
      <h3>Home</h3>
      </Link>
      <Link to='/profile'>
      <h3>Profile</h3>
      </Link>
      <Link to="/">
        <img src="https://clipart-library.com/img/1094286.png" alt="Leones Construction" height="60px" /*style={{backgroundColor:'gray', borderRadius:'5px'}}*/ />
      </Link>
      <Link to='/contact+us'>
      <h3>Contact Us</h3>
      </Link>
      <Link to="/about+us">
      <h3>About Us</h3>
      </Link>
    </div>
  )
}

export default Directory