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
    clearPara(pEL);
    addToPara(pEL, item);
    clearInput(inputEL);
});

onValue(itemsInDB, function (dbState) {
    let item;

    for (item in Object.values(dbState.val())) {
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