'use strict';
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const currentUrl = window.location.href;
    if (currentUrl.indexOf('tasktrackr.surge.sh') === -1) {
        if (currentUrl.indexOf('tasktrackr.surge.sh') === -1) {
            if (!currentUrl.includes('tasktrackr.surge.sh')) {



                const tasks = document.querySelector('.wrapper .tasks'),
                    wrapper = document.querySelector('.wrapper'),
                    tasksCount = document.querySelector('.wrapper .created_num'),
                    complatedNum = document.querySelector('.wrapper .completed__num'),
                    addItem = document.querySelector('.wrapper .task__btn'),
                    todoInput = document.querySelector('.wrapper .task__input'),

                    modalBox = document.querySelector('.box'),
                    modal = document.querySelector('.box .modal'),
                    closeIcon = document.querySelector('.box .modal__close'),
                    body = document.querySelector('BODY'),
                    modalBtn = document.querySelector('.box .modal__btn'),
                    modalMessage = document.querySelector('.box .modal__message'),
                    modalDescr = document.querySelector('.box .modal__descr'),

                    passInput = document.querySelector('.box .pass'),
                    passconfirm = document.querySelector('.box .pass__confirm'),
                    confirmIcon = document.querySelector('.box .box__confirm img');




                function encryptPassword(password, textToEncrypt) {
                    const encrypted = CryptoJS.AES.encrypt(textToEncrypt, password).toString();
                    return encrypted;
                };

                function decryptText(password, encryptedText) {
                    try {
                        const decrypted = CryptoJS.AES.decrypt(encryptedText, password).toString(CryptoJS.enc.Utf8);
                        return decrypted;
                    } catch (error) {
                        //console.error("Decryption error:", error.message);
                        return null;
                    }
                };



                const uniqueId = () => {
                    // return 'id-' + Math.random().toString(36).substr(2, 9);
                    const timestamp = new Date().getTime();
                    const uniquePart = (Math.random() * 100000).toFixed(0); // Уникальная случайная часть
                    const hash = (Math.random() * 100000).toString(36).replace('.', ''); // Хэш от случайного числа
                    return 'id-' + timestamp + '-' + uniquePart + '-' + hash;
                };

                function getCurrentDate() {
                    let currentDate = new Date();
                    let day = currentDate.getDate();
                    let month = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
                    let year = currentDate.getFullYear();
                    let hours = currentDate.getHours();
                    let minutes = currentDate.getMinutes();
                    let period = hours >= 12 ? 'PM' : 'AM';

                    // Форматирование дня и месяца, чтобы они имели двузначный вид, если необходимо
                    if (day < 10) {
                        day = '0' + day;
                    }
                    if (month < 10) {
                        month = '0' + month;
                    }

                    // Преобразование часов в 12-часовой формат
                    if (hours > 12) {
                        hours -= 12;
                    }
                    if (hours === 0) {
                        hours = 12;
                    }

                    // Форматирование минут, чтобы они имели двузначный вид
                    if (minutes < 10) {
                        minutes = '0' + minutes;
                    }

                    // Соединение всех компонентов в одну строку
                    let formattedDate = day + '/' + month + ' ' + hours + ':' + minutes + ' ' + period;

                    return formattedDate;
                };


                const geDataFromStorage = () => {
                    return JSON.parse(window.localStorage.getItem('toDoObj')) || [];
                };
                const setDataToStorage = (obj) => {
                    window.localStorage.setItem('toDoObj', JSON.stringify(obj));
                };



                let objfromStorage = geDataFromStorage();

                const wrightItemsToPage = (obj) => {
                    // console.log(obj.length);
                    let elements = '';
                    if (obj.length !== 0) {

                        obj.forEach((item, i) => {
                            let readStatus = item.read ? 'checked' : '';
                            let textdecore = readStatus ? 'textdecore' : '';
                            let date = item.date ? item.date : 'new time feature';

                            let hide = item.lock ? 'hide' : '';
                            let locked = item.lock ? 'show' : '';
                            let icon = item.lock ? 'lock' : 'unlock';
                            let iconSize = item.lock ? 'icon__size' : '';




                            let lastitem, urgent, hight, normal, low, urgentFont, hightFont, normalFont, lowFont, colored;
                           // if (!item.lock) {
                                lastitem = (i === obj.length - 1) ? 'lastitem' : '';

                                let statusClasses = {
                                    'Urgent': '',
                                    'Hight': '',
                                    'Normal': '',
                                    'Low': ''
                                };
                                statusClasses[item.status] = 'status__active';

                                urgent = statusClasses['Urgent'];
                                hight = statusClasses['Hight'];
                                normal = statusClasses['Normal'];
                                low = statusClasses['Low'];


                                let statusFonts = {
                                    'Urgent': '',
                                    'Hight': '',
                                    'Normal': '',
                                    'Low': ''
                                };
                                statusFonts[item.status] = 'active-weight';

                                urgentFont = statusFonts['Urgent'];
                                hightFont = statusFonts['Hight'];
                                normalFont = statusFonts['Normal'];
                                lowFont = statusFonts['Low'];



                                let statusColor = {
                                    'Urgent': 'urgent',
                                    'Hight': 'hight',
                                    'Normal': 'normal',
                                    'Low': 'low'
                                };
                                colored = statusColor[item.status] ? statusColor[item.status] : 'null';
                               // console.log(colored);


                            elements += `<div class="task__item item" name="todo" data-id="${item.id}">
    <div class="task__chb ${hide}">
        <label>
            <input type="checkbox" name="chb" class="realchb" ${readStatus}>
            <span class="castomchb"></span>
        </label>
    </div>
    <div class="task__item__descr ${textdecore} ${hide}">${item.text}</div>
   
    
    <a class="task__trash trashdecore" href="#!">
        <img class="trash" src="./img/trash_2.svg" alt="trash">
    </a>
    
    <a class="secure trashdecore" href="#!">
        <img class="secure__img" src="./img/${icon}.svg" alt="secure">
    </a>


    <span class="task__item-date ${textdecore} ${hide}">${date}</span>
    <div class="locked ${locked}">locked</div>
   
   
   
   


    <div class="status__icon icon-status">
    <i class="fa-solid fa-flag flag ${colored} ${iconSize}"></i>

    <div class="status__modal ${lastitem}">
        <div class="status__items">
            <div class="urgent__wrap wrap">
                <div class="ugent__icons icons">
                    <div class="urgent__icon status-item">
                        <i class="fa-solid fa-flag"></i>
                        <div class="urgen__title modal__text ${urgentFont}">Urgent</div>
                    </div>
                    <i class="fa-solid fa-circle-check ${urgent}"></i>
                </div>
            </div>
           <div class="hight__wrap wrap">
            <div class="hight__icons icons">
                <div class="hight__icon status-item">
                    <i class="fa-solid fa-flag"></i>
                    <div class="hight__title modal__text ${hightFont}">Hight</div>
                </div>
                <i class="fa-solid fa-circle-check ${hight}"></i>
            </div>
           </div>
           <div class="normal__wrap wrap">
            <div class="normal__icos icons">
                <div class="normal__icon status-item">
                    <i class="fa-solid fa-flag"></i>
                    <div class="normal__title modal__text ${normalFont}">Normal</div>
                </div>
                <i class="fa-solid fa-circle-check ${normal}"></i>
            </div>
           </div>
            <div class="low__wrap wrap">
                <div class="low__icons icons">
                    <div class="low__icon status-item">
                        <i class="fa-solid fa-flag"></i>
                        <div class="low__title modal__text ${lowFont}">Low</div>
                    </div>
                    <i class="fa-solid fa-circle-check ${low}"></i>
                </div>
            </div>
        </div>
        <div class="clear__wrap wrap">
            <div class="clear__icons status-item">
                <i class="fa-solid fa-ban"></i>
                <div class="clear__title modal__text">Clear</div>
            </div>
        </div>
    </div>
</div>

    </div>`;
                        });
                    } else {
                        elements = `<div class="empty__task wrapselect">
            <img class="empty__img" src="./img/cliboard.png" alt="empty">
            <div class="empty__descr"><div class="descr__text-one">You don't have tasks registered yet</div>
                <div class="descr__text-two">Create tasks and organize your to-do items</div></div>
        </div>`;
                    }
                    tasks.innerHTML = elements;
                };

                wrightItemsToPage(objfromStorage);



                /////////////2)///////////////

                addItem.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                });

                const addNewItem = () => {
                    addItem.addEventListener('click', async () => {

                        if (todoInput.value.length > 0) {
                            const newData =
                            {
                                id: uniqueId(),
                                text: todoInput.value,
                                read: false,
                                date: getCurrentDate(),
                                lock: false,
                                status: null
                            };
                            let filtred = geDataFromStorage();
                            filtred.push(newData); // dobavlyaem novi element
                            setDataToStorage(filtred);
                            todoInput.value = '';

                            calcItems();
                            await wrightItemsToPage(filtred);
                        }
                    });
                };
                addNewItem();


                const addNewItemFromKeyboard = () => {
                    todoInput.addEventListener('keydown', async (event) => {
                        if (event.key === 'Enter') {
                            if (todoInput.value.length > 0) {
                                const newData =
                                {
                                    id: uniqueId(),
                                    text: todoInput.value,
                                    read: false,
                                    date: getCurrentDate(),
                                    lock: false,
                                    status: null
                                };
                                let filtred = geDataFromStorage();
                                filtred.push(newData); // dobavlyaem novi element
                                setDataToStorage(filtred);
                                todoInput.value = '';

                                calcItems();
                                await wrightItemsToPage(filtred);
                            }
                        }

                    });
                };
                addNewItemFromKeyboard();



                tasks.addEventListener('contextmenu', (event) => {
                    if (event.target.closest('.trashdecore')) {
                        event.preventDefault();
                    }
                });


                function checkPasswords() {
                    modalMessage.textContent = '';
                    if (passInput.value === passconfirm.value && passInput.value.length > 0 && passconfirm.value.length > 0) {
                        modalMessage.style.color = 'green';
                        modalMessage.textContent = 'success';
                        // console.log('@');
                    } else {
                        modalMessage.style.color = '#ff6347';
                    }
                };

                passInput.addEventListener('input', checkPasswords);
                passconfirm.addEventListener('input', checkPasswords);


                const hideAllStatusModal = (id = '') => {
                    const items = document.querySelectorAll('.status__modal');
                    items.forEach((item) => {
                        const parentId = item.closest('.task__item').dataset.id;
                        //console.log(parentId);
                        if (parentId !== id) {
                            item.classList.remove('show');
                        };
                    });

                };






                let itemParentId = ''; // iskomi id
                let searchedItemArr = ''; // iskomi obiekt
                let itemParent = ''; // roditelski cliknuti item

                let secured = false;
                tasks.addEventListener('click', (event) => {

                    //console.log('ok');
                    const trashBtn = event.target.closest('.task__trash');
                    if (trashBtn) {
                        let trashParent = trashBtn.closest('.task__item');
                        let parentId = trashParent.dataset.id;
                        let storeObj = geDataFromStorage();
                        const newArr = storeObj.filter((item) => item.id !== parentId);
                        setDataToStorage(newArr);
                        // let objFromStorage = geDataFromStorage();
                        wrightItemsToPage(geDataFromStorage());

                    };


                    ////////showmoda/////////
                    let lockIcon = event.target.closest('.secure');
                    if (lockIcon) { // esli klick proizoshel na zamok


                        itemParent = lockIcon.closest('.task__item');
                        itemParentId = itemParent.dataset.id;
                        //console.log(itemParentId); // selected item id


                        const store = geDataFromStorage();
                        searchedItemArr = '';
                        store.forEach((item) => {
                            if (item.id === itemParentId) {
                                searchedItemArr = item;
                                return;
                            }
                        });
                        //console.log(searchedItemArr); // poluchili iskomi masiv s obiektami

                        //setDataToStorage(newArr); newArr - object arr

                        if (!searchedItemArr.lock) {
                            secured = false;

                            modal.classList.add('active'); // otobrajaem modalnoe okno pri lock
                            modalBox.classList.add('unlock');
                            body.classList.add('lock');

                            passconfirm.classList.remove('hide');
                            confirmIcon.classList.remove('hide');

                            modalMessage.classList.remove('hide');
                            modalDescr.classList.remove('hide');
                            modalBtn.textContent = 'Set Password';
                            passInput.placeholder = 'Password';
                        } else {
                            secured = true;

                            modal.classList.add('active'); // otobrajaem modalnoe okno pri unlock
                            modalBox.classList.add('unlock');
                            body.classList.add('lock');

                            passconfirm.classList.add('hide');
                            confirmIcon.classList.add('hide');
                            modalMessage.classList.remove('hide');
                            modalDescr.classList.add('hide');
                            modalBtn.textContent = 'Unlock';
                            passInput.placeholder = 'Password';
                        };




                    };
                    ////////showmodal////////
                    calcItems();





                });


                wrapper.addEventListener('click', (event) => {
                    ///////status////////
                    let statusitem = event.target.closest('.status__icon');
                    let statusModal = '';
                    if (statusitem) { // esli klick proizoshel na status
                        const statusParent = statusitem.closest('.task__item');
                        const statusId = statusParent.dataset.id;
                        //console.log(statusId);
                        statusModal = statusitem.querySelector('.status__modal');
                        hideAllStatusModal(statusId);

                        let storeObjStatus = geDataFromStorage(); // proveryaem esli item ne zablokirovani togda otobrajat menu
                        storeObjStatus.forEach((item) => {
                            if(item.id === statusId) {
                                if(!item.lock){
                                    statusModal.classList.toggle('show');
                                }
                            }
                        });
                        

                    } else {
                        hideAllStatusModal();
                    }

                    ///////status////////

                    ////////status items/////////
                    const statuIconOnCklick = event.target.closest('.wrap');
                    if (statuIconOnCklick) {
                        let storeObjStatus = geDataFromStorage();
                        //console.log('ok');
                        const itemText = statuIconOnCklick.querySelector('.modal__text').textContent;
                        const statusItemId = statuIconOnCklick.closest('.task__item').dataset.id;

                        storeObjStatus.forEach((item) => {
                            if (item.id === statusItemId) {
                                item.status = itemText;
                                return;
                            };
                        });

                        setDataToStorage(storeObjStatus);
                        wrightItemsToPage(geDataFromStorage());

                    }

                    const clearStatus = event.target.closest('.clear__wrap');
                    //console.log(clearStatus);
                    if (clearStatus) {
                        let storeObjStatus = geDataFromStorage();
                        const statusItemId = statuIconOnCklick.closest('.task__item').dataset.id;
                        storeObjStatus.forEach((item) => {
                            if (item.id === statusItemId) {
                                item.status = 'null';
                                return;
                            };
                        });

                        setDataToStorage(storeObjStatus);
                        wrightItemsToPage(geDataFromStorage());
                    };

                    ////////status items/////////
                });





                modalBtn.addEventListener('click', () => {


                    const modalMessage = document.querySelector('.modal__message');
                    const modalPass = document.querySelector('.pass').value;
                    const modalPassConfirm = document.querySelector('.pass__confirm').value;


                    if (!secured) {
                        // console.log('not secured');
                        if (modalPass === modalPassConfirm && modalPass.length > 0 && modalPassConfirm.length > 0) {

                            const store = geDataFromStorage();
                            store.forEach((item) => {
                                if (item.id === itemParentId && !item.lock) {
                                    item.text = encryptPassword(modalPass, item.text);
                                    item.date = encryptPassword(modalPass, item.date);
                                    item.lock = true;
                                    return;
                                }
                            });
                            // console.log(itemParentId);

                            setDataToStorage(store);
                            //itemParent.classList.add('jj');
                            wrightItemsToPage(geDataFromStorage());

                            closeModal();


                        } else {
                            modalMessage.textContent = 'Passwords do not meet minimum requirements';
                        }

                    } else {
                        // console.log('secured');

                        const lockedStore = geDataFromStorage();
                        lockedStore.forEach((item) => {
                            if (item.id === itemParentId && item.lock) {


                                const securedDate = decryptText(modalPass, item.date);
                                if (securedDate) {
                                    //console.log('ok');
                                    item.date = securedDate;
                                    item.text = decryptText(modalPass, item.text);
                                    item.lock = false;
                                    setDataToStorage(lockedStore);
                                    wrightItemsToPage(geDataFromStorage());

                                    closeModal();


                                    return;


                                } else {
                                    modalMessage.textContent = 'Password Error';
                                }

                            };
                        });
                    };
                    calcItems();
                });




                //////////2.1/////////////


                const closeModal = () => {
                    modalBox.classList.remove('unlock');
                    modal.classList.remove('active');
                    body.classList.remove('lock');

                    passInput.value = '';
                    passconfirm.value = '';
                    modalMessage.textContent = '';
                };

                closeIcon.addEventListener('click', () => {
                    closeModal();
                });






                ///////3)//////////////
                const calcItems = () => {

                    let obj = geDataFromStorage();
                    tasksCount.textContent = obj.length;

                    let count = 0;
                    obj.forEach((item) => {
                        if (!item.lock) {
                            if (item.read) count += 1;
                        }
                    });
                    //if(secured) {count = 0;}
                    complatedNum.textContent = `${count} of ${obj.length}`;
                };
                calcItems();


                function restoreCheckboxState() {
                    tasks.addEventListener('change', (e) => {
                        const chb = e.target.closest('.realchb');

                        if (chb) {
                            const text = chb.closest('.task__item').querySelector('.task__item__descr');
                            const itemId = chb.closest('.task__item').dataset.id;
                            const date = chb.closest('.task__item').querySelector('.task__item-date');
                            //console.log(itemId);

                            let storeObj = geDataFromStorage();
                            storeObj.forEach((item) => {
                                if (item.id === itemId) {
                                    if (chb.checked) {

                                        text.classList.add('textdecore');
                                        date.classList.add('textdecore');
                                        item.read = true;
                                    } else {

                                        text.classList.remove('textdecore');
                                        date.classList.remove('textdecore');
                                        item.read = false;
                                    }
                                }
                            });

                            setDataToStorage(storeObj);
                        }
                        calcItems();
                    });
                };

                restoreCheckboxState();


            };
        };
    };
});