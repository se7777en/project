'use strict';

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const wrapper__item = document.querySelectorAll('.wrapper__item'); // poluchaem vse plashku


    const itemBoxShadow = (labelChb, classname) => {
        labelChb.addEventListener('click', () => {
            labelChb.classList.add(classname); //castom__chb-shadow
            setTimeout(() => {
                labelChb.classList.remove(classname);
            }, 500);

            //show trash
        })
    }

    const showTrashBox = (item) => {
        const trashbox = item.querySelector('.trash__btn');
        trashbox.style = 'scale: 1';
    }

    const itemBg = (currentStar, classname) => {
        currentStar.addEventListener('click', () => {
            currentStar.classList.toggle(classname);
            console.log(currentStar);
        })
    }

    wrapper__item.forEach((item) => { // perebiraem plashki s itemami
        const trashBtn = item.querySelector('.trash__btn'), // poluchaem u plashki roditelya korzini
            labelChb = item.querySelector('.wrapper__item-chb'),
            starShadow = item.querySelector('.wrapper__item-star'),
            decoreShadow = item.querySelector('.wrapper__item-decore'),
            starBgItem = item.querySelector('.wrapper__item-star'),
            decoreBgItem = item.querySelector('.wrapper__item-decore');

        itemBoxShadow(labelChb, 'castom__chb-shadow');
        itemBoxShadow(starShadow, 'star-shadow');
        itemBoxShadow(decoreShadow, 'decore-shadow');


        itemBg(starBgItem, 'star-bg');
        itemBg(decoreBgItem, 'decore-bg');
        //wrapper__item-decore decore-bg
        //trash__btn-inner trash-shadow





        ////otobrajenie pri hovere na plashku//////
        item.addEventListener('mouseover', () => {
            // trashBtn.style = 'scale: 1'; // dobavlyaem svoistva
        });
        item.addEventListener('mouseout', () => {
            // trashBtn.style = 'scale: 0'; // dobavlyaem svoistva
            //  trashBtn.style.backgroundColor  = '';
        });
        ////otobrajenie pri hovere na plashku//////



    })






    // wrapper__item.addEventListener('mouseover', () => {
    //     trashBtn.style = 'scale: 1';
    // });

    // wrapper__item.addEventListener('mouseout', () => {
    //     trashBtn.style = 'scale: 0';
    // });



})
