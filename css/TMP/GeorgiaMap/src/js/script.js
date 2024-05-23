'use strict';
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const items = document.querySelectorAll('.item');
    const activeItems = document.querySelector('.active-items');
    const borders = document.querySelector('.borders');
    // console.log(items);

    // const border = document.querySelectorAll('.border');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            activeItems.appendChild(item);
            item.classList.toggle('scal');

            if (!item.matches('.scal')) {
                activeItems.appendChild(borders);
            } else {
                activeItems.prepend(borders);
            }

            // setTimeout(() => {
            //     item.classList.remove('scal');
            //     activeItems.appendChild(borders);
            // }, 3000);

        });
    });

    // kartli.addEventListener('click', () => {
    //     kartli.classList.add('scal');

    //     // border.forEach((item) => {
    //     //     item.classList.add('index');
    //     // });
    //     setTimeout(() => {
    //         kartli.classList.remove('scal');
    //         // border.forEach((item) => {
    //         //     item.classList.remove('index');
    //         // });
    //     }, 3000);
    // });
});
