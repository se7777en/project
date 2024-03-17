'use strict';
document.addEventListener('DOMContentLoaded',() => {
    const sliderInner = document.querySelector('.sliderWrapper .slider__inner'),
        leftArrow = document.querySelector('.sliderWrapper .slider__leftArrow'),
        rightArrow = document.querySelector('.sliderWrapper .slider__rightArrow'),
        sliderCountOnPage = document.querySelector('.sliderWrapper .slider'),
        sliderItemWidth = document.querySelector('.sliderWrapper .slider__inner img');
        
    
    
    const Count = 11; // number of image
    const spaceBetweenSliders = 0; // space between sliders in px
    let itemWidht = 200; // width in pixel
    let slideToshow = 4; // slider on page count

    if (window.matchMedia("(max-width: 840px)").matches) {
        slideToshow = 3;
        console.log('840px');
    }   

    if (window.matchMedia("(max-width: 640px)").matches) {
        slideToshow = 2;
        console.log('640px');
    }   
    
    if (window.matchMedia("(max-width: 430px)").matches) {
        slideToshow = 1;
        console.log('430px');
    }   
    
    
    
    sliderCountOnPage.style = `width: ${itemWidht * slideToshow}px`;
    sliderItemWidth.style = `width: ${itemWidht}px`;
    //sliderInner.style = `gap: ${spaceBetweenSliders}px;`;
    
    itemWidht = itemWidht + spaceBetweenSliders;
    const forLerft = Count * itemWidht - (itemWidht * slideToshow);
    
    // const sliderWidth = Count * itemWidht;
    

    let shift = 0;
    leftArrow.addEventListener('click', () => {
      if(shift > -(forLerft)) {
        shift = shift - itemWidht;
        sliderInner.style = `transform: translateX(${shift}px);`;
      }
       
    });
    
    
    
    rightArrow.addEventListener('click', () => {
        if(shift < 0) {
            shift = shift + itemWidht;
        sliderInner.style = `transform: translateX(${shift}px);`;
        }
    
    });
    
    
    //transform: translateX(200px);


    //////swaip///////////

let startX;
let endX;

sliderInner.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

sliderInner.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

sliderInner.addEventListener('touchend', () => {
    const deltaX = startX - endX;
    if (deltaX > 50) {
        // свайп влево
        scrollToNextSlide();
    } else if (deltaX < -50) {
        // свайп вправо
        scrollToPreviousSlide();
    }
});

function scrollToNextSlide() {
    // Реализуйте логику для прокрутки к следующему слайду
    if(shift > -(forLerft)) {
        shift = shift - itemWidht;
        sliderInner.style = `transform: translateX(${shift}px);`;
      }
}

function scrollToPreviousSlide() {
    // Реализуйте логику для прокрутки к предыдущему слайду
    if(shift < 0) {
        shift = shift + itemWidht;
    sliderInner.style = `transform: translateX(${shift}px);`;
    }
}
   //////swaip///////////


});