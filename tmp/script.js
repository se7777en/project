'use strict';

const btn = document.querySelectorAll('.remove-button').forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentElement.remove();

    });

});

