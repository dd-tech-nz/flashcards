import React from 'react'
import ListCard from './ListCard'
import {Link} from 'react-router-dom'

function Decks(props) {
  return <div className="cardGrid">
    {props.cards.map((card) => <ListCard key={card.id} card={card} onRemoveCard={props.onRemoveCard} />)}
    <Link className ="backToApp" to="/">Back </Link>
    </div>
}

export default Decks