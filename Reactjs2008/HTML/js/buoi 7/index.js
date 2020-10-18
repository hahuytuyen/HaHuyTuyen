var div = document.createElement("div")
var h3 = document.createElement("h3")
var p = document.createElement("p")
var button = document.createElement("button")
div.appendChild(h3)
div.appendChild(p)
div.appendChild(button)

//content
h3.innerText = "Hello class"
p.innerText = "This is Reactjs"
button.innerText = "Remove"

//style
div.style.backgroundColor = "red"
div.style.padding = "30px"
div.style.width = "50%"
div.style.margin = "0 auto"
h3.style.color = "yellow"
p.style.color = "blue"

document.body.appendChild(div)

// div.removeChild(p)

//even
// c1
// button.onclick = function() {
//     div.removeChild(p)
// }

// c2
button.addEventListener("click", function() {
    div.removeChild(p)
})

document.title = "a"


// var h3Elem = document.querySelector("h3.intro")
// h3Elem.style.color = "red"



var allIntro = document.querySelectorAll(".intro")
allIntro.forEach(elem => {
    elem.style.color = "red"
})