let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDivide = document.getElementById('buttonDivide');


const onButtonPlusClick = () => {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let summ = number1 + number2;
    alert(summ);

}

const onButtonMinusClick = () => {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let diff = number1 - number2;
    alert(diff);
}

const onButtonMultiplyClick = () => {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let mult = number1 * number2;
    alert(mult);
}

const onButtonDivideClick = () => {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let divi = number1 / number2;
    alert(divi);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDivide.addEventListener('click', onButtonDivideClick);