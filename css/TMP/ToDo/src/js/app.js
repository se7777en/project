'use strict';
const trashDecore = document.querySelector('.task__item .task__trash'),
    todoText = document.querySelector('.task__item .task__item__descr'),
    todoChb = document.querySelector('.task__item .realchb');

const addHoverOnTrash = () => {
    trashDecore.addEventListener('click', () => {
        trashDecore.classList.add('trashdecore');
        setTimeout(() => {
            trashDecore.classList.remove('trashdecore');
        }, 800);
    });
}
addHoverOnTrash();



const addTextDecoreOnChb = () => {
    todoChb.addEventListener('change', () => {
        if (todoChb.checked) {
            todoText.classList.add('textdecore');
        } else {
            todoText.classList.remove('textdecore');
        }
    });
}
addTextDecoreOnChb();