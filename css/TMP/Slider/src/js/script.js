'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const sliderInnerItems = document.querySelectorAll('.sliderWrapper .slider__inner .slider__inner-item'),
        leftArrow = document.querySelector('.sliderWrapper .slider__leftArrow'),
        rightArrow = document.querySelector('.sliderWrapper .slider__rightArrow'),
        slider = document.querySelector('.sliderWrapper .slider'),

        sliderItemWidth = document.querySelectorAll('.sliderWrapper .slider__inner img'),
        sliderWrapper = document.querySelector('.sliderWrapper');



    const Count = 11; // number of image
    const spaceBetweenSliders = 0; // space between sliders in px
    // width in pixel
    // slider on page count


    // if (window.matchMedia("(max-width: 1230px)").matches) {
    //     itemWidht = 250;







    let shift = 0;
    let slideToshow = 4;
    let gap = 5;
    let itemWidht = 200 + gap;




    let sliderCount = sliderInnerItems.length;

    slider.style.width = `${sliderCount * itemWidht}px, overflow: hidden`;


    let forLeft = (sliderCount * itemWidht) - (itemWidht * slideToshow);
    leftArrow.addEventListener('click', () => {
        if (shift > -forLeft) {
            const parent = document.querySelector('.sliderWrapper .slider__inner');
            shift -= itemWidht;
            parent.style.transform = `translateX(${shift}px)`;

        }

    });

    rightArrow.addEventListener('click', () => {
        if (shift < 0) {
            console.log(shift);
            const parent = document.querySelector('.sliderWrapper .slider__inner');
            shift += itemWidht;
            parent.style.transform = `translateX(${shift}px)`;
        }
    });



    // sliderInnerItems[0].style = `border-radius: 0px 5px 5px 0px`;
    // sliderInnerItems[sliderInnerItems.length].style = `border-radius: 5px 0px 0px 5px`;





    //transform: translateX(200px);


    //////swaip///////////

    // let startX;
    // let endX;
    // let startY;
    // let endY;
    // let threshold = 50; // порог для определения свайпа или клика

    // sliderInner.addEventListener('touchstart', (e) => {
    //     startX = e.touches[0].clientX;
    //     startY = e.touches[0].clientY;
    // });

    // sliderInner.addEventListener('touchmove', (e) => {
    //     endX = e.touches[0].clientX;
    //     endY = e.touches[0].clientY;
    // });

    // sliderInner.addEventListener('touchend', () => {
    //     const deltaX = startX - endX;
    //     const deltaY = startY - endY;
    //     if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
    //         if (Math.abs(deltaX) > Math.abs(deltaY)) {
    //             if (deltaX > 50) {
    //                 // свайп влево
    //                 scrollToNextSlide();
    //             } else if (deltaX < -50) {
    //                 // свайп вправо
    //                 scrollToPreviousSlide();
    //             }
    //         }
    //     } else {
    //         // Это был клик, ничего не делаем
    //     }
    // });

    // function scrollToNextSlide() {
    //     // Реализуйте логику для прокрутки к следующему слайду
    //     if (shift > -(forLerft)) {
    //         shift = shift - itemWidht;
    //         sliderInner.style = `transform: translateX(${shift}px);`;
    //     }
    // }

    // function scrollToPreviousSlide() {
    //     // Реализуйте логику для прокрутки к предыдущему слайду
    //     if (shift < 0) {
    //         shift = shift + itemWidht;
    //         sliderInner.style = `transform: translateX(${shift}px);`;
    //     }
    // }
    // //////swaip///////////


});