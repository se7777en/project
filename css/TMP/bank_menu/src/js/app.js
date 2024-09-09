'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const burgerIcon = document.querySelector('.header__burger-icon'),
          
          mainMenu = document.querySelector('.header__inner'),
          activeMenu = document.querySelector('.burge__menu'),
          burgerClose = document.querySelector('.burger__close'),
          body = document.querySelector('BODY');

          

   

          burgerIcon.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
            activeMenu.classList.toggle('active');
            body.classList.toggle('lock');
          });

          burgerClose.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
            activeMenu.classList.toggle('active');
            body.classList.toggle('lock');
            
          });






    new Swiper(".mySwiper", {
        speed: 1500,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        autoplay: {
            delay: 1500,
          }
      });

     
    //  const swip =  new Swiper(".info__items", {
    //     speed: 1500,

    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },

    //     // pagination: {
    //     //   el: ".swiper-pagination2",
    //     //   dynamicBullets: true,
    //     //   clickable: true,
    //     // },
    //     autoplay: {
    //         delay: 1500,
    //       }
    //   });
    





});