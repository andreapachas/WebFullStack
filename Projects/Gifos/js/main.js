// change mode theme
const API_KEY = 'Z1cPvuxq0X6YlUbbKcrSvNby4CgLf8XQ';
const containerTrending = document.querySelector(".containerTrending");
const buttonChangeTheme = document.querySelector(".buttonChangeTheme");
const navOptions = document.querySelector(".nav-options");
const searchbar1 = navOptions.querySelector(".searchBar");
const app = document.querySelector(".app");
const themeName = document.querySelector(".theme-name");
const logo = document.querySelector(".logo");
const crearGifos = document.querySelector(".crearGifos");
const iconSearch = document.querySelectorAll(".iconSearch");
const iconClose = document.querySelectorAll(".iconClose");
const buttonSliderLeft = document.querySelectorAll(".buttonSliderLeft");
const buttonSliderRight = document.querySelectorAll(".buttonSliderRight");

// search
const formGifo = document.getElementById('searchBar1');
const formGifoNav = document.getElementById('searchBar2');
const inputSearch = document.getElementById("inputSearch");
const inputSearchNav = document.getElementById("inputSearchNav");

// search - results
let offset = 0;
const titleCategorySearch = document.getElementById("titleCategorySearch");
const contentResultsGifos = document.querySelector(".contentResultsGifos");

//buttons
const MoreGifs = document.getElementById("MoreGifs");
const moreFavorites = document.getElementById("moreFavorites");
const moreMyGifos = document.getElementById("moreMyGifos");


// sections
const searchingPage = document.querySelector(".searching-page");
const favorites = document.querySelector(".favorites");
const myGifos = document.querySelector(".myGifos");
const trendingGifos = document.querySelector(".trendingGifos");
// falta modal y crear Gifos



let currentTheme = app.classList.contains("light") ? "light" : "dark";
//add trending Titles
function renderTrendingTitle(){
    async function showTrendigTopic() {
        const url = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}&limit=5&rating=g`;
        const response = await fetch(url);
        const results = await response.json();
        if(results.meta.msg === 'OK')
            results.data.slice(0,5).forEach(renderResult);
        else alert('not found');
    }
    function showRenderTrendingTittle(result) {
        removeAllChildNodes(contentResultsGifos);
        showSearchResult(result);
    }
    function renderResult(result,index) {
        const tittle = document.createElement('p');
        tittle.textContent = result;
        tittle.addEventListener("click", () => showRenderTrendingTittle(result));
        if (index < 4) 
            tittle.textContent +=  ',';
        containerTrending.appendChild(tittle);
    }
    showTrendigTopic();
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
//show search results
formGifo.addEventListener('submit', () => showSearchResult(inputSearch.value));
formGifoNav.addEventListener('submit',  () => showSearchResult(inputSearchNav.value));
async function showSearchResult (value)
{
    if (value !== "") {
        const url =`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${value}&limit=12&offset=${offset}`
        const response = await fetch(url);
        const results = await response.json();
        titleCategorySearch.style.display = "block";
        titleCategorySearch.textContent = value;
        console.log(results);
        if(results.meta.msg === 'OK'){
            results.data.forEach(renderSearchResultContent);
            MoreGifs.style.display = "block";
        }
        else alert('not found');
    }
}
function renderSearchResultContent(result) { 
    renderSearchResult(result,contentResultsGifos);
}
function renderSearchResult (result, container) {
    const li = document.createElement('li');
    const figure = document.createElement('figure');
    const img = document.createElement('img');

    li.className = 'result';
    img.src = result.images.downsized.url;
    img.alt = result.title;
    

    figure.appendChild(img);
    li.appendChild(figure);
    container.appendChild(li);
}
renderTrendingTitle();
//Display navbar search
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    searchbar1.style.display = "block";
  } 
  else {
    searchbar1.style.display = "none";
  }
}
//load change theme dark and light
buttonChangeTheme.addEventListener("click", () =>  {
    app.classList.remove(currentTheme);
    currentTheme = currentTheme === "light" ? "dark" : "light";
    app.classList.add(currentTheme);
    themeName.innerText = currentTheme === "light"? "Modo Diurno":"Modo Nocturno";
    logo.src = currentTheme === "light"? ("images/logo-desktop.svg"): ("images/Logo-modo-noc.svg");
    crearGifos.src  = currentTheme === "light"? ("images/button-crear-gifo.svg"): ("images/CTA-crar-gifo-modo-noc.svg");
    iconSearch.forEach(function(item) {
        item.src  = currentTheme === "light"? ("images/icon-search.svg"): ("images/icon-search-mod-noc.svg");
    })
    iconClose.forEach(function(item) {
        item.src  = currentTheme === "light"? ("images/close.svg"): ("images/close-modo-noct.svg");
    })
    buttonSliderLeft.forEach(function(item) {
        item.src  = currentTheme === "light"? ("images/button-slider-left.svg"): ("images/button-slider-left-md-noct.svg");
    })
    buttonSliderRight.forEach(function(item) {
        item.src  = currentTheme === "light"? ("images/Button-Slider-right.svg"): ("images/Button-Slider-right-md-noct.svg");
    })
});