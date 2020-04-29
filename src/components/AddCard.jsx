import React, { Component } from 'react'

class AddCard extends Component {
  constructor() {
    super()
  this.handleSubmit = this.handleSubmit.bind(this)
}


  handleSubmit(event) {
  event.preventDefault()
  const question = event.target.elements.question.value
  const answer = event.target.elements.answer.value
  const imageLink = event.target.elements.imageLink.value
  const card = {
    id: Number(new Date()),
    question: question,
    answer: answer,
    imageLink: imageLink,
    priority: 5
  }
  if (question && answer) {
    this.props.onAddCard(card)
    // this.props.updateCard()
  }
}

render() {
  return (
    <>
      <h1>Add Card</h1>
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Question" name="question" />
          <input type="text" placeholder="Answer" name="answer" />
          <input type="text" placeholder="Paste your image link here" name="imageLink" />
          <button>Submit</button>
          </form>
      </div>
    </>
    )
  }
}

export default AddCard