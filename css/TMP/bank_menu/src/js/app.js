'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const burgerIcon = document.querySelector('.header__burger-icon'),
          
          mainMenu = document.querySelector('.header__inner'),
          activeMenu = document.querySelector('.burge__menu'),
          burgerClose = document.querySelector('.burger__close');

          

   

          burgerIcon.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
            activeMenu.classList.toggle('active');
          });

          burgerClose.addEventListener('click', () => {
            console.log('yy');
            mainMenu.classList.toggle('active');
            activeMenu.classList.toggle('active');
            
          });






    let swiper = new Swiper(".mySwiper", {
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        autoplay: {
            delay: 150000,
          }
      });





});