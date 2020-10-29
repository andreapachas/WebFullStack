"use strict";

var _libdemo = require("./libdemo.js");

document.title = moment().add(6, 'w').format("dddd, MMMM Do YYYY, h:mm:ss a");
(0, _libdemo.renderResult)({
  img: '',
  name: 'title'
}, document.getElementById('container'));
console.log(_libdemo.key);