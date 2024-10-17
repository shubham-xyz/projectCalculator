
let firstNumber = ""
let secondNumber = ""
let operator = null
let result = ""

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return b !== 0 ? a / b : "error"
}



function operate(operator, a, b) {
    a = parseFloat(a)
    b = parseFloat(b)

    switch (operator) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
        default:
            return null
    }
}




const buttons = document.querySelectorAll(".buttons button")
const display = document.querySelector("#display")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value")

        if (!isNaN(value) || value === ".") {
            handleNumber(value)
        } else if (["+", "-", "*", "/"].includes(value)) {
            handleOperator(value)
        } else if (value === "=") {
            calculate()
        } else if (value === "C") {
            clearDisplay()
        }
    })
})



function handleNumber(value){
    if (operator === null){
        firstNumber += value
        display.value = firstNumber
    }else {
        secondNumber += value
        display.value = secondNumber
    }
    console.log(value)
}

function handleOperator(value){
    if (firstNumber === "") return
    operator = value
    console.log(value)
}

function calculate(){
    if (firstNumber ==="" || secondNumber ==="" || operator === null) return
    result = operate(operator,firstNumber,secondNumber)
    updateDisplay(result)
    firstNumber = result
    secondNumber = ""
    operator = null
}

function updateDisplay(value){
    display.value = value
    console.log(value)
}

function clearDisplay(){
    firstNumber = ""
    secondNumber = ""
    operator = null
    result = ""
    updateDisplay("0")
}



