'use strict';

const btnClick = document.querySelector('.btn-click');
const userInput = document.querySelector('#user-input');
const firstNumber = document.querySelector('#first-number');
const secondNumber = document.querySelector('#second-number');
const resultNumber = document.querySelector('#result-number');
const paragraph = document.querySelector('p');
const textArea = document.querySelector('.textarea');


btnClick.addEventListener('click', myFunction);

function myFunction() {
    var num1 = Number(firstNumber.value);
    var num2 = Number(secondNumber.value);
    var result = 0;
    result = num1 + num2;

    resultNumber.value = result;
    console.log(result);

}
textArea.innerHTML = '<h2> hello everyone</h2>';