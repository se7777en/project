'use strict';
//mint111
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




function calculateVolumeAndArea(a) {
let calc1 = 0;
let calc2 = 0;
//!Number.isInteger(a)
    if(typeof(a)!=='number' || a <= 0 || a % 2 !== 0){
    return 'При вычислении произошла ошибка';
}
calc1 = a * a * a;
calc2 = 6 * (a * a);

return `Объем куба: ${calc1}, площадь всей поверхности: ${calc2}`;

}

console.log(calculateVolumeAndArea(150));


console.log(typeof(15));



function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

console.log(getCoupeNumber(3));



function func(text,callback){
   
    console.log(`Privet: ${text}`);
 callback();
}

func('JavaScript',()=>{
console.log('done!');
});


function LinearSearch(t,A)      // t - искомый элемент,
{                               // A - массив, в котором ищем.
    let n = A.length,
        i = 0;   
   
    A[n] = t;
     console.log(A);  
     
    while (A[i] !== t){ i++;
        
                              
    if (i < n) {return i;}          // На выходе индекс искомого элемента.
    else {return -1;}    
    }           // Если искомого элемента нет в массиве, то -1.
}

const arr = ['30','2','3','f',4];
console.log(LinearSearch(3,arr));







function searchEl(elem, arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == elem) {
            return i;
        }
    }
    return -1;
}



const arr5 = ['1','2','3','f',4];

console.log(searchEl('f',arr5));




function bm(x , y){
    if(y === 0){
        return 1;
    }else{
        return x * bm(x,y-1);
    }
}

console.log(bm(2,2));



function getTimeFromMinutes(min){

    if(Number.isInteger(min) && typeof(min) === 'number' && min >= 0){


        let hour = 0;
        let min_ = 0;
        let words = 'часов';
        
        if (min > 59) {
            hour = Math.trunc(min / 60);
            min_ = min - hour * 60;
        } else {
            hour = 0;
            min_ = min;
        }
        
        
        if (hour < 59 || hour > 4) {
            words = 'часов';
        }
        if (hour === 1) {
            words = 'час';
        }
        if (hour > 1 && hour < 5) {
            words = 'часа';
        }
       /* if (hour > 4) {
            words = 'часов';
        }*/
        
        return `Это ${hour} ${words} и ${min_} минут`;
        }else{
            return 'Ошибка, проверте данные';
        }

}
console.log(getTimeFromMinutes(5.5));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));


function FindMaxNumber(a, b, c, d) {
    if (typeof (a) === 'number' && typeof (b) === 'number' && typeof (c) === 'number' && typeof (d) === 'number') {
const arr = [a,b,c,d];

return Math.max.apply(null,arr);

    } else {
        return 0;
    }

}

console.log(FindMaxNumber(10,400,20,40));
/*
const fib = 0;
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
let k = 0;

let arr = [0,1];

for (let i = 0; i < fib - 1; i++) {
k = arr[i] + arr[i+1];

arr.push(k);

}
console.log(arr.join(' '));
*/

/*

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
*/


/*
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
>>>>>>> e24bf99da856b39efdd1210d7f8059df89dc4a48
*/


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

    },
    showAgeAndLangs:(obj)=>{    
        const {languages} = obj.skills;
        const {age} = obj;
        let str = '';
        for(let i = 0; i < languages.length;i++){
            str+=`${languages[i]} `;
        }
        return `Мне ${age} и я владею языками: ${str.toUpperCase()}`;
    }

};


console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));



function showExperience(plan) {
    const{exp} = plan.skills;
    console.log(exp);
    }

    showExperience(personalPlanPeter);


function showProgrammingLangs(plan) {

const {programmingLangs} = plan.skills; 
/*
let str = '';
for(let val in programmingLangs){
    str+=`Язык ${val} изучен на ${programmingLangs[val]} \n`;
}
return str;*/


const val1 = Object.keys(programmingLangs);
const val2 = Object.values(programmingLangs);

if(val1.length < 1 && val2.length < 1){
    return "";
}
let str = '';
for(let i = 0; i < val1.length;i++){
str+=`Язык ${val1[i]} изучен на ${val2[i]} \n`;
}
return str;
}



/*
const {programmingLangs} = plan.skills; 
let str = '';
for(let val in programmingLangs){
    str+=`Язык ${val} изучен на ${programmingLangs[val]} \n`;
}
return str;
*/

/*
  let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
*/







console.log(showProgrammingLangs(personalPlanPeter));


















