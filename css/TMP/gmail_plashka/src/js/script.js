'use strict';

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();


    const wrapper__item = document.querySelectorAll('.wrapper__item');
         

    wrapper__item.forEach((item)=>{
        const  trashBtn = item.querySelector('.trash__btn');
        console.log(trashBtn);

        item.addEventListener('mouseover', () => {
            trashBtn.style = 'scale: 1';
        });
        item.addEventListener('mouseout', () => {
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
