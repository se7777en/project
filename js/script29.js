'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

      box.style.backgroundColor = 'blue';
      box.style.width = '500px';

      btns[1].style.borderRadius = '100%';
      circles[0].style.backgroundColor = 'red';



   /* for(let i = 0; i< hearts.length;i++){
        hearts[i].style.backgroundColor = 'gray';
    }*/

      hearts.forEach(item =>{
        item.style.background = 'blue';
      });