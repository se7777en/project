'use strict';

const wrapperItem = document.querySelector('.wrapper__item'),
    mytext = document.querySelector('.mytext');





wrapperItem.addEventListener('scroll', () => {

    const ScrollPos = wrapperItem.scrollTop;
    const textPos = mytext.offsetTop;

    const textHeight = mytext.offsetHeight;


    if (ScrollPos >= textPos - 10 && ScrollPos <= (textPos + textHeight)) {
        console.log('mytext');
    }

});