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
        fiveColorBtns = document.querySelector('.five .color__btns'),
        main = document.querySelector('.main');


    let lockId = false;
    //color__btns 
    let colorNames = {
        "#000000": "Black",
        "#FFFFFF": "White",
        "#FF0000": "Red",
        "#00FF00": "Green",
        "#0000FF": "Blue",
        "#FFFF00": "Yellow",
        "#00FFFF": "Cyan",
        "#FF00FF": "Magenta",
        "#800000": "Maroon",
        "#808000": "Olive",
        "#008000": "Green",
        "#008080": "Teal",
        "#000080": "Navy",
        "#800080": "Purple",
        "#808080": "Gray",
        "#C0C0C0": "Silver",
        "#FFA500": "Orange",
        "#800000": "Maroon",
        "#8B4513": "SaddleBrown",
        "#A0522D": "Sienna",
        "#D2691E": "Chocolate",
        "#CD853F": "Peru",
        "#F4A460": "SandyBrown",
        "#D2B48C": "Tan",
        "#DEB887": "BurlyWood",
        "#FFDAB9": "PeachPuff",
        "#F5DEB3": "Wheat",
        "#F5F5DC": "Beige",
        "#FFE4B5": "Moccasin",
        "#FFDEAD": "NavajoWhite",
        "#FAEBD7": "AntiqueWhite",
        "#FFEBCD": "BlanchedAlmond",
        "#FFEFD5": "PapayaWhip",
        "#FFFAF0": "FloralWhite",
        "#F0E68C": "Khaki",
        "#BDB76B": "DarkKhaki",
        "#EEE8AA": "PaleGoldenRod",
        "#F0DC82": "Khaki",
        "#FFF8DC": "Cornsilk",
        "#DAA520": "GoldenRod",
        "#FFD700": "Gold",
        "#FFDAB9": "PeachPuff",
        "#F5DEB3": "Wheat",
        "#F5F5DC": "Beige",
        "#FAFAD2": "LightGoldenRodYellow",
        "#FFFFE0": "LightYellow",
        "#FFFF00": "Yellow",
        "#FFD700": "Gold",
        "#FFFFE0": "LightYellow",
        "#FFFACD": "LemonChiffon",
        "#FFF5EE": "SeaShell",
        "#F0FFF0": "HoneyDew",
        "#F5FFFA": "MintCream",
        "#F0FFFF": "Azure",
        "#F0FFFF": "AliceBlue",
        "#F0FFFF": "Azure",
        "#F0F8FF": "AliceBlue",
        "#F8F8FF": "GhostWhite",
        "#F0FFF0": "HoneyDew",
        "#F0F8FF": "LightBlue",
        "#E6E6FA": "Lavender",
        "#FFF0F5": "LavenderBlush",
        "#7B68EE": "MediumSlateBlue",
        "#9370DB": "MediumPurple",
        "#4B0082": "Indigo",
        "#6A5ACD": "SlateBlue",
        "#483D8B": "DarkSlateBlue",
        "#4169E1": "RoyalBlue",
        "#6495ED": "CornflowerBlue",
        "#B0C4DE": "LightSteelBlue",
        "#778899": "LightSlateGray",
        "#708090": "SlateGray",
        "#1E90FF": "DodgerBlue",
        "#4682B4": "SteelBlue",
        "#87CEFA": "LightSkyBlue",
        "#87CEEB": "SkyBlue",
        "#00BFFF": "DeepSkyBlue",
        "#ADD8E6": "LightBlue",
        "#B0E0E6": "PowderBlue",
        "#5F9EA0": "CadetBlue",
        "#7FFFD4": "Aquamarine",
        "#66CDAA": "MediumAquaMarine",
        "#20B2AA": "LightSeaGreen",
        "#40E0D0": "Turquoise",
        "#48D1CC": "MediumTurquoise",
        "#00CED1": "DarkTurquoise",
        "#AFEEEE": "PaleTurquoise",
        "#00FFFF": "Aqua",
        "#00FFFF": "Cyan",
        "#E0FFFF": "LightCyan",
        "#87CEEB": "SkyBlue",
        "#87CEFA": "LightSkyBlue",
        "#4682B4": "SteelBlue",
        "#B0C4DE": "LightSteelBlue",
        "#6495ED": "CornflowerBlue",
        "#1E90FF": "DodgerBlue",
        "#ADD8E6": "LightBlue",
        "#5F9EA0": "CadetBlue",
        "#7FFFD4": "Aquamarine"
        // Продолжайте добавлять другие цвета по мере необходимости
    };




    main.addEventListener('click', (e) => {

        const item = e.target.closest('.secure__img');

        if (item) {
            lockId = item.dataset.id;
            item.dataset.id = lockId === '0' ? '1' : '0';
           
            const sec = item.querySelector('.fa-solid');
            sec.classList.toggle('fa-lock-open');
            sec.classList.toggle('fa-lock');
        }
    });

    const lockStatus = (elem) => {
        const item = elem.querySelector('.secure__img');
        const id = item.dataset.id;
        return id !== '1';
        // if (id === '1') { return false; } else {
        //     return true;
        // }
    };

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


    function itemColorate(randomColor, oneColorTitle, oneColor, oneColorBtns, oneItem, title) {
        oneItem.style.cssText = `background-color: ${randomColor} !important;`;
        oneColor.textContent = randomColor;


        //oneColorTitle
        if (colorNames[randomColor]) {
            title.textContent = colorNames.randomColor;
        } else {
            title.textContent = '';
        }

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

                if (lockStatus(oneItem)) {
                    let randomColor = generateRandomColor();
                    itemColorate(randomColor, oneColorTitle, oneColor, oneColorBtns, oneItem, oneColorTitle);
                }
            }

            if (i === 2) {
                if (lockStatus(twoItem)) {
                    let randomColor = generateRandomColor();
                    itemColorate(randomColor, twoColorTitle, twoColor, twoColorBtns, twoItem, twoColorTitle);
                }
            }
            if (i === 3) {
                if (lockStatus(threeItem)) {
                    let randomColor = generateRandomColor();
                    itemColorate(randomColor, threeColorTitle, threeColor, threeColorBtns, threeItem, threeColorTitle);
                }
            }
            if (i === 4) {
                if (lockStatus(fourItem)) {
                    let randomColor = generateRandomColor();
                    itemColorate(randomColor, fourColorTitle, fourColor, fourColorBtns, fourItem, fourColorTitle);
                }
            }
            if (i === 5) {
                if (lockStatus(fiveItem)) {
                    let randomColor = generateRandomColor();
                    itemColorate(randomColor, fiveColorTitle, fiveColor, fiveColorBtns, fiveItem, fiveColorTitle);
                }
            }
        }

    });

    //let intensity = getColorIntensity(randomColor);



});








