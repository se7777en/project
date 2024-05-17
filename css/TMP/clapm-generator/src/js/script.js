'use strict';
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();


    const result = document.querySelector('.result'),
        valuesPx = document.querySelector('.values__px'),
        valuesRem = document.querySelector('.values__rem');
    result.setAttribute('readonly', true);

    const valuesMin = document.querySelector('.values__min-val'),
        valuesMax = document.querySelector('.values__max-val'),
        viewportMin = document.querySelector('.viewport__min-val'),
        viewportMax = document.querySelector('.viewport__max-val'),
        base = document.querySelector('.base');





    let units = '';

    function toggleActive(elementToAdd, elementToRemove) {
        if (!elementToAdd.matches('.active')) {
            elementToAdd.classList.add('active');
            elementToRemove.classList.remove('active');
        }
    }

    valuesPx.addEventListener('click', () => {
        toggleActive(valuesPx, valuesRem);
        units = 'px';
        calcClamp(result);
    });

    valuesRem.addEventListener('click', () => {
        toggleActive(valuesRem, valuesPx);
        units = 'rem';
        calcClamp(result);
    });


    function roundUpToFiveDecimals(value) {
        const factor = Math.pow(10, 5);
        return Math.round(value * factor) / factor;
    }


    function roundUpToThreeDecimals(value) {
        const factor = Math.pow(10, 3);
        return Math.round(value * factor) / factor;
    }


    function calcClamp(param) {
        let valuesMin_ = valuesMin.value,
            valuesMax_ = valuesMax.value,
            viewportMin_ = viewportMin.value,
            viewportMax_ = viewportMax.value,
            base_ = base.value;

        // if (units === 'rem') {
        //     let min = document.querySelector('.values__min-val');
        //     let max = document.querySelector('.values__max-val');

        //     const val1 =  min.value; 
        //     const val2 =  max.value;

        //     min.value = val1 * base_;
        //     max.value = val2 * base_;

        //      valuesMin_ = val1 / base_;
        //      valuesMax_ = val2 / base_;
        //      units = '';
        // }
       

        // if (units === 'px') {
        //     let min = document.querySelector('.values__min-val');
        //     let max = document.querySelector('.values__max-val');

        //     const val1 =  min.value; 
        //     const val2 =  max.value;

        //     min.value = val1 / base_;
        //     max.value = val2 / base_;

        //      valuesMin_ = val1 * base_;
        //      valuesMax_ = val2 * base_;

        //      console.log(valuesMin_);
        //      console.log(valuesMax_);
        //      units = '';
        // }

       


        let val1 = (valuesMax_ - valuesMin_) / (viewportMax_ - viewportMin_);
        let val2 = roundUpToFiveDecimals(val1); // 
        let val3 = `${(val2 * 100).toFixed(3)}vw`;
        let val4 = (valuesMin_ - (val2 * viewportMin_)) / +base_;
        let val5 = `${roundUpToThreeDecimals(val4)}rem`;
        let valMin = `${roundUpToThreeDecimals(valuesMin_ / +base_)}rem`;
        let valMax = `${roundUpToThreeDecimals(valuesMax_ / +base_)}rem`;
        let reszult1 = `clamp(${valMin}, ${val5} + ${val3}, ${valMax})`;
        param.value = reszult1;
    }

    calcClamp(result);

    [valuesMin, valuesMax, viewportMin, viewportMax, base].forEach((item) => {
        item.addEventListener('input', () => {
            calcClamp(result);
        });
    });




});