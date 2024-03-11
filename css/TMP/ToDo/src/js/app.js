'use strict';
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();


    const tasks = document.querySelector('.wrapper .tasks'),
        tasksCount = document.querySelector('.wrapper .created_num'),
        complatedNum = document.querySelector('.wrapper .completed__num'),
        addItem = document.querySelector('.wrapper .task__btn'),
        todoInput = document.querySelector('.wrapper .task__input');


    const uniqueId = () => {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    }

    const toDoObj = [
        {
            id: uniqueId(),
            text: 'Temporary todo',
            read: true
        }
    ];





    let objfromStorage = JSON.parse(window.localStorage.getItem('toDoObj'));

    if (!objfromStorage) {
        window.localStorage.setItem('toDoObj', JSON.stringify(toDoObj));
        objfromStorage = toDoObj;
    }

    // let objfromStorage = '';
    // if (window.localStorage.getItem('toDoObj')) {
    //     console.log('ok');
    //     objfromStorage = JSON.parse(window.localStorage.getItem('toDoObj'));
    // } else {
    //     console.log('ok2');
    //     window.localStorage.setItem('toDoObj', JSON.stringify(toDoObj));
    //     objfromStorage = JSON.parse(window.localStorage.getItem('toDoObj'));
    // }




    const geDataFromStorage = (tmpObject) => {
        if (JSON.parse(window.localStorage.getItem('toDoObj'))) {
            return JSON.parse(window.localStorage.getItem('toDoObj'))
        } else {
            return tmpObject;
        }
    }

    //geDataFromStorage(toDoObj);

    const setDataToStorage = (obj) => {
        window.localStorage.setItem('toDoObj', JSON.stringify(obj));
    }


    const onCheckboxClick = (todoChb, objfromStorage1, todoText) => {
        if (todoChb.checked) {
            ///////////////////////////////////////////////
            let taskItem = todoChb.closest('.task__item');
            let dataId = taskItem.dataset.id;
            let loop = false;
            objfromStorage1.forEach((item) => {
                if (loop) return;
                if (item.id === dataId) {
                    item.read = true;
                    loop = true;
                }
            })
            setDataToStorage(objfromStorage1);
            if (!todoText.classList.contains('textdecore')) {
                todoText.classList.add('textdecore');
            }
        } else
        ///////////////////////////////////////////////
        {
            let taskItem = todoChb.closest('.task__item');
            let dataId = taskItem.dataset.id;
            let loop = false;
            objfromStorage1.forEach((item) => {
                if (loop) return;
                if (item.id === dataId) {
                    item.read = false;
                    loop = true;
                }
            })
            setDataToStorage(objfromStorage1);

            if (todoText.classList.contains('textdecore')) {
                todoText.classList.remove('textdecore');
            }
        }
    }




    const wrightItemsToPage = (obj) => {
        // console.log(obj.length);
        let elements = '';
        if (obj.length > 0) {
            obj.forEach((item) => {
                let readStatus = '';
                if (item.read) { readStatus = 'checked'; } else { readStatus = ''; }

                elements += `<div class="task__item item" data-id="${item.id}">
    <div class="task__chb">
        <label>
            <input type="checkbox" class="realchb" ${readStatus}>
            <span class="castomchb"></span>
        </label>
    </div>
    <div class="task__item__descr">${item.text}</div>
    <a class="task__trash" href="#!">
    <img src="./img/trash_2.svg" alt="trash">
    </a>
    </div>`;
            });
        } else {
            elements = `<div class="empty__task wrapselect">
            <img class="empty__img" src="./img/cliboard.png" alt="empty">
            <div class="empty__descr"><span class="descr__text-one">Você ainda não tem tarefas cadastradas</span>
                <span class="descr__text-two">Crie tarefas e organize seus itens a fazer</span></div>
        </div>`;
        }



        tasks.innerHTML = '';
        tasks.innerHTML = elements;
    }

    wrightItemsToPage(objfromStorage);






    /////////////
    const calcItems = () => {

        let obj = geDataFromStorage(toDoObj);
        tasksCount.textContent = obj.length;

        let count = 0;
        obj.forEach((item) => {
            if (item.read) count += 1;
        })
        complatedNum.textContent = `${count} of ${obj.length}`;
    }

    calcItems();
    /////////////


    const addHoverOnTrash = () => {
        const trashDecore = document.querySelectorAll('.task__item .task__trash');
        trashDecore.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                item.classList.add('trashdecore');
                setTimeout(() => {
                    item.classList.remove('trashdecore');
                }, 800);
            });
        });
    }
    addHoverOnTrash();





    const addTextDecoreOnChb = () => {
        const taskItems = document.querySelectorAll('.tasks .task__item');
        taskItems.forEach((item) => {
            const todoText = item.querySelector('.task__item__descr');
            const todoChb = item.querySelector('.realchb');
            let beforeLisenerObj = geDataFromStorage(toDoObj);
            onCheckboxClick(todoChb, beforeLisenerObj, todoText);

            todoChb.addEventListener('change', () => {
                let afterLisenerObj = geDataFromStorage(toDoObj);
                onCheckboxClick(todoChb, afterLisenerObj, todoText);
                calcItems();
            });
        });
    }
    addTextDecoreOnChb();


    const addNewItem = () => {
        addItem.addEventListener('click', () => {
            // console.log(todoInput.value);
            const newData = {
                id: uniqueId(),
                text: todoInput.value,
                read: false
            }

            let filtred = geDataFromStorage(toDoObj);


            filtred.push(newData); // dobavlyaem novi element

            setDataToStorage(filtred); // zapisivaem v localstorage

            let newArr = geDataFromStorage(toDoObj);


            wrightItemsToPage(newArr);
            addHoverOnTrash();
             addTextDecoreOnChb();
            
            trashItem();
            calcItems();
        });
    }
    addNewItem();


    const trashItem = () => {
        const trashBtns = document.querySelectorAll('.task__item .task__trash');
        trashBtns.forEach((item) => {
            item.addEventListener('click', () => {

                let trashParent = item.closest('.task__item');
                let parenId = trashParent.dataset.id;
                // console.log(parenId);


                let storeObj = geDataFromStorage(toDoObj);

                const newArr = storeObj.filter((item) => item.id !== parenId);
                setDataToStorage(newArr)

                let objfromStorage1 = geDataFromStorage(toDoObj);;


                wrightItemsToPage(objfromStorage1);
                
                
                trashItem();
                addHoverOnTrash();
                addTextDecoreOnChb();
                calcItems();
            });
        });
    }
    trashItem();

});