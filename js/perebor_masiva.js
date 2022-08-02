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
at() - принимает значение в виде целого числа и возвращает элемент массива с данным индексом.
concat() - возвращает новый массив, состоящий из массива, на котором он был вызван,
 соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

copyWithin() -  копирует последовательность элементов массива внутри него в позицию, начинающуюся по индексу target.
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

Object.entries() - метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]
every() - проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
fill() - заполняет все элементы массива от начального до конечного индексов одним значением.
filter() - создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

find() - возвращает значение первого найденного в массиве элемента,
 которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.

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
*/

