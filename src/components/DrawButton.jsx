import React, { Component } from 'react'
// import './DrawButton.css'
import {Link} from 'react-router-dom'

class DrawButton extends Component{
  constructor(props) {
    super(props)

    this.drawCard = this.drawCard.bind(this)
  }

  drawCard() {
    this.props.drawCard()
  }

  render(props) {
    return (
      <>
        <div className="buttonContainer">
          <button className="btn" onClick={this.drawCard}>Draw Card</button>
        </div>

        <div className="controls">
          <Link className='addIcon' to='/AddCard'></Link>
          <Link className='viewDeck' to='/Decks'></Link>
        </div>
      </>
    )
  }
}

export default DrawButton