'use strict';


const objHeader = [{
        headerRu: 'Изучаем Javascript',
        headerEn: 'Learning Javascript'
}];



const myObj = [
    {
        methodRu: 'Типы данных',
        methodEn: 'Data Types',
        descrRu: ' :Значение в JavaScript всегда относится к данным определённого типа. Например, это может быть строка или число. Есть восемь основных типов данных в JavaScript. Переменная в JavaScript может содержать любые данные. В один момент там может быть строка, а в другой – число:',
        typeRu: 'Примеры:',

        descrEn: ' :In JavaScript, a value always refers to data of a specific type. For example, it can be a string or a number. There are eight primary data types in JavaScript. A variable in JavaScript can contain any data. At one moment, it could be a string, and at another, a number.',
        typeEn: 'Examlpes',
        
        maintypeRu: 'JavaScript:',
        maintypeEn: 'JavaScript:',

        codeRu: `// Целое число
let age = 30;
// Число с плавающей точкой
let temperature = 25.5;
// Можно выполнить арифметические операции с числовыми примитивами
let sum = age + temperature;
console.log("Сумма возраста и температуры:", sum);


// Строковый примитив
let greeting = "Hello, world!";
// Можно объединять строки с помощью оператора конкатенации (+)
let name = "John";
let message = "Welcome back, " + name + "!";
// Можно также использовать шаблонные строки (template strings) для вставки значений переменных
let age = 30;
let info = \`Name: \${name}, Age: \${age}\`;
console.log(greeting);
console.log(message);
console.log(info);


// Булевый примитив
let isLogged = true;
// Можно использовать булевые значения в условных операторах
if (isLogged) {
  console.log("Пользователь вошел в систему.");
} else {
  console.log("Пользователь не вошел в систему.");
}


//пример использования значения null
let myVar = null;
// null часто используется для указания на отсутствие значения или "ничего"
if (myVar === null) {
  console.log("Переменная не содержит значения.");
} else {
  console.log("Переменная содержит значение:", myVar);
}
// Можно также использовать null для явного освобождения памяти, например:
let someObject = { name: "John" };
// После использования объекта его можно присвоить значение null, чтобы позволить сборщику мусора освободить память
someObject = null;


//пример использования значения undefined
let myVar;
// Переменная объявлена, но ей не присвоено значение, поэтому она имеет значение undefined
console.log(myVar); // Вывод: undefined
// Также можно объявить переменную и явно присвоить ей значение undefined
let anotherVar = undefined;
// undefined часто используется, когда значение переменной не было установлено
if (typeof anotherVar === "undefined") {
  console.log("Значение переменной не было установлено.");
} else {
  console.log("Значение переменной:", anotherVar);
}
// Также undefined возвращается, когда пытаемся получить доступ к несуществующему свойству объекта
let obj = {};
console.log(obj.nonExistentProperty); // Вывод: undefined


//пример использования значения Symbol
// Создание уникального символа
const symbol1 = Symbol();
const symbol2 = Symbol("description");
// Символы всегда уникальны, даже если они имеют одинаковое описание
console.log(symbol1 === symbol2); // Вывод: false
// Символы могут использоваться для создания скрытых свойств объектов
const user = {
  name: "John",
  [Symbol("id")]: 123
};
// Символьные свойства не перечисляются при обходе объекта
for (let key in user) {
  console.log(key); // Вывод: "name"
}
// Однако их можно получить явно
const symbolKey = Object.getOwnPropertySymbols(user)[0];
console.log(user[symbolKey]); // Вывод: 123


// пример использования значения BigInt
const bigIntValue = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
console.log(bigIntValue); // Вывод: 9007199254740993n
// BigInt может быть использован для вычислений с очень большими числами
const result = bigIntValue * BigInt(2);
console.log(result); // Вывод: 18014398509481986n


//пример использования значения object
// Создание объекта
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
// Объект может содержать различные типы данных в своих свойствах
console.log(person.name); // Вывод: John
console.log(person.age); // Вывод: 30
console.log(person.city); // Вывод: New York
`,

codeEn: `// Integer
let age = 30;
// Floating-point number
let temperature = 25.5;
// Arithmetic operations can be performed with numeric primitives
let sum = age + temperature;
console.log("Sum of age and temperature:", sum);


// String primitive
let greeting = "Hello, world!";
// Strings can be concatenated using the concatenation operator (+)
let name = "John";
let message = "Welcome back, " + name + "!";
// Template strings can also be used to insert variable values
let age = 30;
let info = \`Name: \${name}, Age: \${age}\`;
console.log(greeting);
console.log(message);
console.log(info);


// Boolean primitive
let isLogged = true;
// Boolean values can be used in conditional statements
if (isLogged) {
  console.log("User logged in.");
} else {
  console.log("User not logged in.");
}


// Example of using the null value
let myVar = null;
// null is often used to indicate the absence of a value or "nothing"
if (myVar === null) {
  console.log("Variable does not contain a value.");
} else {
  console.log("Variable contains a value:", myVar);
}
// null can also be used to explicitly release memory, for example:
let someObject = { name: "John" };
// After using the object, it can be assigned the value null to allow the garbage collector to free memory
someObject = null;


// Example of using the undefined value
let myVar;
// The variable is declared but not assigned a value, so it has the value undefined
console.log(myVar); // Output: undefined
// Variables can also be declared and explicitly assigned the value undefined
let anotherVar = undefined;
// undefined is often used when the value of a variable has not been set
if (typeof anotherVar === "undefined") {
  console.log("The variable value has not been set.");
} else {
  console.log("Variable value:", anotherVar);
}
// Also, undefined is returned when trying to access a non-existent object property
let obj = {};
console.log(obj.nonExistentProperty); // Output: undefined


// Example of using the Symbol value
// Creating a unique symbol
const symbol1 = Symbol();
const symbol2 = Symbol("description");
// Symbols are always unique, even if they have the same description
console.log(symbol1 === symbol2); // Output: false
// Symbols can be used to create hidden object properties
const user = {
  name: "John",
  [Symbol("id")]: 123
};
// Symbolic properties are not enumerated when traversing the object
for (let key in user) {
  console.log(key); // Output: "name"
}
// However, they can be explicitly accessed
const symbolKey = Object.getOwnPropertySymbols(user)[0];
console.log(user[symbolKey]); // Output: 123


// Example of using the BigInt value
const bigIntValue = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
console.log(bigIntValue); // Output: 9007199254740993n
// BigInt can be used for calculations with very large numbers
const result = bigIntValue * BigInt(2);
console.log(result); // Output: 18014398509481986n


// Example of using the object value
// Creating an object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
// The object can contain different data types in its properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York
`,

        infoRu: `В JavaScript есть 8 основных типов данных:
Семь из них называют «примитивными» типами данных:

1) - number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
2) - string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
3) - boolean для true/false.
4) - null для неизвестных значений – отдельный тип, имеющий одно значение null.
5) - undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
6) - symbol для уникальных идентификаторов.
7) - bigint для целых чисел произвольной длины.

И один не является «примитивным» и стоит особняком:
8) - object для более сложных структур данных.`,
        
        infoEn: `In JavaScript, there are 8 primary data types:

Seven of them are called "primitive" data types:
        
1) - number for any numbers: integers or floating-point numbers; integer values are limited to the range ±(253-1).
2) - string for strings. A string can contain zero or more characters; there is no separate character type.
3) - boolean for true/false.
4) - null for unknown values - a separate type with a single value, null.
5) - undefined for unassigned values - a separate type with a single value, undefined.
6) - symbol for unique identifiers.
7) - bigint for arbitrarily large integers.
        
And one is not "primitive" and stands apart:
8) - object for more complex data structures.`,
        infostatus: 'visible'
    },

    {
        methodRu: 'for...of',
        methodEn: 'for...of',
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
        methodRu: 'forEach',
        methodEn: 'forEach',
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
        methodRu: 'map',
        methodEn: 'map',
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
        methodRu: 'filter',
        methodEn: 'filter',
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
        methodRu: 'reduce',
        methodEn: 'reduce',
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
        methodRu: 'some',
        methodEn: 'some',
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
        methodRu: 'every',
        methodEn: 'every',
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
    },
    {
      methodRu: 'closest',
      methodEn: 'closest',
      descrRu: ': В JavaScript "closest" — это метод, который используется для поиска ближайшего предка элемента, удовлетворяющего заданному селектору CSS. Этот метод применяется к элементам DOM и позволяет быстро находить элементы, соответствующие определенным критериям.',
      descrEn: ': In JavaScript, closest is a method used to find the nearest ancestor of an element that matches a given CSS selector. This method is applied to DOM elements and allows you to quickly find elements that meet specific criteria.',
      typeRu: 'Функциональный метод:',
      typeEn: 'Functional method:',
      maintypeRu: 'JavaScript:',
      maintypeEn: 'JavaScript:',

      codeRu: `let element = document.querySelector('.child'); // Находим элемент с классом 'child'
let closestAncestor = element.closest('.parent'); // Находим ближайшего предка с классом 'parent'
`,

      codeEn: `let element = document.querySelector('.child'); // Find the element with class 'child'
let closestAncestor = element.closest('.parent'); // Find the nearest ancestor with class 'parent'
`,

      infoRu: 'Метод closest будет искать по дереву DOM, начиная с самого элемента и двигаясь вверх по иерархии, пока не найдет элемент, соответствующий селектору. Если элемент не найден, возвращается null.',
      infoEn: 'The closest method will search up the DOM tree, starting from the element itself and moving upwards through the hierarchy, until it finds an element that matches the selector. If no such element is found, it returns null.',
      infostatus: 'visible'
  },

  {
    methodRu: 'contains',
    methodEn: 'contains',
    descrRu: ': В JavaScript метод contains обычно используется для проверки, содержится ли один DOM-узел в другом. В вашем коде',
    descrEn: ': In JavaScript, the contains method is typically used to check whether one DOM node is contained within another.',
    typeRu: 'Функциональный метод:',
    typeEn: 'Functional method:',
    maintypeRu: 'JavaScript:',
    maintypeEn: 'JavaScript:',

    codeRu: `const parent = document.getElementById('parent');
const child = document.getElementById('child');
const contains = parent.contains(child); // true, если 'child' находится внутри 'parent'
`,

    codeEn: `const parent = document.getElementById('parent');
const child = document.getElementById('child');
const contains = parent.contains(child); // true if 'child' is inside 'parent'
`,

    infoRu: 'В этом примере contains возвращает true, если элемент с идентификатором child находится внутри элемента с идентификатором parent. Если child не является потомком parent, метод возвращает false. Если ev и childe в вашем коде являются не DOM-узлами, то contains может не быть доступен или может использоваться в другом контексте, специфичном для вашей библиотеки или фреймворка.',
    infoEn: 'In this example, contains returns true if the element with the ID child is inside the element with the ID parent. If child is not a descendant of parent, the method returns false. If ev and childe in your code are not DOM nodes, contains may not be available or may be used in a different context specific to your library or framework.',
    infostatus: 'visible'
}
];