//@ts-check

let firstCard = 10;
let secondCard = 4;
let hasblackJack = false;
let isAlive = true;
let message = "";
let sum = firstCard + secondCard;
let messageEL = document.getElementById("message-el");

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Congrats! You've got Blackjack! 🥳";
        hasblackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }

    messageEL.textContent = message;
}

console.log(message);
if (hasblackJack) {
    console.log("The cash is your's!");
} else {
    console.log("Do you want to play again?"); 
}