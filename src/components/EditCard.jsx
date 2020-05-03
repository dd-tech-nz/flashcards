import React, { Component } from 'react'

class EditCard extends Component {
  constructor() {
    super()
    this.handleEdit = this.handleEdit.bind(this)
    
  }

  handleEdit(event) {
    event.preventDefault()
    const question = event.target.elements.question.value
    const answer = event.target.elements.answer.value
    const imageLink = event.target.elements.imageLink.value
    const priority = event.target.elements.priority.value

    const card = {
      id: Number(this.props.match.params.id),
      question: question,
      answer: answer,
      imageLink: imageLink,
      priority: priority
    }
    this.props.onEditCard(card)
    this.props.history.push('/')
  }

  render() {
    const id = Number(this.props.match.params.id)
    const card = this.props.cards.find(x => x.id === id)
    return (
      <>
        <h1>Edit Card</h1>
        <div className='form edit-card'>
          <form onSubmit={this.handleEdit}>
            <input type="text" placeholder="Question" name="question" defaultValue={card.question}/>
            <input type="text" placeholder="Answer" name="answer" defaultValue={card.answer}/>
            <input type="text" placeholder="Paste your image link here" name="imageLink" defaultValue={card.imageLink}/>
            <input type="text" placeholder="Priority 1-5" name="priority" defaultValue={card.priority}/>
            <button>Submit</button>
          </form>
        </div>
      </>
    )
  }
}

export default EditCard
