import React from 'react'

const Answers = (props) => {
  return (
    <div className="sideCheck">
      <h2>Did you know the answer?</h2>
      <button className="know"
      onClick={() => props.onknowAnswer(props.card.id)}
      >
        <i className="fa fa-check fa-5x"></i>
      </button >
      <br/><br/>
      <button className="dontKnow">
        <i className="fa fa-times fa-5x"></i>
      </button>
    </div>
  )
}

export default Answers