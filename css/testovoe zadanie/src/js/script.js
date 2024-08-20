'use strict';
document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();

  const burger = document.querySelector('.burger__menu'),
    headerMenu = document.querySelector('.header__menu'),
    headerList = document.querySelector('.header__list');

  burger.addEventListener('click', () => {
    headerMenu.classList.add('active');
    headerList.classList.add('active');
  });

  headerMenu.addEventListener('click', (e) => {
    const event = e.target;
    if (event.classList.contains('header__menu')) {
      burger.classList.remove('active');
      headerMenu.classList.remove('active');
      headerList.classList.remove('active');
    }

  });


});



/*
document.querySelector('.scroll-container').addEventListener('scroll', function() {
  if (this.scrollTop > 50) { // Если прокрутили больше, чем на 50px
    this.classList.add('scrolled');
  } else {
    this.classList.remove('scrolled');
  }
});
*/