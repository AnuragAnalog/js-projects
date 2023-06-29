//@ts-check

let inputEL = document.querySelector("#input-el");
let showEL = document.querySelector("#show-el");

function logOut() {
    showEL.textContent = inputEL.value;
}