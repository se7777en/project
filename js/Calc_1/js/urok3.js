"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let sortedArr = arr.sort();

  let arr1 = [sortedArr[0],sortedArr[1],sortedArr[2]];
  let arr2 = [sortedArr[3],sortedArr[4],sortedArr[5]];
  let arr3 = [sortedArr[6],sortedArr[7],sortedArr[8]];
  //let arr4 = [...arr1,...arr2,...arr3];
let stud = '';
sortedArr.forEach((item,i)=>{
      if(i > 8){
        let k = '';
        (sortedArr.length - 1) === i ? k = '' : k = ', ';
        stud+=`${item}${k}`;
    }
  });
  stud.length > 0 ? stud = 'Оставшиеся студенты: '+stud : stud = 'Оставшиеся студенты: -' + stud;
  

return [arr1,arr2,arr3,stud];

}

console.log(sortStudentsByGroups(students));


//const result = getsum(5,6);
const getsum  = function(a,b){
    return a+b;
};

console.log(typeof(NaN));

console.log(0 || NaN || false || null);

function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});

console.log(result);



const [a,b] = ['Hello', 'Привет'];
console.log(b);