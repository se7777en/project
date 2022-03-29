"use strict";

let numberOfFilms;
let pr;

//start();

//console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    
    start:function () {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms:function() {

        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = +prompt('Насколько оцените еГо?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
    
            } else {
                i--;
                console.log('error');
            }
        }
    },

    detectPersonalLevel:function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('произошла ошибка');
        }
    
    },

    showMyDB:function(hidden) {
        if (hidden != false) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            pr = prompt(`Ваш любимый жанр под номером ${i}`);
            while (pr == '' && pr == null && pr == isNaN) {
                pr = prompt(`Ваш любимый жанр под номером ${i}`);
            }
            personalMovieDB.genres[i - 1] = pr;


        }

    },

    toggleVisibleMyDB: function () {
        if (this.private == false) {
           this.private = true;
        } else {
           this.private = false;
        }
        return this.private;
    }
    
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.private);
personalMovieDB.writeYourGenres();

console.log(personalMovieDB.genres);





console.log(personalMovieDB);
console.log(personalMovieDB.toggleVisibleMyDB());
