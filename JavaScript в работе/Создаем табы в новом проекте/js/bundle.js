/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/Calc.js":
/*!****************************!*\
  !*** ./js/modules/Calc.js ***!
  \****************************/
/***/ ((module) => {

"use strict";


function Calc(){

    const result = document.querySelector('.calculating__result span');

let sex = 'female',
height, weight, age, 
ratio = '1.375';
//let sex, height, weight, age, ratio;


if(localStorage.getItem('sex')){
    sex = localStorage.getItem('sex');
}else{
    sex = 'female';
    localStorage.setItem('sex', 'female');
}

if(localStorage.getItem('ratio')){
    ratio = localStorage.getItem('ratio');
}else{
    ratio = 1.375;
    localStorage.setItem('ratio', '1.375');
}


function initLocalStorage(selector, activeClass) {
    const storage = document.querySelectorAll(selector);

    storage.forEach((item) => {
        item.classList.remove(activeClass);

        if (item.getAttribute('id') === localStorage.getItem('sex')) {
            item.classList.add(activeClass);
           // sex = localStorage.getItem('sex'); 
        }

        if (item.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            item.classList.add(activeClass);
           // ratio = localStorage.getItem('ratio');
        }

    });
}

initLocalStorage('#gender div', 'calculating__choose-item_active');
initLocalStorage('.calculating__choose_big div', 'calculating__choose-item_active');





function GetResult() {
    if (!sex || !height || !weight || !age || !ratio) {
        result.textContent = '____';
        return;
    }

    if (sex === 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}

GetResult();



function calcData(parent, activClass) {

    const result = document.querySelectorAll(parent);
    result.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
            } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', e.target.getAttribute('id'));
            }

            result.forEach((item) => {
                item.classList.remove(activClass);
            });
            e.target.classList.add(activClass);

            GetResult();
        });

    });

}

calcData('.calculating__choose_big div', 'calculating__choose-item_active');
calcData('#gender div', 'calculating__choose-item_active');

//
function calcDataForInput(value) {
    const input = document.querySelector(value);
    input.addEventListener('input', () => {

        if(input.value.match(/\D/g)){
            input.style.border = '1px solid red';
        }else{
            input.style.border = 'none';
        }

        switch (input.getAttribute('id')) {

            case 'height':
                height = +input.value;
                break;

            case 'weight':
                weight = +input.value;
                break;

            case 'age':
                age = +input.value;
                break;
        }
        GetResult();
    });




}

calcDataForInput('#height');
calcDataForInput('#weight');
calcDataForInput('#age');
}

module.exports = Calc;

/***/ }),

/***/ "./js/modules/Cards.js":
/*!*****************************!*\
  !*** ./js/modules/Cards.js ***!
  \*****************************/
/***/ ((module) => {

"use strict";


function Cards(){

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            //element.classList.add('menu__item');

            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(clasname => element.classList.add(clasname));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    const GetResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) { // u fetcha est OK - eto esli vse normalno i status - poluchaem status
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    //////////////////////////////////////////////
    /*GetResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title,descr, price}) => { // vitaskivaem iz obiekta svoistva eto destrukturizaciya
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });*/

    ////////////////////////////////////////////// ili


    //////////////////////////////////////////////
    GetResource('http://localhost:3000/menu')
        .then(data => createCard(data));

    function createCard(data) {
        data.forEach(({
            img,
            altimg,
            title,
            descr,
            price
        }) => {
            const element = document.createElement('div');
            price = price * 27;
            element.classList.add('menu__item');

            element.innerHTML = `<img src=${img} alt=${altimg}>
            <h3 class="menu__item-subtitle">${title}</h3>
            <div class="menu__item-descr">${descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${price}</span> грн/день</div>
            </div>`;

            document.querySelector('.menu .container').append(element);
        });
    }
    //////////////////////////////////////////////    

    /*
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container",
        'menu__item',
        'bg'

        // mojno dobavluyat klassi  


    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container",
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container"
    ).render();
    */
}

module.exports = Cards;

/***/ }),

/***/ "./js/modules/Forms.js":
/*!*****************************!*\
  !*** ./js/modules/Forms.js ***!
  \*****************************/
