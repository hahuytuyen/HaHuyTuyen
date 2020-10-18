//get
var firstInput = document.querySelector("div#cal input.js-first-input")
var secondInput = document.querySelector("div#cal input.js-second-input")
var resultInput = document.querySelector("div#cal input.js-result-input")
var operatorSelect = document.querySelector("div#cal select.js-opetator")
var resultButton = document.querySelector("div#cal button.js-btn-result")

// console.log(firstInput, secondInput, resultInput, operatorSelect, resultButton)

//even
resultButton.addEventListener("click", function() {
    var result = calculate()
    updateResult(result)
})

//logic
function calculate() {
    var firstValue = Number(firstInput.value)
    var secondValue = Number(secondInput.value)
    var operator = operatorSelect.value
    var result = 0
    switch (operator) {
        case "+":
            result = firstValue + secondValue
            break;
        case "-":
            result = firstValue - secondValue
            break;
        case "*":
            result = firstValue * secondValue
            break;
        case "/":
            result = firstValue / secondValue
            break;
    }
    return result;
}

//update
function updateResult(result) {
    resultInput.value = result
}