'use strict';
const bank = { 1000: 5, 10: 55, 500: 10, 400: 20, 100: 30, 50: 40 }
let result = {};
function change(sum) {
    let mon = 0;
    let fr = 0;
    const sortedArr = Object.keys(bank).slice().sort((a, b) => b - a);
    // console.log(sortedArr);
    for (let key of sortedArr) {
        if (sum >= key) {
            mon = Math.floor(sum / key);
            result[key] = mon;
            fr = sum - (mon * key);
            sum = fr;
        }
    }
}


change(4500);
console.log(result);