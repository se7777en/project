'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const testData = [
        {
            question: 'Какой метод для фильтрации массива в JavaScript?',
            a: 'filter',
            b: 'sift',
            c: 'sort',
            d: 'select',
            rightAnswer: 'a'
        },
        {
            question: 'Как называется метод для добавления элемента в начало массива в JavaScript?',
            a: 'prepend',
            b: 'push',
            c: 'unshift',
            d: 'insert',
            rightAnswer: 'c'
        },
        {
            question: 'Какое ключевое слово используется для объявления константы в JavaScript?',
            a: 'constant',
            b: 'let',
            c: 'var',
            d: 'const',
            rightAnswer: 'd'
        },
        {
            question: 'Какой метод используется для объединения двух массивов в JavaScript?',
            a: 'merge',
            b: 'concatenate',
            c: 'join',
            d: 'combine',
            rightAnswer: 'b'
        },
        {
            question: 'Как называется функция, передаваемая в метод массива для выполнения операции над каждым элементом?',
            a: 'map',
            b: 'iterate',
            c: 'loop',
            d: 'execute',
            rightAnswer: 'a'
        },
        {
            question: 'Какой оператор используется для проверки неравенства по значению и типу в JavaScript?',
            a: '!=',
            b: '!==',
            c: '==',
            d: '/=',
            rightAnswer: 'b'
        },
        {
            question: 'Какой метод используется для удаления последнего элемента из массива в JavaScript?',
            a: 'pop',
            b: 'remove',
            c: 'delete',
            d: 'exclude',
            rightAnswer: 'a'
        },
        {
            question: 'Как называется цикл, который выполняется хотя бы один раз в JavaScript?',
            a: 'for',
            b: 'while',
            c: 'do-while',
            d: 'loop',
            rightAnswer: 'c'
        },
        {
            question: 'Какой тип данных используется для представления десятичных чисел в JavaScript?',
            a: 'decimal',
            b: 'float',
            c: 'int',
            d: 'number',
            rightAnswer: 'b'
        },
        {
            question: 'Какой метод используется для преобразования строки в массив в JavaScript?',
            a: 'split',
            b: 'slice',
            c: 'separate',
            d: 'divide',
            rightAnswer: 'a'
        }

    ];

    let counter = 0;

    let correct = 0;
    let wrong = 0;
    const question = document.querySelector('.form__header'),
        answer_1 = document.querySelector('.lab1'),
        answer_2 = document.querySelector('.lab2'),
        answer_3 = document.querySelector('.lab3'),
        answer_4 = document.querySelector('.lab4'),
        submit = document.querySelector('.btn'),
        inputs = document.querySelectorAll('.list__item input'),
        status  =document.querySelector('.status');



    const LoadData = (data, counter) => {
        question.innerHTML = data[counter].question;
        answer_1.innerHTML = data[counter].a;
        answer_2.innerHTML = data[counter].b;
        answer_3.innerHTML = data[counter].c;
        answer_4.innerHTML = data[counter].d;
    }

    LoadData(testData, 0);

    const getCheckedInputIndex = () => {
        return Array.from(inputs).findIndex(item => item.checked)
    }

    const uncheckRadios = () => {
        inputs.forEach((item) => {
            item.checked = false;
        })
    }


    const checkRightAnsw = (data, ind, counter) => {
        if (ind === -1) return;

        let rem = "";
        if (ind === 0) rem = 'a';
        if (ind === 1) rem = 'b';
        if (ind === 2) rem = 'c';
        if (ind === 3) rem = 'd';

        const userAnswer = rem;
        const rightAnswer = data[counter].rightAnswer;

        if (userAnswer === rightAnswer) {
            correct += 1;
            showStatusIcon();
            
        } else {
            wrong += 1;
        }
        //console.log(`userAnswer = ${userAnswer} rightAnswer = ${rightAnswer}`);

    }


    const showStatusIcon = () => {
        setTimeout(() => {
            status.style.visibility = 'visible';
            status.style.opacity = '.6';
        }, 10);

        setTimeout(() => {
            status.style.visibility = 'hidden';
            status.style.opacity = '0';
        }, 700);
    }

    


    if (window.innerWidth < 768) {
        
        submit.addEventListener('touchend', (e) => {
            e.preventDefault();
            if (counter < testData.length) {

                let ind = getCheckedInputIndex();
                if (ind !== -1) {
                    checkRightAnsw(testData, ind, counter);
                    console.log(`correct = ${correct} wrong = ${wrong}`);
                    counter++;

                    if (counter === testData.length) {
                        alert(`correctAnswer = ${correct} wrongAnswer = ${wrong});`);
                        return;
                    };

                    LoadData(testData, counter);
                    uncheckRadios();
                }
            }
        });
    } else {
        submit.addEventListener('click', (e) => {
        
            e.preventDefault();
            if (counter < testData.length) {

                let ind = getCheckedInputIndex();
                if (ind !== -1) {
                    checkRightAnsw(testData, ind, counter);
                    console.log(`correct = ${correct} wrong = ${wrong}`);
                    counter++;

                    if (counter === testData.length) {
                        alert(`correctAnswer = ${correct} wrongAnswer = ${wrong}`);
                        return;
                    };

                    LoadData(testData, counter);
                    uncheckRadios();
                }
            }
        });
    }






    //testData
    // let counter = 0;
    // const inputs = document.querySelectorAll('.list input'),
    //     labels = document.querySelectorAll('.list label'),
    //     ques = document.querySelector('.form__header'),
    //     submit = document.querySelector('.btn');


    // const updateQuestion = () => {
    //     let check = false;
    //     inputs.forEach((item) => {
    //         if(item.checked) check = true;
    //     })
    //      if(check === false && counter > 0) return;
    //     if (counter >= testData.length -1) return;

    //     const data = testData[counter];
    //     ques.innerHTML = data.question;
    //     labels.forEach((item, i) => {
    //         let txt = '';
    //         if (i === 0) {
    //             txt = data.a;
    //         }
    //         if (i === 1) {
    //             txt = data.b;
    //         }
    //         if (i === 2) {
    //             txt = data.c;
    //         }
    //         if (i === 3) {
    //             txt = data.d;
    //         }
    //         item.innerText = txt;
    //     });




    //     inputs.forEach((item) => {
    //         item.checked = false;
    //     })



    // }

    // updateQuestion();


    // submit.addEventListener('click', updateQuestion);

    // let right = 0;
    // let wrong = 0;
    // inputs.forEach((item) => {
    //     item.addEventListener('click', (e) => {
    //         if (e.target.checked) {
    //             // label value === rightAnswer
    //             const yourAnswer = e.target.id;
    //             const rightAnswer = testData[counter].rightAnswer;
    //             //console.log(`rightAnswer = ${testData[counter].rightAnswer} \n Selected = ${lab}`);

    //             if (rightAnswer === yourAnswer) {
    //                 right += 1;
    //             } else {
    //                 wrong += 1;
    //             }

    //             console.log(`right = ${right} wrong = ${wrong} yourAnswer = ${yourAnswer} rightAnswer = ${rightAnswer} counter = ${counter}`);

    //         }
    //     })
    // })






    // let counter = 0;
    // const question = document.querySelector('.form__header'),
    //     answ_a = document.querySelector('.lab1'),
    //     answ_b = document.querySelector('.lab2'),
    //     answ_c = document.querySelector('.lab3'),
    //     answ_d = document.querySelector('.lab4'),
    //     submit = document.querySelector('.btn');

    // const inputs = document.querySelectorAll('.list input');


    // inputs.forEach((item) => {
    //     item.addEventListener('click', (e) => {
    //         console.log(e.target.checked);
    //     })
    // })

    // const SetData = (id) => {
    //     question.innerHTML = testData[id].question;
    //     answ_a.innerHTML = testData[id].a;
    //     answ_b.innerHTML = testData[id].b;
    //     answ_c.innerHTML = testData[id].c;
    //     answ_d.innerHTML = testData[id].d;
    // };

    // SetData(counter);


    // submit.addEventListener('click', () => {
    //     counter++;
    //     SetData(counter);

    //     // console.log('e');
    // });




    // testData.forEach((item) => {

    // });


});