'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const generate = document.querySelector('.wrapper .header__btn'),

        oneItem = document.querySelector('.one'),
        oneColor = document.querySelector('.one .color'),
        oneColorTitle = document.querySelector('.one .color__title'),
        oneColorBtns = document.querySelector('.one .color__btns'),


        twoItem = document.querySelector('.two'),
        twoColor = document.querySelector('.two .color'),
        twoColorTitle = document.querySelector('.two .color__title'),
        twoColorBtns = document.querySelector('.two .color__btns'),


        threeItem = document.querySelector('.three'),
        threeColor = document.querySelector('.three .color'),
        threeColorTitle = document.querySelector('.three .color__title'),
        threeColorBtns = document.querySelector('.three .color__btns'),

        fourItem = document.querySelector('.four'),
        fourColor = document.querySelector('.four .color'),
        fourColorTitle = document.querySelector('.four .color__title'),
        fourColorBtns = document.querySelector('.four .color__btns'),

        fiveItem = document.querySelector('.five'),
        fiveColor = document.querySelector('.five .color'),
        fiveColorTitle = document.querySelector('.five .color__title'),
        fiveColorBtns = document.querySelector('.five .color__btns');

    //color__btns 



    function generateRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getColorIntensity(hexColor) {
        // Удаляем символ # из шестнадцатеричного значения
        hexColor = hexColor.replace('#', '');

        // Получаем значения RGB
        let r = parseInt(hexColor.substr(0, 2), 16);
        let g = parseInt(hexColor.substr(2, 2), 16);
        let b = parseInt(hexColor.substr(4, 2), 16);

        // Вычисляем яркость по формуле
        let brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness >= 128 ? "light" : "dark";
    }




   // itemColorate(generateRandomColor(), oneColorTitle, oneColor, oneColorBtns, oneItem);


    function itemColorate(randomColor, oneColorTitle, oneColor, oneColorBtns, oneItem) {
        oneItem.style.cssText = `background-color: ${randomColor} !important;`;
        oneColor.textContent = randomColor;
        if (getColorIntensity(randomColor) !== 'light') {

            oneColorTitle.classList.remove('colorBlack');
            oneColorTitle.classList.add('colorWhite');
            oneColor.classList.remove('colorBlack');
            oneColor.classList.add('colorWhite');
            oneColorBtns.style.cssText = 'color: #ffffff';

        } else {
            oneColor.classList.remove('colorWhite');
            oneColor.classList.add('colorBlack');
            oneColorTitle.classList.remove('colorWhite');
            oneColorTitle.classList.add('colorBlack');
            oneColorBtns.style.cssText = 'color: #000000';
        }

    };


    generate.addEventListener('click', () => {
        for (let i = 1; i < 6; i++) {
            //console.log(i);

            //oneColor.textContent = randomColor;
            if (i === 1) {
                let randomColor = generateRandomColor();
                itemColorate(randomColor, oneColorTitle, oneColor, oneColorBtns, oneItem);
            }

            if (i === 2) {
                let randomColor = generateRandomColor();
                itemColorate(randomColor, twoColorTitle, twoColor, twoColorBtns, twoItem);
            }
            if (i === 3) {
                let randomColor = generateRandomColor();
                itemColorate(randomColor, threeColorTitle, threeColor, threeColorBtns, threeItem);
            }
            if (i === 4) {
                let randomColor = generateRandomColor();
                itemColorate(randomColor, fourColorTitle, fourColor, fourColorBtns, fourItem);
            }
            if (i === 5) {
                let randomColor = generateRandomColor();
                itemColorate(randomColor, fiveColorTitle, fiveColor, fiveColorBtns, fiveItem);
            }
        }

    });

    //let intensity = getColorIntensity(randomColor);



});









