'use strict';

const str = 'hellow how are 200px you?';
console.log(str.replace(/\D/g,"")); // replace imeet dva argumenta 1 shto zamenyaem 2 na shto zamenyaem
//   /./g - vse simvoli
/////
const reg = /\D/gi;
console.log(reg.test(str)); //est esho metod test
/////


function getNumberFromString(str){
    const st =  str.replace(/\D/g,'');
return +st;
}

const str3 = "width iz 200px and height";
console.log(getNumberFromString(str3));



// flags 
/*
i - ignoriromat registr
g - globalni poisk,naiti neskolko vxojdeni
m - mnogostrochni rejim

//klassi
\d - digits vse cirfi
\w - vse slova, vse bukvi
\s - spaces, vse probeli

\D - digits vse ne cirfi
\W - vse slova, vse ne bukvi
\S - spaces, vse ne probeli

est esho metod test
*/
