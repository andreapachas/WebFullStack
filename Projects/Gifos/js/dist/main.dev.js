"use strict";

// change mode theme
var API_KEY = 'Z1cPvuxq0X6YlUbbKcrSvNby4CgLf8XQ';
var containerTrending = document.querySelector(".containerTrending");
var buttonChangeTheme = document.querySelector(".buttonChangeTheme");
var navOptions = document.querySelector(".nav-options");
var searchbar1 = navOptions.querySelector(".searchBar");
var app = document.querySelector(".app");
var themeName = document.querySelector(".theme-name");
var logo = document.querySelector(".logo");
var crearGifos = document.querySelector(".crearGifos");
var iconSearch = document.querySelectorAll(".iconSearch");
var iconClose = document.querySelectorAll(".iconClose");
var buttonSliderLeft = document.querySelectorAll(".buttonSliderLeft");
var buttonSliderRight = document.querySelectorAll(".buttonSliderRight"); // search

var formGifo = document.getElementById('searchBar1');
var formGifoNav = document.getElementById('searchBar2');
var inputSearch = document.getElementById("inputSearch");
var inputSearchNav = document.getElementById("inputSearchNav"); // search - results

var offset = 0;
var titleCategorySearch = document.getElementById("titleCategorySearch");
var contentResultsGifos = document.querySelector(".contentResultsGifos"); //buttons

var MoreGifs = document.getElementById("MoreGifs");
var moreFavorites = document.getElementById("moreFavorites");
var moreMyGifos = document.getElementById("moreMyGifos"); // sections

var searchingPage = document.querySelector(".searching-page");
var favorites = document.querySelector(".favorites");
var myGifos = document.querySelector(".myGifos");
var trendingGifos = document.querySelector(".trendingGifos"); // falta modal y crear Gifos

var currentTheme = app.classList.contains("light") ? "light" : "dark"; //add trending Titles

function renderTrendingTitle() {
  function showTrendigTopic() {
    var url, response, results;
    return regeneratorRuntime.async(function showTrendigTopic$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "https://api.giphy.com/v1/trending/searches?api_key=".concat(API_KEY, "&limit=5&rating=g");
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch(url));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            results = _context.sent;
            if (results.meta.msg === 'OK') results.data.slice(0, 5).forEach(renderResult);else alert('not found');

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  function showRenderTrendingTittle(result) {
    removeAllChildNodes(contentResultsGifos);
    showSearchResult(result);
  }

  function renderResult(result, index) {
    var tittle = document.createElement('p');
    tittle.textContent = result;
    tittle.addEventListener("click", function () {
      return showRenderTrendingTittle(result);
    });
    if (index < 4) tittle.textContent += ',';
    containerTrending.appendChild(tittle);
  }

  showTrendigTopic();
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
} //show search results


formGifo.addEventListener('submit', function () {
  return showSearchResult(inputSearch.value);
});
formGifoNav.addEventListener('submit', function () {
  return showSearchResult(inputSearchNav.value);
});

function showSearchResult(value) {
  var url, response, results;
  return regeneratorRuntime.async(function showSearchResult$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(value !== "")) {
            _context2.next = 12;
            break;
          }

          url = "https://api.giphy.com/v1/gifs/search?api_key=".concat(API_KEY, "&q=").concat(value, "&limit=12&offset=").concat(offset);
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch(url));

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          results = _context2.sent;
          titleCategorySearch.style.display = "block";
          titleCategorySearch.textContent = value;
          console.log(results);

          if (results.meta.msg === 'OK') {
            results.data.forEach(renderSearchResultContent);
            MoreGifs.style.display = "block";
          } else alert('not found');

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function renderSearchResultContent(result) {
  renderSearchResult(result, contentResultsGifos);
}

function renderSearchResult(result, container) {
  var li = document.createElement('li');
  var figure = document.createElement('figure');
  var img = document.createElement('img');
  li.className = 'result';
  img.src = result.images.downsized.url;
  img.alt = result.title;
  figure.appendChild(img);
  li.appendChild(figure);
  container.appendChild(li);
}

renderTrendingTitle(); //Display navbar search

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    searchbar1.style.display = "block";
  } else {
    searchbar1.style.display = "none";
  }
} //load change theme dark and light


buttonChangeTheme.addEventListener("click", function () {
  app.classList.remove(currentTheme);
  currentTheme = currentTheme === "light" ? "dark" : "light";
  app.classList.add(currentTheme);
  themeName.innerText = currentTheme === "light" ? "Modo Diurno" : "Modo Nocturno";
  logo.src = currentTheme === "light" ? "images/logo-desktop.svg" : "images/Logo-modo-noc.svg";
  crearGifos.src = currentTheme === "light" ? "images/button-crear-gifo.svg" : "images/CTA-crar-gifo-modo-noc.svg";
  iconSearch.forEach(function (item) {
    item.src = currentTheme === "light" ? "images/icon-search.svg" : "images/icon-search-mod-noc.svg";
  });
  iconClose.forEach(function (item) {
    item.src = currentTheme === "light" ? "images/close.svg" : "images/close-modo-noct.svg";
  });
  buttonSliderLeft.forEach(function (item) {
    item.src = currentTheme === "light" ? "images/button-slider-left.svg" : "images/button-slider-left-md-noct.svg";
  });
  buttonSliderRight.forEach(function (item) {
    item.src = currentTheme === "light" ? "images/Button-Slider-right.svg" : "images/Button-Slider-right-md-noct.svg";
  });
});