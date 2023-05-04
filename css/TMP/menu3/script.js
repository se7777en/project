// $(document).ready(function(){
//     $('.header__burger').click(function(){
//         $('.header__burger, .menu').toggleClass('active');
//         $('body').toggleClass('lock');

//     });
// });

'use strict';
const header = document.querySelector('.header__burger'),
      menu = document.querySelector('.menu'),
      bg = document.querySelector('body');

header.addEventListener('click', () => {
    header.classList.toggle('active');
    menu.classList.toggle('active');
    bg.classList.toggle('lock');
    
});
