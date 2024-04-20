'use strict';
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const leftBtns = document.querySelectorAll('.wrapper__btns-left .item');
    const rightBtns = document.querySelectorAll('.wrapper__btns-right .item');
    const allBtns = document.querySelectorAll('.wrapper__btns .item');

   
    leftBtns.forEach((item) => {
        item.addEventListener('click', () => {

            leftBtns.forEach((inneritem) => {
                if (item !== inneritem) {
                    inneritem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    rightBtns.forEach((item) => {
        item.addEventListener('click', () => {

            rightBtns.forEach((inneritem) => {
                if (item !== inneritem) {
                    inneritem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });


    function detectLang(text) {
        let words = [];
        for (let i = 0; i < text.length; i++) {
            let lineWords = text[i].split(' ');
            words.push(...lineWords);
        }

        let englishWordCount = words.filter(word => /^[a-zA-Z-_:.,\d]+$/.test(word)).length;
        let georgianWordCount = words.filter(word => /^[ა-ჰ\d\-_:.,]+$/u.test(word)).length;
        let containsLatinParliament = words.filter(word => /[\u00C0-\u00FF-_:.,\d]+/.test(word)).length;
        let containsAsomtavruli = words.filter(word => /[\u10A0-\u10FF\u{10A0E}-\u{10AEF}]/u.test(word)).length;

        // Если процент больше или равен 90%, возвращаем соответствующее значение
        if (englishWordCount / words.length > 0.65) {
            return 'en';
        } else if (georgianWordCount / words.length > 0.65) {
            return 'ge';
        } else if (containsLatinParliament / words.length > 0.65) {
            return 'ParliamentStandart';
        }
        else if (containsAsomtavruli / words.length > 0.65) {
            return 'asomtavruli';
        }
        else {
            return 'unknown';
        }
    }


    const objGeoEn = {
        'ა': 'a',
        'ბ': 'b',
        'გ': 'g',
        'დ': 'd',
        'ე': 'e',
        'ვ': 'v',
        'ზ': 'z',
        'თ': 'T',
        'ი': 'i',
        'კ': 'k',
        'ლ': 'l',
        'მ': 'm',
        'ნ': 'n',
        'ო': 'o',
        'პ': 'p',
        'ჟ': 'J',
        'რ': 'r',
        'ს': 's',
        'ტ': 't',
        'უ': 'u',
        'ფ': 'f',
        'ქ': 'q',
        'ღ': 'R',
        'ყ': 'y',
        'შ': 'S',
        'ჩ': 'C',
        'ც': 'c',
        'ძ': 'Z',
        'წ': 'w',
        'ჭ': 'W',
        'ხ': 'x',
        'ჯ': 'j',
        'ჰ': 'h',
    };
    //     'ა': 'a',
    //     'ბ': 'b',
    //     'გ': 'g',
    //     'დ': 'd',
    //     'ე': 'e',
    //     'ვ': 'v',
    //     'ზ': 'z',
    //     'თ': 'T',
    //     'ი': 'i',
    //     'კ': 'k',
    //     'ლ': 'l',
    //     'მ': 'm',
    //     'ნ': 'n',
    //     'ო': 'o',
    //     'პ': 'p',
    //     'ჟ': 'J',
    //     'რ': 'r',
    //     'ს': 's',
    //     'ტ': 't',
    //     'უ': 'u',
    //     'ფ': 'f',
    //     'ქ': 'q',
    //     'ღ': 'R',
    //     'ყ': 'y',
    //     'შ': 'S',
    //     'ჩ': 'C',
    //     'ც': 'c',
    //     'ძ': 'Z',
    //     'წ': 'w',
    //     'ჭ': 'W',
    //     'ხ': 'x',
    //     'ჯ': 'j',
    //     'ჰ': 'h',
    // };

    const objEnGe = {
        'a': 'ა',
        'b': 'ბ',
        'g': 'გ',
        'd': 'დ',
        'e': 'ე',
        'v': 'ვ',
        'z': 'ზ',
        'T': 'თ',
        'i': 'ი',
        'k': 'კ',
        'l': 'ლ',
        'm': 'მ',
        'n': 'ნ',
        'o': 'ო',
        'p': 'პ',
        'J': 'ჟ',
        'r': 'რ',
        's': 'ს',
        't': 'ტ',
        'u': 'უ',
        'f': 'ფ',
        'q': 'ქ',
        'R': 'ღ',
        'y': 'ყ',
        'S': 'შ',
        'C': 'ჩ',
        'c': 'ც',
        'Z': 'ძ',
        'w': 'წ',
        'W': 'ჭ',
        'x': 'ხ',
        'j': 'ჯ',
        'h': 'ჰ',
    };



    //////Parliament/////
    const objGeParliament = {
        'ა': 'À',
        'ბ': 'Á',
        'გ': 'Â',
        'დ': 'Ã',
        'ე': 'Ä',
        'ვ': 'Å',
        'ზ': 'Æ',
        'თ': 'È',
        'ი': 'É',
        'კ': 'Ê',
        'ლ': 'Ë',
        'მ': 'Ì',
        'ნ': 'Í',
        'ო': 'Ï',
        'პ': 'Ð',
        'ჟ': 'Ñ',
        'რ': 'Ò',
        'ს': 'Ó',
        'ტ': 'Ô',
        'უ': 'Ö',
        'ფ': '×',
        'ქ': 'Ø',
        'ღ': 'Ù',
        'ყ': 'Ú',
        'შ': 'Û',
        'ჩ': 'Ü',
        'ც': 'Ý',
        'ძ': 'Þ',
        'წ': 'ß',
        'ჭ': 'à',
        'ხ': 'á',
        'ჯ': 'ã',
        'ჰ': 'ä'
    }

    const objParliamentGe = {
        'À': 'ა',
        'Á': 'ბ',
        'Â': 'გ',
        'Ã': 'დ',
        'Ä': 'ე',
        'Å': 'ვ',
        'Æ': 'ზ',
        'È': 'თ',
        'É': 'ი',
        'Ê': 'კ',
        'Ë': 'ლ',
        'Ì': 'მ',
        'Í': 'ნ',
        'Ï': 'ო',
        'Ð': 'პ',
        'Ñ': 'ჟ',
        'Ò': 'რ',
        'Ó': 'ს',
        'Ô': 'ტ',
        'Ö': 'უ',
        '×': 'ფ',
        'Ø': 'ქ',
        'Ù': 'ღ',
        'Ú': 'ყ',
        'Û': 'შ',
        'Ü': 'ჩ',
        'Ý': 'ც',
        'Þ': 'ძ',
        'ß': 'წ',
        'à': 'ჭ',
        'á': 'ხ',
        'ã': 'ჯ',
        'ä': 'ჰ'
    }
    ////////////

    ///////asomtavruli///////
    const AsomtavruliGe = {
        'Ⴀ': 'ა',
        'Ⴁ': 'ბ',
        'Ⴂ': 'გ',
        'Ⴃ': 'დ',
        'Ⴄ': 'ე',
        'Ⴅ': 'ვ',
        'Ⴆ': 'ზ',
        'Ⴇ': 'თ',
        'Ⴈ': 'ი',
        'Ⴉ': 'კ',
        'Ⴊ': 'ლ',
        'Ⴋ': 'მ',
        'Ⴌ': 'ნ',
        'Ⴍ': 'ო',
        'Ⴎ': 'პ',
        'Ⴏ': 'ჟ',
        'Ⴐ': 'რ',
        'Ⴑ': 'ს',
        'Ⴒ': 'ტ',
        'Ⴓ': 'უ',
        'Ⴔ': 'ფ',
        'Ⴕ': 'ქ',
        'Ⴖ': 'ღ',
        'Ⴗ': 'ყ',
        'Ⴘ': 'შ',
        'Ⴙ': 'ჩ',
        'Ⴚ': 'ც',
        'Ⴛ': 'ძ',
        'Ⴜ': 'წ',
        'Ⴝ': 'ჭ',
        'Ⴞ': 'ხ',
        'Ⴟ': 'ჯ',
        'Ⴠ': 'ჰ'
    }

    const GeAsomtavruli = {
        'ა': 'Ⴀ',
        'ბ': 'Ⴁ',
        'გ': 'Ⴂ',
        'დ': 'Ⴃ',
        'ე': 'Ⴄ',
        'ვ': 'Ⴅ',
        'ზ': 'Ⴆ',
        'თ': 'Ⴇ',
        'ი': 'Ⴈ',
        'კ': 'Ⴉ',
        'ლ': 'Ⴊ',
        'მ': 'Ⴋ',
        'ნ': 'Ⴌ',
        'ო': 'Ⴍ',
        'პ': 'Ⴎ',
        'ჟ': 'Ⴏ',
        'რ': 'Ⴐ',
        'ს': 'Ⴑ',
        'ტ': 'Ⴒ',
        'უ': 'Ⴓ',
        'ფ': 'Ⴔ',
        'ქ': 'Ⴕ',
        'ღ': 'Ⴖ',
        'ყ': 'Ⴗ',
        'შ': 'Ⴘ',
        'ჩ': 'Ⴙ',
        'ც': 'Ⴚ',
        'ძ': 'Ⴛ',
        'წ': 'Ⴜ',
        'ჭ': 'Ⴝ',
        'ხ': 'Ⴞ',
        'ჯ': 'Ⴟ',
        'ჰ': 'Ⴠ'
    };
    ///////asomtavruli///////

    const convert = document.querySelector('.wrapper__convert a');


    convert.addEventListener('click', () => {
        let obj = {};
        const textarea = document.querySelector('.wrapper .textarea');
        const val = textarea.value;
        let lines = val.split('\n');
        const text = detectLang(lines);
        //console.log(text);

        let dataId = '';
        allBtns.forEach((item) => {
            if(item.classList.contains('active')){
                dataId += item.dataset.id + '-';
            }
        });
        dataId = dataId.slice(0, -1);

        console.log(dataId);

        textarea.value = '';

        if (dataId === 'ge-en') { obj = { ...objGeoEn }; } //1
        if (dataId === 'ge-ParliamentStandart') { obj = { ...objGeParliament }; } //2
        if (dataId === 'ge-asomtavruli') { obj = { ...GeAsomtavruli }; } //3
      
        if (dataId === 'en-ge') { obj = { ...objEnGe }; } //4
        if (dataId === 'en-ParliamentStandart') { obj = { ...AsomtavruliGe }; }
        if (dataId === 'en-asomtavruli') { obj = { ...AsomtavruliGe }; }


        if (dataId === 'ParliamentStandart-ge') { obj = { ...objParliamentGe }; }
        if (dataId === 'ParliamentStandart-en') { obj = { ...AsomtavruliGe }; }
        if (dataId === 'ParliamentStandart-asomtavruli') { obj = { ...AsomtavruliGe }; }

        if (dataId === 'asomtavruli-ge') { obj = { ...objParliamentGe }; }
        if (dataId === 'asomtavruli-en') { obj = { ...AsomtavruliGe }; }
        if (dataId === 'asomtavruli-ParliamentStandart') { obj = { ...AsomtavruliGe }; }
    

        if (dataId === '') return;
        //const copyedObj = { ...obj };
        //console.log(text);








        let endOftext = '';
        for (let i = 0; i < lines.length; i++) {
            let result = '';
            let str = lines[i];
            for (let j = 0; j < str.length; j++) {
                let simb = obj[str[j]];
                if (!simb) {
                    simb = str[j];
                }
                // console.log(simb); 
                result += simb;
                //console.log(str[j].charCodeAt(0));
            }
            if (i !== lines.length - 1) {
                endOftext = '\n';
            } else {
                endOftext = '';
            }

            textarea.value += (result + endOftext);
        }


    });



});