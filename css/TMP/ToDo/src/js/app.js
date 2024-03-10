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

    // const toDoObj = [
    //     {
    //         id: uniqueId(),
    //         text: 'Integer urna interdum massa`libero auctor neque turpis',
    //         read: true
    //     }, {
    //         id: uniqueId(),
    //         text: 'Integer urna interdum massa`libero auctor neque turpis',
    //         read: true
    //     }, {
    //         id: uniqueId(),
    //         text: 'Integer urna interdum massa`libero auctor neque turpis',
    //         read: true
    //     }, {
    //         id: uniqueId(),
    //         text: 'Integer urna interdum massa`libero auctor neque turpis',
    //         read: false
    //     }, {
    //         id: uniqueId(),
    //         text: 'Integer urna interdum massa`libero auctor neque turpis',
    //         read: false
    //     }
    // ];


    let objfromStorage = '';
    if (window.localStorage.getItem('toDoObj')) {
        objfromStorage = JSON.parse(window.localStorage.getItem('toDoObj'));
    }


    const wrightItemsToPage = (obj) => {
        console.log(obj.length);
        let elements = '';
        if(obj.length > 0) {
            obj.forEach((item) => {
                let readeStatus = '';
                if (item.read) { readeStatus = 'checked'; } else { readeStatus = ''; }
    
                elements += `<div class="task__item item" data-id="${item.id}">
    <div class="task__chb">
        <label>
            <input type="checkbox" class="realchb" ${readeStatus}>
            <span class="castomchb"></span>
        </label>
    </div>
    <div class="task__item__descr">${item.text}</div>
    <a class="task__trash" href="#!">
        <span class="material-symbols-outlined">delete</span>
    </a>
    </div>`;
            });
        }else {
            elements = `<div class="empty__task">
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
const calcItems = (objfromStorage) => {
    tasksCount.textContent = objfromStorage.length;
    let count = 0;
    objfromStorage.forEach((item) => {
        if (item.read) count += 1;
    })
    complatedNum.textContent = `${count} of ${objfromStorage.length}`;
}

calcItems(objfromStorage);
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

            if (todoChb.checked) {
                todoText.classList.add('textdecore');
            } else {
                todoText.classList.remove('textdecore');
            }
            
            todoChb.addEventListener('change', () => {
                const objfromStorage1 = JSON.parse(window.localStorage.getItem('toDoObj'));
                if (todoChb.checked) {
                   
                    let taskItem = todoChb.closest('.task__item');
                    let dataId = taskItem.dataset.id;
                    objfromStorage1.forEach((item) => {
                        if (item.id === dataId) {
                            item.read = true;
                        }
                    })
                    window.localStorage.setItem('toDoObj', JSON.stringify(objfromStorage1));

                    todoText.classList.add('textdecore');
                } else {
                    let taskItem = todoChb.closest('.task__item');
                    let dataId = taskItem.dataset.id;
                    objfromStorage1.forEach((item) => {
                        if (item.id === dataId) {
                            item.read = false;
                        }
                    })
                    window.localStorage.setItem('toDoObj', JSON.stringify(objfromStorage1));

                    todoText.classList.remove('textdecore');
                }

                calcItems(JSON.parse(window.localStorage.getItem('toDoObj')));
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

            const filtred =  JSON.parse(window.localStorage.getItem('toDoObj'));
            filtred.push(newData);
            window.localStorage.setItem('toDoObj', JSON.stringify(filtred));
           
            const newArr = JSON.parse(window.localStorage.getItem('toDoObj'));
            wrightItemsToPage(newArr);
            addHoverOnTrash();
            addTextDecoreOnChb();

            // objfromStorage = JSON.parse(window.localStorage.getItem('toDoObj'));
            // tasksCount.textContent = objfromStorage.length;
            // count = 0;
            // objfromStorage.forEach((item) => {
            //     if (item.read) count += 1;
            // })
            // complatedNum.textContent = `${count} of ${objfromStorage.length}`;
            trashItem();
            calcItems(newArr);

        });
    }

    addNewItem();




    const trashItem = () => {
        const trashBtns = document.querySelectorAll('.task__item .task__trash');
        trashBtns.forEach((item) => {
            item.addEventListener('click', () => {
               
                let trashParent = item.closest('.task__item');
                let parenId = trashParent.dataset.id;
                console.log(parenId);
                const storeObj = JSON.parse(window.localStorage.getItem('toDoObj'));
                const newArr = storeObj.filter((item) => item.id !== parenId);
                 window.localStorage.setItem('toDoObj', JSON.stringify(newArr));
            //   

            const objfromStorage1 = JSON.parse(window.localStorage.getItem('toDoObj'));
            wrightItemsToPage(objfromStorage1);
              
                addHoverOnTrash();
             addTextDecoreOnChb();

             trashItem();
             calcItems(objfromStorage1);
            });
        });
    }

    trashItem();











});