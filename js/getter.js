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
console.log(obj.access = 30); //сеттеры
console.log(obj.access);