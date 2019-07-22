var cards = [ 
  
    {
    rank: "queen",
    suit: "hearts",
    cardImage:"images/queen-of-hearts.png"
    },{
        rank: "queen",
        suit: "diamonds",
        cardImage:"images/queen-of-diamonds.png"
    },{
        rank: "king"
        suit: "hearts",
        cardImage:"images/king-of-hearts.png"
    },{
        rank: "king",
        suit: "diamonds",
        cardImage:"images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];
//this needs to be a function that says when card is flipped 
function flipCards() {
 console.log("User flipped" + cards[cardId].rank);
}
cardsInPlay.push(cards.rank);

console.log("user flipped" + cards.rank + "of" + cards.suit);

console.log("user flipped queen");

console.log("user flipped king");

if (cardsInPlay.length === 2){
console.log("Yup we got 2");

}else if(cardsInPlay[0] === cardsInPlay[1]) {

console.log('alert you got a match');

}else if (cardsInPlay[0] !== cardsInPlay[1]){
console.log("try again");

}