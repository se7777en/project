'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver( MutationRecord => {
console.log(MutationRecord);
});

observer.observe(box, {
childList: true
});

observer.disconnect();// perestaet sledit za obiektom

// est esho  ResizeObserver
// dokumentaciya https://developer.mozilla.org/ru/docs/Web/API/MutationObserver