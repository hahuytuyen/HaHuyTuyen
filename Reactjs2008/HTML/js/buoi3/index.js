// regular function
function print(n) {
    if (n < 0) {
        return
    }
    console.log("n: ", n);
    print(n - 1)
}
// exxpression
const print2 = function(n) {
    if (n < 0) {
        return
    }
    console.log("n: ", n);
    print2(n - 1)
}


// arrow function (fat arrow)
const print3 = (n) => {
    if (n < 0) {
        return
    }
    console.log("n: ", n);
    print3(n - 1)
}


//Example: check even
function isEven(n) {
    // if (n % 2 == 0) {
    //     return true
    // }
    // return false
    return n % 2 === 0
}


// const isEven2 = (n) => {
//     return n % 2 === 0
// }
//=> shortcut
const isEven2 = (n) => n % 2 === 0

// print(5)
// print2(5)
// print3(5)
console.log("isEven(2)", isEven(2))
console.log("isEven2(3)", isEven2(3))



//math
console.log(Math.round(Math.PI * 100) / 100)
    //Or
console.log(Math.PI.toFixed(2))
console.log(Math.floor(Math.PI))
console.log(Math.ceil(Math.PI))

//random
console.log("Random: ", Math.random());

function RandomDice() {
    return Math.floor(Math.random() * 6) + 1
}

function Random(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from)
}


var value = RandomDice()
console.log("RandomDice(): ", value)
console.log("Random(18, 24): ", Random(18, 24))



//string
var name = "\"Thoai\""
var name2 = '"Phong"'
console.log("name: ", name)
console.log("name: ", name2)


var currenrDay = "thursday"
var hello = "Today is " + currenrDay;
var helloStr = `'Today is'`
console.log("hello: ", hello)
console.log("hello: ", helloStr)

// var str = 'Hello world';
// document.write(str.replace(/\s/g, ''));

// function str() {
//     document.write(str.replace(/\s/g, ''));
// }
// str("Hello world")