'use strict';

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    let methodsContainer = document.querySelector('.methods');
    let linkParent = document.querySelector('.main__inner-right .descr__inner');
    let lang = document.querySelector('.header__contact .tumb_two .inp2');


    let descrTitle = document.querySelector('.descr__title');
    let descrToUp = document.querySelector('.descr__up-text');




    let helpTitle = document.querySelector('.help__title');
    let helpText = document.querySelector('.help__text');
    let helpFooterText = document.querySelector('.help__footer-text');
    let helpHeaderText = document.querySelector('.help__header-text');
    let dayly = document.querySelector('.footer-worktime-text');
    let daylyTo = document.querySelector('.worktime__middletext');





    const addItemsOnPageRu = () => {
        let elements = '';
        let rightLinks = '';
        myObj.forEach((item) => {
            elements += `<div class="method" id="${item.method}" data-id="${item.method}">
        <div class="method__descr"><code class="method__item-decore">${item.method}</code>${item.descrRu}</div>
        <div class="method__title">${item.typeRu}</div>
        <div class="method__example">
            <div class="method__example-title">${item.maintypeRu}</div>
            <pre class="code__style">
<code>
${item.codeRu}
</code>
</pre>
        </div>
        <div class="info ${item.infostatus}">
            <pre>${item.infoRu}</pre>
        </div>
    </div>`;

            rightLinks += `<a href="#${item.method}" data-id="${item.method}-link" class="descr__item-link">
    <div class="descr__item">${item.method}</div>
</a>`;
        });

        methodsContainer.innerHTML = elements;
        linkParent.innerHTML = rightLinks;

        descrTitle.textContent = 'Навигация';
        descrToUp.textContent = 'Наверх';

        helpTitle.textContent = 'основатель сайта';
        helpText.textContent = 'Задать вопрос';
        helpHeaderText.textContent = 'Поддержка клиентов';
        helpFooterText.textContent = 'Поддержка клиентов';
        dayly.textContent = 'Ежедневно с';
        daylyTo.textContent = 'до';
    }

    addItemsOnPageRu();



    const addItemsOnPageEn = () => {
        let elements = '';
        let rightLinks = '';
        myObj.forEach((item) => {
            elements += `<div class="method" id="${item.method}" data-id="${item.method}">
        <div class="method__descr"><code class="method__item-decore">${item.method}</code>${item.descrEn}</div>
        <div class="method__title">${item.typeEn}</div>
        <div class="method__example">
            <div class="method__example-title">${item.maintypeEn}</div>
            <pre class="code__style">
<code>
${item.codeEn}
</code>
</pre>
        </div>
        <div class="info ${item.infostatus}">
            <pre>${item.infoEn}</pre>
        </div>
    </div>`;

            rightLinks += `<a href="#${item.method}" data-id="${item.method}-link" class="descr__item-link">
    <div class="descr__item">${item.method}</div>
</a>`;
        });

        methodsContainer.innerHTML = elements;
        linkParent.innerHTML = rightLinks;

        descrTitle.textContent = 'Navigation';
        descrToUp.textContent = 'Up';

        helpTitle.textContent = 'site owner';
        helpText.textContent = 'Ask a question';
        helpFooterText.textContent = 'Customer support';
        helpHeaderText.textContent = 'Customer support';
        dayly.textContent = 'Daily from';
        daylyTo.textContent = 'to';
    }


    const setDataToStorage = (obj) => {
        window.localStorage.setItem('lernjs', JSON.stringify(obj));
    }
    const geDataFromStorage = () => {
        return JSON.parse(window.localStorage.getItem('lernjs')) || {};
    }
    const obj =  geDataFromStorage();




    if (obj) {
        if (obj.lang === 'RU') {
            addItemsOnPageRu();
            lang.checked = true;
       
        }

        if (obj.lang === 'EN') {
            addItemsOnPageEn();
            lang.checked = false;
        }
    }





    lang.addEventListener('click', () => {

        if (lang.checked) {
            addItemsOnPageRu();
            obj.lang = 'RU';
            
        } else {
            addItemsOnPageEn();
            obj.lang = 'EN';
        }
        setDataToStorage(obj);
    });



    const helpModal = document.querySelector('.header .help'),
        headerContact = document.querySelector('.header .header__btn'),
        closeBtn = document.querySelector('.header .help__close');



    let mytexts = document.querySelectorAll('.methods .method');
    let linksParent = document.querySelectorAll('.descr__inner .descr__item');



    let menuBtn = document.querySelector('.menu__btn');
    let menuBtnIcon = document.querySelector('.menu__btn .fa-solid');
    let menu = document.querySelector('.main__inner-right');


    let progress = document.querySelector('.svg__box #reading-progress');
    // progress.style.transition = 'stroke-dasharray 0.3s ease';




    /////////styledCode border/////////

    const methods = methodsContainer.querySelectorAll('.method');
    const infoElements = methodsContainer.querySelectorAll('.info');
    const codeElements = methodsContainer.querySelectorAll('.method__example');






    let scrollH = 1;
    window.addEventListener('load', function () {
        scrollH = document.documentElement.scrollHeight - window.innerHeight;
    });



    methods.forEach((item, index) => {
        const info = infoElements[index];
        const code = codeElements[index];
        if (info.classList.contains('visible')) {
            code.classList.add('styled');
        }
    });



    const calcProgress = (ScrollPos) => {

        const dasharray = progress.getAttribute('stroke-dasharray');
        const valuesArr = dasharray.split(' ');
        const value = parseFloat(valuesArr[1]);
        let result = Math.ceil(ScrollPos * 100 / scrollH);

        if (result > 95) result = 100;

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

        calcProgress(ScrollPos);

        mytexts.forEach((mytext) => {
            const textPos = mytext.offsetTop;
            const textHeight = mytext.offsetHeight;

            if (ScrollPos >= textPos - 60 && ScrollPos <= (textPos + textHeight)) {
                const postId = mytext.dataset.id; // poluchaem id posta

                const found = linkParent.querySelector(`[data-id="${postId}-link"]`);// [data-id="${postId + '-link}"]
                //'#' + postId + '-link'

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




