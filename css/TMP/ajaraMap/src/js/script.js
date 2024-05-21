'use strict';
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const kartli = document.querySelector('.kartli');
    const border = document.querySelectorAll('.border');

    kartli.addEventListener('click', () => {
        kartli.classList.add('scal');

        // border.forEach((item) => {
        //     item.classList.add('index');
        // });
        setTimeout(() => {
            kartli.classList.remove('scal');
            // border.forEach((item) => {
            //     item.classList.remove('index');
            // });
        }, 3000);
    });
});
