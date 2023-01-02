'use strict';
const arr = [1,4,6,5,67,8,9,5,4,3,8,33];

console.log(arr.length);

for(let i = 0; i < arr.length; i++){
console.log(arr[i]);
}

arr.push(44);// dabavlyaet znachenie v konec masiva
arr.pop();// udalyaet posledni element iz masiva
console.dir(arr.length);

console.log('////////////////');
const arr1 = [1,4,6,5,67,8,9,5,4,3,8,33];
arr1.shift();// udalyaet pervi element iz masiva
console.log(arr1.length);

console.log('////////////////');
const arr2 = [1,4,6,5,67,8,9,5,4,3,8,33];
arr2.unshift();// udalyaet pervi element iz masiva
console.log(arr2);
console.log(arr2.length);


console.log('////////////////');
let arr3 = 'h,ell,ow ho,w ar,e y,ou';
let k = arr3.split(',');// prevrashaet stroku v masiv s razdelitelem ,
console.log(k);
console.log(k.length);

console.log('////////////////');
let arr4 = [1,4,6,5,67,8,9,5,4,3,8,33];
let k1 = arr4.join(',');// prevrashaet masiv v stroku s razdelitelem
console.log(k1);
console.log(typeof(k1));
console.log(k1.length);

console.log('////////////////');
let arr5 = [1,4,6,5,67,8,9,5,4,3,8,33];
delete arr5[1]; // udalyaet pervi element masiva
console.log(typeof(arr5));
console.log(arr5);

console.log('////////////////');
let arr6 = [1,4,6,5,67,8,9,5,4,3,8,33];
arr6.splice(2,2,'a','b');// udalyaet iz masiva arr6 s 2 elementa 2 elementa i zamenyaet na 'a','b'
console.log(typeof(arr6));
console.log(arr6);

console.log('////////////////');
let arr7 = [1,4,6,5,67,8,9,5,4,3,8,33];
let k2 =  arr7.slice(2,3);// kopiruet chast masiva v peremennuu k2 s 2 elementa do  3 elementa
console.log(typeof(k2));
console.log(k2);


console.log('////////////////');
let arr8 = [1,4,6,5,67,8,9,5,4,3,8,33];
let k2 =  arr8.sort(function(a,b){
    return a - b;
});
console.log(typeof(k2));
console.log(k2);

console.log('////////////////');
let arr9 = [1,4,6,5,67,8,9,5,4,3,8,33];
arr9.reverse(); //menyaet poryadok elementov na obratni
console.log(typeof(arr9));
console.log(arr9);


console.log('////////////////');
let arr10 = [1,4,6,5,67,8,9,5,4,3,8,33];
for(let value of arr10){ // u etogo tipa perebora est break; i continue;
console.log(value);
}

console.log('////////////////');
let arr13 = [1,4,6,5,67,8,9,5,4,3,8,33];

arr13.forEach(function(item, i, arr){ // u etogo tipa perebora netu break; i continue;
console.log(`${i} = ${item} > ${arr}`);
});



console.log('////////////////');
let arr12 = [1,4,6,5,67,8,9,5,4,3,8,33];
arr12[99] = 555;
console.log(arr12.length);
console.log(arr12);