/***/ ((module) => {

"use strict";


function Forms(){

    const forms = document.querySelectorAll('form');

    const message = { // konteinet soobsheni
        loading: 'img/form/spinner.svg',
        success: 'Spasibo! mi Skoro s vami svyajemsya',
        failure: 'Chtoto poshlo ne tak...'
    };

    forms.forEach(item => {
        bindPostData(item);

    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => { // u kajdoi knopki(sushnosti) gde est input est submit
            e.preventDefault();


            //const statusMessage = document.createElement('div');
            const statusMessage = document.createElement('img');
            //statusMessage.classList.add('status');
            statusMessage.src = message.loading; // mojno setAttribute
            //statusMessage.textContent = message.loading;
            statusMessage.style.cssText = `  
        display: block;
        margin: 0 auto;
        `; // dobavlyaem stili k statusMessage
            //form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage); // metod vstavki


            /* const request = new XMLHttpRequest(); // sozdaem zapros -- XMLHttpRequest eto stari metod no jelatelno ego znat
             request.open('POST', 'server.php');*/ // nastraivaem zapros


            // request.setRequestHeader('Content-type', 'miltipart/form-data');// kogda mi ispolzuem XMLHttpRequest() i FormData() togda zagolovok ne nujen on sozdaetsya avtomaticheski
            /* request.setRequestHeader('Content-type', 'applicatin/json');*/ // otprajka dannix na server v formate JSON
            const formData = new FormData(form); // chtobi ne sobirat kajdi value po otdelnosti i potom sozdavat obiekt dlya nego dlya etogo est FormData
            // kogda dannie idut na server s formi togda obizatelno doljni bit u vsex inputov atribut name

            /////////////
            /*const object = {};
            formData.forEach(function(value, key) {// dobavlyaem iz formData dannie value, key v pustoi obiekt cherez cikl forEach
                object[key] = value;    
            });*/
            ////////////// ili 

            const json = JSON.stringify(Object.fromEntries(formData.entries())); // vot tak bolee sovremenni metod

            //Object.entries() - preobrazuet obiekt v masiv - masiv masivov
            //Object.fromEntries() -  prevrashaem masiv masivov v obiekt
            //JSON.stringify() - prevrashaem obiekt v json


            // const obj = {a: 23, b: 50};
            //console.log(Object.entries(obj));// prevrashaem obiekt v masiv masivov tipa matrici
            /* const json = JSON.stringify(object); */ // preobrazuem object v json

            // request.send(formData);// bez ispolzovaniya JSON
            /*request.send(json);*/ // s ispolzovaniem JSON

            //////////////////////////////////////////   fetch zaprosi 

            ///////    
            /*fetch('server.php',{
                 method: "POST",
                 headers: {
                     'Content-type' : 'application/json'
                 },
                 body: JSON.stringify(object)
             });*/
            ///////

            postData('http://localhost:3000/requests', json)
                /*.then(data => data.text())*/
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);

                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
            ///////////////////////////

            /*  request.addEventListener('load', () => {
                  if (request.status === 200) {
                      console.log(request.response);
                      //statusMessage.textContent = message.success;
                      showThanksModal(message.success);
                      form.reset();
                      //setTimeout(() => {
                                  statusMessage.remove();
                      //},2000);
                  } else {
                      //statusMessage.textContent = message.failure;
                      showThanksModal(message.failure);
                  }

              });*/


        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class = "modal__content">
        <div data-close class="modal__close">×</div>
        <div class="modal__title">${message}</div>
        </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }





    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));


    /*
    // na servere sozdaem fail s imene server.php i v nego propisivaem
    <?php
    $_POST = json_decode(file_get_contents("php://input"),true);
    echo var_dump($_POST);
    ?>*/
}

module.exports = Forms;

/***/ }),

/***/ "./js/modules/Modals.js":
/*!******************************!*\
  !*** ./js/modules/Modals.js ***!
  \******************************/
/***/ ((module) => {

"use strict";


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

/***/ }),

/***/ "./js/modules/Sliders.js":
/*!*******************************!*\
  !*** ./js/modules/Sliders.js ***!
  \*******************************/
