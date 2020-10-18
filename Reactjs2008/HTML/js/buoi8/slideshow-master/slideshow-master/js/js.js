//get
var leftArrow = document.querySelector(".slide-show-wrapper .js-left-arrow")
var rightArrow = document.querySelector(".slide-show-wrapper .js-right-arrow")
var slideShows = document.getElementsByClassName("slide-show")

function showSlide(index) {
    // slideShows.forEach(slideShows => {
    //     slideShows.style.display = "none"
    // });
    for (var i = 0; i < slideShows.length; i++) {
        slideShows[i].style.display = "none"
    }
    slideShows[index].style.display = "block"
}


var currentIndex = 0;
var numberOfSlide = slideShows.length
showSlide(currentIndex);
rightArrow.addEventListener("click", function() {
    currentIndex++
    // if currentIndex === 3 then currenIndex = 0
    currentIndex = currentIndex % numberOfSlide
    showSlide(currentIndex)
})
leftArrow.addEventListener("click", function() {
    currentIndex--
    // if (currentIndex == -1) {
    //     currentIndex = numberOfSlide - 1
    // }
    currentIndex = (currentIndex - 1 + numberOfSlide) % numberOfSlide
    showSlide(currentIndex)
});


// auto slide
setInterval(() => {
    currentIndex = (currentIndex + 1) % numberOfSlide
    showSlide(currentIndex)
}, 2000);



//clock
var clock = document.getElementById("clock")
setInterval(() => {
    clock.innerText = new Date
});