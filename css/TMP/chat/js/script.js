'use strict';
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const burger = document.querySelector('.wrapper__left-burger');
    const leftSide = document.querySelector('.wrapper__left');
    const rightSide = document.querySelector('.wrapper__right');

    const sendBtn = document.querySelector('.wrapper__right-icons .input__send');
    const input = document.querySelector('.wrapper__right-input input');

    burger.addEventListener('click', (e) => {
        // const parent = leftSide.closest('.wrapper__left');
        // if (parent) {
            leftSide.classList.toggle('active');
            rightSide.classList.toggle('active');
        // }
    });

    input.addEventListener('input', () => {
        let inp = input.value;
        if (inp.length > 0) {
            sendBtn.classList.add('show');
        } else {
            sendBtn.classList.remove('show');
        }
    });




});