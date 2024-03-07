'use strict';


const range = document.querySelector('.wrapper__range .rage__val'),
    spanValue = document.querySelector('.wrapper__range span'),
    indicator = document.querySelector('.tumblers .indicator'),
    tumblers = document.querySelectorAll('.tumblers__inner .inp'),
    password = document.querySelector('.password__content .password'),
    refreshPass = document.querySelector('.password__content .refresh__icon'),
    refreshPassIcon = document.querySelector('.refresh__icon .fa-solid'),
    copyIcon = document.querySelector('.password__content .copy__icon'),
    copyIconInner = document.querySelector('.copy__icon .fa-solid');
    




const classRemover = (clasname) => {
    const list = document.querySelector('.tumblers .indicator');
    const arr = Array.from(list.classList);
    arr.forEach((item) => {
        console.log(item);
        if (item !== clasname) {
            list.classList.remove(item);
        }
    });
}


const addClassToIndicator = () => {
    const rangeValue = document.querySelector('.wrapper__range .rage__val').value;
    spanValue.textContent = rangeValue;

    if (rangeValue >= 1 && rangeValue <= 5) {
        classRemover('indicator');
        indicator.classList.add('very-weak');
    }

    if (rangeValue >= 5 && rangeValue <= 10) {
        classRemover('indicator');
        indicator.classList.toggle('weak');
    }

    if (rangeValue >= 10 && rangeValue <= 15) {
        classRemover('indicator');
        indicator.classList.toggle('moderate');
    }

    if (rangeValue >= 15 && rangeValue <= 20) {
        classRemover('indicator');
        indicator.classList.toggle('strong');
    }

    if (rangeValue >= 20 && rangeValue <= 25) {
        classRemover('indicator');
        indicator.classList.toggle('very-strong');
    }
}





const getCheckedSymbols = () => {
    let allSymbols = '';
    tumblers.forEach((item) => {
        let dataId = '';
        if (item.checked) {
            let head = item.closest('.tumbler');
            dataId = head.dataset.case;

            if (dataId === 'uppercase') {
                allSymbols += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            }

            if (dataId === 'lowercase') {
                allSymbols += 'abcdefghijklmnopqrstuvwxyz';
            }

            if (dataId === 'numbers') {
                allSymbols += '0123456789';
            }

            if (dataId === 'symbols') {
                allSymbols += '!@#$%^&*()-=+[]{};:".<>/?';
            }
        }
    });

    return allSymbols;
}

// console.log(getCheckedSymbols());






const getPassword = (symbols, length) => {
    let pwd = '';
    for (let i = 0; i < length; i++) {
        let rnd = Math.floor(Math.random() * symbols.length);
        pwd += symbols[rnd];
    }
    return pwd;
}



const rangeToSpanValue = () => {
    range.addEventListener('input', () => {
        addClassToIndicator();
        const count = range.value;
        password.value = getPassword(getCheckedSymbols(), count);

    });
}
rangeToSpanValue();


tumblers.forEach((item) => {
    item.addEventListener('change', () => {
        password.value = getPassword(getCheckedSymbols(), range.value);
    });
})


refreshPass.addEventListener('click', () => {
    password.value = getPassword(getCheckedSymbols(), range.value);

    refreshPassIcon.classList.add('rotate');
    

     setTimeout(() => {
        refreshPassIcon.classList.remove('rotate');
     }, 250);
});



copyIcon.addEventListener('click', () => {
console.log('ok');
navigator.clipboard.writeText(password.value);

copyIconInner.classList.remove('fa-copy');
copyIconInner.classList.add('fa-check');
setTimeout(() => {
    copyIconInner.classList.remove('fa-check');
    copyIconInner.classList.add('fa-copy');
}, 1500);
});



const count = range.value;
password.value = getPassword(getCheckedSymbols(), count);



// let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=+[]{};:".<>/?';
// console.log(getPassword(symbols, 10));








// 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 'abcdefghijklmnopqrstuvwxyz';
// '0123456789';
// '!@#$%^&*()-=+[]{};:".<>/?';