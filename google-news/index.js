//@ts-check

let apikey = "cf0188a55b2199a6004b1345cb0a989b";
let inputEL = document.querySelector("#search");
let buttonEL = document.querySelector("#search-btn");
let pEL = document.querySelector("#news");
let ulEL = document.querySelector("#ul");

buttonEL.addEventListener("click", function() {
    let articles;
    let searchValue = inputEL.value;
    let url = `https://gnews.io/api/v4/search?q=${searchValue}&lang=en&country=us&max=100&apikey=${apikey}`;

    fetch(url).then(
        response => response.json()
        ).then(function (data) {
            articles = data.articles;
            pEL.textContent = `There are a total of ${articles.length} articles on ${searchValue}`;

            for (let i = 0; i < articles.length; i++) {
                console.log(articles[i].title);
            }
    });
});

function resetInput(inputElement) {
    inputElement.value = "";
}

function createLi(text) {
    let li = document.createElement("li");
    li.textContent = text;

    return li;
}