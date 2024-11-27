'use strict';

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();

    const cardBtn = document.querySelector('.card__btn'),
        cardFooter = document.querySelector('.card__footer'),
        cardItems = document.querySelector('.card__items'),
        cardHeader = document.querySelector('.card__header');


    cardBtn.addEventListener('click', () => {
        [cardBtn, cardFooter, cardItems, cardHeader].forEach((item) => {
            item.classList.toggle('active');
        });
    })


//     fetch('https://jsonplaceholder.typicode.com/posts/1') // Тестовый URL
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json(); // Парсим JSON из ответа
//   })
//   .then(data => {
//     console.log(data); // Выводим данные в консоль
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });



});