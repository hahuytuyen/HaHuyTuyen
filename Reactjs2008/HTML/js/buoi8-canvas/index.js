//get

var c = document.getElementById("myCanvas")
var ctx = c.getContext("2d")
ctx.moveTo(0, 0)
ctx.lineTo(200, 200)
ctx.stroke()


//draw a circle
ctx.beginPath()
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();


//draw a Text
ctx.font = "30px Arial"
ctx.fillText("Hello World", 10, 50)

ctx.strokeText("Hello World", 10, 100)



//draw img
// var img = document.getElementById("snow-mountain")
var img = document.createElement("img")
img.src = "img/img_mountains_wide.jpg"
ctx.fillStyle = "#fff"
ctx.fillRect(0, 0, 200, 200)
window.onload = function() {
    ctx.drawImage(img, 10, 10, 200, 50)

    setTimeout(() => {
        ctx.fillStyle = "#fff"
        ctx.fillRect(0, 0, 200, 200)
        ctx.drawImage(img, 50, 50, 200, 50)
    }, 1000)
}