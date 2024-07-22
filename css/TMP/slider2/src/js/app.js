'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const slideFooter = document.querySelector('.slide__footer'),
        headerImage = document.querySelector('.slider__header-item img'),
        leftArr = document.querySelector('.slide__footer .left-arr'),
        rightArr = document.querySelector('.slide__footer .right-arr'),
        sliderInner = document.querySelector('.slide__footer .slider__inner'),
        sliderInnerItems = document.querySelectorAll('.slider__inner .slide__footer-item');




    const pathBig = './img/big/';

    slideFooter.addEventListener('click', (e) => {
        const event = e.target;
        if (event.closest('.slide__footer-item')) {
            const imageSrc = event.src;
            const fileName = imageSrc.substring(imageSrc.lastIndexOf('/') + 1).replace('small', 'big');
            headerImage.src = pathBig + fileName;
        }
    });

    ///////////////////////////////
    let shift = 0;
    let forLeft = (sliderInnerItems.length * 106) - (106 * 3);
   // console.log(sliderInnerItems.length);


    leftArr.addEventListener('click', () => {
        if (shift > -forLeft) {
            shift -= 106;
            console.log(shift);
            sliderInner.style.transform = `translateX(${shift}px)`;
        } 
    });

    rightArr.addEventListener('click', () => {

        if (shift < 0) {
            shift += 106;
            console.log(shift);
            sliderInner.style.transform = `translateX(${shift}px)`;
        } 

    });



});