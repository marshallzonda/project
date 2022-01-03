"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};

let lastFilmYouSee = prompt('Один из последнийх просмотренных фильмов?', '');
let filmRating = prompt('На сколько оцените его ?', '');
let lastFilmYouSeeAgain = prompt('Еще один из последнийх просмотренных фильмов?', '');
let filmRatingAgain = prompt('На сколько оцените его ?', '');

personalMovieDB.movies[lastFilmYouSee] = filmRating;

personalMovieDB.movies[lastFilmYouSeeAgain] = filmRatingAgain;
console.log(personalMovieDB);