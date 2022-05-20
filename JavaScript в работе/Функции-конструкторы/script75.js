'use strict';
/*
const num = new Number(10);
console.log(num);*/

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(){ // dobavlyaem funkciu exit 
console.log(`polzovatel ${this.name} ushel!`);
};

const melik = new User('Melik',36);
const alex = new User('Alex', 28);

melik.hello();
alex.hello();



console.log(melik);
console.log(alex);
melik.exit();


// sozdaem iz funkcii obiekt


class User1 {
    constructor(name, id = 20){
        this.name = name;
        this.id = id;
    }

    func1(){
        console.log(`Hellow ${this.name}!`);
    }

    func2(){
        console.log(`Polzovatel ${this.name} ushel`);
    }
}

const john = new User1('John');
john.func1();
john.func2();

console.log(john);