'use strict';

const myObj = [
    {
        method: 'for',
        descr: ': Это классический цикл, который позволяет перебирать элементы массива по одному, используя индекс.',
        type: 'Цикл:',
        maintype: 'JavaScript:',

        code: `const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}`,

        info: 'fsdjkfhsdkf',
        infostatus: ''
    },
    {
        method: 'for...of',
        descr: ': Это более современный цикл, который позволяет перебирать элементы массива без использования индекса.',
        type: 'Цикл:',
        maintype: 'JavaScript:',

        code: `const arr = ["a", "b", "c"];
for (const element of arr) {
console.log(element);
}`,

        info: 'fsdjkfhsdkf',
        infostatus: 'visible'
    },
    {
        method: 'forEach',
        descr: ': Этот метод позволяет перебирать элементы массива и выполнять для каждого элемента заданную функцию.',
        type: 'Цикл:',
        maintype: 'JavaScript:',

        code: `const arr = ["a", "b", "c"];
arr.forEach((element) => {
console.log(element);});`,

        info: 'fsdjkfhsdkf',
        infostatus: ''
    },
    {
        method: 'map',
        descr: ': Этот метод позволяет преобразовать каждый элемент массива в новый элемент, используя заданную функцию.',
        type: 'Функциональный метод:',
        maintype: 'JavaScript:',

        code: `const arr = [1, 2, 3];
const doubledArr = arr.map((element) => element * 2);  
console.log(doubledArr); // [2, 4, 6]`,

        info: 'fsdjkfhsdkf',
        infostatus: ''
    },
    {
        method: 'filter',
        descr: ': Этот метод позволяет отфильтровать элементы массива, оставляя только те, для которых заданная функция возвращает true',
        type: 'Функциональный метод:',
        maintype: 'JavaScript:',

        code: `const arr = [1, 2, 3, 4, 5];
const evenArr = arr.filter((element) => element % 2 === 0);     
console.log(evenArr); // [2, 4]`,

        info: 'fsdjkfhsdkf',
        infostatus: ''
    },
    {
        method: 'reduce',
        descr: ': Этот метод позволяет свести массив к одному значению, используя заданную функцию.',
        type: 'Функциональный метод:',
        maintype: 'JavaScript:',

        code: `const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);   
console.log(sum); // 15`,

        info: 'fsdjkfhsdkf',
        infostatus: ''
    },
    {
        method: 'some',
        descr: ': Этот метод проверяет, существует ли хотя бы один элемент массива, для которого заданная функция возвращает true',
        type: 'Функциональный метод:',
        maintype: 'JavaScript:',

        code: `const numbers = [1, 2, 3, 4, 5];
// Проверяет, есть ли хотя бы одно четное число
const hasEven = numbers.some((number) => number % 2 === 0);   
console.log(hasEven); // true   
// Проверяет, есть ли хотя бы одно число больше 10
const hasGreaterThanTen = numbers.some((number) => number > 10);  
console.log(hasGreaterThanTen); // false`,

        info: ``,
        infostatus: ''
    },
    {
        method: 'every',
        descr: ': Этот метод проверяет, для всех ли элементов массива заданная функция возвращает true',
        type: 'Функциональный метод:',
        maintype: 'JavaScript:',

        code: `const numbers = [2, 4, 6, 8];
// Проверяет, все ли элементы четные
const allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven); // true  
const numbers2 = [2, 4, 6, 9];   
// Проверяет, все ли элементы больше 5
const allGreaterThanFive = numbers2.every((number) => number > 5);    
console.log(allGreaterThanFive); // false`,

        info: 'fsdjkfhsdkf',
        infostatus: 'visible'
    }
];
