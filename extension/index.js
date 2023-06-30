//@ts-check

// chrome://extensions/
let myLeads = [];
const inputEL = document.querySelector("#input-el");
const ulEL = document.querySelector("#ul-el");

const buttonEL = document.querySelector("#button-el");

localStorage.setItem("myleads", "www.awesomelead.com");
console.log(localStorage.getItem("myleads"));
localStorage.clear();

buttonEL.addEventListener("click", function() {
    myLeads.push(inputEL.value);
    inputEL.value = "";
    renderLeads();
});

function renderLeads() {
    ulEL.innerHTML = "";
    myLeads.forEach(function(lead) {
        ulEL.innerHTML += `<li> 
                                <a href=${lead} target="_blank">
                                    ${lead} 
                                </a>
                           </li>`;

        // const li = document.createElement("li");
        // li.textContent = lead;
        // ulEL.append(li);
        // Another way to do it.
    });
}