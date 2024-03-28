'use strict';

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const helpModal = document.querySelector('.header .help'),
        headerContact = document.querySelector('.header .header__btn'),
        closeBtn = document.querySelector('.header .help__close');



    let mytexts = document.querySelectorAll('.methods .method');
    let linksParent = document.querySelectorAll('.descr__inner .descr__item');
    let linkParent = document.querySelector('.main__inner-right .descr__inner');


    let menuBtn = document.querySelector('.menu__btn');
    let menu = document.querySelector('.main__inner-right');

    document.addEventListener('scroll', () => {
        let ScrollPos = window.scrollY;

        mytexts.forEach((mytext) => {
            const textPos = mytext.offsetTop;
            const textHeight = mytext.offsetHeight;

            if (ScrollPos >= textPos - 60 && ScrollPos <= (textPos + textHeight)) {
                const postId = mytext.getAttribute('id');
                const found = linkParent.querySelector('#' + postId + '-link');

                if (found) {
                    const element = found.querySelector('.descr__item');
                    linksParent.forEach((item) => {
                        item.classList.toggle('active', item === element);
                    });
                }
            }
        });
    });






    headerContact.addEventListener('click', (e) => {
        if (headerContact.contains(e.target)) {
            helpModal.classList.toggle('show');
        }
    });

    closeBtn.addEventListener('click', () => {
        helpModal.classList.remove('show');
        // console.log(e.currentTarget);      
    });





    document.addEventListener('click', (e) => {
        if (!helpModal.contains(e.target) && !headerContact.contains(e.target)) {
            helpModal.classList.remove('show');
        }
    });


    // document.addEventListener('click', (e) => {
    //     if (!e.target.closest('#helpModal') && !e.target.closest('.header__btn')) {
    //         helpModal.classList.remove('show');
    //     }
    // });



    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('showmenu');
        
    });






});




