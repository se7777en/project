'use strict';

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const wrapper__item = document.querySelectorAll('.wrapper__item');
         

    wrapper__item.forEach((item)=>{
        const  chb = item.querySelector('.castom__chb'),
        trashBtn = chb.querySelector('.trash__btn');


        chb.addEventListener('click', () => {
            trashBtn.style = 'scale: 1';
        });
        item.addEventListener('click', () => {
            trashBtn.style = 'scale: 0';
        });

    })






    // wrapper__item.addEventListener('mouseover', () => {
    //     trashBtn.style = 'scale: 1';
    // });

    // wrapper__item.addEventListener('mouseout', () => {
    //     trashBtn.style = 'scale: 0';
    // });



})
