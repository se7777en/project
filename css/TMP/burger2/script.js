'use strict';

const active = document.querySelector('.burger__menu'),
      headerMenu = document.querySelector('.header__menu'),
      body = document.querySelector('body');

      active.addEventListener('click', () => {
        active.classList.toggle('active');
        headerMenu.classList.toggle('active');
        body.classList.toggle('lock');
      });
