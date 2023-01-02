"use strict";

const box = document.getElementById('box');
console.log(box);

const btn = document.getElementsByTagName('button');
console.log(btn);
console.log(typeof(btn));
console.log(btn[1]);

console.log('//////////////');
const circles = document.getElementsByClassName('circle'); 
console.log(circles);
console.log(typeof(circles));

console.log('//////////////');
const  hearts = document.querySelectorAll('.heart');
console.log(hearts);
console.log(typeof(hearts));

hearts.forEach(item => {
console.log(item);
});

console.log('//////////');
const heart2 = document.querySelector('.heart');
console.log(heart2);