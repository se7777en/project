'use strict';


const objHeader = [{
        headerRu: 'Изучаем Javascript',
        headerEn: 'Learning Javascript'
}];



const myObj = [
    {
        // methodTitle: 'Изучаем',
        // methodSubTitle: 'React',
        // methodStatus: 'visible',

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
        descrEn: ': It is a more modern loop that allows iterating over array elements without using an index.',
        typeRu: 'Цикл:',
        typeEn: 'loop:',
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

        infoRu: '',
        infoEn: '',
        infostatus: ''
    },
    {
        methodRu: 'forEach',
        methodEn: 'forEach',
        descrRu: ': Метод Array.prototype.forEach выполняет заданную функцию один раз для каждого элемента массива. Этот метод часто используется для выполнения операций над каждым элементом массива.',
        descrEn: ': The Array.prototype.forEach method executes a given function once for each element in the array. This method is commonly used to perform operations on each element of the array.',
        typeRu: 'Цикл:',
        typeEn: 'loop:',
        maintypeRu: 'JavaScript:',
        maintypeEn: 'JavaScript:',

        codeRu: `const arr = ["a", "b", "c"];
arr.forEach((element) => {
console.log(element);});`,

        codeEn: `const arr = ["a", "b", "c"];
arr.forEach((element) => {
console.log(element);});`,

        infoRu: '',
        infoEn: '',
        infostatus: ''
    },
    {
        methodRu: 'map',
        methodEn: 'map',
        descrRu: ': Этот метод позволяет преобразовать каждый элемент массива в новый элемент, используя заданную функцию.',
        descrEn: ': This method allows you to transform each element of an array into a new element using a given function.',
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

        infoRu: '',
        infoEn: '',
        infostatus: ''
    },
    {
        methodRu: 'filter',
        methodEn: 'filter',
        descrRu: ': Этот метод позволяет отфильтровать элементы массива, оставляя только те, для которых заданная функция возвращает true',
        descrEn: ': This method allows you to filter the elements of an array, keeping only those for which the given function returns `true`.',
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

        infoRu: '',
        infoEn: '',
        infostatus: ''
    },
    {
        methodRu: 'reduce',
        methodEn: 'reduce',
        descrRu: ': Этот метод позволяет свести массив к одному значению, используя заданную функцию.',
        descrEn: ': This method allows you to reduce an array to a single value using a given function.',
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

        infoRu: '',
        infoEn: '',
        infostatus: ''
    },
    {
        methodRu: 'some',
        methodEn: 'some',
        descrEn: ': This method checks if there is at least one element in the array for which the given function returns `true`.',
        descrRu: ': Этот метод проверяет, существует ли хотя бы один элемент массива, для которого заданная функция возвращает true.',
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
// Checks if there is at least one even number
const hasEven = numbers.some((number) => number % 2 === 0);   
console.log(hasEven); // true   
// Checks if there is at least one number greater than 10
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
        descrEn: ': This method checks if the given function returns `true` for all elements in the array.',
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

        infoRu: '',
        infoEn: '',
        infostatus: ''
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
const contains = parent.contains(child); // true, если 'child' находится внутри 'parent', где-либо внутри элемента 'parent'
const containsClass = e.classList.contains('childe'); // Метод classList.contains проверяет наличие указанного класса только на том элементе, к которому он применяется, независимо от уровня вложенности.
`,

    codeEn: `const parent = document.getElementById('parent');
const child = document.getElementById('child');
const contains = parent.contains(child); // true if 'child' is inside 'parent'
`,

    infoRu: 'В этом примере contains возвращает true, если элемент с идентификатором child находится внутри элемента с идентификатором parent. Если child не является потомком parent, метод возвращает false. Если "e" и childe в вашем коде являются не DOM-узлами, то contains может не быть доступен или может использоваться в другом контексте, специфичном для вашей библиотеки или фреймворка.\ncontains - для проверки, является ли один элемент DOM потомком другого.',
    infoEn: 'In this example, contains returns true if the element with the ID child is inside the element with the ID parent. If child is not a descendant of parent, the method returns false. If ev and childe in your code are not DOM nodes, contains may not be available or may be used in a different context specific to your library or framework.\ncontains - to check if one DOM element is a child of another.',
    infostatus: 'visible'
    },
    {
  methodRu: 'matches',
  methodEn: 'matches',
  descrRu: ': Метод element.matches(\'.childe\') проверяет соответствие селектору только на самом элементе, на котором он вызывается, и не ищет внутри его дочерних элементов.',
  descrEn: 'The method element.matches(\'.childe\') checks for a match to the selector only on the element on which it is called and does not search within its child elements.',
  typeRu: 'Функциональный метод:',
  typeEn: 'Functional method:',
  maintypeRu: 'JavaScript:',
  maintypeEn: 'JavaScript:',

  codeRu: `
\< div id="parent" \>
  \< div id="child" class="childe" \>
    < div id="grandchild" > \< /\>
  \< />
\< />

const parent = document.getElementById('parent');
const child = document.getElementById('child');
const grandchild = document.getElementById('grandchild');

const parentMatches = parent.matches('.childe');       // false
const childMatches = child.matches('.childe');         // true
const grandchildMatches = grandchild.matches('.childe'); // false
  `,

  codeEn: `\< div id="parent" \>
  \< div id="child" class="childe" \>
    < div id="grandchild" > \< /\>
  \< />
\< />

const parent = document.getElementById('parent');
const child = document.getElementById('child');
const grandchild = document.getElementById('grandchild');

const parentMatches = parent.matches('.childe');       // false
const childMatches = child.matches('.childe');         // true
const grandchildMatches = grandchild.matches('.childe'); // false
  `,
  infoRu: '',
  infoEn: '',
  infostatus: ''
    },
    {
  methodRu: 'includes',
  methodEn: 'includes',
  descrRu: ': Если у вас есть массив элементов, и вы хотите проверить, был ли клик на одном из этих элементов, вы можете использовать includes после создания массива из элементов.',
  descrEn: ': If you have an array of elements and you want to check if the click occurred on one of these elements, you can use includes after creating an array from the elements.',
  typeRu: 'Функциональный метод:',
  typeEn: 'Functional method:',
  maintypeRu: 'JavaScript:',
  maintypeEn: 'JavaScript:',

  codeRu: `const items = Array.from(document.querySelectorAll('.item'));

document.getElementById('parent').addEventListener('click', function(event) {
  if (items.includes(event.target)) {
    console.log('Clicked on one of the items:', event.target.textContent);
  }
});`,

  codeEn: `const items = Array.from(document.querySelectorAll('.item'));

document.getElementById('parent').addEventListener('click', function(event) {
  if (items.includes(event.target)) {
    console.log('Clicked on one of the items:', event.target.textContent);
  }
});`,

  infoRu: 'Метод Array.prototype.includes используется для определения, содержит ли данный массив определенное значение среди своих элементов, возвращая true, если содержит, и false в противном случае.\nincludes – для поиска значения в массиве или подстроки в строке.',
  infoEn: 'The Array.prototype.includes method is used to determine whether a given array contains a certain value among its elements, returning true if it does and false otherwise.\nincludes – to search for a value in an array or a substring in a string.',
  infostatus: 'visible'
    },
    {
      methodRu: 'Update Object',
      methodEn: 'Update Object',
      descrRu: ': Этот код корректно обновляет объект inventory (инвентарь) на основе объекта update (обновление), добавляя или вычитая указанные количества. Если количество становится отрицательным, выбрасывается ошибка.',
      descrEn: 'This code correctly updates the inventory object based on the update object, adding or subtracting the specified quantities. If any quantity becomes negative, an error is thrown.',
      typeRu: 'Функциональный метод:',
      typeEn: 'Functional method:',
      maintypeRu: 'JavaScript:',
      maintypeEn: 'JavaScript:',
    
      codeRu: `const inventory = {
    wood: 10,
    steel: 5,
    coal: 8
  };
  
  const update = {
    wood: 3,
    steel: -5,
    copper: 4
  }; 

function updateInventory(inventory, update) {
    return Object.entries(update).reduce((acc, [item, change]) => {
      const newQuantity = (acc[item] || 0) + change;
  
      if (newQuantity < 0) {
        throw new Error(\`Количество \${item} не может быть отрицательным.\`);
      }
  
      acc[item] = newQuantity;
      return acc;
    }, { ...inventory });
  }

  console.log(updateInventory(inventory, update));
`,

codeEn: `const inventory = {
    wood: 10,
    steel: 5,
    coal: 8
  };
  
  const update = {
    wood: 3,
    steel: -5,
    copper: 4
  }; 

function updateInventory(inventory, update) {
    return Object.entries(update).reduce((acc, [item, change]) => {
      const newQuantity = (acc[item] || 0) + change;
  
      if (newQuantity < 0) {
        throw new Error(\`The quantity of \${item} cannot be negative..\`);
      }
  
      acc[item] = newQuantity;
      return acc;
    }, { ...inventory });
  }

  console.log(updateInventory(inventory, update));
`,
    
      infoRu: 'Для каждого товара вычисляется новое количество: берется текущее значение acc[item] (или 0, если товара еще нет в acc) и прибавляется change.',
      infoEn: 'For each item, the new quantity is calculated by taking the current value of acc[item] (or 0 if the item is not yet in acc) and adding change.',
      infostatus: 'visible'
    },
    {

  methodTitle: 'Изучаем',
  methodSubTitle: 'React',

  methodTitleEn: 'Learning',
  methodSubTitleEn: 'React',
  
  methodStatus: 'visible',
  
  methodRu: 'fetch',
  methodEn: 'fetch',
  descrRu: ': Fetch - это метод для выполнения запросов к серверу.',
  descrEn: ': fetch is a method for making requests to a server.',
  typeRu: 'Встроенная функция:',
  typeEn: 'Built-in function:',
  maintypeRu: 'JavaScript:',
  maintypeEn: 'JavaScript:',

  codeRu: `fetch('https://jsonplaceholder.typicode.com/posts/1') // Тестовый URL
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Парсим JSON из ответа
    })
    .then(data => {
        console.log(data); // Выводим данные в консоль
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    
    //////////////
    
async function fetchData() {
try {
    // Тестовый URL
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json(); // Парсим JSON из ответа
    console.log(data); // Выводим данные в консоль

} catch (error) {
    console.error('There was a problem with the fetch operation:', error);
}
}

fetchData(); // Вызываем функцию
`,

  codeEn: `fetch('https://jsonplaceholder.typicode.com/posts/1') // Test URL
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parsing JSON from the response
    })
    .then(data => {
        console.log(data); // Outputting data to the console
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    //////////////

async function fetchData() {
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Test URL

    if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json(); // Parsing JSON from the response
    console.log(data); // Outputting data to the console

} catch (error) {
        console.error('There was a problem with the fetch operation:', error);
}
}

fetchData(); // Calling the function
`,

  infoRu: 'fetch - это встроенная функция в современных браузерах и в Node.js (начиная с версии 18), которая используется для выполнения асинхронных HTTP-запросов, таких как получение данных с сервера (GET-запрос) или отправка данных на сервер (POST-запрос).',
  infoEn: 'fetch is a built-in function in modern browsers and in Node.js (starting from version 18) that is used to perform asynchronous HTTP requests, such as retrieving data from a server (GET request) or sending data to a server (POST request).',
  infostatus: 'visible'
    },
    {

  methodTitle: 'Изучаем',
  methodSubTitle: 'React',

  methodTitleEn: 'Learning',
  methodSubTitleEn: 'React',
  
  methodStatus: 'visible',

  methodRu: 'useReducer',
  methodEn: 'useReducer',
  descrRu: ': useReducer - это хук в React, который позволяет управлять состоянием компонента более гибко и структурированно по сравнению с useState, особенно когда состояние компонента сложное или требует много логики обновления. Он напоминает паттерн Redux, где состояние управляется через действия (actions) и редюсеры (reducers).',
  descrEn: ': useReducer - is a hook in React that allows for more flexible and structured state management within a component compared to useState, especially when the component\'s state is complex or requires extensive update logic. It resembles the Redux pattern, where the state is managed through actions and reducers.',
  typeRu: 'Встроенный хук:',
  typeEn: 'Built-in hook:',
  maintypeRu: 'react:',
  maintypeEn: 'react:',

  codeRu: `import React, { useReducer } from 'react';

// Начальное состояние, где есть два состояния: count и isVisible
const initialState = { 
  count: 0, 
  isVisible: true 
};

// Редюсер обрабатывает действия для каждого состояния
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'toggleVisibility':
      return { ...state, isVisible: !state.isVisible };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    \< div>
      {state.isVisible && \< p>Count: {state.count}\< p/>}
      \< button onClick={() => dispatch({ type: 'increment' })}>Increment\< />
      \< button onClick={() => dispatch({ type: 'decrement' })}>Decrement\< />
      \< button onClick={() => dispatch({ type: 'reset' })}>Reset\< />
      
      \< button onClick={() => dispatch({ type: 'toggleVisibility' })}>
        Toggle Visibility
      \< /button>
    \< /div>
  );
}

export default Counter;
`,

  codeEn: `import React, { useReducer } from 'react';

// Initial state, with two states: count and isVisible
const initialState = { 
  count: 0, 
  isVisible: true 
};

// Reducer handles actions for each state
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'toggleVisibility':
      return { ...state, isVisible: !state.isVisible };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    \< div>
      {state.isVisible && \< p>Count: {state.count} \< p/> }
      \< button onClick={() => dispatch({ type: 'increment' })}>Increment\< />
      \< button onClick={() => dispatch({ type: 'decrement' })}>Decrement\< />
      \< button onClick={() => dispatch({ type: 'reset' })}>Reset\< />
      
      \< button onClick={() => dispatch({ type: 'toggleVisibility' })}>
        Toggle Visibility
      \< /button>
    \< /div>
  );
}

export default Counter;`,

  infoRu: 'Начальное состояние: initialState определяет начальное значение состояния.\nReducer-функция: reducer принимает текущее состояние и действие, возвращает новое состояние на основе типа действия.\nuseReducer: хук, который возвращает текущее состояние и функцию dispatch.\n\nКогда вы используете useReducer, вместо создания нескольких состояний через useState, вы управляете всеми состояниями в одном объекте, используя редюсер. В редюсере вы можете определять действия (actions) для изменения отдельных частей состояния, и все состояние будет храниться в одном месте, в виде объекта. Это упрощает управление и делает код более организованным, особенно когда состояний много.',
  infoEn: 'Initial state: initialState defines the initial value of the state.\nReducer function: reducer takes the current state and an action, returning a new state based on the action type.\nuseReducer: a hook that returns the current state and a dispatch function.\n\nWhen you use useReducer, instead of creating multiple states with useState, you manage all states in a single object using a reducer. In the reducer, you can define actions to change individual parts of the state, and all state is stored in one place as an object. This simplifies management and makes the code more organized, especially when there are many states.',
  infostatus: 'visible'
    }
];