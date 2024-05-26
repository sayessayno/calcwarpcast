let display = document.getElementById('display');
let currentOperation = null;
let firstOperand = '';
let secondOperand = '';
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        display.value = '';
        resultDisplayed = false;
    }
    display.value += number;
}

function operation(op) {
    if (currentOperation) {
        calculate();
    }
    firstOperand = display.value;
    currentOperation = op;
    display.value = '';
}

function calculate() {
    if (!currentOperation) return;
    secondOperand = display.value;
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    display.value = result;
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
    resultDisplayed = true;
}

function clearDisplay() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}
