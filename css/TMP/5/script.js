'use script';

const copyIcon = document.querySelector(".input-box span"),
    passwordInput = document.querySelector(".input-box input");



const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.innerText = "check";
    copyIcon.style.color = "#4285f4";

    setTimeout(() => {
        copyIcon.innerText = "copy_all";
        copyIcon.style.color = "#707070";
    }, 1500);
};


copyIcon.addEventListener("click", copyPassword);