'use strict';

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const helpModal = document.querySelector('.header .help'),
        headerContact = document.querySelector('.header .header__btn'),
        closeBtn = document.querySelector('.header .help__close');



    let mytexts = document.querySelectorAll('.methods .method');
    let linksParent = document.querySelectorAll('.descr__inner .descr__item');
    let linkParent = document.querySelector('.main__inner-right .descr__inner');


    let menuBtn = document.querySelector('.menu__btn');
    let menuBtnIcon = document.querySelector('.menu__btn .fa-solid');
    let menu = document.querySelector('.main__inner-right');


    let progress = document.querySelector('.svg__box #reading-progress');
    // progress.style.transition = 'stroke-dasharray 0.3s ease';

   


/////////styledCode border/////////
const methodsContainer = document.querySelector('.methods');
const methods = methodsContainer.querySelectorAll('.method');
const infoElements = methodsContainer.querySelectorAll('.info');
const codeElements = methodsContainer.querySelectorAll('.method__example');


const coordinates = document.querySelector('.coordinates');

methods.forEach((item, index) => {
    const info = infoElements[index];
    const code = codeElements[index];
    if (info.classList.contains('visible')) {
        code.classList.add('styled');
    }
});
/////////styledCode border/////////



    /////////////////////

    async function someAsyncOperation() {
        // Выполняем какие-то асинхронные действия, например, загрузка данных или анимация
        await new Promise(resolve => setTimeout(resolve, 100)); // Пример задержки на 1 секунду
    }

    const calcProgress = async (ScrollPos) => {
         //let ScrollPos = window.scrollY;

        let documentHeight = document.body.scrollHeight - window.innerHeight;
        const dasharray = progress.getAttribute('stroke-dasharray');
        const valuesArr = dasharray.split(' ');
        const value = parseInt(valuesArr[1]);

      
        const percentVal = (value / 100) * (ScrollPos * 100 / documentHeight);
        // console.log(percentVal);
        valuesArr[0] = Math.ceil(percentVal);

        let arrtoStr = valuesArr.join(' ');
        await someAsyncOperation();
        progress.setAttribute('stroke-dasharray', arrtoStr);
    }
    let ScrollPosOnStart = window.scrollY;
    calcProgress(ScrollPosOnStart);

 
    ///////////////////////////////

   

    document.addEventListener('scroll', () => {
        let ScrollPos = window.scrollY;

        calcProgress(ScrollPos);

        mytexts.forEach((mytext) => {
            const textPos = mytext.offsetTop;
            const textHeight = mytext.offsetHeight;

            if (ScrollPos >= textPos - 60 && ScrollPos <= (textPos + textHeight)) {
                const postId = mytext.getAttribute('id');
                const found = linkParent.querySelector('#' + postId + '-link');

                if (found) {
                    const element = found.querySelector('.descr__item');
                    linksParent.forEach((item) => {
                        item.classList.toggle('active', item === element);
                    });
                }
            }
        });
    });






    headerContact.addEventListener('click', (e) => {
        if (headerContact.contains(e.target)) {
            helpModal.classList.toggle('show');
        }
    });

    closeBtn.addEventListener('click', () => {
        helpModal.classList.remove('show');
        // console.log(e.currentTarget);      
    });





    document.addEventListener('click', (e) => {
        if (!helpModal.contains(e.target) && !headerContact.contains(e.target)) {
            helpModal.classList.remove('show');
        }
    });


    // document.addEventListener('click', (e) => {
    //     if (!e.target.closest('#helpModal') && !e.target.closest('.header__btn')) {
    //         helpModal.classList.remove('show');
    //     }
    // });



    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('showmenu');
        menuBtnIcon.classList.toggle('fa-list');
        menuBtnIcon.classList.toggle('fa-xmark');
        document.body.classList.toggle('dark-background');
    });






});




