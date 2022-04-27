/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();

    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});



/*
///////////////////////////////////////////////////////
const storName = "ZOO";

const storeDescription = {
    'budget': 10000, 
    employees:[
        "John",
        "Mikle",
        "Ted"
        ],
        
    products:{
        "cheese": 400,
        "bee": 650,
        "bread": 50
    },
    
    "open": true
        
};

<<<<<<< HEAD
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
=======
console.log(storeDescription.products.bread);
console.log(storeDescription.employees[1]);


console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
}*/



/*
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!');
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}*/


 
>>>>>>> 37770099e4f6ffcaeed986fc35432536f127d25f
