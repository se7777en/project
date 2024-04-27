'use strict';

const textArea = document.querySelector('.textarea'),
    encrypt = document.querySelector('.wrapper__btns .encrypt'),
    decrypt = document.querySelector('.wrapper__btns .decrypt');

function encryptPassword(password, textToEncrypt) {
    // Используем AES для шифрования пароля
    const encrypted = CryptoJS.AES.encrypt(textToEncrypt, password).toString();
    return encrypted;
}

function decryptText(password, encryptedText) {
    try {
        // Расшифровываем текст с использованием AES и пароля
        const decrypted = CryptoJS.AES.decrypt(encryptedText, password).toString(CryptoJS.enc.Utf8);
        return decrypted;
    } catch (error) {
        // Если возникла ошибка при расшифровке, возвращаем null
        console.error("Decryption error:", error.message);
        return null;
    }
}


encrypt.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});


encrypt.addEventListener('click', (e) => {
    e.preventDefault();
    const pass = document.querySelector('.wrapper__footer input').value;
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
    const pass = document.querySelector('.wrapper__footer input').value;
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