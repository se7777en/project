'use strict';

const now = new Date();// tekushaya data i vremya
console.log(now);

const now1 = new Date('2020-05-01');// ustonavlivaem datu vruchnuu
console.log(now1);

const now3 = new Date(2020, 5, 1, 20);// zadaem datu vruchnuu
console.log(now3);

const now4 = new Date(0);// data nachala osnovaniya UNIX
console.log(now4);

const now5 = new Date(-9999999999); // tekushee vremya minus ukazanoe
console.log(now5);

//////////////
const now6 = new Date();
console.log(now6.getFullYear());// tekushi god
console.log(now6.getMonth());// tekushi mesyac
console.log(now6.getDate());// tekushee chislo
console.log(now6.getDay());// nomer dnya nedeli

console.log(now6.getHours());// chas
console.log(now6.getUTCHours());// vremya po UTC


console.log(now6.getTimezoneOffset());// raznica mejdu chasovim poyasom i UTC
console.log(now6.getTime());// vremya s pervogo yanvarya 1970 goda


console.log(now6.setHours(40));// stavim vremya javascript sam raspredelyaet ego
console.log(now6);

const now7 = new Date('2020-05-01');// zadaem vremya
//new Date.parse('2020-05-01');// zadaem vremya cherez metod parse
console.log(now7);
////////////

// kak izmerit vremya roboti skripta
let start = new Date();
for(let i = 0; i< 100000;i++){
    let same = i ** 3;
}
let end  = new Date();

console.log(`Cikl otrabotal za ${end - start} milesikund`);


