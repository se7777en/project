'use strict';

const arr = [2, 4, 815, 4, 3, -8, 7, 4, 9, 0, 3, 4, 5, 6];


const obj = {
    max: 'Максимальное число: ',
    min: 'минимальное число: '
};


function max(aray) {
    let num = aray[0];
    aray.forEach((item) => {
        if (item > num) {
            num = item;
        }
    });
    return num;
}


function min(aray) {
    let num = aray[0];
    aray.forEach((item) => {
        if (item < num) {
            num = item;
        }
    });
    return num;
}

console.log(`${obj.max + max(arr)}`);
console.log(`${obj.min + min(arr)}`);
