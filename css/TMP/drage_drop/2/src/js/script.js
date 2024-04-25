'use strict';


let wrapper = document.querySelector('.wrapper'),

    leftBox = document.querySelector('.wrapper__left'),
    middle = document.querySelector('.wrapper__middle'),
    rightBox = document.querySelector('.wrapper__right'),


    wrapperBox = document.querySelector('.wrapper__box');

//middle = document.querySelector('.middle');


wrapper.addEventListener('dragstart', (e) => {
    let selected = e.target;
    const item = e.target.closest('.wrapper__item');

    console.log(selected);
    console.log(item);
    
    if (item && item.contains(selected)) {



        ///////////// v rightBox mojno perenesti element
        rightBox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        rightBox.addEventListener('drop', function () {
            if (selected) {
                rightBox.appendChild(selected);
                selected = null;
            }
        });
        /////////////


        ///////////// v middle mojno perenesti element
        middle.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        middle.addEventListener('drop', function () {
            if (selected) {
                middle.appendChild(selected);
                selected = null;
            }
        });
        /////////////


         ///////////// v leftBox mojno perenesti element
         leftBox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        leftBox.addEventListener('drop', function () {
            if (selected) {
                leftBox.appendChild(selected);
                selected = null;
            }
        });
        /////////////

         ///////////// v leftBox mojno perenesti element
         leftBox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        leftBox.addEventListener('drop', function () {
            if (selected) {
                leftBox.appendChild(selected);
                selected = null;
            }
        });
        /////////////


         
           wrapperBox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        wrapperBox.addEventListener('drop', function () {
            if (selected) {
                wrapperBox.appendChild(selected);
                selected = null;
            }
        });
  



        
    }
});














