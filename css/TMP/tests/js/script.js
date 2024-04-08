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
    // console.log(answs);



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
    }

    addDataToForm();

    let clicked = true;
    let ind2 = ind;
    onlickBtbParent.addEventListener('click', (e) => {
        if (clicked === true) {
            // console.log(Object.keys(copyedObj).length);
            const event = e.target;
            const rig = e.currentTarget;
            if (event) {
                const item = event.closest('.wrapper__box-question');
                const itemAnsw = item.querySelector('.wrapper__box-item').textContent;

                if (itemAnsw === mainAnswer) {
                    wrightAnswers += 1;
                    right.textContent = wrightAnswers;
                    item.classList.add('right');
                    item.querySelector('span').classList.add('right');
                } else {
                    wrongAnswers += 1;
                    wrong.textContent = wrongAnswers;
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

            ind2--;
            let val = Math.abs(Math.floor(ind2 * 100 / ind) - 100);
            if (val >= 100) {
                val = 0;
                ind2 = ind;
            }
            indicator.style.setProperty('--width', `${val}%`);
            clicked = true;
        }, 3000);
    });


});