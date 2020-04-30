import React from 'react'
import {Link} from 'react-router-dom'

function ListCard(props) {
  const card = props.card
  return<figure className="figure">
    <img className="picture" src={card.imageLink} alt={card.question} />
    <figcaption><p>{card.question}</p></figcaption>
    <p>{card.answer}</p>
    <Link className ="edit-cards" to="/EditCard/">Edit Card</Link>
    <div className = "button-container">
    <button className="btn" onClick={() => {
      props.onRemoveCard(card)
      }}>Remove Card</button>
      
      
    </div>
    </figure>
}

export default ListCard