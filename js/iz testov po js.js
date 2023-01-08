
const promisify = (item, delay) =>
new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function one() {
const promises = [a(), b(), c()];
const [outpu1, outpu2, outpu3] = await Promise.all(promises);
return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
}

async function two() {
const promises = [a(), b(), c()];
const outpu1 = await Promise.race(promises);
return `two is done: ${outpu1}`;
}

async function three() {
const outpu1 = await a();
const outpu2 = await b();
const outpu3 = await c();
return `three is done: ${outpu1} ${outpu2} ${outpu3}`;
}

one().then(console.log);
two().then(console.log);
three().then(console.log);

//////////////////////////
const promise = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve('foo');
}, 1000);
setTimeout(() => {
    reject('bar');
}, 900);
});

promise.then((value) => {
console.log(value);
}).catch((e) => console.log(e));

////////////////

console.log(0 || 1);
console.log(0 && 1);
console.log(0 || NaN || false || null);
//////////////

function foo(a,b) {
    const [first, second] = a;
    const {eng, ru} = b;
 
    return `${second}, ${ru}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});

console.log(result);
/////////

const  a = [1, 2, 3];
const  b = [1, 2, 3];

console.log(a==b);
///////////////
if (0) {
console.log('first')
} else if (NaN) {
console.log('second');
} else if (' ') {
console.log('third');
} else if (null) {
console.log('fourth');
//////////////

async function makeRequest() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(json => console.log(json))
}
 
console.log(makeRequest());

////////////////////


function getSum(a, b) {
function sum() {
    console.log(this.a);
    return a + b;
}

console.log(sum());
}

getSum(4, 5);

let y = 1; 
let x = y = 2; 
alert(x);