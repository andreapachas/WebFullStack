import { renderResult, key } from './libdemo.js'

document.title = moment().add(6, 'w').format("dddd, MMMM Do YYYY, h:mm:ss a")

renderResult({ img: '', name: 'title' }, document.getElementById('container'))

console.log(key)