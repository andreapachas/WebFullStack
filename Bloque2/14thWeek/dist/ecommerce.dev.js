"use strict";

//objeto producto
//logica de carrito 
var producto = document.querySelectorAll('producto');
var button = document.getElementById('agregar');
var list = document.getElementById('list');

function addItem() {
  var li = document.createElement('li');
  li.textContent = producto.value;
  list.appendChild(li);
}

function handleKeydown(event) {
  if (event.key === "Enter") addItem();
}

button.addEventListener('click', addItem);