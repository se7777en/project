'use strict';

/*
let k  = '';
let lengt = 7;

for(let i = 1; i < lengt; i++){

for(let j = 0; j < i; j++){
k+='*';

}
k += '\n';
}

console.log(k);



for(let i = 5 ;i < 11; i++){
    console.log(i);
}


for(let j = 20; j > 9; j--){
    if(j === 13) {break;}
    console.log(j);
}

for(let i = 2; i < 11; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

let val= 2;

while(val < 11){

    if(val % 2 === 0){
        console.log(val);
    }
 val++;

}


const arrayOfNumbers = [];
for (let i = 0; i < 6; i++){

    arrayOfNumbers[i] = i + 5;
}
console.log(arrayOfNumbers);


const result = [];
const arr = [3, 5, 8, 16, 20, 23, 50];
    
arr.forEach((item,i) =>{
result[i] = item;
});

console.log(result);



const data = [5, 10, 'Shopping', 20, 'Homework'];


data.forEach((item,i)=>{
if(typeof(item) === 'string'){
    data[i] +=' - done'; 
}else{
    if(typeof(item) === 'number'){
      data[i] *= 2;  
    }
}

});

console.log(data);



const data = [5, 10, 'Shopping', 20, 'Homework'];
let result = [];
result = data.reverse();
console.log(result);




const line  = 5;
let result = '';
let p = 1;
let spac = '';
for(let i = 0; i <= line; i++){


    for(let j = 1;j<=p;j++){
        result+="*";
      //  spac +=' '; 
      
    }
    result  += '\n';
   // spac = '';
    //console.log(`i - ${i}; p - ${p}`);
p=p+2;
}
   
   console.log(result);

*/


   const lines = 7;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);
//


function sayHello(name) {
return `Привет , ${name}!`;
}

console.log(typeof(sayHello('Melik')));


function returnNeighboringNumbers(num) {
const arr = [];
arr.push(num - 1);
arr.push(num);
arr.push(num + 1);
return arr;
}

console.log(returnNeighboringNumbers(5));


function getMathResult(a,b){
if(typeof(b) !== 'number' || b <= 0){
    return a;
}
let sum = 0;
let val = '';
let dif = '';

for(let i = 0; i < b; i++){
//sum += `---${sum}`;
sum+=a;
if(i > 0){dif = '---';}
 val += dif + sum;
}
//console.log(val);
return val;

}

console.log(getMathResult(3,4));



function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(5,3));



const fib = 0;
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
let k = 0;

let arr = [0,1];

for (let i = 0; i < fib - 1; i++) {
k = arr[i] + arr[i+1];

arr.push(k);

}
console.log(arr.join(' '));




function fibo(num){
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
    return "";
}

let k = 0;
let arr = [0,1];
for (let i = 0; i < num - 2; i++) {
k = arr[i] + arr[i+1];
arr.push(k);
}
return arr.join(' ');
}




function fib1(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib1(0));
console.log(fibo(0));



const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};


//console.log(personalPlanPeter.skills.exp);
function showExperience(plan){

    return typeof(plan.skills.exp);
}

function showProgrammingLangs(plan) {

    let arr1 = Object.keys(plan.skills.programmingLangs);
    let arr2 = Object.values(plan.skills.programmingLangs);
    let str = '';
    if (arr1.length < 1 || arr2.length < 1) {
        return "";
    }
    for (let i = 0; i < arr1.length; i++) {
        str += `Язык ${arr1[i]} изучен на ${arr2[i]}\n`;
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

console.log(showExperience(personalPlanPeter));











