//@ts-check

let drawCard = 0;
let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let hasblackJack = false;
let isAlive = true;
let message = "";
let sum = firstCard + secondCard;
let messageEL = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardsEL = document.querySelector("#cards-el");

function startGame() {
    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Congrats! You've got Blackjack! 🥳";
        hasblackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }

    cardsEL.textContent = "Cards: ";
    cards.forEach((card) => {
        cardsEL.textContent += card + ", ";
    });

    sumEL.textContent = "Sum: " + sum;
    messageEL.textContent = message;
}

function newCard() {
    drawCard = 7;
    cards.push(drawCard);
    sum += drawCard;
    renderGame();
}

console.log(message);
if (hasblackJack) {
    console.log("The cash is your's!");
} else {
    console.log("Do you want to play again?"); 
}