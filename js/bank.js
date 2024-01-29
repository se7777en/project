'use strict';
const bank = { 1000: 5, 500: 10, 400: 20, 100: 30, 50: 40, 10: 55 }
let result = {};
function change(sum) {
    let mon = 0;
    let fr = 0;
    for (let key of Object.keys(bank).reverse()) {
        if (sum >= key) {
            mon = Math.floor(sum / key);
            result[key] = mon;
            fr = sum - (mon * key);
            sum = fr;
        }
    }
}


change(40);
console.log(result);