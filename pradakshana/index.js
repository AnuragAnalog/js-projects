//@ts-check

let display = false;
let inputEL = document.querySelector("#input-field");
let startBtnEL = document.querySelector("#start-btn");
let ulEL = document.querySelector("#list-ul");

startBtnEL.addEventListener("click", function () {
    let count, done = 0;

    if (inputEL.value === "" || display === true) {
        resetInput(inputEL);
        return ;
    } else {
        done = 0;
        ulEL.innerHTML = "";
    }

    count = Number.parseInt(inputEL.value, 10);
    resetInput(inputEL);

    for (let i = 0; i < count; i++) {
        let liEL = document.createElement("li");
        liEL.setAttribute("id", `item-${i + 1}`);

        liEL.innerHTML = i + 1;
        ulEL.append(liEL);
    }

    for (let i = 0; i < count; i++) {
        let liEL = document.querySelector(`#item-${i + 1}`);

        liEL.addEventListener("click", function () {
            liEL.setAttribute("style", "background-color: #ff0000; color: #ffffff;");
            done += 1;
            console.log(done);
            if (done === count) {
                display = false;
            }
        });
    }

    display = true;
});

function resetInput(inputElement) {
    inputElement.value = "";
}