/***/ ((module) => {

"use strict";


function Sliders(){
///////////////////////////////
/*
    let slideNum = 1;

    const sliders = document.querySelectorAll('.offer__slide'),
            prev = document.querySelector('.offer__slider-prev'),
            next = document.querySelector('.offer__slider-next'),
            current = document.querySelector('#current'),
            total = document.querySelector('#total');

            if(sliders.length < 10){
                total.innerHTML = `0${sliders.length}`;
            }else{
                total.innerHTML = `${sliders.length}`;
            }

            slider(slideNum);

            function slider(n){
                if(n > sliders.length){
                    slideNum = 1;
                }
                if(n < 1){
                    slideNum = sliders.length;
                }

                sliders.forEach((item) => {
                   //item.style = 'display: none';
                   item.classList.add('hide','fade');     
                });
                //sliders[slideNum -1].style = 'display: block';
                if(sliders[slideNum - 1].classList.contains('hide')){
                    sliders[slideNum - 1].classList.remove('hide');
                }

                


                if(slideNum < 10){
                    current.innerHTML = `0${slideNum}`;
                }else{
                    current.innerHTML = `${slideNum}`;
                }
            }



            function plusSlide(n){
                slider(slideNum += n);
            }


            prev.addEventListener('click',()=>{
                plusSlide(-1);
            });

            next.addEventListener('click',() => {
                plusSlide(1);
            });
    */ 
   
            ///////////////vtoroi variant

    /*
    const sliders = document.querySelectorAll('.offer__slide'),
             prev = document.querySelector('.offer__slider-prev'),
             next = document.querySelector('.offer__slider-next'),
             current = document.querySelector('#current'),
             total = document.querySelector('#total');


             let slideIndex = 1;
            if(sliders.length < 10){
                total.textContent = `0${sliders.length}`;
            }else{
                total.textContent = sliders.length;
            }

            slider(slideIndex);

            function slider(n){
                if(n > sliders.length){
                    slideIndex = 1;
                }
                if(n < 1){
                    slideIndex = sliders.length;
                }

                sliders.forEach(item => {
                     item.classList.add('hide');
                     if(item.classList.contains('fade')){
                        item.classList.remove('fade');
                     }
                });


                if(sliders[slideIndex -1].classList.contains('hide')){
                    sliders[slideIndex -1].classList.remove('hide'); 
                    sliders[slideIndex -1].classList.add('fade'); 
                }       

                if(slideIndex < 10){
                    current.textContent = `0${slideIndex}`;
                }else{
                    current.textContent = slideIndex;
                }
                
            }

            function displaySlide(n){
                slider(slideIndex  += n);
            }

            prev.addEventListener('click',() => {
                displaySlide(-1);
            });

            next.addEventListener('click',() => {
                displaySlide(1);
            });

      //////////////////////////////////////////////////  

      */
///////////////////////////////
   
    let offset = 0;
    let slideIndex = 1;
    const sliders = document.querySelectorAll('.offer__slide'),
        arr = [],
        slide = document.querySelector('.offer__slider'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total'),
        sliderWrapper = document.querySelector('.offer__slider-wrapper'),
        sliderInner = document.querySelector('.offer_slider_inner'),
        width = window.getComputedStyle(sliderWrapper).width,

        prev1 = document.querySelector('prev'),
        next1 = document.querySelector('next');    



    if (sliders.length < 10) {
        total.textContent = `0${sliders.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = sliders.length;
        current.textContent = slideIndex;
    }

    sliders.forEach((item) => {
        item.style.width = width;
    });

    sliderInner.style.width = `${100 * sliders.length}%`;
    sliderInner.style.display = 'flex';
    sliderInner.style.transition = '0.5s all';


    sliderWrapper.style.overflow = 'hidden';

    //////////////////////////////

    function currentSlide(sliders, to) {
        if (sliders.length < 10) {
            to.textContent = `0${slideIndex}`;
        } else {
            to.textContent = slideIndex;
        }

    }

    function dotOpacity(arr) {
        arr.forEach(item => {
            item.style.opacity = '.5';
        });
        arr[slideIndex - 1].style.opacity = '1';
    }

    function getNumberFromString(str){
        return  +str.replace(/\D/g,'');
    }



    slide.style.position = 'relative';
    const indicator = document.createElement('ol');
    indicator.classList.add('carousel-indicators');

    indicator.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    margin-bottom: 2%;
    list-style: none;`;

    slide.append(indicator);

    for (let i = 0; i < sliders.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-carousel', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
            `;
        arr.push(dot);

        indicator.append(dot);

        if (i == 0) {
            dot.style.opacity = '1';
        }

    }






    ////////////////////////////////////////// slide po bokam
    const slide1 = document.createElement('a');
    slide1.classList.add('prev');
    slide1.innerHTML = '❮';

    const slide2 = document.createElement('a');
    slide2.classList.add('next');
    slide2.innerHTML = '❯';
    slide.append(slide1, slide2);



    slide.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('prev')) {

            if (offset == 0) {
                offset = 0;
            } else {
                offset -= getNumberFromString(width);//+width.slice(0, width.length - 2);
            }

            sliderInner.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 1) {
                slideIndex = 1;
            } else {
                slideIndex--;
            }
            currentSlide(sliders, current);

            dotOpacity(arr);
        }

    });

    slide.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('next')) {

            if (offset == (sliders.length - 1) * getNumberFromString(width)) {
                offset = (sliders.length - 1) * getNumberFromString(width);
            } else {
                offset += getNumberFromString(width);
            }
            sliderInner.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == sliders.length) {
                slideIndex = sliders.length;
            } else {
                slideIndex++;
            }
            currentSlide(sliders, current);

            dotOpacity(arr);
        }

    });
    //////////////////////////////////////////


    arr.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const ind = e.target.getAttribute('data-carousel');
            slideIndex = ind;
            dotOpacity(arr);

            

            currentSlide(sliders, current);

            offset = getNumberFromString(width) * (slideIndex - 1);
            sliderInner.style.transform = `translateX(-${offset}px)`;

        });
    });



    next.addEventListener('click', () => {
        console.log(arr);
        if (offset == (sliders.length - 1) * getNumberFromString(width)) {
            offset = 0;
        } else {
            offset +=  getNumberFromString(width);
        }
        sliderInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == sliders.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        currentSlide(sliders, current);
        dotOpacity(arr);  
    });



    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = (sliders.length - 1) * getNumberFromString(width);//+width.slice(0, width.length - 2);
        } else {
            offset -= getNumberFromString(width);//+width.slice(0, width.length - 2);
        }

        sliderInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = sliders.length;
        } else {
            slideIndex--;
        }


        currentSlide(sliders, current);

        dotOpacity(arr);
    });
}

module.exports = Sliders;

/***/ }),

/***/ "./js/modules/Tabs.js":
/*!****************************!*\
  !*** ./js/modules/Tabs.js ***!
  \****************************/
/***/ ((module) => {

"use strict";


function Tabs(){
    const tabs = document.querySelectorAll('.tabheader__item'),
    tabParent = document.querySelector('.tabheader__items'),
    tabContent = document.querySelectorAll('.tabcontent');


function HideTabsContent() {
    tabContent.forEach((item) => {
        // item.style.display = 'none';
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    tabs.forEach((item) => {
        if (item.classList.contains('tabheader__item_active')) {
            item.classList.remove('tabheader__item_active');
        }
    });
}

function ShowTabsContent(i = 0) {
    // tabContent[i].style.display = 'block';
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');

}
HideTabsContent();
ShowTabsContent();


tabParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                HideTabsContent();
                ShowTabsContent(i);
            }
        });
    }
});
}

module.exports = Tabs;

/***/ }),

/***/ "./js/modules/Timer.js":
/*!*****************************!*\
  !*** ./js/modules/Timer.js ***!
  \*****************************/
/***/ ((module) => {

"use strict";


function Timer(){
    
    const deadline = '2022-12-31';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60) % 24));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
}

module.exports = Timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', () => {
   
const Tabs = __webpack_require__(/*! ./modules/Tabs */ "./js/modules/Tabs.js"),
      Modals = __webpack_require__(/*! ./modules/Modals */ "./js/modules/Modals.js"),
      Timer = __webpack_require__(/*! ./modules/Timer */ "./js/modules/Timer.js"),
      Cards = __webpack_require__(/*! ./modules/Cards */ "./js/modules/Cards.js"),
      Calc  = __webpack_require__(/*! ./modules/Calc */ "./js/modules/Calc.js"),
      Forms = __webpack_require__(/*! ./modules/Forms */ "./js/modules/Forms.js"),
      Sliders = __webpack_require__(/*! ./modules/Sliders */ "./js/modules/Sliders.js");

      Tabs();
      Modals();
      Timer();
      Cards();
      Calc();
      Forms();
      Sliders();

});



//599909066 
//20 44 16 67 6
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map