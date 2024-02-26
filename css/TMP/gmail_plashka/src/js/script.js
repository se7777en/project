'use strict';

//js file
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const wrapInner = document.querySelector('.wrapper .wrapper__inner'),
        simbolsCount = document.querySelector('.subtitle__simbols span'),
        dialogArea = document.querySelector('.dialog__text .textarea'),
        wrapDate = document.querySelector('.dialog__inner-subtitle .subtitle__date'),
        dialogBtn = document.querySelector('.wrapper__footer span'),
        leftArr = document.querySelector('.dialog__icons .left__arrow'),
        checkIcon = document.querySelector('.dialog__icons .check'),
        mainBody = document.querySelector('body'),
        mainDialog = document.querySelector('.dialog__wrap');


    //const uniqueId = `id_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const uniqueId = () => {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    }


    let wrapData = [
        {
            id: uniqueId(),
            important: false,
            favorite: false,
            title: 'SAP 2',
            text: 'As the capabilities of SAP Business Network keep evolving to best answer the needs of all trading partners',
            date: '19 Feb1'
        },
        {
            id: uniqueId(),
            important: false,
            favorite: false,
            title: 'SAP 3',
            text: 'As the capabilities of SAP Business Network keep evolving to best answer the needs of all trading partners',
            date: '20 Feb2'
        },
        {
            id: uniqueId(),
            important: false,
            favorite: false,
            title: 'SAP 4',
            text: 'As the capabilities of SAP Business Network keep evolving to best answer the needs of all trading partners',
            date: '20 Feb2'
        },
        {
            id: uniqueId(),
            important: false,
            favorite: false,
            title: 'SAP 5',
            text: 'As the capabilities of SAP Business Network keep evolving to best answer the needs of all trading partners',
            date: '20 Feb2'
        },
        {
            id: uniqueId(),
            important: false,
            favorite: false,
            title: 'SAP 6',
            text: 'As the capabilities of SAP Business Network keep evolving to best answer the needs of all trading partners',
            date: '20 Feb2'
        },
        {
            id: uniqueId(),
            important: false,
            favorite: false,
            title: 'SAP 7',
            text: 'As the capabilities of SAP Business Network keep evolving to best answer the needs of all trading partners',
            date: '20 Feb2'
        },
        {
            id: uniqueId(),
            important: false,
            favorite: false,
            title: 'SAP 8',
            text: 'As the capabilities of SAP Business Network keep evolving to best answer the needs of all trading partners',
            date: '20 Feb2'
        },
        {
            id: uniqueId(),
            important: false,
            favorite: false,
            title: 'SAP 9',
            text: 'As the capabilities of SAP Business Network keep evolving to best answer the needs of all trading partners',
            date: '20 Feb2'
        },
        {
            id: uniqueId(),
            important: false,
            favorite: false,
            title: 'SAP 10',
            text: 'As the capabilities of SAP Business Network keep evolving to best answer the needs of all trading partners',
            date: '20 Feb2'
        }


    ];

    let objfromStorage = '';
    if (!window.localStorage.getItem('myobj')) {
        window.localStorage.setItem('myobj', JSON.stringify(wrapData));
    } else {
        objfromStorage = JSON.parse(window.localStorage.getItem('myobj'));
    }



    let elements = '';
    const addItemsFromObj = (data) => {
        elements = '';
        data.forEach((item) => {
            const important = item.important;
            const favorite = item.favorite;
            const data_id = item.id;
            const title = item.title;
            const text = item.text;
            const date = item.date;

            elements += `
            <div class="wrapper__item" data-id="${data_id}">
                    <div class="trash__btn">
                        <div class="trash__btn-inner">
                            <div class="trash__img-item">
                                <img class="trash__img" src="./icons/trash.svg" alt="trash">
                            </div>
                            <div class="edit__img-item">
                                <img class="edit__img" src="./icons/edit.svg" alt="edit">
                            </div>
                        </div>
                    </div>
                    <div class="wrapper__chb-cover">
                        <label class="wrapper__item-chb">
                            <input class="wrapper__chb" type="checkbox">
                            <span class="castom__chb"></span>
                        </label>
                    </div>
                    <div class="wrapper__item-star">
                        <span></span>
                    </div>
                    <div class="wrapper__item-decore">
                        <span></span>
                    </div>
                    <div class="wrapper__item-descr">${title}</div>
                    <div class="wrapper__item-text">${text}</div>
                    <div class="wrapper__item-date">${date}</div>
                </div>`;
        });
        wrapInner.innerHTML = '';
        wrapInner.innerHTML = elements;
    }
    addItemsFromObj(objfromStorage);

    const itemBoxShadow = (labelChb, classname) => {
        labelChb.addEventListener('click', () => {
            labelChb.classList.add(classname); //castom__chb-shadow
            setTimeout(() => {
                labelChb.classList.remove(classname);
            }, 500);
            //show trash
        })
    }

    const showTrashBoxOnChb = (onChbCover, classTotrashBox, showtrash, trashshadow, editshadow, dataItem) => {
        const checkbox = onChbCover.querySelector('.wrapper__chb');
        let checked = false;
        checkbox.addEventListener('change', () => {
            checked = checkbox.checked;
            // checked? classTotrashBox.classList.add(clasname): classTotrashBox.classList.remove(clasname);


            //showTrashBoxOnChb(chbCover, trashBtn, 'item-trash', trashShadow, editShadow);
            if (checked) {
                classTotrashBox.classList.add(showtrash);
                hideItem(dataItem);
                itemBoxShadow(trashshadow, 'trash-shadow');
                itemBoxShadow(editshadow, 'trash-shadow');
            } else {
                classTotrashBox.classList.remove(showtrash);
                showItem(dataItem);
                trashshadow.classList.remove('trash-shadow');
                editshadow.classList.remove('trash-shadow');
            }
        });
    }

    const itemBg = (currentStar, classname) => {
        currentStar.addEventListener('click', () => {
            currentStar.classList.toggle(classname);
            // console.log(currentStar);
        })
    }

    const hideItem = (element) => {
        if (!element.classList.contains('hide')) {
            element.classList.add('hide');
        }
    }

    const showItem = (element) => {
        if (element.classList.contains('hide')) {
            element.classList.remove('hide');
        }
    }

    const showWrapperDlg = () => {
        dialogBtn.addEventListener('click', () => {
            mainDialog.classList.toggle('showdialog');
            mainBody.classList.add("lock");

            let count = dialogArea.value.length; // shitaem simvoli pri pervom zapuske
            simbolsCount.textContent = count;

            wrapDate.textContent = getCurrentTime(); // dobavlyaem vremya v dialogbox
            //22 февраля 5:07 PM
        });
    }
    showWrapperDlg();

    const closeWrapperDlg = () => {
        //console.log(checkIcon);
        checkIcon.addEventListener('click', () => {
            mainDialog.classList.remove('showdialog');
            mainBody.classList.remove('lock');
        });
    }
    closeWrapperDlg();

    const returnToMainArr = () => {
        //console.log(checkIcon);
        leftArr.addEventListener('click', () => {
            mainDialog.classList.remove('showdialog');
            mainBody.classList.remove('lock');
        });
    }
    returnToMainArr();

    const calcTexareaSimbols = () => {
        dialogArea.addEventListener('input', () => {
            let count = dialogArea.value.length;
            simbolsCount.textContent = count;
            //   console.log(count);
        })
    }
    calcTexareaSimbols();

    const getCurrentTime = () => {
        var currentDate = new Date(); // Получаем текущую дату и время
        var dayOfMonth = currentDate.getDate(); // Получаем день месяца
        var monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]; // Создаем массив с названиями месяцев
        var monthNumber = currentDate.getMonth();// Получаем номер месяца и его название
        var monthName = monthNames[monthNumber];

        var year = currentDate.getFullYear(); // Получаем год

        var hours = currentDate.getHours();// Получаем часы и минуты
        var minutes = currentDate.getMinutes();

        var ampm = (hours >= 12) ? "PM" : "AM";  // Определяем AM или PM

        hours = (hours > 12) ? hours - 12 : hours; // Преобразуем часы в 12-часовой формат
        hours = (hours === 0) ? 12 : hours;
        // Формируем строку с текущим временем и датой
        var formattedTime = dayOfMonth + " " + monthName + " " + hours + ":" + (minutes < 10 ? '0' : '') + minutes + " " + ampm;
        // Выводим текущее время и дату в консоль (вы можете использовать другие способы отображения)
        return formattedTime;
    }


    function addStyles() {
        const items = document.querySelectorAll('.wrapper__item');
        items.forEach((item) => { // perebiraem plashki s itemami
            const trashBtn = item.querySelector('.trash__btn'), // poluchaem u plashki roditelya korzini
                // labelChb = item.querySelector('.wrapper__item-chb'),
                starDecore = item.querySelector('.wrapper__item-star'),
                decoreStyles = item.querySelector('.wrapper__item-decore'),
                chbCover = item.querySelector('.wrapper__chb-cover'),
                editShadow = item.querySelector('.edit__img-item'),
                dataItem = item.querySelector('.wrapper__item-date'),
                trashBtnItem = item.querySelector('.trash__img-item');

            itemBoxShadow(chbCover, 'castom__chb-shadow');
            itemBoxShadow(starDecore, 'star-shadow');
            itemBoxShadow(decoreStyles, 'decore-shadow');
            itemBg(starDecore, 'star-bg');
            itemBg(decoreStyles, 'decore-bg');
            // console.log('OK');

            showTrashBoxOnChb(chbCover, trashBtn, 'item-trash', trashBtnItem, editShadow, dataItem);
            // dataFilter(trashBtnItem);
        });

    }



    



    const addEventOnTrashBtn = () => {
        const items = document.querySelectorAll('.wrapper__item');
        items.forEach((item) => {
            let trashImg = item.querySelector('.trash__img-item');
            trashImg.addEventListener('click', (event) => {
                let wrapItem = event.currentTarget.closest('.wrapper__item');
                let dataId = wrapItem.dataset.id;

                if (window.localStorage.getItem('myobj')) {
                    objfromStorage = JSON.parse(window.localStorage.getItem('myobj'));
                }

                let tmpArr = objfromStorage.filter((item) => item.id !== dataId);


                window.localStorage.setItem('myobj', JSON.stringify(tmpArr)); // save to storage
                addItemsFromObj(tmpArr); // add on page
                addStyles();
                addEventOnTrashBtn();
                console.log(tmpArr);
            });
        });
    }


    addEventOnTrashBtn();
    addStyles();












});