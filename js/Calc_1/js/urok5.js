'use strict';

function factorial(num) {
    if(typeof(num) !== 'number' || !Number.isInteger(num)){
        return 'err';
    }
    let out = 1;
    for (let i = num; i > 0; i--) {
        out *= i;
    }
    return out;

}

console.log(factorial(5));


