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