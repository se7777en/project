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


function fact(num){
    if (typeof (num) !== 'number' || !Number.isInteger(num)) {
        return 'err';
    }

    if (num >= 1) {
        return num * fact(num - 1);
    } else {
        return 1;
    }


    return num ? num * fact(num - 1) : 1;
}

console.log(fact(4));