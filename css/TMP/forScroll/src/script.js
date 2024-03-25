'use strict';

const wrapperItem = document.querySelector('.wrapper__item'),
    mytext = document.querySelector('.mytext'),
    uncover = document.querySelector('.block__header-uncover'),
    blockContent = document.querySelector('.block__content'),
    faSolidIcon = document.querySelector('.block__header .fa-solid');





wrapperItem.addEventListener('scroll', () => {

    const ScrollPos = wrapperItem.scrollTop;
    const textPos = mytext.offsetTop;
    const textHeight = mytext.offsetHeight;


    if (ScrollPos >= textPos - 10 && ScrollPos <= (textPos + textHeight)) {
        console.log('mytext');
    }

});




uncover.addEventListener('click', () => {
    blockContent.classList.toggle('show');
    faSolidIcon.classList.toggle('fa-chevron-down');
})