'use strict';

const obj = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
        getPublicData: function(){
            console.log(`${this.name} ${this.surname}`);
        }
    
    };

for(const key in obj){
    console.log(obj[key]);
}
console.log('//////////////');
const arr = ['b','a','c'];
Array.prototype.myFunc = function(){}; // rezerviruem funciu v prototipe no pri for(of) ana vidna ne budet
for(const key in arr){
    console.log(arr[key]);
}
console.log('//////////////');

const str = 'String';
for(const key in str){
    console.log(str[key]);
}
//pri perebore masiva ili stroki obiekta mojet proizoiti zagvozdka
// ani budut vivoditsya ne po poryadki for(in) - perebiraet svoistva
// ne obyazatelno po poryadku i poetomu ne rekomenduetsya ego ispolzovat na masivax i strokax 
// dlya etix zadach v novom standarte es6 vishla novaya funkciya for(of)

///////////////////////////
//iterator eto metod kotori vozvrashaet obiekt s metodom NEXT

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHellow: function () {
        console.log('Hellow');
    }

};
// delaem obiekt iteriruemi
salaries[Symbol.iterator] = function () {
    return {
        current: this.john, // minimalnaya zarplata
        last: this.ann, // maksimalnaya zarplata

        next() {
            //////////////////////////
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {
                    done: false,
                    value: this.current
                };
            //////////////////////////
            } else {
                return {
                    done: true
                };
            }
        }
    };
};

for(let val of salaries){
    console.log(val);
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());