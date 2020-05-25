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
    if (this.props.eod) {
      return (
        <>
          <div className="buttonContainer"><Link className='addIcon' to='/AddCard'></Link>
          
            <button className="btn-eod">End of Deck</button>
            <Link className='viewDeck' to='/Decks'></Link>
          </div>

          <div className="controls">
          
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="buttonContainer"><Link className='addIcon' to='/AddCard'></Link>
          
            <button className="btn" onClick={this.drawCard}>Draw Card</button>
            <Link className='viewDeck' to='/Decks'></Link>
          </div>

          <div className="controls">
          
          </div>
        </>
      )
    }
  }
}

export default DrawButton