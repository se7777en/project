'use strict';
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const currentUrl = window.location.href;
    if (currentUrl.indexOf('clamp-tool.surge.sh') === -1) {
        if (currentUrl.indexOf('clamp-tool.surge.sh') === -1) {
            if (!currentUrl.includes('clamp-tool.surge.sh')) {


    const result = document.querySelector('.result'),
        valuesPx = document.querySelector('.values__px'),
        valuesRem = document.querySelector('.values__rem');
    result.setAttribute('readonly', true);

    const valuesMin = document.querySelector('.values__min-val'),
        valuesMax = document.querySelector('.values__max-val'),
        viewportMin = document.querySelector('.viewport__min-val'),
        viewportMax = document.querySelector('.viewport__max-val'),
        base = document.querySelector('.base'),
        valueMin = document.querySelector('.value-min'),
        valueMax = document.querySelector('.value-max'),
        copy = document.querySelector('.copy'),
        copyIcon = document.querySelector('.copy i');


    copy.addEventListener('click', () => {
        navigator.clipboard.writeText(result.value);

        copyIcon.classList.remove('fa-copy');
        copyIcon.classList.add('fa-check');
        setTimeout(() => {
            copyIcon.classList.remove('fa-check');
            copyIcon.classList.add('fa-copy');
        }, 1200);
    });

    const remPadding = (measureitem) => {
        [valuesMin, valuesMax].forEach((item) => {
            // if (measureitem === 'px') {
            //     item.classList.remove('fontset');
            // }

            // if (measureitem === 'rem') {
            //     item.classList.add('fontset');
            // }
            measureitem === 'px' ? item.classList.remove('fontset') : measureitem === 'rem' ? item.classList.add('fontset') : null;
        });
    };






    let measure = '';

    function toggleActive(elementToAdd, elementToRemove) {
        if (!elementToAdd.matches('.active')) {
            elementToAdd.classList.add('active');
            elementToRemove.classList.remove('active');
        }
    };

    let k = false;

    valuesPx.addEventListener('click', () => {
        toggleActive(valuesPx, valuesRem);
        measure = 'px';
        remPadding(measure);

        if (k) {
            valuesMin.value = valuesMin.value * +base.value;
            valuesMax.value = valuesMax.value * +base.value;
            k = false;
        };

        valueMin.classList.remove('rem');
        valueMax.classList.remove('rem');

        calcClamp(result);

    });

    valuesRem.addEventListener('click', () => {
        toggleActive(valuesRem, valuesPx);
        measure = 'rem';
        remPadding(measure);



        if (!k) {
            valuesMin.value = valuesMin.value / +base.value;
            valuesMax.value = valuesMax.value / +base.value;
            k = true;
        };

        valueMin.classList.add('rem');
        valueMax.classList.add('rem');
        calcClamp(result);
    });


    function roundUpToFiveDecimals(value) {
        const factor = Math.pow(10, 5);
        return Math.round(value * factor) / factor;
    };


    function roundUpToThreeDecimals(value) {
        const factor = Math.pow(10, 3);
        return Math.round(value * factor) / factor;
    };


    function calcClamp(param) {

        let valuesMin_ = valuesMin.value,
            valuesMax_ = valuesMax.value,
            viewportMin_ = viewportMin.value,
            viewportMax_ = viewportMax.value,
            base_ = base.value;

        if (measure === 'rem') {
            valuesMin_ = valuesMin.value * base_;
            valuesMax_ = valuesMax.value * base_;
        }

        if (measure === 'px') {
            valuesMin_ = valuesMin.value;
            valuesMax_ = valuesMax.value;
        }





        let val1 = (valuesMax_ - valuesMin_) / (viewportMax_ - viewportMin_);
        let val2 = roundUpToFiveDecimals(val1); // 
        let val3 = `${(val2 * 100).toFixed(3)}vw`;
        let val4 = (valuesMin_ - (val2 * viewportMin_)) / +base_;
        let val5 = `${roundUpToThreeDecimals(val4)}rem`;
        let valMin = `${roundUpToThreeDecimals(valuesMin_ / +base_)}rem`;
        let valMax = `${roundUpToThreeDecimals(valuesMax_ / +base_)}rem`;
        let reszult1 = `clamp(${valMin},${" "}${val5}${" "}+${" "}${val3},${" "}${valMax})`;
        param.value = reszult1;
    };

    calcClamp(result);

    [valuesMin, valuesMax, viewportMin, viewportMax, base].forEach((item) => {
        item.addEventListener('input', () => {
            calcClamp(result);
        });
    });


}}}

});