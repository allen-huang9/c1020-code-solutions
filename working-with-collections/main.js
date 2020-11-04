/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

var group = [
  {
    name: 'player 1',
    hand: []
  },
  {
    name: 'player 2',
    hand: []
  },
  {
    name: 'player 3',
    hand: []
  },
  {
    name: 'player 4',
    hand: []
  }
];

var deck = [];
var suit = '';
var rank = '';

for (var i = 0; i < 4; i++) {
  if (i === 0) {
    suit = 'diamond';
  } else if (i === 1) {
    suit = 'club';
  } else if (i === 2) {
    suit = 'heart';
  } else if (i === 3) {
    suit = 'spade';
  }

  for (var j = 1; j < 14; j++) {
    if (j === 1) {
      rank = 'Ace';
    } else if (j === 11) {
      rank = 'Jack';
    } else if (j === 12) {
      rank = 'Queen';
    } else if (j === 13) {
      rank = 'King';
    } else {
      rank = j;
    }
    var card = {
      rank: '',
      suit: ''
    };
    card.rank = rank;
    card.suit = suit;
    deck.push(card);
  }
}

// console.log(deck);

deck = _.shuffle(deck);

// console.log(deck);

function score(cards) {
  var score = 0;
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].rank === 'Ace') {
      score += 11;
    } else if (cards[i].rank === 'Jack' || cards[i].rank === 'Queen' ||
    cards[i].rank === 'King') {
      score += 10;
    } else {
      score += rank;
    }
  }

  return score;
}
