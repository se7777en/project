'use strict';
document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();

    const subMenu = document.querySelector('.menu__submenu'),
        headerStatus = document.querySelector('.menu__status');

    headerStatus.addEventListener('click', () => {
        subMenu.classList.toggle('active');
    });


    document.addEventListener('click', (e) => {
        if (!headerStatus.contains(e.target) && !subMenu.contains(e.target)) {
            subMenu.classList.remove('active');
        }
    });

});