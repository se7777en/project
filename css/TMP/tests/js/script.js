'use strict';
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const copyedObj = { ...obj };

    let questions = Object.keys(copyedObj);
    let values = Object.values(copyedObj);

    // console.log(questions);
    // console.log(values);
    const ind = questions.length;

    const ques = document.querySelector('.wrapper__box-title');
    const answs = document.querySelectorAll('.wrapper__box-questions .wrapper__box-item');
    const onlickBtbParent = document.querySelector('.wrapper__box-questions');
    const wrong = document.querySelector('.answers .wrong');
    const right = document.querySelector('.answers .right');

    const textarea = document.querySelector('.textarea');
    const indicator = document.querySelector('.indicator');
    // const wrapperCount = document.querySelector('.wrapperCount');

    const body = document.querySelector('BODY');
    const modal = document.querySelector('.modal');
    const rightAnsw = document.querySelector('.modal .right__answ span');
    const wrongAnsw = document.querySelector('.modal .wrong__answ span');
    const total = document.querySelector('.modal .total span');
    const closeIcon = document.querySelector('.modal .modal__close');
    const startNew = document.querySelector('.modal .start');
    const replyInner = document.querySelector('.wrapper__box .reply__inner');

    const answerTime = document.querySelector('.answer__time');







    // console.log(answs);

    let counter = 50; // skolko voprosov
    let count = counter;
    let intervalId;
    // wrapperCount.textContent = counter;
    right.textContent = count;


    closeIcon.addEventListener('click', () => {
        modal.classList.contains('show') ? modal.classList.remove('show') : null;
        body.classList.contains('lock') ? body.classList.remove('lock') : null;
        // wrapperCount.textContent = count;
        counter = count;
        indicator.style.setProperty('--width', `${0}%`);
    });

    startNew.addEventListener('click', () => {
        modal.classList.contains('show') ? modal.classList.remove('show') : null;
        body.classList.contains('lock') ? body.classList.remove('lock') : null;
        //wrapperCount.textContent = count;
        counter = count;
        indicator.style.setProperty('--width', `${0}%`);
        wrong.textContent = 0;
        right.textContent = counter;
        textarea.value = '';
        addDataToForm();
        startTimer(time, answerTime);
        wrightAnswers = 0;
        wrongAnswers = 0;
    });

    replyInner.addEventListener('click', () => {
        clearInterval(intervalId);
        counter = count;
        indicator.style.setProperty('--width', `${0}%`);
        wrong.textContent = 0;
        right.textContent = counter;
        textarea.value = '';
        addDataToForm();
        startTimer(time, answerTime);
        wrightAnswers = 0;
        wrongAnswers = 0;
    });


    let rndRight = 0;
    let mainAnswer = '';
    let mainques = '';

    let wrightAnswers = 0;
    let wrongAnswers = 0;
    const addDataToForm = () => {
        let randomIndex = Math.floor(Math.random() * values.length);
        mainques = questions[randomIndex]; // vopros
        mainAnswer = copyedObj[mainques]; // otvet
        ques.textContent = `${mainques}`;

        if (questions.length > 5) {
            delete copyedObj[mainques]; // udalyaet vopros chtobi ne povtorilsya iz skopirovanogo obiekta
            questions = Object.keys(copyedObj);
            values = Object.values(copyedObj);
        }


        let randomNumbers = []; // sozdaem masiv s 4 unikalnimi ciframi chtobi otveti bili raznie
        while (randomNumbers.length < 4) {
            let random = Math.floor(Math.random() * values.length);
            if (!randomNumbers.includes(random)) {
                randomNumbers.push(random);
            }
        }

        answs.forEach((item, i) => { // randomnie otveti
            item.textContent = values[randomNumbers[i]];
        });

        rndRight = Math.floor(Math.random() * 4);
        answs[rndRight].textContent = mainAnswer; // vstavlyaem pravilni otvet
    };

    addDataToForm();

   
    const showModal = () => {
        //////////////////
        if (counter === 0) {
            modal.classList.add('show');
            body.classList.add('lock');

            rightAnsw.textContent = wrightAnswers;
            wrongAnsw.textContent = wrongAnswers;
            total.textContent = wrightAnswers + wrongAnswers;
            clearInterval(intervalId);
        }
        ////////////////////
    };



    let time = 30; // vremya timera
    let timer = 0;
    let p = 0;
    function startTimer(duration, display) {
        timer = duration;
        let minutes, seconds;
        intervalId = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            //  console.log(timer);
            if (--timer < 0) {

                // clearInterval(intervalId); // Остановить таймер
                counter--;

                let val = Math.abs(Math.floor(counter * 100 / count) - 100);
                indicator.style.setProperty('--width', `${val}%`);
                clicked = true;

                let anw = wrong.textContent;
                wrong.textContent = Number(anw) + 1;
                wrongAnswers = wrongAnswers + 1;

                textarea.value += mainques + ' : ' + mainAnswer + '\n';
                addDataToForm();
                showModal();
                timer = duration;
            }
        }, 1000);
    };



    let clicked = true;
    onlickBtbParent.addEventListener('click', (e) => {
        if (clicked === true) {
            // console.log(Object.keys(copyedObj).length);
            const event = e.target;
            const rig = e.currentTarget;
            if (event) {
                const item = event.closest('.wrapper__box-question');
                const itemAnsw = item.querySelector('.wrapper__box-item').textContent;

                if (itemAnsw === mainAnswer) {
                    timer = time;
                    wrightAnswers += 1;
                    // right.textContent = wrightAnswers;
                    item.classList.add('right');
                    item.querySelector('span').classList.add('right');
                } else {
                    timer = time;
                    wrongAnswers += 1;
                    //  wrong.textContent = wrongAnswers;
                    textarea.value += mainques + ' : ' + mainAnswer + '\n';
                    item.classList.add('wrong');
                    item.querySelector('.wrapper__box-item').classList.add('wrong');
                    item.querySelector('span').classList.add('wrong');


                    const answ = rig.querySelector(`[data-id="${rndRight + 1}"]`);
                    if (answ) {
                        answ.classList.add('right');
                        answ.querySelector('span').classList.add('right');
                    }

                }
                counter--;
                // wrapperCount.textContent = counter;
                wrong.textContent = wrightAnswers + wrongAnswers;
            }
        }




        clicked = false;
        setTimeout(() => {

            ['right', 'wrong'].forEach(className => {
                const elements = document.querySelectorAll('.' + className);
                elements.forEach(element => {
                    element.classList.remove(className);
                });
            });
            addDataToForm();


            let val = Math.abs(Math.floor(counter * 100 / count) - 100);

            indicator.style.setProperty('--width', `${val}%`);
            clicked = true;
            showModal();
        }, 1000);


    });

    startTimer(time, answerTime);


});