import React from 'react'

function ListCard(props) {
  const card = props.card
  return<figure className="figure">
    <img className="picture" src={card.imageLink} alt={card.question} />
    <figcaption><p>{card.question}</p></figcaption>
    <p>{card.answer}</p>
    <div className = "button-container">
    <button className="btn" onClick={() => {
      props.onRemoveCard(card)
      }}>Remove Card</button>
      <button className="btn">Edit Card</button>
      
    </div>
    </figure>
}

export default ListCard