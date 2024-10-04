'use strict';

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();

    const cardBtn = document.querySelector('.card__btn'),
        cardFooter = document.querySelector('.card__footer'),
        cardItems = document.querySelector('.card__items'),
        cardHeader = document.querySelector('.card__header');


    cardBtn.addEventListener('click', () => {
        [cardBtn, cardFooter, cardItems, cardHeader].forEach((item) => {
            item.classList.toggle('active');
        });
    })


});