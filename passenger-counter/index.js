//@ts-check

let countEL = document.getElementById("count-el");
let count = Number.parseInt(countEL.innerText, 10);

let savedEL = document.getElementById("saved-el");
let saved = "Previous entries: ";

// Increment the count variable
function increment() {
    count = count + 1;
    countEL.innerText = count;
}

// Save the count to the page
function save() {
    saved += count.toString() + " - ";
    savedEL.textContent = saved;
    reset();
}

// Reset the count to 0
function reset() {
    count = 0;
    countEL.innerText = count;
}