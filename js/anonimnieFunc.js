'use strict';

const obj = (function () {
    const pr = function () {
        console.log('Hellow how are you!!');
    };
    return {
        message: pr
    };
}());

obj.message();


/////////////////////////////////////////////////////

const obj1 = (function () {
    function func1() {
        console.log('hellow1');
    }
    function func2() {
        console.log('hi');
    }
    return {
        f1: func1,
        f2: func2
    };
}());

obj1.f2();