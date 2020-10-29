"use strict";

var API_KEY = 'Z1cPvuxq0X6YlUbbKcrSvNby4CgLf8XQ';
var container = document.querySelector(".containerTrending");

function renderTrendingTitle() {
  function showResult() {
    var url, response, results;
    return regeneratorRuntime.async(function showResult$(_context) {
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
            console.log(results);
            if (results.meta.msg === 'OK') results.data.slice(0, 5).forEach(renderResult);else alert('not found');

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  function renderResult(result, index) {
    var plot = document.createElement('p');
    plot.textContent = result;
    if (index < 4) plot.textContent += ',';
    container.appendChild(plot);
  }

  showResult();
}

renderTrendingTitle();