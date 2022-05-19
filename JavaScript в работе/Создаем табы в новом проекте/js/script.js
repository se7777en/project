'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let start = new Date();
    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabParent = document.querySelector('.tabheader__items'),
        tabContent = document.querySelectorAll('.tabcontent');


    function HideTabsContent() {
        tabContent.forEach((item) => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach((item) => {
            if (item.classList.contains('tabheader__item_active')) {
                item.classList.remove('tabheader__item_active');
            }
        });
    }

    function ShowTabsContent(i = 0) {
        // tabContent[i].style.display = 'block';
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');

    }
    HideTabsContent();
    ShowTabsContent();


    tabParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    HideTabsContent();
                    ShowTabsContent(i);
                }
            });
        }

    });
/////////////////////////////////////////////////////////////////////
    // Timer

    const deadline = '2022-06-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
let end = new Date();

console.log(`Vremya skripta zanyalo ${end - start} millisekund`);
/////////////////////////////////////////////////////////////////////



    
});