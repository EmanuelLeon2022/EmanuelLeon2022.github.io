import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='feet'>
        <a href='tel: 0000000000'><h3>Phone</h3></a>
        <a href='mailto:gmail@chucknorris.com'><h3>Email</h3></a>
        <Link to="/Unknown">
        <p style={{color:'#0055ff'}}>NOTHING</p>
        </Link>
        <a href='http://www.linkedin.com/in/emanuel-leon-vargas-751720296' target="_blank"><h3>LinkedIn</h3></a>
        <a href='https://github.com/EmanuelLeon2022' target="_blank"><h3>GitHub</h3></a>
    </div>
  )
}

export default Footer