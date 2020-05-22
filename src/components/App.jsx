import React, { Component } from 'react';
import CARD_DATA from './card.data.js'
import Card from './Card'
import AddCard from './AddCard'
import DrawButton from './DrawButton'
import Deck from './Deck'
import Header from './Header'
import EditCard from './EditCard'
import Answers from './Answers'
import ResetButton from './ResetButton'
import {Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    
    this.updateCard = this.updateCard.bind(this)
    this.removeCard = this.removeCard.bind(this)
    this.editCard = this.editCard.bind(this)

    this.state = {
      cards: CARD_DATA,
      currentCard: {},
      seenCards: [],
      endOfDeck: false
    }
  }

  UNSAFE_componentWillMount() {
    const currentCards = this.state.cards

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards) {
    const { endOfDeck, seenCards, cards } = this.state
    let card = currentCards[Math.floor(Math.random() * currentCards.length)]
    
    while ((seenCards.includes(card.id)) && !endOfDeck) {
      card = currentCards[Math.floor(Math.random() * currentCards.length)]
    }

    const seen = [...seenCards, card.id]
    const atEnd = endOfDeck || (seen.length === cards.length)

    this.setState({
      endOfDeck: atEnd,
      seenCards: seen,
      currentCard: atEnd ? {} : card
    })

    return card
  }


  updateCard() {
    const currentCards = this.state.cards
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  addCard(cardSubmitted) {
    this.setState(state => ({
      cards: state.cards.concat([cardSubmitted])
    }))
  }

  removeCard(cardRemoved) {
    // console.log(cardRemoved.question)
    console.log(this.state.cards.length)
    if (this.state.cards.length > 1) 
      this.setState((state) => ({
        cards: state.cards.filter(card => card !== cardRemoved)
      
    }))
  }

  editCard(cardModified) {
    let cardsCopy = this.state.cards
    cardsCopy.find(mod => mod.id === cardModified.id).question = cardModified.question
    // console.log(cardsCopy.find(id => id.id === cardModified.id))
    cardsCopy.find(mod => mod.id === cardModified.id).answer = cardModified.answer
    cardsCopy.find(mod => mod.id === cardModified.id).imageLink = cardModified.imageLink
    cardsCopy.find(mod => mod.id === cardModified.id).priority = cardModified.priority
    this.setState({
      cards: cardsCopy
    })
  }

  sendEodNotification() {
    let eodFlag = false
    if (this.state.seenCards.length === this.state.cards.length) eodFlag = true
    return eodFlag

  }


  render() {
    return (
      <>
      <Route exact path='/' component = {Header} />
      <Route exact path="/" render={() => (
          <div className="App">
        <div className="reset">
          <ResetButton />
        </div>
        <div className="cardRow">
              <Card
                // eod={this.state.endOfDeck}
                question={this.state.currentCard.question}
                answer={this.state.currentCard.answer}
                image={this.state.currentCard.imageLink}
              />
               <div className="buttonRow">
              <DrawButton
                drawCard={this.updateCard}
                eod={this.sendEodNotification()}
              />
            </div>
              </div>
              <div className="answers">
              <Answers />
            </div>
        </div>
        )}/>
        <Route path="/AddCard" render={({history}) => (
          <AddCard onAddCard={(addedCard) => {
            this.addCard(addedCard)
            history.push('/')
          }}/>
        )} />
        <Route path="/Decks" render={() => (
          <div className="cardGrid">
            <Deck cards={this.state.cards} onRemoveCard={this.removeCard}/>
          </div>
        )} />
        <Route path="/EditCard/:id" render={(props) => (
          <EditCard cards={this.state.cards} onEditCard={this.editCard} {...props} />
        )} />
       </>
    )
  }
  
}

export default App
