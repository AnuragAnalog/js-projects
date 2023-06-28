//@ts-check

let num1 = 8;
let num2 = 2;

// Extracting the elements
num1EL = document.getElementById("num1-el");
num2EL = document.getElementById("num2-el");

num1EL.textContent = num1;
num2EL.textContent = num2;

function add() {
    let sum = num1 + num2;
    document.getElementById("sum-el").textContent = "Sum: " + sum;
}

function subtract() {
    let diff = num1 - num2;
    document.getElementById("sum-el").textContent = "Difference: " + diff;
}

function divide() {
    let div = num1 / num2;
    document.getElementById("sum-el").textContent = "Division: " + div;
}

function multiply() {
    let prod = num1 * num2;
    document.getElementById("sum-el").textContent = "Multiply: " + prod;
}