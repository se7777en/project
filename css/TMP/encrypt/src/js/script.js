'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    let currentUrl = window.location.href;

    if (currentUrl.indexOf('secure-crypt.surge.sh') === -1) {
        if (currentUrl.indexOf('secure-crypt.surge.sh') === -1) {
            if (currentUrl.indexOf('secure-crypt.surge.sh') === -1) {

                const textArea = document.querySelector('.textarea'),
                    encrypt = document.querySelector('.wrapper__btns .encrypt'),
                    decrypt = document.querySelector('.wrapper__btns .decrypt'),
                    copyWraper = document.querySelector('.wrapper__text .copy'),
                    copyIcon = document.querySelector('.wrapper__text .copy i');



                copyWraper.addEventListener('click', () => {
                    copyIcon.classList.remove('fa-copy');
                    copyIcon.classList.add('fa-check');
                    copyWraper.classList.add('colored');
                    const areatext = textArea.value;
                    if (areatext.length > 0) {
                        navigator.clipboard.writeText(areatext);
                        setTimeout(() => {
                            copyIcon.classList.add('fa-copy');
                            copyIcon.classList.remove('fa-check');
                            copyWraper.classList.remove('colored');
                        }, 1000);
                    }
                });

                textArea.addEventListener('input', () => {
                    if (textArea.value.length > 0) {
                        copyWraper.classList.add('show');
                    } else {
                        copyWraper.classList.remove('show');
                    }
                });



                function encryptPassword(password, textToEncrypt) {
                    const encrypted = CryptoJS.AES.encrypt(textToEncrypt, password).toString();
                    return encrypted;
                };

                function decryptText(password, encryptedText) {
                    try {
                        const decrypted = CryptoJS.AES.decrypt(encryptedText, password).toString(CryptoJS.enc.Utf8);
                        return decrypted;
                    } catch (error) {
                        console.error("Decryption error:", error.message);
                        return null;
                    }
                };


                encrypt.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                });


                encrypt.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pass = document.querySelector('.wrapper__inputs input').value;
                    document.querySelector('.wrapper__inputs input').value = '';
                    const text = textArea.value;
                    if (text.length > 0) {
                        textArea.value = '';
                        textArea.value = encryptPassword(pass, text);
                        //console.log(textArea.value);
                    }
                });


                decrypt.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                });

                decrypt.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pass = document.querySelector('.wrapper__inputs input').value;
                    document.querySelector('.wrapper__inputs input').value = '';
                    const text = textArea.value;
                    if (text.length > 0) {
                        textArea.value = '';
                        let decrypttext = decryptText(pass, text);
                        if (decrypttext) {
                            textArea.value = decrypttext;
                        } else {
                            textArea.placeholder = 'Enter the correct password';
                        }

                        //  console.log(decrypttext.length);

                    }

                    // console.log(textArea.value);
                });

            };
        };
    };

});