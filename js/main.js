var cards = ["king","king","queen","queen"];

var cardsInPlay = [];

var cardOne = cards[0];

var cardTwo = cards[3];

cardsInPlay.push(cardOne);

console.log("the user flipped the king");

console.log("user flipped queen");

cardsInPlay.push(cardTwo);

console.log("user flipped king");

if (cardsInPlay.length === 2){
    console.log("Yup we got 2");

}