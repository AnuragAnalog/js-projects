//@ts-check

let sum = 0;
let cards = [];
let message = "";
let isAlive = false;
let hasblackJack = false;
let playerInfo = {
    name: "Anurag",
    chips: 0
}

let messageEL = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardsEL = document.querySelector("#cards-el");
let playerEL = document.querySelector("#player-el");
let playerNameEL = document.querySelector("#player-name");
let playerChipsEL = document.querySelector("#player-chips");

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

    renderGame(sum);
}

function renderGame(sum) {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        hasblackJack = true;
        if (cards.length === 2) {
            playerInfo.chips += 100;
            message = "Congrats! You've got Blackjack! 🥳";
        } else if (cards.length === 3) {
            playerInfo.chips += 50;
            message = "Congrats! You've got Won! 🥳";
        }
    } else {
        isAlive = false;
        playerInfo.chips -= 50;
        message = "You're out of the game! 😭";
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

    renderGame(sum);
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

function validateInfo() {
    console.log(playerNameEL.value, playerChipsEL.value);
    console.log(playerInfo.name, playerInfo.chips);

    if (playerNameEL.value === "") {
        alert("Please enter your name!");
        return;
    }

    if (playerChipsEL.value === "") {
        alert("Please enter the number of chips you have!");
        return;
    }

    playerInfo.name = playerNameEL.value;
    playerInfo.chips = Number.parseInt(playerChipsEL.value, 10);

    playerEL.textContent = playerInfo.name + ": $" + playerInfo.chips;

    playerNameEL.value = "";
    playerChipsEL.value = "";
}

function getRandomCard() {
    return Math.floor(Math.random() * 13) % 10 + 2;
}