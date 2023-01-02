const numberOfFilms = prompt(" Сколько фильмов вы уже посмотрели? ");
//console.log(numberOfFilms);

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};


  
     
const a = prompt('Один из последних просмотренных фильмов?',''),
      b = +prompt('Насколько оцените еГо?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = +prompt('Насколько оцените еГо?','');  

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

/*
 let ind = 0;
do{
    const a = prompt('Один из последних просмотренных фильмов?',''),
    b = +prompt('Насколько оцените еГо?','');
    personalMovieDB.movies[a] = b;
ind+=1;
}while(ind < 2);
*/


console.log(personalMovieDB);
