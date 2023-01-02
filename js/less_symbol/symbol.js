'use strict';
//let id2 = Symbol('id2');

const obj = {
    'name': 'Test',
    [Symbol("id2")]: 1,
    //[id2]: 150,
    [Symbol("id")]: 200

    /*getId: function() {
        return this[id];
    }*/
};


//console.log(obj);
//obj.getId(); // poluchaem dostup k simvolu cherez funkciu
//for(let value in obj) {console.log(value);}
//console.log('----------');
obj[Object.getOwnPropertySymbols(obj)[0]] = 20; // menyaem znachenie Symbol
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]); // poluchaem dostup k znacheniu Symbol

const symb = Object.getOwnPropertySymbols(obj);
console.log(obj[symb[1]]);
//console.log(obj['id']);
// Symbol -  pozvolyaut sozdavat skritie svoistva kotorie
//ishe ne otobrajautsya pri perebore
// ani dlya togo chtobi v obiekte sozdat privatnoe skritoe svoistvo




/*
let id = Symbol('id');// simvoli vsegda unikalni
let id2 = Symbol();// pishetsya vot tak
let id3 = Symbol('id');

console.log(id == id3); // simvoli imeut odinakovoe opisanie no ani ne ravni
//ani vsegda unikalni
obj[id] = 1;
obj[id2] = 2;

console.log(obj[id]);

console.log(obj);*/


const myAvesomeDB = {
movies: [],
actors: [],
id: 555,
[Symbol("id")] : 88,// unikalni
[Symbol.for("id")]: 123 // globalni reestr Symbol lishaem unikalnosti pri pomoshi for
};
console.log(myAvesomeDB[Symbol.for('id')]); //123
console.log(myAvesomeDB);
