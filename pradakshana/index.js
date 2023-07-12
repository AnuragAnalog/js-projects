//@ts-check

let display = false;
let inputEL = document.querySelector("#input-field");
let startBtnEL = document.querySelector("#start-btn");
let ulEL = document.querySelector("#list-ul");

startBtnEL.addEventListener("click", function () {
    if (inputEL.value === "" || display === true) {
        resetInput(inputEL);
        return ;
    }

    let count = Number.parseInt(inputEL.value, 10);
    resetInput(inputEL);

    for (let i = 0; i < count; i++) {
        let liEL = document.createElement("li");
        liEL.innerHTML = i + 1;
        ulEL.append(liEL);
    }
    display = true;
});

function resetInput(inputElement) {
    inputElement.value = "";
}