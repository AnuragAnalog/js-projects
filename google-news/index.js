//@ts-check

let apikey = "cf0188a55b2199a6004b1345cb0a989b";
let inputEL = document.querySelector("#search");
let buttonEL = document.querySelector("#search-btn");
let pEL = document.querySelector("news")

buttonEL.addEventListener("click", function() {
    let articles;
    let searchValue = inputEL.value;
    let url = `https://gnews.io/api/v4/search?q=${searchValue}&lang=en&country=us&max=10&apikey=${apikey}`;

    fetch(url).then(
        response => response.json()
        ).then(function () {
            
    });
});

function resetInput(inputElement) {
    inputElement.value = "";
}