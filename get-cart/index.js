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

    if (item !== "") {
        push(itemsInDB, item);
    }

    clearInput(inputEL);
});

onValue(itemsInDB, function (dbState) {
    let i, items = Object.values(dbState.val());

    clearPara(pEL);

    for (i = 0; i < items.length; i++) {
        addToPara(pEL, items[i]);
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