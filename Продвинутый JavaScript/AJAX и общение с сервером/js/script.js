'use strict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');




//sobitie change voznikaet togda kogda input vixodit iz fokusa
inputRub.addEventListener('input', () => {
    const reques = new XMLHttpRequest();
    reques.open('GET', 'js/current.json'); // open - sobiraet nastroiki kotorie v budushem budet delat zapros
    //parametri
    //1) method
    //2) url put k failu , put formiruetsya otnositelno index.html
    //3) async - robota v asinxronnom rejime
    //4)login
    //5) pass 

    
    reques.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //sho imenno mi otpravlyaem JSON,kartinki i td.. dlya etogo est http zagolovki
    reques.send();// kogda mi otpravlyaem GET zapros mi prosto zaprashivaem informaciu
    

    reques.addEventListener('load', () => {
// readystatechange - otslejivaet status gotovnosti nashego obiekta ono budet vizivatsya neskolko raz
//est esho load
// load - poproshe on srabativaet odin raz kogda zapros uje gotov zagruzilsya
if(reques.readyState === 4 && reques.status === 200) {
    console.log(reques.response);
    const data = JSON.parse(reques.response);
    inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
}  else{
    inputUsd.value = "Chto-to poshlo ne tak";
} 

});


    // v POST zaprose otpravlyaem body telo 
    

    //status 404 200 i td..
    //statusText - tekstovoe opisanie otveta ot servera OK,Created,Accepted i td..
    //response - otvet
    //readyState - tekushee sostoyanie zaprosa ot 0 do 4 ,4 - operaciya polnostiu zavershena
    
});

//spisok kodov sostoyaniya 
//https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP


//XMLHttpRequest.readyState
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState



//addEventListener('input', - sobitie proisxodit pri vvode dannix  
//addEventListener('change', - sobitie proisxodit kagda pole input ne v fokuse