'use strict';

function Calc(){

    const result = document.querySelector('.calculating__result span');

let sex = 'female',
height, weight, age, 
ratio = '1.375';
//let sex, height, weight, age, ratio;


if(localStorage.getItem('sex')){
    sex = localStorage.getItem('sex');
}else{
    sex = 'female';
    localStorage.setItem('sex', 'female');
}

if(localStorage.getItem('ratio')){
    ratio = localStorage.getItem('ratio');
}else{
    ratio = 1.375;
    localStorage.setItem('ratio', '1.375');
}


function initLocalStorage(selector, activeClass) {
    const storage = document.querySelectorAll(selector);

    storage.forEach((item) => {
        item.classList.remove(activeClass);

        if (item.getAttribute('id') === localStorage.getItem('sex')) {
            item.classList.add(activeClass);
           // sex = localStorage.getItem('sex'); 
        }

        if (item.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            item.classList.add(activeClass);
           // ratio = localStorage.getItem('ratio');
        }

    });
}

initLocalStorage('#gender div', 'calculating__choose-item_active');
initLocalStorage('.calculating__choose_big div', 'calculating__choose-item_active');





function GetResult() {
    if (!sex || !height || !weight || !age || !ratio) {
        result.textContent = '____';
        return;
    }

    if (sex === 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}

GetResult();



function calcData(parent, activClass) {

    const result = document.querySelectorAll(parent);
    result.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
            } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', e.target.getAttribute('id'));
            }

            result.forEach((item) => {
                item.classList.remove(activClass);
            });
            e.target.classList.add(activClass);

            GetResult();
        });

    });

}

calcData('.calculating__choose_big div', 'calculating__choose-item_active');
calcData('#gender div', 'calculating__choose-item_active');

//
function calcDataForInput(value) {
    const input = document.querySelector(value);
    input.addEventListener('input', () => {

        if(input.value.match(/\D/g)){
            input.style.border = '1px solid red';
        }else{
            input.style.border = 'none';
        }

        switch (input.getAttribute('id')) {

            case 'height':
                height = +input.value;
                break;

            case 'weight':
                weight = +input.value;
                break;

            case 'age':
                age = +input.value;
                break;
        }
        GetResult();
    });




}

calcDataForInput('#height');
calcDataForInput('#weight');
calcDataForInput('#age');
}

module.exports = Calc;