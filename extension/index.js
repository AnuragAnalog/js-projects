//@ts-check

let myLeads = [];
const inputEL = document.querySelector("#input-el");
const ulEL = document.querySelector("#ul-el");

const buttonEL = document.querySelector("#button-el");

buttonEL.addEventListener("click", function() {
    myLeads.push(inputEL.value);
    inputEL.value = "";
    renderLeads();
});

function renderLeads() {
    ulEL.innerHTML = "";
    myLeads.forEach(function(lead) {
        ulEL.innerHTML += "<li>" + lead + "</li>";

        // const li = document.createElement("li");
        // li.textContent = lead;
        // ulEL.append(li);
        // Another way to do it.
    });
}