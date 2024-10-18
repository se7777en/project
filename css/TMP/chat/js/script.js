'use strict';
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const leftSide = document.querySelector('.wrapper__left-burger');
    const sendBtn = document.querySelector('.wrapper__right-icons .input__send');
    const input = document.querySelector('.wrapper__right-input input');

    leftSide.addEventListener('click', (e) => {
        const parent = leftSide.closest('.wrapper__left');
        if (parent) {
            parent.classList.toggle('active');
        }
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