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

//let scrollH = Math.ceil(document.documentElement.scrollHeight - innerHeight);

// let computedStyle = window.getComputedStyle(document.body);
// let scrollH = parseInt(computedStyle.height);

let scrollH = 1;
window.addEventListener('load', function() {
    scrollH = document.documentElement.scrollHeight - window.innerHeight;
});




methods.forEach((item, index) => {
    const info = infoElements[index];
    const code = codeElements[index];
    if (info.classList.contains('visible')) {
        code.classList.add('styled');
    }
});
/////////styledCode border/////////

//  let scrollH = Math.ceil(document.documentElement.scrollHeight);
//  let scrollPos = Math.ceil(window.scrollY + innerHeight);





 //console.log(`${scrollH} - ${scrollPos}`);

// height = 2966  pos = 2966.800048828125

    /////////////////////
  
    
    const calcProgress = (ScrollPos) => {
         
        const dasharray = progress.getAttribute('stroke-dasharray');
        const valuesArr = dasharray.split(' ');
        const value = parseFloat(valuesArr[1]);

        /*+++*/
       // let scroll = Math.ceil(ScrollPos);
        let result = Math.ceil(ScrollPos * 100 / scrollH);      
        /*+++*/
        // console.log(result);
        if(result > 96) result = 100;

        const percentVal = Math.ceil((value / 100) * (result));
      
        valuesArr[0] = percentVal;
        

        let arrtoStr = valuesArr.join(' ');
        progress.setAttribute('stroke-dasharray', arrtoStr);
    }

    let ScrollPosOnStart = window.scrollY;
    calcProgress(ScrollPosOnStart);

 
    ///////////////////////////////

   

    document.addEventListener('scroll', () => {
        let ScrollPos = window.scrollY;

    //     console.log(scrollH);
    // console.log(ScrollPos);
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




