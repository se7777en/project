'use strict';

const btns = document.querySelectorAll('button');

console.log(btns[0].classList.length); //poluchaet kolichestvo klasov u 1 knopki pod indeksom 0
console.log(btns[0].classList.item(1));// esli u knopki bolshe 1 klassa mojno poluchat ix index nachinaetsya s 0

//console.log(btns[0].classList.add('red'));// dobavlyaet klass red k knopke, mojno cherez zapyatuu dabavlyat neskolko klassov
//console.log(btns[0].classList.remove('blue'));// udalyaet klass blue u knopki, mojno cherez zapyatuu udalyat neskolko klassov
//console.log(btns[0].classList.toggle('blue'));// esli klas est to on ego udalyaet (ubiraet) esli klassa netu to dabavlyaet

////////////////////////
/*console.log(btns[1].classList.add('red'));
if(btns[1].classList.contains('red')){// proveryaem est li u knopki pod indeksom 1 klass red
    console.log('red');
}*/
/////////////////////////////
/*
btns[0].addEventListener('click',()=>{
    if (!btns[1].classList.contains('red')){
        btns[1].classList.add('red');
    }else{
        btns[1].classList.remove('red');
    }
    //dabavlayaem obrabochik sobitiya k pervoi knopke i proveryaem esli u vtoroi knopki netu klasa red 
    //to mi ego dobavlyaem v protivnom sluchae udalyaem anologichno i s toggle
});*/
/////////////////////////////
btns[0].addEventListener('click',() => {
    btns[1].classList.toggle('red');
});
/////////////////////////////
//console.log(btns[0].className);// poluchaet vse klasi u pervoi knopki v odnu stroku no etot metod ustarel

//DELEGIROVANIE KNOPOK
/////////////////////////////
const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click',(event) => {
    //console.dir(event.target);
  //if(event.target && event.target.tagName == 'BUTTON'){
    if(event.target && event.target.matches("button.red")){  // navarocheni variant ot google proveryaen nalichie knopki i u knopki klassa red
        console.log('hellow');
    }
   /* if(event.target && event.target.classList.contains('red')){
        console.log('hellow');
    }*/
});
/////////////////////////////
/*
btns.forEach((btn) => { // variant cherez cikl no on ne budet deistvovat na novie knopki kotorie budut dinamicheski sozdavatsya
    btn.addEventListener('click', () => {
        console.log('hellow');
    });
});*/
/////////////////////////////
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
/////////////////////////////



