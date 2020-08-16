document.addEventListener('DOMContentLoaded', () => {
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
        project = document.querySelector('.promo__bg'),
        genre = project.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector(".adding__input"),
        checkBox = addForm.querySelector('[type="checkbox"]');


addForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    let newFilm = addInput.value;
    const favorite = checkBox.checked;

    if(favorite) {
        console.log("Love film");
    }

    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
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
        genre.textContent = 'ДРАМЫ';

        project.style.backgroundImage = 'url("img/bg.jpg")';
    };

    

    const sortArr = (arr) => {
        arr.sort();
    };
    
    

    


    function createMovieList(films, perent) {
        perent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            perent.innerHTML +=
                `<li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete">
                </div></li>`;
        });
        
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, perent);
            });
        });
    }
    deleteAdv(adv);
    makeChanges();
    
    createMovieList(movieDB.movies, movieList);

});