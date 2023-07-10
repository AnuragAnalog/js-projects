//@ts-check

// chrome://extensions/
let storageLeads = [];
const inputEL = document.querySelector("#input-el");
const ulEL = document.querySelector("#ul-el");
const buttonEL = document.querySelector("#button-el");
const deleteButtonEL = document.querySelector("#delete-el");
const saveEL = document.querySelector("#tab-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    storageLeads = leadsFromLocalStorage;
    renderLeads(storageLeads);
}

buttonEL.addEventListener("click", function() {
    storageLeads.push(inputEL.value);
    inputEL.value = "";

    localStorage.setItem("myLeads", JSON.stringify(storageLeads));
    storageLeads = JSON.parse(localStorage.getItem("myLeads"));

    if (storageLeads) {
        renderLeads(storageLeads);
    }
});

deleteButtonEL.addEventListener("dblclick", function() {
    storageLeads = [];
    localStorage.clear();
    ulEL.innerHTML = "";
});

saveEL.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        storageLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(storageLeads));
        renderLeads(storageLeads);
    });
});

function renderLeads(storageLeads) {
    ulEL.innerHTML = "";
    storageLeads.forEach(function(lead) {
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