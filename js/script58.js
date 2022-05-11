'use strict';

const obj = {
    name: 'Alex',
    surname: 'Smith',
    //birthday: '20/04/1993',
        getPublicData: function(){
            console.log(`${this.name} ${this.surname}`);
        }
    
    };

let str = [1,2,3,4,5,6,7,8,9,0];
console.log(obj);