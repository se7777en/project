'use strict';
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const draggables = document.querySelectorAll('.draggable');
    const containers = document.querySelectorAll('.wrapper__inner');

    draggables.forEach((draggable) => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    containers.forEach((container) => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY);
            // console.log(afterElement);
            const draggable = document.querySelector('.dragging');
            if (afterElement == null) {
                container.appendChild(draggable);
            } else {
                container.insertBefore(draggable, afterElement);
            }
        });
    });

    function getDragAfterElement(container, y) {
        const draggableEllements = [...container.querySelectorAll('.draggable:not(.dragging)')];

        return draggableEllements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            // console.log(offset);
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child }
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }



});