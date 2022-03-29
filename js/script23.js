"use strict";

const soldier = {
    color: "wight",
    height: 182,
    bt: "jjj"
};

const john = {
    age: 36
};

//john.__proto__ = soldier; // pereadet svoistva ot soldier 
//k john __proto__ - stari metod i uje ne ispolzuetsya (deprecated)
//console.log(john.height);

Object.setPrototypeOf(john,soldier); // dobavlyaet svoistva ot soldier k john 

console.dir(soldier);
console.dir(john.color);

const john1 =  Object.create(soldier); // sozdaet i  dobavlyaet k obiektu john1 svoistvo ot soldier
console.log(john1.bt);
console.log(typeof(john1));

