'use strict';

// this eto - kontekst vizova

/*function showThis(){
    console.log(this);
}
showThis();*/

///////////////////////
/*function showThis(a, b){
    console.log(this);
    function sum() {
        console.log(this);
        //return this.a + this.b;// this ne budet robotat pri strogom rejime
        return a + b;
    }
console.log(sum());
}
showThis(4, 5);*/
///////////////////////

/*const obj = {
    a: 20,
    b: 15,
    sum: function (){
        console.log(this); // this vozvrashaet ves obiekt v kotorom naxoditsya this 
      
        function shout(){
            console.log(this);
        }
        shout(); // eto prostoi vizov funkcii on ne otnositsya k metodu, on zapuskaetsya vnutri metoda
    }
};
obj.sum();*/
///////////////////////

/*
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hellow " + this.name);
    };
}

let melik = new User('Melik',36); // this ssilaetsya na ekzemplyar
*/
///////////////////////

function sayName(surname) {
    console.log(this);
    console.log(this.name +' '+ surname);
}

const user = {
    name: 'John'
};
/*
sayName.call(user);// privyazivaem obiekt k funkcii i funkciya priobretaet kontekst this
sayName.apply(user);// eti funkcii delau odno i toje raznica tolka v sintaksise
*/
sayName.call(user,'Smith'); // Argumenti mojno peredavat cherez zapyatuu
sayName.apply(user,['Smith']);// Argumenti peredautsya cherez masiv

function count(num) {
    return this * num;
}

const double = count.bind(2);// bind() sozdaet novuu funkciu i peredaet kontekst v funkciu count
console.log(double(3)); // peredaem parametr funkcii num
console.log(double(13));

console.log('//////////////////');

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
console.log(this); // kontekst vizova budet sam element na kotorom proizoshlo sobitie kak envent.target
this.style.backgroundColor = 'red';
});
/////////////////////////////////
const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => { //u strelochnoi funkcii net svoego konteksta vizova this ona budet ego brat u svoego roditelya 
            // v dannom sluchae na metod sayNumber a metod sayNymber na obiekt
            console.log(this.num);
        };
        say();
    }
};
obj.sayNumber();
////////////////////////////////////////////
/*const double1 = (a) => {
    return a * 2;
};// mojno ukorotit
*/
const double1 = a => a * 2;
console.log(double1(4));


// 1) obichnaya funkciya: this = window no esli stoit 'use strict' to this = udefined
// 2) Kontekst u metodov obiekta - sam obiekt
// 3) this v konstruktotax i klassax - eto novi ekzemplyar obiekta
// 4)  Ruchnaya privyazka this: call, apply, bind