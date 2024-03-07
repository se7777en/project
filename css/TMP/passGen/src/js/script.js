'use strict';

const range = document.querySelector('.wrapper__range .rage__val'),
    spanValue = document.querySelector('.wrapper__range span'),
    indicator = document.querySelector('.tumblers .indicator'),
    tumblers = document.querySelectorAll('.tumblers__inner .inp');





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

const rangeToSpanValue = () => {
    range.addEventListener('input', () => {
        addClassToIndicator();
    });
}
rangeToSpanValue();


tumblers.forEach((item) => {

    // checked = checkbox.checked;
    //  console.log('item');
    //   if(item.checked === false) {console.log('true');}
    item.addEventListener('change', () => {
        let dataId = '';
        if (item.checked) {
            //console.log('checked');
            let head = item.closest('.tumbler');
            dataId = head.dataset.case;
            console.log(dataId);

        } else {
            console.log('false');
        }
    });

});