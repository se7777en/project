'use strict';
/*
const timerId = setTimeout(function() {
    console.log('hellow');
}, 2000);

const timerId2 = setTimeout(function(text) {
    console.log(text);
}, 2000,'hellow');

// setTimeout - prinemaet tri parametar funkciu , vremya i mojno parametri funkcii
// mojno peredavat funkciu
console.log(timerId2);
/////////////////////////////
function logger(){
    console.log('text');
}

const timerId3 = setTimeout(logger,2000);
// mojno peredavat funkciu, funkciya peredaetsya bez skobok, esli so skobkami 
//to ana vipolnyaetsya

clearInterval(timerId3); // ostanavlivaet setTimeout po identifikatoru timerId3
////////////////////////////////////
*/


const btn = document.querySelector('.btn');
let timerId4,
    i = 0;
/*
btn.addEventListener('click',() => {
    //const timerId4 = setTimeout(logger,2000);
    timerId4 = setInterval(logger,500); // setInterval rabotaet tochno takje ka i setTimeout no ana vipolnyaetsya mno raz a setTimeout odin raz
});

 

function logger(){
    if(i === 3){
        clearInterval(timerId4);
    }
    console.log('text');
    i++;
}

// rekursivnoe reshenie problemi vo vremeni funkciya jdet 500 milisekund i potom vipolnyaetsya
let id = setTimeout(function log(){
    console.log('hellow');
    id = setTimeout(log,500);
},500);
*/
//////////////////////////////////////////////

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);
//////////////////////////////////////////////