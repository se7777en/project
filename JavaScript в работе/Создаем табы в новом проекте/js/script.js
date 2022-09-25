'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let start = new Date();
    // Tabs
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
/////////////////////////////////////////////////////////////////////
    // Timer

    const deadline = '2022-10-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
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

// Modal   Создаем модальное окно
///////////////////////////////////////////////////////////////
const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');/*,
        modalCloseBtn = document.querySelector('[data-close]');*/


        function openModal(){
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
/////////////////////////////////////////////////////////////////////  

// Используем классы для создание карточек меню

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

    if(!res.ok){ // u fetcha est OK - eto esli vse normalno i status - poluchaem status
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

    function createCard(data){
        data.forEach(({img, altimg, title,descr, price}) => {
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



// Forms  Реализация скрипта отправки данных на сервер
//////////////////////////////////////////////////////////////////////////////////
const forms = document.querySelectorAll('form');

const message = {// konteinet soobsheni
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
            'Content-type' : 'application/json'
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
        statusMessage.src = message.loading;// mojno setAttribute
        //statusMessage.textContent = message.loading;
        statusMessage.style.cssText = `  
        display: block;
        margin: 0 auto;
        `;// dobavlyaem stili k statusMessage
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
       /* const json = JSON.stringify(object); */// preobrazuem object v json
 
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


// sliders
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
*////////////////vtoroi variant

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
 ////////////// 3 variant
    //
    let offset = 0;
    let slideIndex = 1;
    const sliders = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total'),
        sliderWrapper = document.querySelector('.offer__slider-wrapper'),
        sliderInner = document.querySelector('.offer_slider_inner'),
        width = window.getComputedStyle(sliderWrapper).width;


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
    

    next.addEventListener('click', () => {
        if (offset == (sliders.length - 1) * +width.slice(0, width.length - 2)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        sliderInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == sliders.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (sliders.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }


    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = (sliders.length - 1) * +width.slice(0, width.length - 2);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }


        sliderInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = sliders.length;
        } else {
            slideIndex--;
        }


        if (sliders.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

    });

        //let ofset = 0;
        //sliderInner.style.






        // console.log(width);

});