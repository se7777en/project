'use strict';

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
   

    const currentUrl = window.location.href;
    if (currentUrl.indexOf('js-book.surge.sh') === -1) {
        if (currentUrl.indexOf('js-book.surge.sh') === -1) {
            if (!currentUrl.includes('js-book.surge.sh')) {

                let methodsContainer = document.querySelector('.methods');
                let linkParent = document.querySelector('.main__inner-right .descr__inner');
                let language = document.querySelector('.header__contact .tumb_two .inp2');

                let doing = document.querySelector('.main .method__header');


                let descrTitle = document.querySelector('.descr__title');
                let descrToUp = document.querySelector('.descr__up-text');

                let helpTitle = document.querySelector('.help__title');
                let helpText = document.querySelector('.help__text');
                let helpFooterText = document.querySelector('.help__footer-text');
                let helpHeaderText = document.querySelector('.help__header-text');
                let dayly = document.querySelector('.footer-worktime-text');
                let daylyTo = document.querySelector('.worktime__middletext');
                let wrapInner = document.querySelectorAll('.wrap__inner .item');

               

                let scrollH = 1;
                window.addEventListener('load', function () {
                    scrollH = document.documentElement.scrollHeight - window.innerHeight;
                });


                const addItemsOnPageRu = () => {
                    let elements = '';
                    let rightLinks = '';
                    doing.innerHTML = 'Изучаем <span class="jslang">Javascript</span>';
                    myObj.forEach((item) => {
                        const status = item.methodStatus ? item.methodStatus : '';
                        const methodTitle = item.methodTitle ? item.methodTitle : '';
                        const methodSubTitle = item.methodSubTitle ? item.methodSubTitle : '';

                        elements += `<div class="method" id="${item.methodRu}" data-id="${item.methodRu}">
                        <div class="methodRuTitle ${status}">${methodTitle} <span class="title__jslang">${methodSubTitle}</span></div>
        <div class="method__descr"><code class="method__item-decore">${item.methodRu}</code>${item.descrRu}</div>
        <div class="method__title">${item.typeRu}</div>
        <div class="method__example">
        <span class="method__example-copy" title="copy"><i class="fa-solid fa-copy"></i></span>
            <div class="method__example-title">${item.maintypeRu}</div>
            <pre class="code__style">
<code class="language-js">
${item.codeRu}
</code>
</pre>
        </div>
        <div class="info ${item.infostatus}">
            <pre>${item.infoRu}</pre>
        </div>
    </div>`;

                        rightLinks += `<a href="#${item.methodRu}" data-id="${item.methodRu}-link" class="descr__item-link">
    <div class="descr__item">${item.methodRu}</div>
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


                };

                addItemsOnPageRu();


                const addItemsOnPageEn = () => {
                    let elements = '';
                    let rightLinks = '';
                    doing.innerHTML = 'Learning <span class="jslang">Javascript</span>';
                    myObj.forEach((item) => {

                        const status = item.methodStatus ? item.methodStatus : '';
                        const methodTitle = item.methodTitleEn ? item.methodTitleEn : '';
                        const methodSubTitle = item.methodSubTitleEn ? item.methodSubTitleEn : '';

                        elements += `<div class="method" id="${item.methodEn}" data-id="${item.methodEn}">
                        <div class="methodRuTitle ${status}">${methodTitle} <span class="title__jslang">${methodSubTitle}</span></div>
        <div class="method__descr"><code class="method__item-decore">${item.methodEn}</code>${item.descrEn}</div>
        <div class="method__title">${item.typeEn}</div>
        <div class="method__example">
        <span class="method__example-copy" title="copy"><i class="fa-solid fa-copy"></i></span>
            <div class="method__example-title">${item.maintypeEn}</div>
            <pre class="code__style">
<code class="language-js">
${item.codeEn}
</code>
</pre>
        </div>
        <div class="info ${item.infostatus}">
            <pre>${item.infoEn}</pre>
        </div>
    </div>`;

                        rightLinks += `<a href="#${item.methodEn}" data-id="${item.methodEn}-link" class="descr__item-link">
    <div class="descr__item">${item.methodEn}</div>
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


                };





                const setDataToStorage = (obj) => {
                    window.localStorage.setItem('lernjs', JSON.stringify(obj));
                };
                const geDataFromStorage = () => {
                    return JSON.parse(window.localStorage.getItem('lernjs')) || {};
                };
                const obj = geDataFromStorage();




                if (obj) {
                    if (obj.lang === 'RU') {
                        addItemsOnPageRu();
                        // language.setAttribute('checked', 'checked');
                        language.checked = true;


                    }

                    if (obj.lang === 'EN') {
                        addItemsOnPageEn();
                        // language.removeAttribute('checked');
                        language.checked = false;



                    };
                };



                language.addEventListener('click', () => {

                    if (language.checked) {
                        addItemsOnPageRu();
                        obj.lang = 'RU';
                        copyCode();
                        hljs.highlightAll(); // zakrashivaem cod

                    } else {
                        addItemsOnPageEn();
                        obj.lang = 'EN';
                        copyCode();
                        hljs.highlightAll(); // zakrashivaem cod
                    }
                    setDataToStorage(obj);
                    scrollH = document.documentElement.scrollHeight - window.innerHeight;
                });

                hljs.highlightAll(); // zakrashivaem cod
               
                const helpModal = document.querySelector('.header .help'),
                    headerContact = document.querySelector('.header .header__btn'),
                    closeBtn = document.querySelector('.header .help__close');

                let menuBtn = document.querySelector('.menu__btn');
                let menuBtnIcon = document.querySelector('.menu__btn .fa-solid');
                let menu = document.querySelector('.main__inner-right');


                let progress = document.querySelector('.svg__box #reading-progress');
                // progress.style.transition = 'stroke-dasharray 0.3s ease';




                /////////styledCode border/////////

                const methods = methodsContainer.querySelectorAll('.method');
                const infoElements = methodsContainer.querySelectorAll('.info');
                const codeElements = methodsContainer.querySelectorAll('.method__example');









                methods.forEach((item, index) => {
                    const info = infoElements[index];
                    const code = codeElements[index];
                    if (info.classList.contains('visible')) {
                        code.classList.add('styled');
                    };
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
                };

                let ScrollPosOnStart = window.scrollY;
                calcProgress(ScrollPosOnStart);


                ///////////////////////////////



                const onsrollChange = function () {
                    document.addEventListener('scroll', () => {
                        let ScrollPos = window.scrollY;

                        let mytexts = document.querySelectorAll('.methods .method');
                        let linksParent = document.querySelectorAll('.descr__inner .descr__item');
                        calcProgress(ScrollPos);

                        mytexts.forEach((mytext) => {
                            const textPos = mytext.offsetTop;
                            const textHeight = mytext.offsetHeight;

                            if (ScrollPos >= textPos - 60 && ScrollPos <= (textPos + textHeight)) {
                                const postId = mytext.dataset.id; // poluchaem id posta

                                const found = linkParent.querySelector(`[data-id="${postId}-link"]`);
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
                };


                onsrollChange();


               







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


                menuBtn.addEventListener('click', () => {
                    menu.classList.toggle('showmenu');
                    menuBtnIcon.classList.toggle('fa-list');
                    menuBtnIcon.classList.toggle('fa-xmark');
                    document.body.classList.toggle('dark-background');
                });


                ////////for copy code/////////////

                function copyCode() {
                    document.querySelectorAll('.method__example').forEach((item) => {
                        item.addEventListener('mouseenter', () => {
                            item.querySelector('.method__example-copy').classList.add('copy');
                        });

                        item.addEventListener('mouseleave', () => {
                            item.querySelector('.method__example-copy').classList.remove('copy');
                        });
                    });


                    methodsContainer.addEventListener('click', (e) => {
                        const event = e.target; // Используем e.target для проверки
                        if (event) {
                            if (event.closest('.method__example-copy')) {

                                if (event.classList.contains('fa-solid')) {
                                    event.classList.remove('fa-copy');
                                    event.classList.add('fa-check', 'colored');
                                } else {
                                    const el = event.querySelector('i');
                                    el.classList.remove('fa-copy');
                                    el.classList.add('fa-check', 'colored');
                                }
                                navigator.clipboard.writeText(event.closest('.method__example').querySelector('.code__style code').textContent);
                                setTimeout(() => {

                                    if (event.classList.contains('fa-solid')) {
                                        event.classList.remove('fa-check', 'colored');
                                        event.classList.add('fa-copy');
                                    } else {
                                        const el = event.querySelector('i');
                                        el.classList.remove('fa-check', 'colored');
                                        el.classList.add('fa-copy');
                                    }

                                    // event.classList.remove('fa-check', 'colored');
                                    // event.classList.add('fa-copy');




                                }, 1500);

                            }
                        }

                    });
                };

                copyCode();
                ////////for copy code/////////////


                /////for theme/////
                const clearActive = () => {
                    wrapInner.forEach((item) => {
                        if (item.classList.contains('active')) {
                            item.classList.remove('active');
                        }
                    })
                };

                wrapInner.forEach((item) => {
                    item.addEventListener('click', () => {
                        clearActive();
                        // console.log(item.dataset.id);
                        item.classList.toggle('active');
                    });
                });

                /////for theme/////


            }
        }
    }
});




