'use strict';

function Modals(){

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');
    /*,
            modalCloseBtn = document.querySelector('[data-close]');*/


    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // Либо вариант с toggle - но тогда назначить класс в верстке
        document.body.style.overflow = 'hidden';
        //clearInterval(settimeModal);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // Либо вариант с toggle - но тогда назначить класс в верстке
        document.body.style.overflow = '';
    }

    //modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });
    //const settimeModal = setInterval(openModal,5000); // otobrajat cherez 5 sec

    /* const settimeModal = setInterval(openModal,5000);
function showModalByScroll(){
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}
window.addEventListener('scroll', showModalByScroll);
let end = new Date();
console.log(`Vremya skripta zanyalo ${end - start} millisekund`);*/
}


module.exports = Modals;