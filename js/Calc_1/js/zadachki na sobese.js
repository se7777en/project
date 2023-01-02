'use strict';
////////////////////////////////   zadachka 1
function myfunc() {

    try {

        if (Math.random() <= 0.5) {
            throw new Error('');
        }
        return 1;

    } catch (e) {
        return 2;

    } finally {

        return 3;
    }
}

console.log(myfunc());




const stack = [];
const res = stack.pop();
console.log(res);// udefined



///////////////////////////////////// zadachka 2
const obj = {
    "(": ")",
    "[": "]",
    "{": "}"
};

// console.log(obj['(']);

function myfunc2(brackets) {
    const stack = [];
    for (let i = 0; i <= brackets.length - 1; i++) {
        // console.log(i);
        const br = brackets[i];
        if (br === ')' || br === '}' || br === ']') {
            stack.push(br);
        } else {
            const last = stack.pop();
            /*if (!last) {
                console.log('1');
                return false;
            }*/
            if (br === obj[last]) {
                console.log('1');
                return false;
            }
        }

        if (!stack.length) {
            console.log('2');
            return false;

        } else {
            console.log('3');
            return true;
        }
    }
}

console.log(myfunc2('())))()())))))((((())))((((())))))))))))))))))))))))))))'));

///////////////////////////zadachka 3


const arr = [1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9]; // vivesti v steck unikalnie znacheniya

function myfunc3(arr) {
    let uniq = false;
    const steck = [];
    arr.forEach((item, i) => {

        for (let j = 0; j <= arr.length - 1; j++) {
            if (j != i) {
                if (item == arr[j]) {
                    uniq = false;
                    break;
                } else {
                    uniq = true;
                }
            }
        }
        if (uniq) {
            steck.push(item);
        }
    });
    return steck;
}

console.log(myfunc3(arr));

////////////////////////////////////////

const arr2 = [1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9]; // vivesti v steck unikalnie znacheniya
const obj2 = {};
const steck2 = [];

arr2.forEach((item) => {
if(!(item in obj2)){
    obj2[item] = 1;
}else{
    obj2[item] +=1;
}
});
//console.log(obj2);

let vals = Object.keys(obj2);
vals.forEach((item) => {
    if(obj2[item] === 1){
        steck2.push(item);
    }
});

console.log(steck2);

////////////////////////////////////////


/////////funkciya konstruktor
function User(name, age){
    this.name = name;
    this.age = age;
}
let user = new User('James',36);
console.log(user.name);
console.log(user.age);




function BigUser(name){
    this.name = name;
    return {
        name: "Godzilla"
    };
}
console.log(BigUser().name);
/////////



/////////// bind - создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. 
const obj3 = {
    name: 'James',
    age: '37'
}; 
function func(){
    return `Nashemu sosedu ${this.name} ${this.age} let`;
}
let funcUser = func.bind(obj3);
console.log(funcUser());



function mul(a, b){
    return a * b;
}
let double = mul.bind(null, 4);// 1 param - kontekst 2 param - pervi parametr
console.log(double(2));//vtoroi parametr
console.log(double(3));//vtoroi parametr
console.log(double(4));//vtoroi parametr

//////////////////////////////////


////////////metod call  вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.
function myfunc4(){
    return this.name+" "+ this.age;
}
const obj4 = {
    name: 'Melik',
    age: 36
};
console.log(myfunc4.call(obj4));



function myfunc5(name, age){
    return this[name]+" "+ this[age];
}
const obj5 = {
    name: 'Melik',
    age: 36
};

console.log(myfunc5.call(obj5 , 'name', 'age'));
////////////////////////////////////////////////////


// Метод apply() вызывает функцию с указанным значением this и аргументами, предоставленными в виде массива
////////////////////////////////

const arr3 = [1,6,4,9,7];
console.log(Math.max.apply(null,arr3));

var ar4r = [];
ar4r.push(1);
ar4r.push(5);
ar4r.push(2);

// получить максимум из элементов arr
console.log( Math.max.apply(null, ar4r) ); // 5

////////////////////////////////
