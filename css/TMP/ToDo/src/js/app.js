'use strict';
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();



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
    }


    const geDataFromStorage = () => {
        return JSON.parse(window.localStorage.getItem('toDoObj')) || [];
    }
    const setDataToStorage = (obj) => {
        window.localStorage.setItem('toDoObj', JSON.stringify(obj));
    }



    let objfromStorage = geDataFromStorage();

    const wrightItemsToPage = (obj) => {
        // console.log(obj.length);
        let elements = '';
        if (obj.length !== 0) {

            obj.forEach((item) => {
                let readStatus = item.read ? 'checked' : '';
                let textdecore = readStatus ? 'textdecore' : '';

                
                elements += `<div class="task__item item" name="todo" data-id="${item.id}">
    <div class="task__chb">
        <label>
            <input type="checkbox" name="chb" class="realchb" ${readStatus}>
            <span class="castomchb"></span>
        </label>
    </div>
    <div class="task__item__descr ${textdecore}">${item.text}</div>
    <a class="task__trash trashdecore" href="#!">
    <img src="./img/trash_2.svg" alt="trash">
    </a>
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
    }

    wrightItemsToPage(objfromStorage);



    /////////////2)///////////////
    const addNewItem = () => {
        addItem.addEventListener('click', async () => {

            if (todoInput.value.length > 0) {
                const newData =
                {
                    id: uniqueId(),
                    text: todoInput.value,
                    read: false
                };
                let filtred = geDataFromStorage();
                filtred.push(newData); // dobavlyaem novi element
                setDataToStorage(filtred);
                todoInput.value = '';

                calcItems();
                await wrightItemsToPage(filtred);
            }
        });
    }
    addNewItem();


    const addNewItemFromKeyboard = () => {
        todoInput.addEventListener('keydown', async (event) => {
            if (event.key === 'Enter') {
                if (todoInput.value.length > 0) {
                    const newData =
                    {
                        id: uniqueId(),
                        text: todoInput.value,
                        read: false
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
    }
    addNewItemFromKeyboard();


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
    }
    calcItems();


    function restoreCheckboxState() {
        tasks.addEventListener('change', (e) => {
            const chb = e.target.closest('.realchb');

            if (chb) {
                const text = chb.closest('.task__item').querySelector('.task__item__descr');
                const itemId = chb.closest('.task__item').dataset.id;
                console.log(itemId);

                let storeObj = geDataFromStorage();
                storeObj.forEach((item) => {
                    if (item.id === itemId) {
                        if (chb.checked) {

                            text.classList.add('textdecore');
                            item.read = true;
                        } else {

                            text.classList.remove('textdecore');
                            item.read = false;
                        }
                    }
                });

                setDataToStorage(storeObj);
            }
            calcItems();
        });
    }

    restoreCheckboxState();
});