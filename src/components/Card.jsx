import React from 'react'

// import './Card.css'

const Card = (props) => {
  // if (props.eod) {
  //   return (
  //     <div className="card-container">
  //       <div className="card">
  //         <div className="front">
  //           <div className="question">End of Deck</div>
  //         </div>
  //         <div className="back">
  //           <div className="answer">End of deck</div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // } else {
    return (
      <div className="card-container">
        <div className="card">
          <div className="front">
            <div className="question">{props.question}</div>
            <div className="image">
              <img src={props.image} alt='graphic not available' />
            </div>
          </div>
          <div className="back">
            <div className="answer">{props.answer}</div>
          </div>
        </div>
      </div>
    )
  
}

export default Card