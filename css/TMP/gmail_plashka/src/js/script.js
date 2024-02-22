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

    const showTrashBoxOnChb = (onChbCover, classTotrashBox, showtrash, trashshadow, editshadow, dataItem) => {
        const checkbox = onChbCover.querySelector('.wrapper__chb');
        let checked = false;
        checkbox.addEventListener('change', () => {
            checked = checkbox.checked;
            // checked? classTotrashBox.classList.add(clasname): classTotrashBox.classList.remove(clasname);

            //showTrashBoxOnChb(chbCover, trashBtn, 'item-trash', trashShadow, editShadow);
            if (checked) {
                classTotrashBox.classList.add(showtrash);
                hideItem(dataItem);
                itemBoxShadow(trashshadow, 'trash-shadow');
                itemBoxShadow(editshadow, 'trash-shadow');
            } else {
                classTotrashBox.classList.remove(showtrash);
                showItem(dataItem);
                trashshadow.classList.remove('trash-shadow');
                editshadow.classList.remove('trash-shadow');
            }
        });
    }

    const itemBg = (currentStar, classname) => {
        currentStar.addEventListener('click', () => {
            currentStar.classList.toggle(classname);
            console.log(currentStar);
        })
    }

    const hideItem = (element) => {
        if (!element.classList.contains('hide')) {
            element.classList.add('hide');
        } 
    }

    const showItem = (element) => {
        if (element.classList.contains('hide')) {
            element.classList.remove('hide');
        } 
    }


    wrapper__item.forEach((item) => { // perebiraem plashki s itemami
        const trashBtn = item.querySelector('.trash__btn'), // poluchaem u plashki roditelya korzini
            labelChb = item.querySelector('.wrapper__item-chb'),
            starShadow = item.querySelector('.wrapper__item-star'),
            decoreShadow = item.querySelector('.wrapper__item-decore'),
            starBgItem = item.querySelector('.wrapper__item-star'),
            decoreBgItem = item.querySelector('.wrapper__item-decore'),
            chbCover = item.querySelector('.wrapper__chb-cover'),

            trashShadow = item.querySelector('.trash__img-item'),
            editShadow = item.querySelector('.edit__img-item'),
            dataItem = item.querySelector('.wrapper__item-date');


        itemBoxShadow(labelChb, 'castom__chb-shadow');
        itemBoxShadow(starShadow, 'star-shadow');
        itemBoxShadow(decoreShadow, 'decore-shadow');


        //trash__btn-inner trash-shadow


        itemBg(starBgItem, 'star-bg');
        itemBg(decoreBgItem, 'decore-bg');
        // console.log('OK');
        showTrashBoxOnChb(chbCover, trashBtn, 'item-trash', trashShadow, editShadow, dataItem);


        //wrapper__item-decore decore-bg
        //trash__btn-inner trash-shadow
        //.item-trash


        // trashBtn.classList.toggle('item-trash'); 

        //  chbCover = item.querySelector('.wrapper__chb-cover');
        // chbCover.addEventListener('click',() => {

        //     trashBtn.classList.toggle('item-trash'); 
        //     console.log('ok');
        //     // console.log(trashBtn.classList.contains('item-trash'));
        // });
        // const trashbox = item.querySelector('.trash__btn');
        // trashbox.classList.toggle("item-trash");









        ////otobrajenie pri hovere na plashku//////
        item.addEventListener('mouseover', () => {
            // trashBtn.style = 'scale: 1'; // dobavlyaem svoistva
        });
        item.addEventListener('mouseout', () => {
            // trashBtn.style = 'scale: 0'; // dobavlyaem svoistva
            //  trashBtn.style.backgroundColor  = '';
        });
        ////otobrajenie pri hovere na plashku//////



    });






    // wrapper__item.addEventListener('mouseover', () => {
    //     trashBtn.style = 'scale: 1';
    // });

    // wrapper__item.addEventListener('mouseout', () => {
    //     trashBtn.style = 'scale: 0';
    // });



})
