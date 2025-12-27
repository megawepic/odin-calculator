let num1
let num2
let operator = ""
let displayText

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
const btnReset = document.querySelector("#reset")
const btnEqual = document.querySelector("#equal")
const btnPlus = document.querySelector("#plus")
const btnMinus = document.querySelector("#minus")
const btnMultiply = document.querySelector("#multiply")
const btnDivide = document.querySelector("#divide")
const btnBackspace = document.querySelector("#backspace")
const btnDecimal = document.querySelector("#decimal")

const display = document.getElementById("display")
const topDisplay = document.getElementById("topDisplay")

btn1.addEventListener("click", function(){
    if(operator == "="){
        reset()
    }
    if (display.textContent == "0"){
        display.textContent = "1"
        return
    }
    display.textContent += "1"
})

btn2.addEventListener("click", function(){
    if(operator == "="){
        reset()
    }
    if (display.textContent == "0"){
        display.textContent = "2"
        return
    }
    display.textContent += "2"
})

btn3.addEventListener("click", function(){
    if(operator == "="){
        reset()
    }
    if (display.textContent == "0"){
        display.textContent = "3"
        return
    }
    display.textContent += "3"
})

btn4.addEventListener("click", function(){
    if(operator == "="){
        reset()
    }
    if (display.textContent == "0"){
        display.textContent = "4"
        return
    }
    display.textContent += "4"
})

btn5.addEventListener("click", function(){
    if(operator == "="){
        reset()
    }
    if (display.textContent == "0"){
        display.textContent = "5"
        return
    }
    display.textContent += "5"
})

btn6.addEventListener("click", function(){
    if(operator == "="){
        reset()
    }
    if (display.textContent == "0"){
        display.textContent = "6"
        return
    }
    display.textContent += "6"
})

btn7.addEventListener("click", function(){
    if(operator == "="){
        reset()
    }
    if (display.textContent == "0"){
        display.textContent = "7"
        return
    }
    display.textContent += "7"
})

btn8.addEventListener("click", function(){
    if(operator == "="){
        reset()
    }
    if (display.textContent == "0"){
        display.textContent = "8"
        return
    }
    display.textContent += "8"
})

btn9.addEventListener("click", function(){
    if(operator == "="){
        reset()
    }
    if (display.textContent == "0"){
        display.textContent = "9"
        return
    }
    display.textContent += "9"
})

btn0.addEventListener("click", function(){
    if(operator == "="){
        reset()
    }

    if (display.textContent == "0") {
        return;
    }
    
    display.textContent += "0"
})

btnReset.addEventListener("click", reset);

btnPlus.addEventListener("click", function(){
    if (operator == "" || operator =="="){
        operator = "+"
        getNum1()
        topDisplay.textContent = display.textContent
        display.textContent = ""
    } else {
        getNum2()
        topDisplay.textContent = operate(num1,num2,operator)
        display.textContent = ""
        operator = "+"
        num1 = Number(topDisplay.textContent)
    }
})

btnMinus.addEventListener("click", function(){
    if (operator == "" || operator =="="){
        operator = "-"
        getNum1()
        topDisplay.textContent = display.textContent
        display.textContent = ""
    } else {
        getNum2()
        topDisplay.textContent = operate(num1,num2,operator)
        display.textContent = ""
        operator = "-"
        num1 = Number(topDisplay.textContent)
    }
})

btnDivide.addEventListener("click", function(){
    if (operator == "" || operator =="="){
        operator = "/"
        getNum1()
        topDisplay.textContent = display.textContent
        display.textContent = ""
    } else {
        getNum2()
        topDisplay.textContent = operate(num1,num2,operator)
        display.textContent = ""
        operator = "/"
        num1 = Number(topDisplay.textContent)
    }
})

btnMultiply.addEventListener("click", function(){
    if (operator == "" || operator =="="){
        operator = "*"
        getNum1()
        topDisplay.textContent = display.textContent
        display.textContent = ""
    } else {
        getNum2()
        topDisplay.textContent = operate(num1,num2,operator)
        display.textContent = ""
        operator = "*"
        num1 = Number(topDisplay.textContent)
    }
})

btnEqual.addEventListener("click", function(){

    if (operator == ""){
        return
    }
    
    getNum2()
    display.textContent = operate(num1,num2,operator)
    topDisplay.textContent = ""
    operator = "="
    num1 = Number(display.textContent)
})

btnBackspace.addEventListener("click", function(){
    display.textContent = display.textContent.slice(0,-1)
})

btnDecimal.addEventListener("click", function() {
    if (display.textContent.includes(".")){
        return
    } else {
        display.textContent += "."
    }
})

function getNum1(){
    num1 = Number(display.textContent)
}

function getNum2(){
    num2 = Number(display.textContent)
}

function reset(){
    display.textContent = ""
    topDisplay.textContent = ""
    num1 = ""
    num2 = ""
    operator = ""
}