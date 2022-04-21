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

document.addEventListener('DOMContentLoaded', () => {

    const adv = document.querySelectorAll('.promo__adv img'),
        promo = document.querySelector('.promo__bg'),
        genre = promo.querySelector('.promo__genre'),
        moviesList = document.querySelector('form.add'),
        addinput = moviesList.querySelector('.adding__input'),
        checkbox = moviesList.querySelector('[type="checkbox"]'),
        films = document.querySelector('.promo__interactive-list');
       





        
    function favorite(checkbox){
        if(checkbox.checked){
            console.log('added to favorite!');
        }
    }

    function sortArr(arr){
        arr.sort();
    }
    
    moviesList.addEventListener('submit', e =>{
        e.preventDefault();
        favorite(checkbox);      
        
        let inp = addinput.value;
        if(inp){
        if(inp.length > 21){
            inp = `${inp.substring(0,22)}...`;
        }

        movieDB.movies.push(inp);

        createMovielist(films,movieDB.movies);
    }

    });


    function createMovielist(film,parrent){
        film.innerHTML = "";
        sortArr(parrent);

        parrent.forEach((item,i)=>{
            film.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
        </li>`;

        });

        document.querySelectorAll('.delete').forEach((item,i)=>{

            item.addEventListener('click',()=>{
                item.parentElement.remove();
                parrent.splice(i,1);
                
                createMovielist(film,parrent);
            });

        });
        
    }






    const makechanges = () => {
        genre.textContent = "драма";
        promo.style.backgroundImage = 'url("img/bg.jpg")';      
    };

   makechanges();



    function removeAdds(adv) {
        adv.forEach((item) => {
            item.remove();
        });
    }

    removeAdds(adv);
    createMovielist(films,movieDB.movies);






});
