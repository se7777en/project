'use strict';

const range = document.querySelector('.range'),
    circle = document.getElementById('reading-progress'),
    text = document.querySelector('.circle__text');

range.addEventListener('input', () => {
    const dasharray = circle.getAttribute('stroke-dasharray');

    const valuesArr = dasharray.split(' ');

    const value = valuesArr[1];
    const percentVal = (value / 100) * range.value;

    valuesArr[0] = percentVal;


    console.log(percentVal);

    let arrtoStr = valuesArr.join(' ');
    circle.setAttribute('stroke-dasharray', arrtoStr);


    const perVal0 = valuesArr[0]
    const perVal1 = valuesArr[1];
    console.log(perVal0, perVal1);

    text.textContent = `${Math.floor(perVal0 * 100 / perVal1)}%`;
    //${percentVal}%

});