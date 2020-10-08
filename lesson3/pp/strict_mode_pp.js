"use strict";

// SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"]; // *** global var
// RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
//          "10", "Jack", "Queen", "King", "Ace"]; // *** global var
const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
               "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  // allCards = () => { // *** global var
  let allCards = () => {
    // return this.SUITS.reduce((deck, suit) => { // *** global exec context
    //   this.RANKS.forEach(rank => deck.push(`${rank} of ${suit}`)); // *** global exec context
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  // deck = allCards(); // *** global var
  let deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  // for (counter = 0; counter < 0400; counter += 1) {  // *** global var; octal primitive value
  for (let counter = 0; counter < 400; counter += 1) {
    // randomIndex1 = randomCardIndex(); // *** global var
    // randomIndex2 = randomCardIndex(); // *** global var
    // tempCard = deck[randomIndex1]; // *** global var
    let randomIndex1 = randomCardIndex();
    let randomIndex2 = randomCardIndex();
    let tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    // return Math.floor(Math.random() * this.deck.length); // *** global exec context
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());
