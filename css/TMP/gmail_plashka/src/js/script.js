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
        addItem = document.querySelector('.dialog__icons .addItem'),
        mainBody = document.querySelector('body'),
        mainDialog = document.querySelector('.dialog__wrap');
       

      
       
    //    document.addEventListener('click', () => {
    //     const  size =  window.getComputedStyle(mainBody);
    //     const size_x = size.width;
    //     const size_y = size.height;
    //     document.querySelector('.wrapper__size').textContent = `width = ${size_x} , height = ${size_y}`;

    //    })
       









    //const uniqueId = `id_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const uniqueId = () => {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    }


    let wrapData = [
        {
            id: uniqueId(),
            favorite: true,
            important: false,
            title: '2SAP 2',
            text: '2As the capabilities of SAP Business Network keep evolving to best answer the needs of all trading partners',
            date: '19 Feb'
        },
        {
            id: uniqueId(),
            favorite: false,
            important: true,
            title: '3SAP 3',
            text: '3As the capabilities of SAP Business Network keep evolving to best answer the needs of all trading partners',
            date: '20 Feb'
        },
        {
            id: uniqueId(),
            favorite: true,
            important: false,
            title: '4SAP 4',
            text: '4As the capabilities of SAP Business Network keep evolving to best answer the needs of all trading partners',
            date: '20 Feb'
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
            let starFavorite = item.favorite;
            let important = item.important;

            const data_id = item.id;
            const title = item.title;
            const text = item.text;
            const date = item.date.split(" ").slice(0, 2).join(" ");

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
                    <div class="wrapper__item-star ${starFavorite ? 'star-bg' : false}">
                        <span></span>
                    </div>
                    <div class="wrapper__item-decore ${important ? 'decore-bg' : false}">
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
            // hideElem(one);
            // showElem(checkIcon);

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

    const itemBg = (currentStar, classname, index) => {
        currentStar.addEventListener('click', () => {
            currentStar.classList.toggle(classname);
            console.log(currentStar);

            let wrapItem = currentStar.closest('.wrapper__item');
            let dataId = wrapItem.dataset.id;
            if (dataId === objfromStorage[index].id) {
                // console.log(dataId, '---', objfromStorage[index].id);
                // console.log(objfromStorage[index].favorite);
                // const data = JSON.parse(window.localStorage.getItem('myobj'));
                if (classname === 'star-bg') {
                    objfromStorage[index].favorite = !objfromStorage[index].favorite;
                } else {
                    objfromStorage[index].important = !objfromStorage[index].important;
                }
                window.localStorage.setItem('myobj', JSON.stringify(objfromStorage));

            }
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

    // const showWrapperDlg = () => {
    //     dialogBtn.addEventListener('click', () => {
    //         mainDialog.classList.toggle('showdialog');
    //         mainBody.classList.add("lock");

    //          let count = dialogArea.value.length; // shitaem simvoli pri pervom zapuske
    //          simbolsCount.textContent = count;

    //          wrapDate.textContent = getCurrentTime(); // dobavlyaem vremya v dialogbox
    //         //22 февраля 5:07 PM
    //     });
    // }
    // showWrapperDlg();



    const closeAndSaveDlg = () => {

        checkIcon.addEventListener('click', () => {
            console.log('ok');
            const dlgTitle = document.querySelector('.dialog__wrap .title__input').value,
                dlgsubTitleDate = document.querySelector('.dialog__wrap .subtitle__date').textContent,
                dlgTextarea = document.querySelector('.dialog__text .textarea').value;

            const checkbox = document.querySelectorAll('.wrapper__item .wrapper__chb');
            let checkedId = '';
            let stoploop = false;
            checkbox.forEach((item) => {

                if (stoploop) return;
                let checked = item.checked;
                if (checked) {
                    let formParent = item.closest('.wrapper__item');
                    checkedId = formParent.dataset.id;
                    stoploop = true;
                }
            });

            let obj = '';
            if (window.localStorage.getItem('myobj')) {
                obj = JSON.parse(window.localStorage.getItem('myobj'));
            }
            let stoploop2 = false;
            obj.forEach((item) => {
                if (stoploop2) return;
                if (item.id === checkedId) {
                    console.log('found!');
                    item.title = dlgTitle;
                    item.text = dlgTextarea;
                    item.date = dlgsubTitleDate;

                    if (window.localStorage.getItem('myobj')) {
                        window.localStorage.setItem('myobj', JSON.stringify(obj));
                    }
                    stoploop2 = true;
                }
            });


            let dataRefresh = '';
            if (window.localStorage.getItem('myobj')) {
                dataRefresh = JSON.parse(window.localStorage.getItem('myobj'));
            }


            addItemsFromObj(dataRefresh);
            addStyles();
            addEventOnTrashBtn();

            mainDialog.classList.remove('showdialog');
            mainBody.classList.remove('lock');

        });


    }
    closeAndSaveDlg();




    const returnToMainArr = () => {
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
        var monthNames = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]; // Создаем массив с названиями месяцев
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
        items.forEach((item, index) => { // perebiraem plashki s itemami
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
            itemBg(starDecore, 'star-bg', index);
            itemBg(decoreStyles, 'decore-bg', index);
            // console.log('OK');

            showTrashBoxOnChb(chbCover, trashBtn, 'item-trash', trashBtnItem, editShadow, dataItem);
            // dataFilter(trashBtnItem);
        });

    }





    const addEventOnTrashBtn = () => {
        const items = document.querySelectorAll('.wrapper__item');
        items.forEach((item) => {
            let trashImg = item.querySelector('.trash__img-item');
            let editItem = item.querySelector('.edit__img-item');
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
                //console.log(tmpArr);
            });

            editItem.addEventListener('click', () => {

                //show checkIcon on Dlg header //
                checkIcon.classList.remove('hide__icon', 'show__icon');
                addItem.classList.remove('hide__icon', 'show__icon');
                checkIcon.classList.add('show__icon');
                addItem.classList.add('hide__icon');
                ////

                console.log(item);
                mainDialog.classList.toggle('showdialog');
                mainBody.classList.add("lock");


                //////zagolovok///////
                const areaTitle = document.querySelector('.dialog__wrap .title__input');
                const title = item.querySelector('.wrapper__item-descr');
                areaTitle.value = title.innerText;
                //////zagolovok///////    

                //////text///////    
                const textToArea = document.querySelector('.dialog__text .textarea');
                const text = item.querySelector('.wrapper__item-text');
                textToArea.value = text.innerText;
                ///////text//////



                wrapDate.textContent = getCurrentTime();
                let count = dialogArea.value.length; // shitaem simvoli pri pervom zapuske
                simbolsCount.textContent = count;



                // if (window.localStorage.getItem('myobj')) {
                //     objfromStorage = JSON.parse(window.localStorage.getItem('myobj'));
                // }
            });

            // closeandSaveDlg(item); 
        });
    }


    // const hideElem = (element) => {
    //     element.classList.add('hide');
    // }

    // const showElem = (element) => {
    //     element.classList.add('show');
    // }

    const wrapperShowAddNote = () => {
        dialogBtn.addEventListener('click', () => {
            // hideElem(checkIcon);
            // showElem(one);
            console.log('+');

            ///////show addItem icon on Dlg header///////
            checkIcon.classList.remove('hide__icon', 'show__icon');
            addItem.classList.remove('hide__icon', 'show__icon');
            checkIcon.classList.add('hide__icon');
            addItem.classList.add('show__icon');
            //////////


            console.log('wrapperShowAddNote');
            mainDialog.classList.toggle('showdialog');
            mainBody.classList.add("lock");

            let count = dialogArea.value.length; // shitaem simvoli pri pervom zapuske
            simbolsCount.textContent = count;
            wrapDate.textContent = getCurrentTime(); // dobavlyaem vremya v dialogbox
            //22 февраля 5:07 PM

            document.querySelector('.dialog__wrap .title__input').value = '';
            document.querySelector('.dialog__text .textarea').value = '';
           // document.querySelector('.dialog__wrap .subtitle__date').textContent = '';



        });
    }
    wrapperShowAddNote();


    const addItemFromNote = () => {
        console.log('addItemFromNote');
        addItem.addEventListener('click', () => {
            const dlgTitle = document.querySelector('.dialog__wrap .title__input').value,
                dlgTextarea = document.querySelector('.dialog__text .textarea').value,
                dlgsubTitleDate = document.querySelector('.dialog__wrap .subtitle__date').textContent;

            let newdate = {
                id: uniqueId(),
                favorite: false,
                important: false,
                title: dlgTitle,
                text: dlgTextarea,
                date: dlgsubTitleDate
            }

            let wrapperObj = '';
            if (!window.localStorage.getItem('myobj')) {
                window.localStorage.setItem('myobj', JSON.stringify(newdate));
            } else {
                wrapperObj = JSON.parse(window.localStorage.getItem('myobj'));
            }
            wrapperObj.push(newdate);

            if (window.localStorage.getItem('myobj')) {
                window.localStorage.setItem('myobj', JSON.stringify(wrapperObj));
            }
            console.log(wrapperObj);
            console.log(wrapData.length);


            ////////////////////
            let dataRefresh = '';
            if (window.localStorage.getItem('myobj')) {
                dataRefresh = JSON.parse(window.localStorage.getItem('myobj'));
            }
            addItemsFromObj(dataRefresh);
            addStyles();
            addEventOnTrashBtn();
            mainDialog.classList.remove('showdialog');
            mainBody.classList.remove('lock');



            ////////////////////

        });


    }

    addItemFromNote();






    addEventOnTrashBtn();
    addStyles();

});