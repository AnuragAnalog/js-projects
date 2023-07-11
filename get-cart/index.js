//@ts-check

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://get-cart-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const db = getDatabase(app);
const itemsInDB = ref(db, "items");

let inputEL = document.querySelector("#input-field");
let btnEL = document.querySelector("#add-btn");
let pEL = document.querySelector("#items");

btnEL.addEventListener("click", function () {
    let item = inputEL.value;

    push(itemsInDB, item);
    clearInput(inputEL);
});

onValue(itemsInDB, function (dbState) {
    let items = Object.values(dbState.val());
    console.log(items);

    clearPara(pEL);

    for (let item in items) {
        addToPara(pEL, item);
    }
});

function clearInput(inputElement) {
    inputElement.value = "";
}

function addToPara(PElement, item) {
    PElement.textContent += item + " ";
}

function clearPara(PElement) {
    PElement.textContent = "";
}