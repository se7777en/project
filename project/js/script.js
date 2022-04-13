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
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      list = document.querySelector('.promo__interactive-list'),
      inp = document.querySelector('#butt');

      

      inp.addEventListener('click',(e)=>{
            e.preventDefault();

            let val = document.getElementById('txt').value;
            //console.dir(movieDB.movies);
           console.log(length(val));
            movieDB.movies.push(val);
           // console.dir(movieDB.movies);
           

           list.innerHTML = "";

           movieDB.movies.sort();
     
          movieDB.movies.forEach((item, i)=> {
             list.innerHTML += `        <li class="promo__interactive-item">${i + 1} ${item}
             <div class="delete"></div>
         </li>`;
          });
            
            
      });

      
      
      //console.log(genre);
        //console.log(list.innerHTML);
        
        adv.forEach(function (item) {
            item.remove();
        });
      
      genre.textContent = 'драма';
      poster.style.backgroundImage = "url('img/bg.jpg')"; 
      

      list.innerHTML = "";

      movieDB.movies.sort();

     movieDB.movies.forEach((item, i)=> {
        list.innerHTML += `        <li class="promo__interactive-item">${i + 1} ${item}
        <div class="delete"></div>
    </li>`;
     });

      /*
        <li class="promo__interactive-item">ЛОГАН
                            <div class="delete"></div>
                        </li>
      */

//promAdv.remove();
//promobg.textContent =  genre.toUpperCase();
//console.log(list);

/*
list.forEach((item,ind) =>{

});*/

//console.log(list);
/*
for(let key in list){
console.log(`kluch = ${key} ${list[key]}`);
}*/

//1console.log(movieDB.movies[0]);

//&__bg


