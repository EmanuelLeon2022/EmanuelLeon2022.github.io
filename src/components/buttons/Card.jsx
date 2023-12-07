import React from 'react'
import '../Card.css'
function Card(props) {
  return (
    <>
    <img className='magic' src={props.currentPic}/>
    </>
  )
}

export default Card
