'use strict';

function* generator(){
    yield 'a';
    yield 'b';
    yield 'c';
    yield 'd';
    yield 'e';
}

const gen = generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log(gen.next().value);

console.log('/////////////////////');


function* count(n){
    for(let i = 0; i < n; i++){
        yield i;
    }
}
/*
const counter = count(4);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);*/


//perebiraem funkciu generator
for(let k of count(5)){
    console.log(k);
}

/// funkciya generator



