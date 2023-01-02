'use strict';
let a = 5,
    b = 10;

b = b + 5;
console.log(b);
console.log(a);    

const obj = {
a: 5,
b: 1
};

const copy = obj; // v copy kladetsa copy
copy.a = 95;

console.log(copy);
console.log(obj);


function copy1(mainObj){
    let objCopy = {};

    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];// kopiruem obiekt poverxnostno
    }
    return objCopy;
}

const numbers = {
a: 5,
b: 6,
c: 7,
    d:{
        e: 1,
        d: 2
    }
};

const newnumbrs = copy1(numbers);
newnumbrs.b = 20;
console.log(newnumbrs);
console.log(numbers);


const obj3 = {
a: 10,
b: 20
};

const clone = Object.assign({},obj3);// kopiruet obiekt poverxnostno (iz obj3 v pustoi obiekt i potom v clone)
obj3.a = 99;

console.log(obj3);
console.log(clone);



const arr = ['a','b','c','d'];
const newarray = arr.slice(); // slice() - kopiruem masiv
//const newarray = arr; pri takom kopirovanii proizxodit silka na masiv masivi odinakovie 

newarray[1] = 888;
console.log(arr);
console.log(newarray);
//////////////////////////////////

const ar = ['facebook','youtube','mail.ru','google'],
      ar2 = ['yota','file.ge','same url'],
      internet = [...ar,...ar2,'vk','inst','telegr','ok']; //   ... - orepator spred razbivaet masiv na sastavlyaushie 
console.log(internet);

function log(a,b,c){
console.log(a);
console.log(b);
console.log(c);
}

const num = [10,20,30];

log(...num);// razbivaet masiv num na sastavlyaushie i peredaet kak parametri


const ar4 = ['a','b','c'];
const ar5 = [...ar4];
console.log(ar5);


const ob = {
a: 1,
b: 2,
c: 3,
};

const newobj = {...ob};
console.log(newobj);












