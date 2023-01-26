BASE_URL = "https://newsapi.org/v2/everything?q=good&title=happy&pageSize=12&from=2023-01-01&sortby=relevancy&language=en&apiKey=0190c395683c4d4b9efa1fafaabb0836";

const goodNewsImage = document.getElementById("good");
goodNewsImage.addEventListener("click", async (event)=> {
    event.preventDefault();
    if (document.querySelector("article")) {
        let divs = document.querySelectorAll("article");
        for (let div of divs) {
            div.remove(); 
        }
    }

    await fetch(
        `${BASE_URL}`
    )
    .then((resp) => resp.json())
    .then((data) => {
        let result = data.articles;
    
        for (let i = 0; i < result.length; i++) {
            let urlArticleWebsite = result[i].url;
            let urlArticleImage = result[i].urlToImage;
            let contentArticle = result[i].description;
            let titleArticle = result[i].title;

            const main = document.querySelector("main");
            const div = document.createElement("div");
            div.innerHTML = `
            <article class="card">
                <h2>${titleArticle}</h2>
                <img src="${urlArticleImage}" >
                <a href="${urlArticleWebsite}">Visit Article</a>
                <p>${contentArticle}</p>
            </article>`;
            main.appendChild(div);


        }
})
.catch((error) => {
    console.log(error);
})
})

BASE_URL_BETTER = "https://newsapi.org/v2/everything?q=kitten&q=fun,play,happy,joy&pageSize=12&from=2023-01-01&sortby=relevancy&language=en&apiKey=0190c395683c4d4b9efa1fafaabb0836";

const betterNewsImage = document.getElementById("better");
betterNewsImage.addEventListener("click", async (event)=> {
    event.preventDefault();
    if (document.querySelector("article")) {
        let divs = document.querySelectorAll("article");
        for (let div of divs) {
            div.remove(); 
        }
    }

    await fetch(
        `${BASE_URL_BETTER}`
    )
    .then((resp) => resp.json())
    .then((data) => {
        let result = data.articles;
    
        for (let i = 0; i < result.length; i++) {
            let urlArticleWebsite = result[i].url;
            let urlArticleImage = result[i].urlToImage;
            let contentArticle = result[i].description;
            let titleArticle = result[i].title;

            const main = document.querySelector("main");
            const div = document.createElement("div");
            div.innerHTML = `
            <article class="card">
                <h2>${titleArticle}</h2>
                <img src="${urlArticleImage}" >
                <a href="${urlArticleWebsite}">Visit Article</a>
                <p>${contentArticle}</p>
            </article>`;
            main.appendChild(div);
            
            
        }
        main.innerHTML="";
})
.catch((error) => {
    console.log(error);
})
})

BASE_URL_AWESOME = "https://newsapi.org/v2/everything?q=dessert&pageSize=12&from=2023-01-01&sortby=relevancy&language=en&apiKey=0190c395683c4d4b9efa1fafaabb0836";

const awesomeNewsImage = document.getElementById("awesome");
awesomeNewsImage.addEventListener("click", async (event)=> {
    event.preventDefault();
   if (document.querySelector("article")) {
        let divs = document.querySelectorAll("article");
        for (let div of divs) {
            div.remove(); 
        }
    }
    await fetch(
        `${BASE_URL_AWESOME}`
    )
    .then((resp) => resp.json())
    .then((data) => {
        let result = data.articles;
    
        for (let i = 0; i < result.length; i++) {
            let urlArticleWebsite = result[i].url;
            let urlArticleImage = result[i].urlToImage;
            let contentArticle = result[i].description;
            let titleArticle = result[i].title;

            const main = document.querySelector("main");
            const div = document.createElement("div");
            div.innerHTML = `
            <article class="card">
                <h2>${titleArticle}</h2>
                <img src="${urlArticleImage}" class="hidden">
                <a href="${urlArticleWebsite}">Visit Article</a>
                <p>${contentArticle}</p>
            </article>`;
            main.appendChild(div);
        }
})
.catch((error) => {
    console.log(error);
})
})
let x = document.getElementsByClassName("card");
let show = true;
function toggle(){
    if(show) {
        x.style.display = "none";
        show = false;
    }else {
        x.style.display = "block";
        show = true;
    }
}