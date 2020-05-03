import React from 'react'

const Answers = (props) => {
  return (
    <div>
      <h2>Did you know the answer?</h2>
      <button class="know">
        <i class="fa fa-check fa-5x"></i>
      </button>
      <br/><br/>
      <button class="dontKnow">
        <i class="fa fa-times fa-5x"></i>
      </button>
    </div>
  )
}

export default Answers