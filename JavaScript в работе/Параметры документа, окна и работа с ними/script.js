'use strict';

const box = document.querySelector('.box');
/*
const width = box.clientWidth;
const height = box.clientHeight;*/
/*
const width = box.offsetWidth;
const height = box.offsetHeight;*/


const width = box.scrollWidth;
const height = box.scrollHeight;
console.log(width, height);

const btn = document.querySelector('button');
btn.addEventListener('click' , ()=> {
console.log('Click');
box.style.height = box.scrollHeight + 'px';// inline style
console.log(box.scrollTop);

});

console.log(box.getBoundingClientRect());// vse storoni

const style = window.getComputedStyle(box);// otobrazit kakie css elementi bili primeneni k obiektu
console.log(style);// vivodim ix
console.log(style.display);//poluchaem ix
// psevdo element poluchit so stranici ne poluchitsya no stili
// poluchit mojna const style = window.getComputedStyle(box, );

console.log(document.documentElement.scrollTop);// osnovnoi scrol na stranice mojno zadat samomu document.documentElement.scrollTop = 0;
window.scrollBy(0, 400);// ot tekushego pozicii 400 px vniz
window.scrollTo(0, 400);// ot vsei stranici 400px vniz