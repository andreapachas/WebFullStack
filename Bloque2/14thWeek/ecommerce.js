//objeto producto
class Persona {
    #name = 'default';
    #imagen;
    #precio;
    description = 'default lastname';

    constructor(name, image, precio,description) {
        this.name = name;
        this.image = image;
        this.#age = age;
    }
    get score() {
        return this.#testResults.reduce((out, item) => out + item, 0) / this.#testResults.length
    }
    set score(asd) {
        console.log('can\'t set score')
    }

    get name() {
        return this.#name.toUpperCase();
    }
    set name(newValue) {
        this.#name = newValue.toLowerCase();
        console.log(this.introduction())
    }

    introduction() {
        console.log(`Hi, I'm ${this.#name}`);
        console.log("Hi, I'm " + this.#name);
    }
    static blah() {
        console.log('static')
    }
}
//logica de carrito 
const producto = document.querySelectorAll('producto');
const button = document.getElementById('agregar');
const list = document.getElementById('list');



function addItem() {
    const li = document.createElement('li');
    li.textContent = producto.value;
    list.appendChild(li);
}

function handleKeydown(event) {
    if(event.key === "Enter")
        addItem();
}

button.addEventListener('click', addItem);
        