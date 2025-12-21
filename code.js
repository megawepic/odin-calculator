let num1
let num2
let operator

function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function divide(a,b){
    return a / b
}

function multiply(a,b) {
    return a * b
}

function operate(num1,num2,operator){
    if (operator == "+"){
        return add(num1, num2)
    } else if (operator == "-"){
        return subtract(num1,num2)
    } else if (operator == "/") {
        return divide(num1,num2)
    } else if (operator == "*"){
        return multiply(num1,num2)
    }
}

const btn1 = document.querySelector("#one")
const btn2 = document.querySelector("#two")
const btn3 = document.querySelector("#three")
const btn4 = document.querySelector("#four")
const btn5 = document.querySelector("#five")
const btn6 = document.querySelector("#six")
const btn7 = document.querySelector("#seven")
const btn8 = document.querySelector("#eight")
const btn9 = document.querySelector("#nine")
const btn0 = document.querySelector("#zero")

const display = document.getElementById("display")

btn1.addEventListener("click", function(){
    display.textContent += "1"
})

btn2.addEventListener("click", function(){
    display.textContent += "2"
})

btn3.addEventListener("click", function(){
    display.textContent += "3"
})

btn4.addEventListener("click", function(){
    display.textContent += "4"
})

btn5.addEventListener("click", function(){
    display.textContent += "5"
})

btn6.addEventListener("click", function(){
    display.textContent += "6"
})

btn7.addEventListener("click", function(){
    display.textContent += "7"
})

btn8.addEventListener("click", function(){
    display.textContent += "8"
})

btn9.addEventListener("click", function(){
    display.textContent += "9"
})

btn0.addEventListener("click", function(){
    display.textContent += "0"
})