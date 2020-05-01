import React from 'react'
import ListCard from './ListCard'
import {Link} from 'react-router-dom'

function Decks(props) {
  return <div className="cardGrid">
    <Link className="backToApp" to="/"></Link>
    <br /><br />
    {props.cards.map((card) => <ListCard key={card.id} card={card} onRemoveCard={props.onRemoveCard} />)}
    <Link className ="backToApp" to="/"></Link>
    </div>
}

export default Decks