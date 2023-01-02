'use strict';

const arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
const set = new Set(arr);// delaet masiv arr unikalnim
//console.log(set);

set.add('abc');// dobavlyaet novoe znachenie
//set.clear();// ochishaet set
set.has('abc');// proveryaet na sushestvovanie
//set.size;// poluchaet razmer seta
set.delete('abc');//udalyaet element iz Set

function unique(arr){
    return Array.from(new Set(arr));
}

set.forEach((value, valueAgain, set)=>{
console.log(value, valueAgain);
});
console.log('////');
for(let value of set){
console.log(value);
}




