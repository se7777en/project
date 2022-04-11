"use strict";

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      link = document.querySelector('a'),
      btns = document.querySelectorAll('button');

/*
btn.addEventListener('click',(e)=>{
console.log(e.target.remove());
});*/

/*
let i = 0;
const deleteElement = (e)=>{
console.log(e.target);
i++;
if(i == 1){
btn.removeEventListener('click',deleteElement);
}

};*/





const deleteElement2 = (e)=>{
console.log(e.currentTarget);
console.log(e.type);
};

//btn.addEventListener('click',deleteElement2);
//overlay.addEventListener('click',deleteElement2);


link.addEventListener('click',function(event){
event.preventDefault();// sbrasivaet vse defaultnie sobitiya brauzera
console.log(event.currentTarget);
});


btns.forEach(btns => {
btns.addEventListener('click',deleteElement2,{once:true});

});

