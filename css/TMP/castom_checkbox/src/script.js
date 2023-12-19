'use strict';

const color = document.querySelector('body'),
      wrap = document.querySelector('.move');  

wrap.addEventListener('click',()=>{
    color.classList.toggle('color');
});

