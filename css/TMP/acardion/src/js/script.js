'use strict';

const items = document.querySelectorAll('.accordion__item');

items.forEach((item, ind) => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');

        const element = item.querySelector('.accordion__descr');

        if (item.classList.contains('open')) {
            element.style = 'transition: all .3s linear;';
            element.style.height = `${element.scrollHeight}px`;
            // item.querySelector('i').classList.replace('fa-plus', 'fa-minus');
             item.querySelector('i').style = 'transform: rotate(45deg);';


        } else {
            element.style = 'transition: none; opacity: 0;';
            element.style.height = '0px';
            // item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
            item.querySelector('i').style = 'transform: rotate(0deg);';
        }
    });
});

