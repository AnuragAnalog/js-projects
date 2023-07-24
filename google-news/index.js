//@ts-check

let apikey = "cf0188a55b2199a6004b1345cb0a989b";
let inputEL = document.querySelector("#search");
let buttonEL = document.querySelector("#search-btn");
let pEL = document.querySelector("#news");
let divEL = document.querySelector("#news-container");

buttonEL.addEventListener("click", function() {
    let articles, newsBlock;
    let searchValue = inputEL.value;
    let url = `https://gnews.io/api/v4/search?q=${searchValue}&lang=en&country=us&max=100&apikey=${apikey}`;

    fetch(url).then(
        response => response.json()
        ).then(function (data) {
            articles = data.articles;
            pEL.textContent = `There are a total of ${articles.length} articles on ${searchValue}`;

            for (let article in articles) {
                newsBlock = createNewsBlock(article);
                divEL.append(newsBlock);
            }
    });
});

function resetInput(inputElement) {
    inputElement.value = "";
}

function createNewsBlock(article) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let b = document.createElement("b");
    let p = document.createElement("p");
    let br = document.createElement("br");
    let a = document.createElement("a");

    img.src = article.image;
    img.alt = article.title;
    b.textContent = article.title;
    p.textContent = article.description;
    a.href = article.url;
    a.textContent = "Read More";

    div.append(img);
    div.append(b);
    div.append(br);
    div.append(br);
    div.append(p);
    div.append(br);
    div.append(a);

    return div;
}

{/* <p id="news">
<b> Headlines of the day </b> <br><br>
Some Random for texting the working of my css element 
<br> <a href="www.google.com"> Read More </a> 
</p> */}