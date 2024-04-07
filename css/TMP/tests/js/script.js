'use strict';

const obj = {
    'a shif(ship)': 'გემი',
    'a shif(ship)': 'გემი',
    'a cabin(kebin)': 'კაბინა',
    'a text(tekst)': 'ტექსტი',
    'a bout(bout)': 'ნავი',
    'a deck(dek)': 'გემბანი',
    'a door(dor)': 'კარი',
    'an egg(eg)': 'კვერცხი',
    'an apple(epl)': 'ვაშლი',
    'is not': 'არ არის',
    'yes(ies)': 'დიახ',
};

const questions = Object.keys(obj);
const values = Object.values(obj);

// console.log(questions);
// console.log(values);


const ques = document.querySelector('.wrapper__box-title');
const answs = document.querySelectorAll('.wrapper__box-questions .wrapper__box-item');
const onlickBtbParent = document.querySelector('.wrapper__box-questions');
const wrong = document.querySelector('.answers .wrong');
const right = document.querySelector('.answers .right');

const textarea = document.querySelector('.textarea');
// console.log(answs);



let rndRight = 0;
let mainAnswer = '';
let mainques = '';

let wrightAnswers = 0;
let wrongAnswers = 0;
const addDataToForm = () => {
    let randomIndex = Math.floor(Math.random() * values.length);
    mainques = questions[randomIndex]; // vopros
    mainAnswer = obj[mainques]; // otvet
    ques.textContent = `${mainques} ?`;

    answs.forEach((item) => { // randomnie otveti
        let random = Math.floor(Math.random() * values.length);
        item.textContent = values[random];
    });

    rndRight = Math.floor(Math.random() * 4);
    answs[rndRight].textContent = mainAnswer; // vstavlyaem pravilni otvet
}

addDataToForm();



onlickBtbParent.addEventListener('click', (e) => {
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
            textarea.value += mainques+' : '+mainAnswer + '\n';
            item.classList.add('wrong');
            item.querySelector('.wrapper__box-item').classList.add('wrong');
            item.querySelector('span').classList.add('wrong');


            const answ = rig.querySelector(`[data-id="${rndRight + 1}"]`);
            if (answ) {
                answ.classList.add('right');
                answ.querySelector('span').classList.add('right');
            }

        }

        setTimeout(() => {
            ['right', 'wrong'].forEach(className => {
                const elements = document.querySelectorAll('.' + className);
                elements.forEach(element => {
                    element.classList.remove(className);
                });
            });
            addDataToForm();

        }, 3000);

    }
});