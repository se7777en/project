'use strict';

const container = document.querySelectorAll('#container'),
      btns = document.querySelectorAll('.remove-button');  

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        btn.parentElement.remove();

    });

});

