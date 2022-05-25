'use strict';

const persone = {
    name: 'Alex',
    tel: '+74444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};


//stringify - prevratit obiekt v format JSON
//parse - vozmet JSON i rasparsit ego obratno v obiekt

//console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone))); 
const clone = JSON.parse(JSON.stringify(persone));// gluboki klon obiekta

clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);



// do poyavleniya JSON bil XML