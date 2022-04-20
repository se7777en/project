/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    promo = document.querySelector('.promo__bg'),
    genre = promo.querySelector('.promo__genre'),
    forma = document.querySelector('form.add'),
    val   = forma.querySelector('.adding__input'),
 checkbox = forma.querySelector('[type="checkbox"]'),
 promolist= document.querySelector('.promo__interactive-list');





 
forma.addEventListener('submit',(event)=>{
event.preventDefault();

 let film = val.value;
 const favorite = checkbox.checked;

if(film){

    if(film.length > 21){
        film = `${film.substring(0,22)}...`;
    }

    if(favorite){
        console.log('Вы добавляете фильм в список любимых!!');
    }

movieDB.movies.push(film);
sortArr(movieDB.movies);

addmovies(promolist,movieDB.movies);
//console.log(movieDB.movies);

event.target.reset();
}


//console.log(film);
//console.log(favorite);
});




function addmovies(parrent,movieDB){
    parrent.innerHTML = "";
sortArr(movieDB);
movieDB.forEach((item,i)=>{
    parrent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
<div class="delete"></div>
</li>`;
});

document.querySelectorAll('.delete').forEach((btn,i)=>{

    btn.addEventListener('click',()=>{
        btn.parentElement.remove();
        movieDB.splice(i , 1);
        addmovies(parrent,movieDB);
    });

});




}




    





function sortArr(arr){
arr.sort();
}


function makeChanges(){
    genre.textContent = 'драма';
    promo.style.backgroundImage = 'url("img/bg.jpg")';
}


function removeadds() {
    adv.forEach(item => {
        item.remove();
    });
}






removeadds();
makeChanges();
addmovies(promolist,movieDB.movies);



