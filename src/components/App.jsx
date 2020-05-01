import React, { Component } from 'react';
import '../App.css'
import Card from './Card'
import AddCard from './AddCard'
import DrawButton from './DrawButton'
import Deck from './Deck'
import Header from './Header'
import EditCard from './EditCard'
import {Route} from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    
    this.updateCard = this.updateCard.bind(this)
    this.removeCard = this.removeCard.bind(this)
    this.editCard = this.editCard.bind(this)

    this.state = {
      cards: [{
        id: 1,
        question: 'What is a higher order function?',
        answer: 'Function that returns a function or recieves a function as an argument.',
        imageLink: 'https://lh6.googleusercontent.com/proxy/J8RpWcsFH4gxd7CAcCxy2DyqPnQe1keePlDYRGbZmfr9GoIGN00eL4bDSfSv5kDaPMRDr1DSJ0cVRzcXFs6Ulo3G4n38PNw2rKo55hc0jwfMlXx8ZP_A4Z5h',
        priority: 5,
      },{
        id: 2,
        question: 'What is a pure function?',
        answer: 'Function that does not access the DOM or global variables which always returns the same result for given parameters',
        imageLink: 'https://images.ctfassets.net/wetfygr1eqh0/J1PFSPjxWmsk8iaOUi02O/3c2e988206cd3c7ff5186038820df102/Completion.png?w=400&q=50',
      },{
        id: 3,
        question: 'What is immutablity?',
        answer: 'When an object or an array does not get mutated when being passed to a function',
        imageLink: 'https://miro.medium.com/max/600/1*2N0l3bLqaBgmOSIay-uc5w.png',
        priority: 5,
      }],
      currentcard: {}
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
    let card = currentCards[Math.floor(Math.random() * currentCards.length)]
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
    // let cardsCopy = JSON.parse(JSON.stringify(this.state.cards))
    let cardsCopy = this.state.cards
    cardsCopy.find(mod => mod.id === cardModified.id).question = cardModified.question
    // console.log(cardsCopy.find(id => id.id === cardModified.id))
    cardsCopy.find(mod => mod.id === cardModified.id).answer = cardModified.answer
    cardsCopy.find(mod => mod.id === cardModified.id).imageLink = cardModified.imageLink
    cardsCopy.find(mod => mod.id === cardModified.id).priority = cardModified.priority
    this.setState({
      cards: cardsCopy
    })
    console.log('cards', this.state)
  }


  render() {
    return (
      <>
      <Route path='/' component = {Header} />
      <Route exact path="/" render={() => (
      <div className="App">
        <div className="cardRow">
          <Card question={this.state.currentCard.question}
                answer={this.state.currentCard.answer}
                image={this.state.currentCard.imageLink}
            />
            </div>
          <div className="buttonRow">
            <DrawButton drawCard={this.updateCard} />
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
        )}/>
       </>
    )
  }
  
}

export default App
