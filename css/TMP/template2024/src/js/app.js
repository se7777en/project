'use strict';
window.addEventListener('DOMContentLoaded', () => {
  



    const itemHeightOnload = () => {
        const itemHeight = document.querySelector('.main__items .main__item');
        const rightItem = document.querySelector('.main__items .cards');
        rightItem.style.height = itemHeight.offsetHeight + 'px';
    };
    itemHeightOnload();
    // window.onload = itemHeightOnload;
});

// const itemHeight = document.querySelector('.main__items .main__item'),
//       rightItem = document.querySelector('.main__items .cards');
// rightItem.style.height = window.getComputedStyle(itemHeight).height;






