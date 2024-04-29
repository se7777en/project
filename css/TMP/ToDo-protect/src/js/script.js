'use strict';
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const currentUrl = window.location.href;
    if (currentUrl.indexOf('tasktrackr.surge.sh') === -1) {
        if (currentUrl.indexOf('tasktrackr.surge.sh') === -1) {



            const tasks = document.querySelector('.wrapper .tasks'),
                tasksCount = document.querySelector('.wrapper .created_num'),
                complatedNum = document.querySelector('.wrapper .completed__num'),
                addItem = document.querySelector('.wrapper .task__btn'),
                todoInput = document.querySelector('.wrapper .task__input'),

                modalBox = document.querySelector('.box'),
                modal = document.querySelector('.box .modal'),
            closeIcon = document.querySelector('.box .modal__close'),
            body = document.querySelector('BODY');


            function encryptPassword(password, textToEncrypt) {
                const encrypted = CryptoJS.AES.encrypt(textToEncrypt, password).toString();
                return encrypted;
            };

            function decryptText(password, encryptedText) {
                try {
                    const decrypted = CryptoJS.AES.decrypt(encryptedText, password).toString(CryptoJS.enc.Utf8);
                    return decrypted;
                } catch (error) {
                    console.error("Decryption error:", error.message);
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
            }


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

                    obj.forEach((item) => {
                        let readStatus = item.read ? 'checked' : '';
                        let textdecore = readStatus ? 'textdecore' : '';
                        let date = item.date ? item.date : 'new time feature';


                        elements += `<div class="task__item item" name="todo" data-id="${item.id}">
    <div class="task__chb">
        <label>
            <input type="checkbox" name="chb" class="realchb" ${readStatus}>
            <span class="castomchb"></span>
        </label>
    </div>
    <div class="task__item__descr ${textdecore}">${item.text}</div>
   
    
    <a class="task__trash trashdecore" href="#!">
        <img class="trash" src="./img/trash_2.svg" alt="trash">
    </a>
    
    <a class="secure trashdecore" href="#!">
        <img class="trash" src="./img/lock.svg" alt="secure">
    </a>


    <span class="task__item-date ${textdecore}">${date}</span>
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
                            lock: false
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
                                lock: false
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

            tasks.addEventListener('click', (event) => {


                const trashBtn = event.target.closest('.task__trash');
                if (trashBtn) {
                    let trashParent = trashBtn.closest('.task__item');
                    let parentId = trashParent.dataset.id;
                    let storeObj = geDataFromStorage();
                    const newArr = storeObj.filter((item) => item.id !== parentId);
                    setDataToStorage(newArr);
                    let objFromStorage = geDataFromStorage();
                    wrightItemsToPage(objFromStorage);
                    calcItems();
                }


                ////////showmoda/////////
                let lockIcon = event.target.closest('.secure');
                if (lockIcon) { // esli klick proizoshel na zamok
                    let itemParentId = '';
                    modal.classList.add('active');
                    modalBox.classList.add('unlock');
                    body.classList.add('lock');

                    let itemParent = lockIcon.closest('.task__item');
                    itemParentId = itemParent.dataset.id;
                    console.log(itemParentId); // selected item id
                    const store = geDataFromStorage();

                    let searchedItemArr = '';
                    store.forEach((item) => {
                        if(item.id === itemParentId) {
                            searchedItemArr = item;
                            return;
                        }
                    });

                    console.log(searchedItemArr); // poluchili iskomi masiv s obiektami

                    console.log(encryptPassword('123', searchedItemArr.text));

                    //setDataToStorage(newArr); newArr - object arr
                    
                }
                ////////showmodal////////

            });

            //////////2.1/////////////
            closeIcon.addEventListener('click', () => {
                modalBox.classList.remove('unlock');
                modal.classList.remove('active');
                body.classList.remove('lock');
            });



            ///////3)//////////////
            const calcItems = () => {

                let obj = geDataFromStorage();
                tasksCount.textContent = obj.length;

                let count = 0;
                obj.forEach((item) => {
                    if (item.read) count += 1;
                })
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


        }
    }
});