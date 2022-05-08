'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');// html kolekciya


boxesQuery.forEach((box)=>{
    if(box.matches('.this')) {console.log(box);} // ishem .this klass v box obrashaemsya k (selektoru)
    //v boxesQuery pri pomoshi matches, mojno iskat i selektori
   /* if(box.classList.contains('box')){ // eto poisk klasa box, obrashenie po klassu v boxesQuery
        console.log(box);
    }*/
});
console.log(boxesQuery[0].closest('.wrapper')); // poluchaet roditelya u boxesQuery[0] .wrapper



boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div'); // sozdaet novi div
    div.classList.add('box');//dobavlyaet class 'box' k divu
    div.innerHTML = `text ${i}`; //dobavlyet tekst v sozdanni div
    document.body.append(div);//i vivodit ego v konce dody

}


console.log(boxesQuery);
console.log(boxesGet);

console.log(Array.from(boxesGet)); // perevodit psevdomasiv boxesGet v masiv


