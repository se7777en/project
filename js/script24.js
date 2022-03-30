"use strict";

//let numberOfFilms;
//let pr;

//start();

//console.log(numberOfFilms);

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    
    start:function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
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

    toggleVisibleMyDB: function () {
        if (personalMovieDB.private == false) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    },


    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genre = prompt('Ваш любимый жанр cherez zapyatuu');
            if (genre === '' || genre == null) {
                console.log('Vi vveli chtoto ne pravilno!');
                i--;
            } else {
                //personalMovieDB.genres[i - 1] = genre;
                personalMovieDB.genres = genre.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item,ind) =>{
            console.log(`lubimi janr ${item} pod nomerom ${ind + 1}`);
        });

    }
    
};




/*

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.private);
personalMovieDB.writeYourGenres();

console.log('personalMovieDB.genres');
console.log(personalMovieDB.genres);




console.log('personalMovieDB');
console.log(personalMovieDB);

console.log('personalMovieDB.toggleVisibleMyDB()');
console.log(personalMovieDB.toggleVisibleMyDB());

console.log('personalMovieDB.genres.foreach');
*/




