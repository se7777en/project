'use strict';

function toNum(n){
    if(n === 0) {return n;}

    return n + toNum(n -1);
}

console.log(toNum(3));


const myfunc = (function(){

    function func1(a){
        return a * 10;
    }
    function func2(b){
        return b * 20;
    }

    return {
        ff1: func1,
        ff2: func2
    };

})();

console.log(myfunc.ff2(10));

