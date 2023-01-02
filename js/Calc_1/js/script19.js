'use strict';

function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


function LernJS(lang, callback) { //callback funciya
    console.log(`Я учу ${lang}`);
    callback();
}

LernJS('JavaScript', function () {
    console.log('я прошел этот урок');

});



function done(){
    console.log('я прошел этот урок!!!');
}

LernJS('javascript',done);

