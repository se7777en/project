'use strict';


const objHeader = [{
        headerRu: 'Изучаем Javascript',
        headerEn: 'Изучаем Javascript'
}];

const myObj = [
    {
        method: 'for',
        descrRu: ': Это классический цикл, который позволяет перебирать элементы массива по одному, используя индекс.',
        descrEn: ': This is a classic loop that allows you to iterate through the elements of an array one by one using an index.',
        typeRu: 'Цикл:',
        typeEn: 'Cycle:',
        
        maintypeRu: 'JavaScript:',
        maintypeEn: 'JavaScript:',

        codeRu: `const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}`,

codeEn: `const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}`,

        infoRu: 'fsdjkfhsdkfru',
        infoEn: 'fsdjkfhsdkfen',
        infostatus: ''
    },
    {
        method: 'for...of',
        descrRu: ': Это более современный цикл, который позволяет перебирать элементы массива без использования индекса.',
        descrEn: ': Это более современный цикл, который позволяет перебирать элементы массива без использования индекса.',
        typeRu: 'Цикл:',
        typeEn: 'Цикл:',
        maintypeRu: 'JavaScript:',
        maintypeEn: 'JavaScript:',

        codeRu: `const arr = ["a", "b", "c"];
for (const element of arr) {
console.log(element);
}`,

codeEn: `const arr = ["a", "b", "c"];
for (const element of arr) {
console.log(element);
}`,

        infoRu: 'fsdjkfhsdkf',
        infoEn: 'fsdjkfhsdkf',
        infostatus: 'visible'
    },
    {
        method: 'forEach',
        descrRu: '22222222222222',
        descrEn: ': Этот метод позволяет перебирать элементы массива и выполнять для каждого элемента заданную функцию.',
        typeRu: 'Цикл:',
        typeEn: 'Цикл:',
        maintypeRu: 'JavaScript:',
        maintypeEn: 'JavaScript:',

        codeRu: `const arr = ["a", "b", "c"];
arr.forEach((element) => {
console.log(element);});`,

        codeEn: `const arr = ["a", "b", "c"];
arr.forEach((element) => {
console.log(element);});`,

        infoRu: 'fsdjkfhsdkf',
        infoEn: 'fsdjkfhsdkf',
        infostatus: ''
    },
    {
        method: 'map',
        descrRu: ': Этот метод позволяет преобразовать каждый элемент массива в новый элемент, используя заданную функцию.',
        descrEn: ': Этот метод позволяет преобразовать каждый элемент массива в новый элемент, используя заданную функцию.',
        typeRu: 'Функциональный метод:',
        typeEn: 'Функциональный метод:',
        maintypeRu: 'JavaScript:',
        maintypeEn: 'JavaScript:',

        codeRu: `const arr = [1, 2, 3];
const doubledArr = arr.map((element) => element * 2);  
console.log(doubledArr); // [2, 4, 6]`,

        codeEn: `const arr = [1, 2, 3];
const doubledArr = arr.map((element) => element * 2);  
console.log(doubledArr); // [2, 4, 6]`,

        infoRu: 'fsdjkfhsdkf',
        infoEn: 'fsdjkfhsdkf',
        infostatus: ''
    },
    {
        method: 'filter',
        descrRu: ': Этот метод позволяет отфильтровать элементы массива, оставляя только те, для которых заданная функция возвращает true',
        descrEn: ': Этот метод позволяет отфильтровать элементы массива, оставляя только те, для которых заданная функция возвращает true',
        typeRu: 'Функциональный метод:',
        typeEn: 'Функциональный метод:',
        maintypeRu: 'JavaScript:',
        maintypeEn: 'JavaScript:',

        codeRu: `const arr = [1, 2, 3, 4, 5];
const evenArr = arr.filter((element) => element % 2 === 0);     
console.log(evenArr); // [2, 4]`,

        codeEn: `const arr = [1, 2, 3, 4, 5];
const evenArr = arr.filter((element) => element % 2 === 0);     
console.log(evenArr); // [2, 4]`,

        infoRu: 'fsdjkfhsdkf',
        infoEn: 'fsdjkfhsdkf',
        infostatus: ''
    },
    {
        method: 'reduce',
        descrRu: ': Этот метод позволяет свести массив к одному значению, используя заданную функцию.',
        descrEn: ': Этот метод позволяет свести массив к одному значению, используя заданную функцию.',
        typeRu: 'Функциональный метод:',
        typeEn: 'Функциональный метод:',
        maintypeRu: 'JavaScript:',
        maintypeEn: 'JavaScript:',

        codeRu: `const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);   
console.log(sum); // 15`,

        codeEn: `const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);   
console.log(sum); // 15`,

        infoRu: 'fsdjkfhsdkf',
        infoEn: 'fsdjkfhsdkf',
        infostatus: ''
    },
    {
        method: 'some',
        descrEn: ': Этот метод проверяет, существует ли хотя бы один элемент массива, для которого заданная функция возвращает true',
        descrRu: ': Этот метод проверяет, существует ли хотя бы один элемент массива, для которого заданная функция возвращает true',
        typeEn: 'Функциональный метод:',
        typeRu: 'Функциональный метод:',
        maintypeRu: 'JavaScript:',
        maintypeEn: 'JavaScript:',

        codeRu: `const numbers = [1, 2, 3, 4, 5];
// Проверяет, есть ли хотя бы одно четное число
const hasEven = numbers.some((number) => number % 2 === 0);   
console.log(hasEven); // true   
// Проверяет, есть ли хотя бы одно число больше 10
const hasGreaterThanTen = numbers.some((number) => number > 10);  
console.log(hasGreaterThanTen); // false`,

        codeEn: `const numbers = [1, 2, 3, 4, 5];
// Проверяет, есть ли хотя бы одно четное число
const hasEven = numbers.some((number) => number % 2 === 0);   
console.log(hasEven); // true   
// Проверяет, есть ли хотя бы одно число больше 10
const hasGreaterThanTen = numbers.some((number) => number > 10);  
console.log(hasGreaterThanTen); // false`,

        infoRu: ``,
        infoEn: ``,
        infostatus: ''
    },
    {
        method: 'every',
        descrRu: ': Этот метод проверяет, для всех ли элементов массива заданная функция возвращает true',
        descrEn: ': Этот метод проверяет, для всех ли элементов массива заданная функция возвращает true',
        typeRu: 'Функциональный метод:',
        typeEn: 'Функциональный метод:',
        maintypeRu: 'JavaScript:',
        maintypeEn: 'JavaScript:',

        codeRu: `const numbers = [2, 4, 6, 8];
// Проверяет, все ли элементы четные
const allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven); // true  
const numbers2 = [2, 4, 6, 9];   
// Проверяет, все ли элементы больше 5
const allGreaterThanFive = numbers2.every((number) => number > 5);    
console.log(allGreaterThanFive); // false`,

        codeEn: `const numbers = [2, 4, 6, 8];
// Проверяет, все ли элементы четные
const allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven); // true  
const numbers2 = [2, 4, 6, 9];   
// Проверяет, все ли элементы больше 5
const allGreaterThanFive = numbers2.every((number) => number > 5);    
console.log(allGreaterThanFive); // false`,

        infoRu: 'fsdjkfhsdkf',
        infoEn: 'fsdjkfhsdkf',
        infostatus: 'visible'
    }
];
