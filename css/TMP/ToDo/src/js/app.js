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
                todoInput = document.querySelector('.wrapper .task__input');





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

            addItem.addEventListener('contextmenu', (e)=>{
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
                            date: getCurrentDate()
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
                                date: getCurrentDate()
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
                if(event.target.closest('.trashdecore')){
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

    //////////////////////////drag//////////////////////////
    ////////1/////////////
const tasksListElement = document.querySelector(`.tasks`);
const taskElements = tasksListElement.querySelectorAll(`.task__item`);

console.log(taskElements);

// Перебираем все элементы списка и присваиваем нужное значение
for (const task of taskElements) {
  task.draggable = true;
}
/////////1////////////


/////////2////////////
tasksListElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
  })
  
  tasksListElement.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
  });
/////////2////////////

/////////3////////////
tasksListElement.addEventListener(`dragover`, (evt) => {
    // Разрешаем сбрасывать элементы в эту область
    evt.preventDefault();
  
    // Находим перемещаемый элемент
    const activeElement = tasksListElement.querySelector(`.selected`);
    // Находим элемент, над которым в данный момент находится курсор
    const currentElement = evt.target;
    // Проверяем, что событие сработало:
    // 1. не на том элементе, который мы перемещаем,
    // 2. именно на элементе списка
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`task__item`);
  
    // Если нет, прерываем выполнение функции
    if (!isMoveable) {
      return;
    }
  
    // Находим элемент, перед которым будем вставлять
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;
  
    // Вставляем activeElement перед nextElement
    tasksListElement.insertBefore(activeElement, nextElement);
  });
/////////3////////////

/////////4////////////
const getNextElement = (cursorPosition, currentElement) => {
    // Получаем объект с размерами и координатами
    const currentElementCoord = currentElement.getBoundingClientRect();
    // Находим вертикальную координату центра текущего элемента
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
    // Если курсор выше центра элемента, возвращаем текущий элемент
    // В ином случае — следующий DOM-элемент
    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;
  
    return nextElement;
  };
/////////4////////////


/////////5////////////
tasksListElement.addEventListener(`dragover`, (evt) => {
    evt.preventDefault();
  
    const activeElement = tasksListElement.querySelector(`.selected`);
    const currentElement = evt.target;
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`task__item`);
  
    if (!isMoveable) {
      return;
    }
  
    // evt.clientY — вертикальная координата курсора в момент,
    // когда сработало событие
    const nextElement = getNextElement(evt.clientY, currentElement);
  
    // Проверяем, нужно ли менять элементы местами
    if (
      nextElement &&
      activeElement === nextElement.previousElementSibling ||
      activeElement === nextElement
    ) {
      // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
      return;
    }
  
    tasksListElement.insertBefore(activeElement, nextElement);
  });
/////////5////////////
});