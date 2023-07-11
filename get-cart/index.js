//@ts-check

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://get-cart-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const db = getDatabase(app);
const itemsInDB = ref(db, "items");

let inputEL = document.querySelector("#input-field");
let btnEL = document.querySelector("#add-btn");
let ulEL = document.querySelector("#items");

btnEL.addEventListener("click", function () {
    let item = inputEL.value;

    if (item !== "") {
        push(itemsInDB, item);
    }

    clearInput(inputEL);
});

onValue(itemsInDB, function (dbState) {
    let i, items = Object.entries(dbState.val());

    clearPara(ulEL);

    for (i = 0; i < items.length; i++) {
        addToPara(ulEL, items[i]);
    }
});

function clearInput(inputElement) {
    inputElement.value = "";
}

function addToPara(ulElement, itemPair) {
    let newEL = document.createElement("li");
    newEL.textContent = itemPair[1];
    ulElement.append(newEL);

    newEL.addEventListener("click", function () {
        let fullPath = ref(db, `items/${itemPair[0]}`);

        remove(fullPath);
    });
}

function clearPara(ulElement) {
    ulElement.textContent = "";
}