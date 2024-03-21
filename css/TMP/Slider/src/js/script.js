'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const sliderInnerItems = document.querySelectorAll('.sliderWrapper .slider__inner .slider__inner-item'),
        leftArrow = document.querySelector('.sliderWrapper .slider__leftArrow'),
        rightArrow = document.querySelector('.sliderWrapper .slider__rightArrow'),
        slider = document.querySelector('.sliderWrapper .slider'),
        footerBlock = document.querySelector('.sliderWrapper .building-blocks'),
        footerBlocks = document.querySelectorAll('.sliderWrapper .building-block'),
        sliderInner = document.querySelector('.sliderWrapper .slider__inner');



    const Count = 11; // number of image
    const spaceBetweenSliders = 0; // space between sliders in px
    // width in pixel
    // slider on page count


    // if (window.matchMedia("(max-width: 1230px)").matches) {
    //     itemWidht = 250;








    let slideToshow = 3;
    let gap = 5;
    let itemWidht = 200 + gap;


    slider.style.width = `${itemWidht * slideToshow - gap}px`;
    sliderInner.style.gap = `${gap}px`;
    let shift = 0;
    let sliderCount = sliderInnerItems.length;



    //console.log(sliderCount);

    // slider.style.width = `${sliderCount * itemWidht}px, overflow: hidden`;
    let forLeft = (sliderCount * itemWidht) - itemWidht * slideToshow;
    console.log(forLeft);
    //console.log(forLeft);

    leftArrow.addEventListener('click', () => {
        let footerBlocks = document.querySelectorAll('.sliderWrapper .building-block');
        if (shift > -forLeft) {
            const parent = document.querySelector('.sliderWrapper .slider__inner');
            shift -= itemWidht * slideToshow;
            parent.style.transform = `translateX(${shift}px)`;

            //  console.log(Math.abs(((shift / itemWidht) / slideToshow))); //tekushi slaid
            let index = Math.abs(((shift / itemWidht) / slideToshow));
            disableActive(footerBlocks);
            console.log(index);
            footerBlocks[index].classList.add('active');
        }
    });


    rightArrow.addEventListener('click', () => {
        let footerBlocks = document.querySelectorAll('.sliderWrapper .building-block');
        if (shift < 0) {
            //console.log(shift);
            const parent = document.querySelector('.sliderWrapper .slider__inner');
            shift += itemWidht * slideToshow;
            console.log(Math.abs(((shift / itemWidht) / slideToshow)));
            parent.style.transform = `translateX(${shift}px)`;

              //  console.log(Math.abs(((shift / itemWidht) / slideToshow))); //tekushi slaid
              let index = Math.abs(((shift / itemWidht) / slideToshow));
              disableActive(footerBlocks);
              console.log(index);
              footerBlocks[index].classList.add('active');
        }
    });

    const buildingBlock = () => {
        let items = '';
        for (let i = 0; i < Math.floor(sliderCount / slideToshow); i++) {
           let active = (i === 0) ? 'active' : '';
            items += `<div class="building-block ${active}"></div>`;
        }
        footerBlock.innerHTML = items;
    }
    buildingBlock();



    const disableActive = (items, status = 'active') => {
        items.forEach((item) => {
            if (item.classList.contains(status)) {
                item.classList.remove(status);
            }
        })
    }

    const buildingBlockStatus = () => {
        const id = -itemWidht;
        const footerBlocks = document.querySelectorAll('.sliderWrapper .building-block');
        const length = footerBlocks.length;
        footerBlocks.forEach((item, i) => {
            item.addEventListener('click', () => {
                disableActive(footerBlocks);
                item.classList.add('active');
                let identify = i * id * slideToshow;
                let parent = document.querySelector('.sliderWrapper .slider__inner');
               // if (identify >= -forLeft) {
                    parent.style.transform = `translateX(${identify}px)`;
                    shift = identify;
                //} 
            });
        });

 
    }

    buildingBlockStatus();
    //


    //sliderCount
    //footerBlocks



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