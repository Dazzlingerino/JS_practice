let operationButtons = document.getElementsByClassName('operation-button')
let digitButtons = document.getElementsByClassName('digit-button');
let equalSign = document.getElementById('equal');
let clearSign = document.getElementById('clearer');
let result = document.getElementById("result-field");
let trueResult = document.getElementById('true-result')

const onOperationButtonClick = (eventObject) => {
    let clickedElement = eventObject.currentTarget;
    operationSign = clickedElement.innerHTML;
    result.innerHTML += operationSign;
    return operationSign;
}

var number1, number2, operationSign;
const onDigitClick = (eventObject) => {
    let clickedElement = eventObject.currentTarget;
    let Digit = clickedElement.innerHTML;
    let secondDigit = clickedElement.innerHTML;
    if (number1 == undefined) {
        number1 = Number(Digit);
        result.innerHTML += Digit;
    } else {
        number2 = Number(secondDigit)
        result.innerHTML += secondDigit;
    }
    return number1, number2;
}

const onEqualSignClick = () => {
    if (operationSign == operationButtons[0].innerHTML) {
        trueResult.value = number1 + number2;
    }
    else if (operationSign == operationButtons[1].innerHTML) {
        trueResult.value = number1 - number2;
    }
    else if (operationSign == operationButtons[2].innerHTML) {
        trueResult.value = number1 * number2;
    }
    else if (operationSign == operationButtons[3].innerHTML) {
        trueResult.value = number1 / number2;
    };

}


for (var i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', onOperationButtonClick);
}

for (var k = 0; k < digitButtons.length; k++) {
    digitButtons[k].addEventListener('click', onDigitClick);
}

equalSign.addEventListener('click', onEqualSignClick);

const onClearSignClick = () => {
    trueResult.value = '';
    result.innerHTML = '';
    number1 = undefined;
    number2 = undefined;
    operationSign = undefined

}
clearSign.addEventListener('click', onClearSignClick);