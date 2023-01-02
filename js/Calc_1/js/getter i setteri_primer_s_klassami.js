'use strict';

//акцессоры, гетеры и сеттеры
const obj = {
    name: 'Melik',
    age: 25,

    get access(){
        return this.age;
    },

    set access(num){
        this.age = num;
    }

};

console.log(obj.access); //гетеры
obj.access = 30; //сеттеры
console.log(obj.age);




function GetAge(name, age) { // funcciya konstruktor

    this.name = name;
   // this.age = age;
   let vozvrast = age; // tak obiyavlyaetsya privatnoe svoistvo


    this.say = function () {
        console.log(`Imya polzovatelya ${this.name} vozvrast ${vozvrast}`);
    };

    this.getAge = function (){
        //return this.age;
        return vozvrast;
    };

    this.setAge = function (age) {
        //this.age = age;
        if (typeof (age) === 'number' && age > 0 && age < 110) {
            vozvrast = age;
        } else {
            console.log('nedopustimoe znachenie!');
        }
    };
    


}

const fromFunc = new GetAge('Melik', 36);
//console.log(fromFunc.getAge());
fromFunc.say();

fromFunc.setAge(100);
//fromFunc.vozvrast = 150; // naprysmuu k svoistvu poluchit dostup ne poluchitsya potomuchto svoistvo zashishonoe
console.log(fromFunc.vozvrast);
fromFunc.say();


class Users {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    //#vozvrast = 92; //privatnoe svoistvo

    get forAge() {
        return this._age;
    }

    set forAge(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Nedopustimoe znachenie!!');
        }
    }

    say() {
        console.log(`Imya: ${this.name} vozvrast ${this._age}`);
    }
}

const examle = new Users('Melik', 36);
console.log(examle.forAge); // izpolzuem getter
examle.forAge = 25; // izpolzuem setter
examle.forAge = 120;// izpolzuem setter
console.log(examle.forAge);// izpolzuem getter
//examle.#vozvrast = 66;
examle.say();
