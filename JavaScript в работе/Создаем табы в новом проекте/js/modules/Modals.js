function openModal(modalSelector,modalTimerId) {
   const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    // Либо вариант с toggle - но тогда назначить класс в верстке
    document.body.style.overflow = 'hidden';
    //clearInterval(settimeModal);

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    // Либо вариант с toggle - но тогда назначить класс в верстке
    document.body.style.overflow = '';
}

function Modals(triggerSelector, modalSelector, modalTimerId){

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
    /*,
            modalCloseBtn = document.querySelector('[data-close]');*/


    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () =>  openModal(modalSelector, modalTimerId));
    });

    //modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });
    //const settimeModal = setInterval(openModal,5000); // otobrajat cherez 5 sec

  //const settimeModal = setInterval(openModal,5000);
function showModalByScroll(){
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
        openModal(modalSelector, modalTimerId);
        window.removeEventListener('scroll', showModalByScroll);
    }
}
window.addEventListener('scroll', showModalByScroll);
  /* let end = new Date();
console.log(`Vremya skripta zanyalo ${end - start} millisekund`);*/
}


//module.exports = Modals;
export default Modals;
export {openModal};
export {closeModal};