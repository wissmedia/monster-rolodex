import React from 'react'

import { CardDetails } from '../card/CardDetails'

import './CardList.css'

export const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map(monster => (
        <CardDetails key={monster.id} monster={monster} />
      ))}
    </div>
  )
}
