const APILINK =
  "https://api.themoviedb.org/3/movie/550?api_key=16fba1ee00ff14d1be86e6a2ef5519f1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=16fba1ee00ff14d1be86e6a2ef5519f1&query=";

const main = document.querySelector(".section");
const query = document.querySelector("#query");
const form = document.querySelector("form");
let resultP = document.querySelector("#result");

window.addEventListener("load", () => {
  fetch(APILINK)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        const div_row = document.createElement("div");
        div_row.setAttribute("class", "row");
        const col_div = document.createElement("div");
        col_div.setAttribute("class", "column");
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        const img = document.createElement("img");
        img.src = IMG_PATH + element.poster_path;
        const title = document.createElement("h3");

        card.append(img);
        card.append(title);
        col_div.append(card);
        div_row.append(col_div);

        main.append(div_row);
      });
    });
});

const provideMovie = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        const div_row = document.createElement("div");
        div_row.setAttribute("class", "row");
        const col_div = document.createElement("div");
        col_div.setAttribute("class", "column");
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        const img = document.createElement("img");
        img.src = IMG_PATH + element.poster_path;
        const title = document.createElement("h3");

        card.append(img);
        card.append(title);
        col_div.append(card);
        div_row.append(col_div);

        main.append(div_row);
      });
    });
};

provideMovie(APILINK);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchItem = query.value;
  resultP.innerHTML = `result for : ${query.value}`;

  if (searchItem) {
    provideMovie(SEARCHAPI + searchItem);
    query.value = "";
  }
});
