'use strict';

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const helpModal = document.querySelector('.header .help'),
        headerContact = document.querySelector('.header__contact .header__btn'),
        closeBtn = document.querySelector('.header .help__close');


    headerContact.addEventListener('click', () => {
        helpModal.classList.toggle('show');
    });

    closeBtn.addEventListener('click', (e) => {
        helpModal.classList.remove('show');
        console.log(e.currentTarget);

        if (e.target !== closeBtn && e.target !== helpModal) {
            helpModal.classList.remove('show');
        }
    });


    // document.addEventListener('click', (e) => {
    //     // if(!helpModal.contains(e.target)){
    //     //     helpModal.classList.remove('show');
    //     // }
    // });






});




