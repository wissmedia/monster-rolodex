import React from 'react'
import './CardDetails.css'

export const CardDetails = (props) => {
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`} alt="monster" />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  )
}