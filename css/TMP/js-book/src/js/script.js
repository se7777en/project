'use strict';

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const helpModal = document.querySelector('.header .help'),
        headerContact = document.querySelector('.header .header__btn'),
        closeBtn = document.querySelector('.header .help__close');


    headerContact.addEventListener('click', (e) => {
        if(headerContact.contains(e.target)) {
            helpModal.classList.toggle('show');
        }
    });

    closeBtn.addEventListener('click', () => {
        helpModal.classList.remove('show');
        // console.log(e.currentTarget);      
    });



   

    document.addEventListener('click', (e) => {
        if(!helpModal.contains(e.target) && !headerContact.contains(e.target)){
            helpModal.classList.remove('show');
        }
    });


    // document.addEventListener('click', (e) => {
    //     if (!e.target.closest('#helpModal') && !e.target.closest('.header__btn')) {
    //         helpModal.classList.remove('show');
    //     }
    // });






});




