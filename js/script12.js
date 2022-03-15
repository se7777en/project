console.log(calc(10, 15));
console.log(calc(20, 30));
console.log(calc(50, 40));

function calc(a, b) {
    return (a + b);
}
////////////////////
const func = function (a, b, c) { // funccionalnoe virajenie 
    return (a + b) * c;
};

console.log(func(5, 7, 9));
console.log(func(5, 7, 20));
console.log(func(5, 40, 20));

///////////////  strelochnie funkcii

const cal1 = () => console.log("my func");

const cal = (a, b) => {
    return a + b;
};

console.log(cal(10, 12));
console.log(cal(10, 14));
console.log(cal(10, 16));
console.log(cal(10, 18));
