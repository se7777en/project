'use strict';

let items = document.querySelectorAll('.wrapper__item'),
    leftBox = document.querySelector('.wrapper__left'),
    rightBox = document.querySelector('.wrapper__right'),

    middle = document.querySelector('.middle');

const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('dragstart', (e) => {
   let selected = e.target;
    const item = e.target.closest('.wrapper__item');
    if (item && item.contains(selected)) {

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

            /////////////
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


    }
});














