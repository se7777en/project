// $(document).ready(function(){
//     $('.header__burger').click(function(){
//         $('.header__burger, .header__menu').toggleClass('active');
//         $('body').toggleClass('lock');

//     });
// });


'use strict';

const active = document.querySelector('.header__burger'),
      headerMenu = document.querySelector('.header__menu'),
      body = document.querySelector('body');

      active.addEventListener('click', () => {
        active.classList.toggle('active');
        headerMenu.classList.toggle('active');
        body.classList.toggle('lock');
      });