"use strict";

// change mode theme
var API_KEY = 'Z1cPvuxq0X6YlUbbKcrSvNby4CgLf8XQ';
var API_URL_SEARCH = "https://api.giphy.com/v1/gifs/search?";
var containerTrending = document.querySelector(".containerTrending");
var API_URL_TRENDING = "https://api.giphy.com/v1/gifs/trending?";
var API_URL_TAGS = "https://api.giphy.com/v1/gifs/search/tags?";
var API_URL_TAGS_RELATED = "https://api.giphy.com/v1/tags/related/";
var API_URL_SEARCH_ID = "https://api.giphy.com/v1/gifs/";
var API_URL_TRENDING_SEARCHES = "https://api.giphy.com/v1/trending/searches?";
var buttonChangeTheme = document.querySelector(".buttonChangeTheme");
var btnFavorites = document.getElementById("btnFavorites");
var btnMyGifos = document.getElementById("btnMyGifos"); // change mode theme

var navOptions = document.querySelector(".nav-options");
var searchbar1 = navOptions.querySelector(".searchBar");
var app = document.querySelector(".app");
var themeName = document.querySelector(".theme-name");
var logo = document.querySelector(".logo");
var crearGifos = document.querySelector(".crearGifos");
var iconSearch = document.querySelectorAll(".iconSearch");
var iconClose = document.querySelectorAll(".iconClose");
var buttonSliderLeft = document.querySelectorAll(".buttonSliderLeft");
var buttonSliderRight = document.querySelectorAll(".buttonSliderRight");
var currentTheme = app.classList.contains("light") ? "light" : "dark"; // search

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

var searchingPage = document.getElementById("searching-page");
var favorites = document.getElementById("favorites");
var myGifos = document.getElementById("myGifos");
var trendingGifos = document.getElementById("trendingGifos"); // falta modal y crear Gifos
//load change theme dark and light

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
}); //add trending Titles

function renderTrendingTitle() {
  function showTrendigTopic() {
    var url, response, results;
    return regeneratorRuntime.async(function showTrendigTopic$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(API_URL_TRENDING_SEARCHES, "api_key=").concat(API_KEY, "&limit=5&rating=g");
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
            _context2.next = 13;
            break;
          }

          removeAllChildNodes(contentResultsGifos);
          url = "".concat(API_URL_SEARCH, "api_key=").concat(API_KEY, "&q=").concat(value, "&limit=12&offset=").concat(offset);
          _context2.next = 5;
          return regeneratorRuntime.awrap(fetch(url));

        case 5:
          response = _context2.sent;
          _context2.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          results = _context2.sent;
          titleCategorySearch.style.display = "block";
          titleCategorySearch.textContent = value;
          console.log(results);

          if (results.meta.msg === 'OK') {
            results.data.forEach(renderSearchResultContent);
            MoreGifs.style.display = "block";
          } else alert('not found');

        case 13:
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
  var overlayDiv = document.createElement('div');
  overlayDiv.className = "overlay";
  var li = document.createElement('li');
  var figure = document.createElement('figure');
  var img = document.createElement('img');
  li.className = 'result';
  img.src = result.images.downsized.url;
  img.alt = result.title;
  figure.appendChild(overlayDiv);
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
}

btnFavorites.addEventListener("click", function () {
  return activateSection(btnFavorites.id);
});
btnMyGifos.addEventListener("click", function () {
  return activateSection(btnMyGifos.id);
});

function activateSection(section) {
  searchingPage.style.display = "none";

  if (section == "btnFavorites") {
    favorites.style.display = "block";
    myGifos.style.display = "none";
  } else if (section == "btnMyGifos") {
    myGifos.style.display = "block";
    favorites.style.display = "none";
  }
}