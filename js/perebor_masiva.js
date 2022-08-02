'use strict';
const names = ['Ivann','Ann','Ksenia','Voldemart'];

const shortNames = names.filter((item) => { // создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
   return names.length < 4;
}); 

console.log(shortNames);


const answers = ['IvAn','AnnA','heLlow'];
const result = answers.map(item => item[0].toLocaleLowerCase() + item.slice(1)); // создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

const some = ['asd','d',33,'sdfs'];
const res = some.some(item => typeof(item) === 'number'); // проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
console.log(res);

const some1 = ['asd','d',33,'sdfs'];
const res1 = some1.every(item => typeof(item) === 'number'); // проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
console.log(res1);


const arr = [1,2,3,4,5,6,7,8];
const sum = arr.reduce((ac,item) => ac + item,4); //Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
console.log(sum);


const obj = {
    name: 'melik',
    sorname: 'papikyan',
    age: '88'
};


const new1 = Object.entries(obj).filter(item => item[1] === '88').map(item => item[0].length);
console.log(new1);

const list = Object.entries(obj);
console.log(list);

for(const [key, value] of Object.entries(obj)){
    console.log(`${key} -- ${value}`);
}

/*
at()
concat()
copyWithin()
entries()
every()
fill()
filter()
find()
findIndex()
findLast()
findLastIndex()
flat()
flatMap()
forEach()
Array.from()
Experimental
group()
Experimental
groupToMap()
includes()
indexOf()
Array.isArray()
join()
keys()
lastIndexOf()
map()
Array.of()
pop()
push()
reduce()
reduceRight()
reverse()
shift()
slice()
some()
sort()
splice()
toLocaleString()
toString()
unshift()
values()

test
*/




