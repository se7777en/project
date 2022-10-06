'use strict';

const str = 'hellow how are 200px you?';
console.log(str.replace(/\D/g,""));

/////
const reg = /\D/gi;
console.log(reg.test(str));
/////



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
