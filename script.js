//this is a trial
console.log("hello world")

let name = "Shravya"
console.log(name)

const doc = document.documentElement;
console.log(doc)
fs
//change style of the doc from js
doc.style.background = "black"
doc.style.fontFamily = "monospace"

//access particular elements
const navbar = document.querySelector('#navbar')
//console.log(nav)
navbar.innerHTML = "this is confusing"
navbar.style.fontsize = "12px"

resetButton.innerHTML = "Reset Button"


//create a form element in the sidebar
let input = document.createElement("input")
