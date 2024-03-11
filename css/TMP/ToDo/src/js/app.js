'use strict';
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();


    const tasks = document.querySelector('.wrapper .tasks'),
        tasksCount = document.querySelector('.wrapper .created_num'),
        complatedNum = document.querySelector('.wrapper .completed__num'),
        addItem = document.querySelector('.wrapper .task__btn'),
        todoInput = document.querySelector('.wrapper .task__input');


    // const toDoObj = [
    //     {
    //         id: uniqueId(),
    //         text: 'Temporary todo',
    //         read: true
    //     }
    // ];


    // const toDoObj = [];
    // if (window.localStorage.getItem(toDoObj)) {
    //     window.localStorage.setItem('toDoObj', toDoObj);
    // }


    const uniqueId = () => {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    }


    const geDataFromStorage = () => {
        return JSON.parse(window.localStorage.getItem('toDoObj')) || [];
    }

    const setDataToStorage = (obj) => {
        window.localStorage.setItem('toDoObj', JSON.stringify(obj));
    }







    let objfromStorage = geDataFromStorage();
    // console.log(objfromStorage);

    /////1)//////
    const wrightItemsToPage = (obj) => {
        // console.log(obj.length);
        let elements = '';
        if (obj.length !== 0) {

            obj.forEach((item) => {
                // console.log(obj);
                let readStatus = item.read ? 'checked' : '';

                elements += `<div class="task__item item" name="todo" data-id="${item.id}">
    <div class="task__chb">
        <label>
            <input type="checkbox" name="chb" class="realchb" ${readStatus}>
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
        //tasks.innerHTML = '';
        tasks.innerHTML = elements;
    }

    wrightItemsToPage(objfromStorage);



    /////////////2)///////////////
    const addNewItem = () => {
        addItem.addEventListener('click', async () => {
            const newData =
            {
                id: uniqueId(),
                text: todoInput.value,
                read: false
            };
            let filtred = geDataFromStorage();
            filtred.push(newData); // dobavlyaem novi element
            setDataToStorage(filtred);
           
           
           await wrightItemsToPage(filtred);


            // zapisivaem v localstorage
            //let newArr = geDataFromStorage();


            // wrightItemsToPage(newArr);
            // addHoverOnTrash();
            // addTextDecoreOnChb();

            // trashItem();
            // calcItems();
        });
    }
    addNewItem();


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


            // Дополнительные функции, если необходимо
            // addHoverOnTrash();
            // addTextDecorOnChb();
            // calcItems();
        }
    });




    /*
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
    */










    /////////////
    /*  const calcItems = () => {
  
          let obj = geDataFromStorage(toDoObj);
          tasksCount.textContent = obj.length;
  
          let count = 0;
          obj.forEach((item) => {
              if (item.read) count += 1;
          })
          complatedNum.textContent = `${count} of ${obj.length}`;
      }
  
      calcItems();*/
    /////////////

    /*
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
        addHoverOnTrash();*/



    /*
    
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
        addTextDecoreOnChb();*/






});