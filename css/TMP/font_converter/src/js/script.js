'use strict';
document.addEventListener('DOMContentLoaded', (e) => {
   // e.preventDefault();
    let currentUrl = window.location.href;
    if (currentUrl.indexOf('fonts-converter.surge.sh') === -1) {
        if (currentUrl.indexOf('fonts-converter.surge.sh') === -1) {
            const leftBtns = document.querySelectorAll('.wrapper__btns-left .item');
            const rightBtns = document.querySelectorAll('.wrapper__btns-right .item');
            const allBtns = document.querySelectorAll('.wrapper__btns .item');

            let textarea = document.querySelector('.wrapper .textarea');
            let wordsCount = document.querySelector('.wrapper__words-length span');



            const setSelectedBtn = (btns) => {
                btns.forEach((item) => {
                    item.addEventListener('click', () => {

                        btns.forEach((inneritem) => {
                            if (item !== inneritem) {
                                inneritem.classList.remove('active');
                            }
                        });
                        item.classList.add('active');
                    });
                });
            };

            setSelectedBtn(leftBtns);
            setSelectedBtn(rightBtns);


            const removeSelectionOnLeftSide = () => {
                leftBtns.forEach((item) => {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active');
                    }
                });
            };







            function detectLang(text) {
                let words = [];
                let wordsLength = [];
                for (let i = 0; i < text.length; i++) {
                    let lineWords = text[i].split(' ');
                    words.push(...lineWords);
                };

                words.forEach((item) => {
                    if (item !== '') {
                        wordsLength.push(item);
                    }
                });

                wordsCount.textContent = wordsLength.length;
                // console.log(wordsLength);

                let englishWordCount = (words.filter(word => /^[a-zA-Z-_:;.()?,\d]+$/.test(word)).length);
                let georgianWordCount = (words.filter(word => /^[ა-ჰ\d\-_:;.()?,\d]+$/u.test(word)).length);
                //let containsLatinParliament = words.filter(word => /[\u00C0-\u00FF\d -_:.,]+/.test(word)).length;
                let containsLatinParliament = (words.filter(word => /^[\u00C0-\u00FF -_:;.()?,\d]+$/u.test(word)).length);
                //let containsAsomtavruli = words.filter(word => /[\u10A0-\u10FF\u{10A0E}-\u{10AEF}]/u.test(word)).length;
                let containsAsomtavruli = (words.filter(word => /^[\u10A0-\u10FF-_:;.()?,\d]+$/u.test(word)).length);



                // console.log(`en = ${englishWordCount}`);
                // console.log(`Parliament = ${containsLatinParliament}`);
                // console.log(`count = ${words.length}`);

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
            };


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
            };

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
            };

            const objEnParliament = {
                'a': 'À',
                'b': 'Á',
                'c': 'Ý',
                'd': 'Ã',
                'e': 'Ä',
                'f': '×',
                'g': 'Â',
                'h': 'ä',
                'i': 'É',
                'j': 'ã',
                'k': 'Ê',
                'l': 'Ë',
                'm': 'Ì',
                'n': 'Í',
                'o': 'Ï',
                'p': 'Ð',
                'q': 'Ø',
                'r': 'Ò',
                's': 'Ó',
                't': 'Ô',
                'u': 'Ö',
                'v': 'Å',
                'w': 'ß',
                'x': 'á',
                'y': 'Ú',
                'z': 'Æ',
                'A': 'A',
                'B': 'B',
                'C': 'Ü',
                'D': 'D',
                'E': 'E',
                'F': 'F',
                'G': 'G',
                'H': 'H',
                'I': 'I',
                'J': 'Ñ',
                'K': 'K',
                'L': 'L',
                'M': 'M',
                'N': 'N',
                'O': 'O',
                'P': 'P',
                'Q': 'Q',
                'R': 'Ù',
                'S': 'Û',
                'T': 'È',
                'U': 'U',
                'V': 'V',
                'W': 'à',
                'X': 'X',
                'Y': 'Y',
                'Z': 'Þ'
            };

            const objParliamentEn = {
                'À': 'a',
                'Á': 'b',
                'Ý': 'c',
                'Ã': 'd',
                'Ä': 'e',
                '×': 'f',
                'Â': 'g',
                'ä': 'h',
                'É': 'i',
                'ã': 'j',
                'Ê': 'k',
                'Ë': 'l',
                'Ì': 'm',
                'Í': 'n',
                'Ï': 'o',
                'Ð': 'p',
                'Ø': 'q',
                'Ò': 'r',
                'Ó': 's',
                'Ô': 't',
                'Ö': 'u',
                'Å': 'v',
                'ß': 'w',
                'á': 'x',
                'Ú': 'y',
                'Æ': 'z',
                'A': 'A',
                'B': 'B',
                'Ü': 'C',
                'D': 'D',
                'E': 'E',
                'F': 'F',
                'G': 'G',
                'H': 'H',
                'I': 'I',
                'Ñ': 'J',
                'K': 'K',
                'L': 'L',
                'M': 'M',
                'N': 'N',
                'O': 'O',
                'P': 'P',
                'Q': 'Q',
                'Ù': 'R',
                'Û': 'S',
                'È': 'T',
                'U': 'U',
                'V': 'V',
                'à': 'W',
                'X': 'X',
                'Y': 'Y',
                'Þ': 'Z'
            };

            const objParliamentAsomtavruli = {
                'À': 'Ⴀ',
                'Á': 'Ⴁ',
                'Ý': 'Ⴚ',
                'Ã': 'Ⴃ',
                'Ä': 'Ⴄ',
                '×': 'Ⴔ',
                'Â': 'Ⴂ',
                'ä': 'Ⴠ',
                'É': 'Ⴈ',
                'ã': 'Ⴟ',
                'Ê': 'Ⴉ',
                'Ë': 'Ⴊ',
                'Ì': 'Ⴋ',
                'Í': 'Ⴌ',
                'Ï': 'Ⴍ',
                'Ð': 'Ⴎ',
                'Ø': 'Ⴕ',
                'Ò': 'Ⴐ',
                'Ó': 'Ⴑ',
                'Ô': 'Ⴒ',
                'Ö': 'Ⴓ',
                'Å': 'Ⴅ',
                'ß': 'Ⴜ',
                'á': 'Ⴞ',
                'Ú': 'Ⴗ',
                'Æ': 'Ⴆ',
                'A': 'A',
                'B': 'B',
                'Ü': 'Ⴙ',
                'D': 'D',
                'E': 'E',
                'F': 'F',
                'G': 'G',
                'H': 'H',
                'I': 'I',
                'Ñ': 'Ⴏ',
                'K': 'K',
                'L': 'L',
                'M': 'M',
                'N': 'N',
                'O': 'O',
                'P': 'P',
                'Q': 'Q',
                'Ù': 'Ⴖ',
                'Û': 'Ⴘ',
                'È': 'Ⴇ',
                'U': 'U',
                'V': 'V',
                'à': 'Ⴝ',
                'X': 'X',
                'Y': 'Y',
                'Þ': 'Ⴛ'
            };

            const objAsomtavruliParliament = {
                'Ⴀ': 'À',
                'Ⴁ': 'Á',
                'Ⴚ': 'Ý',
                'Ⴃ': 'Ã',
                'Ⴄ': 'Ä',
                'Ⴔ': '×',
                'Ⴂ': 'Â',
                'Ⴠ': 'ä',
                'Ⴈ': 'É',
                'Ⴟ': 'ã',
                'Ⴉ': 'Ê',
                'Ⴊ': 'Ë',
                'Ⴋ': 'Ì',
                'Ⴌ': 'Í',
                'Ⴍ': 'Ï',
                'Ⴎ': 'Ð',
                'Ⴕ': 'Ø',
                'Ⴐ': 'Ò',
                'Ⴑ': 'Ó',
                'Ⴒ': 'Ô',
                'Ⴓ': 'Ö',
                'Ⴅ': 'Å',
                'Ⴜ': 'ß',
                'Ⴞ': 'á',
                'Ⴗ': 'Ú',
                'Ⴆ': 'Æ',
                'A': 'A',
                'B': 'B',
                'Ⴙ': 'Ü',
                'D': 'D',
                'E': 'E',
                'F': 'F',
                'G': 'G',
                'H': 'H',
                'I': 'I',
                'Ⴏ': 'Ñ',
                'K': 'K',
                'L': 'L',
                'M': 'M',
                'N': 'N',
                'O': 'O',
                'P': 'P',
                'Q': 'Q',
                'Ⴖ': 'Ù',
                'Ⴘ': 'Û',
                'Ⴇ': 'È',
                'U': 'U',
                'V': 'V',
                'Ⴝ': 'à',
                'X': 'X',
                'Y': 'Y',
                'Ⴛ': 'Þ'
            };

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
            };

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


            const EnAsomtavruli = {
                'a': 'Ⴀ',
                'b': 'Ⴁ',
                'c': 'Ⴚ',
                'd': 'Ⴃ',
                'e': 'Ⴄ',
                'f': 'Ⴔ',
                'g': 'Ⴂ',
                'h': 'Ⴠ',
                'i': 'Ⴈ',
                'j': 'Ⴟ',
                'k': 'Ⴉ',
                'l': 'Ⴊ',
                'm': 'Ⴋ',
                'n': 'Ⴌ',
                'o': 'Ⴍ',
                'p': 'Ⴎ',
                'q': 'Ⴕ',
                'r': 'Ⴐ',
                's': 'Ⴑ',
                't': 'Ⴒ',
                'u': 'Ⴓ',
                'v': 'Ⴅ',
                'w': 'Ⴜ',
                'x': 'Ⴞ',
                'y': 'Ⴗ',
                'z': 'Ⴆ',
                'A': 'A',
                'B': 'B',
                'C': 'Ⴙ',
                'D': 'D',
                'E': 'E',
                'F': 'F',
                'G': 'G',
                'H': 'H',
                'I': 'I',
                'J': 'Ⴏ',
                'K': 'K',
                'L': 'L',
                'M': 'M',
                'N': 'N',
                'O': 'O',
                'P': 'P',
                'Q': 'Q',
                'R': 'Ⴖ',
                'S': 'Ⴘ',
                'T': 'Ⴇ',
                'U': 'U',
                'V': 'V',
                'W': 'Ⴝ',
                'X': 'X',
                'Y': 'Y',
                'Z': 'Ⴛ'
            };

            const AsomtavruliEn = {
                'Ⴀ': 'a',
                'Ⴁ': 'b',
                'Ⴚ': 'c',
                'Ⴃ': 'd',
                'Ⴄ': 'e',
                'Ⴔ': 'f',
                'Ⴂ': 'g',
                'Ⴠ': 'h',
                'Ⴈ': 'i',
                'Ⴟ': 'j',
                'Ⴉ': 'k',
                'Ⴊ': 'l',
                'Ⴋ': 'm',
                'Ⴌ': 'n',
                'Ⴍ': 'o',
                'Ⴎ': 'p',
                'Ⴕ': 'q',
                'Ⴐ': 'r',
                'Ⴑ': 's',
                'Ⴒ': 't',
                'Ⴓ': 'u',
                'Ⴅ': 'v',
                'Ⴜ': 'w',
                'Ⴞ': 'x',
                'Ⴗ': 'y',
                'Ⴆ': 'z',
                'A': 'A',
                'B': 'B',
                'Ⴙ': 'C',
                'D': 'D',
                'E': 'E',
                'F': 'F',
                'G': 'G',
                'H': 'H',
                'I': 'I',
                'Ⴏ': 'J',
                'K': 'K',
                'L': 'L',
                'M': 'M',
                'N': 'N',
                'O': 'O',
                'P': 'P',
                'Q': 'Q',
                'Ⴖ': 'R',
                'Ⴘ': 'S',
                'Ⴇ': 'T',
                'U': 'U',
                'V': 'V',
                'Ⴝ': 'W',
                'X': 'X',
                'Y': 'Y',
                'Ⴛ': 'Z'
            };
            ///////asomtavruli///////


            ////////enKB/// ruKB//////
            const objEnRu = {
                'a': 'f',
                'b': ',',
                'g': 'u',
                'd': 'l',
                'e': 't',
                'v': 'd',
                'z': 'p',
                'T': 's',
                'i': 'b',
                'k': 'r',
                'l': 'k',
                'm': 'v',
                'n': 'y',
                'o': 'j',
                'p': 'g',
                'J': ';',
                'r': 'h',
                's': 'c',
                't': 'n',
                'u': 'e',
                'f': 'a',
                'q': 'm',
                'R': 'q',
                'y': '.',
                'S': 'i',
                'C': 'x',
                'c': 'w',
                'Z': '\'',
                'w': 'o',
                'W': 'z',
                'x': '[',
                'j': ']',
                'h': '/',

                '/': '&',
                '%': '+',
                '-': '-',
                '?': '0',
                '№': '1',
                '„': '3',
                '“': '4',
                ':': '5',
                ',': '7',
                '.': '8',
                ';': '9',
                '!': '=',
                ')': '`',
                '(': '~',
                '—': '2',

                '1': '!',
                '2': '@',
                '3': '#',
                '4': '$',
                '5': '%',
                '6': '^',
                '7': '*',
                '8': '(',
                '9': ')',
                '0': '_'
            };

            const objRuEn = {
                'f': 'a',
                ',': 'b',
                'u': 'g',
                'l': 'd',
                't': 'e',
                'd': 'v',
                'p': 'z',
                's': 'T',
                'b': 'i',
                'r': 'k',
                'k': 'l',
                'v': 'm',
                'y': 'n',
                'j': 'o',
                'g': 'p',
                ';': 'J',
                'h': 'r',
                'c': 's',
                'n': 't',
                'e': 'u',
                'a': 'f',
                'm': 'q',
                'q': 'R',
                '.': 'y',
                'i': 'S',
                'x': 'C',
                'w': 'c',
                '\'': 'Z',
                'o': 'w',
                'z': 'W',
                '[': 'x',
                ']': 'j',
                '/': 'h',
                '&': '/',
                '+': '%',
                '-': '-',
                '0': '?',
                '1': '№',
                '3': '„',
                '4': '“',
                '5': ':',
                '7': ',',
                '8': '.',
                '9': ';',
                '=': '!',
                '`': ')',
                '~': '(',
                '2': '—',
                '!': '1',
                '@': '2',
                '#': '3',
                '$': '4',
                '%': '5',
                '^': '6',
                '*': '7',
                '(': '8',
                ')': '9',
                '_': '0'
            };
            ////////enKB/// ruKB//////


            const detectLangOnTextareaInput = () => {
                textarea.addEventListener('input', () => {
                    const val = textarea.value;
                    let lines = val.split('\n');
                    const text = detectLang(lines);
                    if (text === 'ge') {
                        removeSelectionOnLeftSide();
                        leftBtns[0].classList.add('active');
                    }

                    if (text === 'en') {
                        removeSelectionOnLeftSide();
                        leftBtns[1].classList.add('active');
                    }

                    if (text === 'ParliamentStandart') {
                        removeSelectionOnLeftSide();
                        leftBtns[2].classList.add('active');
                    }

                    if (text === 'asomtavruli') {
                        removeSelectionOnLeftSide();
                        leftBtns[3].classList.add('active');
                    }

                    if (text === 'unknown') {
                        removeSelectionOnLeftSide();
                        // leftBtns[0].classList.add('active');
                    }

                });
            };

            const detectLangOnTextarea = () => {
                const val = textarea.value;
                let lines = val.split('\n');
                const text = detectLang(lines);
                if (text === 'ge') {
                    removeSelectionOnLeftSide();
                    leftBtns[0].classList.add('active');
                }

                if (text === 'en') {
                    removeSelectionOnLeftSide();
                    leftBtns[1].classList.add('active');
                }

                if (text === 'ParliamentStandart') {
                    removeSelectionOnLeftSide();
                    leftBtns[2].classList.add('active');
                }

                if (text === 'asomtavruli') {
                    removeSelectionOnLeftSide();
                    leftBtns[3].classList.add('active');
                }

                if (text === 'unknown') {
                    removeSelectionOnLeftSide();
                    leftBtns[0].classList.add('active');
                }
            };

            detectLangOnTextareaInput();

            const convert = document.querySelector('.wrapper__convert a');


            convert.addEventListener('click', (e) => {
                e.preventDefault();
                let obj = {};
                textarea = document.querySelector('.wrapper .textarea');
                const val = textarea.value;
                let lines = val.split('\n');
                const text = detectLang(lines);

                //console.log(text);

                let dataId = '';
                allBtns.forEach((item) => {
                    if (item.classList.contains('active')) {
                        dataId += item.dataset.id + '-';
                    }
                });
                dataId = dataId.slice(0, -1);

                //console.log(dataId);

                textarea.value = '';

                if (dataId === 'ge-en') { obj = { ...objGeoEn }; } //1
                if (dataId === 'ge-ParliamentStandart') { obj = { ...objGeParliament }; } //2
                if (dataId === 'ge-asomtavruli') { obj = { ...GeAsomtavruli }; } //3

                if (dataId === 'en-ge') { obj = { ...objEnGe }; } //4
                if (dataId === 'en-ParliamentStandart') { obj = { ...objEnParliament }; } // 5
                if (dataId === 'en-asomtavruli') { obj = { ...EnAsomtavruli }; } // 6


                if (dataId === 'ParliamentStandart-ge') { obj = { ...objParliamentGe }; } // 7
                if (dataId === 'ParliamentStandart-en') { obj = { ...objParliamentEn }; } //8
                if (dataId === 'ParliamentStandart-asomtavruli') { obj = { ...objParliamentAsomtavruli }; } // 9

                if (dataId === 'asomtavruli-ge') { obj = { ...AsomtavruliGe }; } /// 10
                if (dataId === 'asomtavruli-en') { obj = { ...AsomtavruliEn }; } // 11
                if (dataId === 'asomtavruli-ParliamentStandart') { obj = { ...objAsomtavruliParliament }; } // 12


                if (dataId === 'en-rukb') { obj = { ...objEnRu }; } // 13
                if (dataId === 'en-enkb') { obj = { ...objRuEn }; } // 14


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
                };

                detectLangOnTextarea();

            });

            convert.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            });


        };
    };
});