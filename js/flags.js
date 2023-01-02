'use strict';

const obj = {
name: 'Alex',
surname: 'Smith',
//birthday: '20/04/1993',
    getPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }

};

//obj.getPublicDate();

//console.log(Object.getOwnPropertyDescriptor(obj,'name')); // pokazivaet atributi svoitsva obiekta 
//(obiek, imya svoistva)

/*{ value: 'Alex',
  writable: true, - razreshenie na zapis izmenenie 
  enumerable: true, - budet perechislyatsya v cikle esli true
  configurable: true  -  pri false ego nelzya izmenit udalit i na nego ne reagiruet defineProperty
}
  */
//////////////////////////
Object.defineProperty(obj,'name',{writable: false}); // sozdaet atributi svoistva obiekta
//obj.name = 'kukuri';
//console.log(obj);

//console.log(Object.getOwnPropertyDescriptor(obj,'name'));

Object.defineProperty(obj,'gender',{value: 'male'});// sozdaet novoe svoistvo obiekta pri
// pomoshi defineProperty  - sex:'male'
//console.log(obj.gender);


///////////////////////
Object.defineProperty(obj,'birthday',{value:'10/02/1990',enumerable: true,configurable:true}); // pri sozdanii novogo
//svoistva cherez defineProperty writable poumolchaniu false
//console.log(Object.getOwnPropertyDescriptor(obj,'birthday'));
console.log(Object.getOwnPropertyDescriptor(Math,'PI'));

/////////////////////////
console.log('/////');
Object.defineProperty(obj,'birthday',{enumerable: false}); // zapret na perechislenie v cikle
for(let value in obj){
    console.log(value);
}
console.log(Object.getOwnPropertyDescriptor(obj,'birthday'));
/////////////////////////

Object.defineProperties(obj,{ // obrashenie k neskolkim svoistva obiekta
name:{writable: false}
//surname:{writable: false}
});
console.log(obj.surname = 'Brown');
////////////////////////////

let test1 = {age: 23};
let test2 = {age: 23};
console.log(Object.is(test1.age, test2.age)); // sravnivaet dva svoistva obiekta

