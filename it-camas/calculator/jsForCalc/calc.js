let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDivide = document.getElementById('buttonDivide');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

const onButtonClick = (eventObject) => {
    debugger;
    let clickedElement = eventObject.currentTarget;
    let operationSign = clickedElement.innerHTML;

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result = document.getElementById("result-field")

    if (operationSign == buttonPlus.innerHTML) {
        result.value = number1 + number2;
    }
    else if (operationSign == buttonMinus.innerHTML) {
        result.value = number1 - number2;
    }
    else if (operationSign == buttonMultiply.innerHTML) {
        result.value = number1 * number2;
    }
    else if (operationSign == buttonDivide.innerHTML) {
        result.value = number1 / number2;
    }
}

buttonPlus.addEventListener('click', onButtonClick);
buttonMinus.addEventListener('click', onButtonClick);
buttonMultiply.addEventListener('click', onButtonClick);
buttonDivide.addEventListener('click', onButtonClick);