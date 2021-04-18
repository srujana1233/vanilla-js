'use strict';

const btnClick = document.querySelector('.btn-click');
var a = 0;
btnClick.addEventListener('click', () => {
    a = a + 1;
    console.log(a);
});