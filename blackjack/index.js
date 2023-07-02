//@ts-check

let cards = [];
let hasblackJack = false;
let isAlive = false;
let message = "";
let sum = 0;
let playerInfo = {
    name: "Anurag",
    chips: 150
}

let messageEL = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardsEL = document.querySelector("#cards-el");
let playerEL = document.querySelector("#player-el");

function startGame() {
    if (isAlive) {
        return;
    }

    if (playerInfo.chips === 0) {
        alert("You don't have enough chips to play!");
        return;
    }

    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    playerEL.textContent = playerInfo.name + ": $" + playerInfo.chips;

    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Congrats! You've got Blackjack! 🥳";
        hasblackJack = true;
        playerInfo.chips += 50;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
        playerInfo.chips -= 50;
    }

    playerEL.textContent = playerInfo.name + ": $" + playerInfo.chips;

    cardsEL.textContent = "Cards: ";
    cards.forEach((card) => {
        cardsEL.textContent += card + ", ";
    });

    sumEL.textContent = "Sum: " + sum;
    messageEL.textContent = message;

    if (hasblackJack) {
        alert("You won 50 chips! HOORAYY!!!");
    }
}

function newCard() {
    let drawCard = getRandomCard();

    if (!isAlive || hasblackJack) {
        return;
    }

    cards.push(drawCard);
    sum += drawCard;

    renderGame();
}

function resetGame() {
    cards = [getRandomCard(), getRandomCard()];
    sum = cards[0] + cards[1];
    isAlive = false;
    hasblackJack = false;

    messageEL.textContent = "Want to play a round?";
    cardsEL.textContent = "Cards: ";
    sumEL.textContent = "Sum: ";
}

function getRandomCard() {
    return Math.floor(Math.random() * 13) % 9 + 2;
}