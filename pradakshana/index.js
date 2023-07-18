//@ts-check

let resetBtnEL = null, display = false;
let inputEL = document.querySelector("#input-field");
let startBtnEL = document.querySelector("#start-btn");
let ulEL = document.querySelector("#list-ul");
let divEL = document.querySelector(".main-container");

startBtnEL.addEventListener("click", function () {
    let i, count, done = 0;

    if (inputEL.value === "" || display === true) {
        resetInput(inputEL);

        return ;
    } else {
        done = 0;
        ulEL.innerHTML = "";
    }

    count = Number.parseInt(inputEL.value, 10);
    resetInput(inputEL);

    for (i = 0; i < count; i++) {
        let liEL = document.createElement("li");
        liEL.setAttribute("id", `item-${i + 1}`);

        liEL.innerHTML = i + 1;
        ulEL.append(liEL);
    }

    for (i = 0; i < count; i++) {
        let liEL = document.querySelector(`#item-${i + 1}`);

        liEL.addEventListener("click", function () {
            liEL.setAttribute("style", "background-color: #30c023; color: #ffffff;");
            done += 1;
            console.log(done);

            if (done === count) {
                // resetBtnEL = addButton(divEL);
                display = false;
            }
        });
    }

    if (resetBtnEL !== null) {
        resetBtnEL.addEventListener("click", function () {
 
            ulEL.innerHTML = "";
            done = 0;
        });
    }

    display = true;
});

function addButton(divElement) {
    let button, resetButton;

    button = document.createElement("button");
    button.setAttribute("id", "reset-btn");
    button.textContent = "Start Over";
    divElement.append(button);

    resetButton = document.querySelector("#reset-btn");

    return resetButton;
}

function resetInput(inputElement) {
    inputElement.value = "";
}