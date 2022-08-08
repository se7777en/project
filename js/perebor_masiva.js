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

Работа с массивами

at() - принимает значение в виде целого числа и возвращает элемент массива с данным индексом.
const array1 = [5, 12, 8, 130, 44];
let index = 2;
console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// expected output: "Using an index of 2 the item returned is 8"



concat() - возвращает новый массив, состоящий из массива, на котором он был вызван,
 соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]



copyWithin() -  копирует последовательность элементов массива внутри него в позицию, начинающуюся по индексу target.
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]



Object.entries() - метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]
const object1 = {
  a: 'somestring',
  b: 42
};
for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}




every() - проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
[12, 5, 8, 130, 44].every(elem => elem >= 10);   // false


fill() - заполняет все элементы массива от начального до конечного индексов одним значением.
// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]


filter() - создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

find() - возвращает значение первого найденного в массиве элемента,
 которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.

 findIndex() - возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
findLast()
findLastIndex() - возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.

flat() - возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]


flatMap() - сначала применяет функцию к каждому элементу, а затем преобразует полученный результат в плоскую структуру и помещает в новый массив. Это идентично map функции
let arr1 = [1, 2, 3, 4];
arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]
arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]


forEach() - выполняет указанную функцию один раз для каждого элемента в массиве.
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"


Array.from() - создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

group()
groupToMap()
includes() - определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// expected output: true

indexOf() - возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2


Array.isArray() - возвращает true, если объект является массивом и false, если он массивом не является.

join() - объединяет все элементы массива (или массивоподобного объекта) в строку.
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water


keys() - возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // консоль: ['0', '1', '2']

lastIndexOf() - возвращает индекс последнего вхождения указанного значения в строковый объект String,
на котором он был вызван, или -1, если ничего не было найдено. Поиск по строке ведётся от конца к началу, начиная с индекса fromIndex.
'канал'.lastIndexOf('а', 2);  // вернёт 1


map() - создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
// теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]


Array.of() - создаёт новый экземпляр массива Array из произвольного числа аргументов, вне зависимости от числа или типа аргумента.
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]
Array(7);          // массив с 7 пустыми слотами
Array(1, 2, 3);    // [1, 2, 3]


pop() - удаляет последний элемент из массива и возвращает его значение.
var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];
console.log(myFish); // ['ангел', 'клоун', 'мандарин', 'хирург']
var popped = myFish.pop();
console.log(myFish); // ['ангел', 'клоун', 'мандарин']
console.log(popped); // 'хирург'


push() - добавляет один или более элементов в конец массива и возвращает новую длину массива.
var sports = ['футбол', 'бейсбол'];
var total = sports.push('американский футбол', 'плавание');
console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плавание']
console.log(total);  // 4


reduce() - применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue);
console.log(sumWithInitial);
// expected output: 10


reduceRight() - применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.
[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});


reverse() - на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]


shift() - удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];
console.log('myFish до: ' + myFish);
//myFish до: ангел,клоун,мандарин,хирург
var shifted = myFish.shift();
console.log('myFish после: ' + myFish);
//myFish после: клоун,мандарин,хирург


slice() - возвращает новый массив, содержащий копию части исходного массива.
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"] tipa substringa

some() - проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
const some = ['asd','d',33,'sdfs'];
const res = some.some(item => typeof(item) === 'number');
console.log(res); // consoled true


sort() - на месте сортирует элементы массива и возвращает отсортированный массив. Сортировка не обязательно устойчива (англ.).
 Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode.
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]

splice() - изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
Удаляет 0 элементов по индексу 2 и вставляет "drum"
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');

toLocaleString() - возвращает строку с языкозависимым представлением даты.
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
// Вывод toLocaleString() без аргументов зависит от реализации,
// локали по умолчанию и часового пояса по умолчанию
console.log(date.toLocaleString());
// → "12/11/2012, 7:00:00 PM", если код запущен с локалью en-US и часовым поясом America/Los_Angeles



toString() - возвращает строку, представляющую объект.
function Dog(name) {
  this.name = name;
}
const dog1 = new Dog('Gabby');
Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};
console.log(dog1.toString());
// expected output: "Gabby"



unshift() - добавляет один или более элементов в начало массива и возвращает новую длину массива.
var arr = [1, 2];
arr.unshift(0); // результат вызова равен 3, новой длине массива
// arr равен [0, 1, 2]
arr.unshift(-2, -1); // = 5
// arr равен [-2, -1, 0, 1, 2]
arr.unshift([-3]);
// arr равен[[-3], -2, -1, 0, 1, 2]



values() - возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in.
Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

*/


const arr6 = ['abc','aBc','DDD'];
const resultt = arr6.map(item => {
    return  item[0].toUpperCase() + item.slice(1).toLowerCase();
});
console.log(resultt);





const films = [
  {
      name: 'Titanic',
      rating: 9
  },
  {
      name: 'Die hard 5',
      rating: 5
  },
  {
      name: 'Matrix',
      rating: 8
  },
  {
      name: 'Some bad film',
      rating: 4
  }
];








 function showListOfFilms(arr){
  return  arr.map(item => item.name).join(',');
}
console.log(showListOfFilms(films));



/*
function showListOfFilms(arr) {
  arr.map((item) => {
    return (item.name);
    }).join(',');
}
console.log(showListOfFilms(films));*/



function showGoodFilms(arr) {
return arr.filter(item => item.rating >= 8);

}

console.log(showGoodFilms(films));


//jhjjk


