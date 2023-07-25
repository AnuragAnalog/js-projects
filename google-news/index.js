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
                newsBlock = createNewsBlock(articles[article]);
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

    div.setAttribute("id", "news-block");
    console.log(article.image);

    img.src = article.image;
    img.alt = article.title;
    img.onerror = function() {
        this.onerror = null;
        this.src = "./gnews-default.png";
    }
    img.setAttribute("id", "news-img");

    b.textContent = article.title;
    p.setAttribute("id", "news-info");

    a.href = article.url;
    a.textContent = "Read More";

    p.append(b);
    p.append(br);
    p.append(article.description);
    p.append(br);
    p.append(a);
    div.append(img);
    div.append(p);

    return div;
}