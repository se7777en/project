'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const slideFooter = document.querySelector('.slide__footer'),
        headerImage = document.querySelector('.slider__header-item img'),
        leftArr = document.querySelector('.slide__footer .left-arr'),
        rightArr = document.querySelector('.slide__footer .right-arr'),
        sliderInner = document.querySelector('.slide__footer .slider__inner'),
        sliderInnerItems = document.querySelectorAll('.slider__inner .slide__footer-item');




    const pathBig = './img/big/';
    const width = 106 + 1;

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
    let forLeft = (sliderInnerItems.length * width) - (width * 3);

    ////////////////
    const leftSlide = () => {
        if (shift > -forLeft) {
            shift -= width;
            sliderInner.style.transform = `translateX(${shift}px)`;


            let p = 0;
            if (shift < 0) {
                p = Math.abs(shift) / width;
            }
            const item = document.querySelectorAll('.slider__inner .slide__footer-item')[1 + p];
            const path = item.querySelector('img').src;
            const fileName = path.substring(path.lastIndexOf('/') + 1).replace('small', 'big');
            headerImage.src = pathBig + fileName;
           


        }
    }


    leftArr.addEventListener('click', () => {
        leftSlide();
    });


    ////////////////
    const rightSlide = () => {
        if (shift < 0) {
            shift += width;
            sliderInner.style.transform = `translateX(${shift}px)`;


            let p = 0;
            if (shift < 0) {
                p = Math.abs(shift) / width;
            }
            const item = document.querySelectorAll('.slider__inner .slide__footer-item')[1 + p];
            const path = item.querySelector('img').src;
            const fileName = path.substring(path.lastIndexOf('/') + 1).replace('small', 'big');
            headerImage.src = pathBig + fileName;

        }
    }

    rightArr.addEventListener('click', () => {
        rightSlide();
    });

    /////////////////////////////////////
    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowLeft") {
            rightSlide();
        } else if (event.key === "ArrowRight") {
            leftSlide();
        }
    });




});