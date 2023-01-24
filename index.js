let goodNews;
function setup() {
    createCanvas(200, 200);
    loadJSON('https://newsapi.org/v2/everything?q=murder&q=killed&from=2023-01-01&sortby=popularity&apiKey=0190c395683c4d4b9efa1fafaabb0836',gotData);
}

function gotData(data){
    goodNews = data;
 
};