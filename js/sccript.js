"use strict"

let numberOfFilms ; 

  function start(){
    numberOfFilms = +prompt('Сколко фильмов просмотрено?',''); 

     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){

      numberOfFilms = +prompt('Сколко фильмов просмотрено?',''); 

     }
  }

  start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){
    for(let i = 0;i < 2;i++){
      const a = prompt("Один из последних просмотренных фильмов?",''),
            b = prompt("На сколько оцените его?",'');
  
        if(a != null && b != null && a != '' && b != '' && a.length < 50){
          personalMovieDB.movies[a] = b;
          console.log('done');
        }else{
          console.log('error');
            i--;
    }
  }
}
// rememberMyFilms();


function detectPersonalLevel(){
        if(personalMovieDB.count < 10){
          console.log("BEgginer");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
          console.log("Middle" );
        }else if(personalMovieDB.count >= 30){
          console.log("You are idiot");
        }else{
          console.log("You have some problem");
  }
}
          
// detectPersonalLevel(); 

function showMyDB (hidden) {
  if(!hidden) {
    console.log(personalMovieDB);
  }
}


showMyDB(personalMovieDB.privat);


function writeYourGEners() {
  for(let i = 1; i <= 3; i++){
      const genre = prompt(`Your favorite genre of film ${i}`, "");
      personalMovieDB.genres[i-1] = genre;
  }
}

writeYourGEners();