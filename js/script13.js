"use strict";

const str = "hellow world";
console.log(str.length);

console.log(str.slice(3,6));//low (-3 -6) - s konca stroki 
console.log(str.substring(3,6));//low ne (poderjivaet otricatelnie znacheniya) otricatelnoe znachenie interpretiruetsya kak 0
console.log(str.substr(3,6));//low wo

const num = 12.2;
console.log(Math.round(num));//12

const test = "12.2px";
console.log(parseInt(test)); // 12 from test
console.log(parseFloat(test)); // 12.2 from test

const str1 = "Privqqqqqqqqqet kak dela?";
console.log(str1.indexOf("e"));// vozvrashaet index simvola(i kusochek strochki) nachinaet s 0 , esli netu vozvrashaet -1


const str2 = "Hellow how are you";
console.log(str2.toUpperCase()); // HELLOW HOW ARE YOU
const str3 = "HELLOW HOW ARE YOU";
console.log(str3.toLowerCase());// hellow how are you