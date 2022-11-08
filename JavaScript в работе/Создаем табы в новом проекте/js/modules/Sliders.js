'use strict';

function Sliders(){
///////////////////////////////
/*
    let slideNum = 1;

    const sliders = document.querySelectorAll('.offer__slide'),
            prev = document.querySelector('.offer__slider-prev'),
            next = document.querySelector('.offer__slider-next'),
            current = document.querySelector('#current'),
            total = document.querySelector('#total');

            if(sliders.length < 10){
                total.innerHTML = `0${sliders.length}`;
            }else{
                total.innerHTML = `${sliders.length}`;
            }

            slider(slideNum);

            function slider(n){
                if(n > sliders.length){
                    slideNum = 1;
                }
                if(n < 1){
                    slideNum = sliders.length;
                }

                sliders.forEach((item) => {
                   //item.style = 'display: none';
                   item.classList.add('hide','fade');     
                });
                //sliders[slideNum -1].style = 'display: block';
                if(sliders[slideNum - 1].classList.contains('hide')){
                    sliders[slideNum - 1].classList.remove('hide');
                }

                


                if(slideNum < 10){
                    current.innerHTML = `0${slideNum}`;
                }else{
                    current.innerHTML = `${slideNum}`;
                }
            }



            function plusSlide(n){
                slider(slideNum += n);
            }


            prev.addEventListener('click',()=>{
                plusSlide(-1);
            });

            next.addEventListener('click',() => {
                plusSlide(1);
            });
    */ 
   
            ///////////////vtoroi variant

    /*
    const sliders = document.querySelectorAll('.offer__slide'),
             prev = document.querySelector('.offer__slider-prev'),
             next = document.querySelector('.offer__slider-next'),
             current = document.querySelector('#current'),
             total = document.querySelector('#total');


             let slideIndex = 1;
            if(sliders.length < 10){
                total.textContent = `0${sliders.length}`;
            }else{
                total.textContent = sliders.length;
            }

            slider(slideIndex);

            function slider(n){
                if(n > sliders.length){
                    slideIndex = 1;
                }
                if(n < 1){
                    slideIndex = sliders.length;
                }

                sliders.forEach(item => {
                     item.classList.add('hide');
                     if(item.classList.contains('fade')){
                        item.classList.remove('fade');
                     }
                });


                if(sliders[slideIndex -1].classList.contains('hide')){
                    sliders[slideIndex -1].classList.remove('hide'); 
                    sliders[slideIndex -1].classList.add('fade'); 
                }       

                if(slideIndex < 10){
                    current.textContent = `0${slideIndex}`;
                }else{
                    current.textContent = slideIndex;
                }
                
            }

            function displaySlide(n){
                slider(slideIndex  += n);
            }

            prev.addEventListener('click',() => {
                displaySlide(-1);
            });

            next.addEventListener('click',() => {
                displaySlide(1);
            });

      //////////////////////////////////////////////////  

      */
///////////////////////////////
   
    let offset = 0;
    let slideIndex = 1;
    const sliders = document.querySelectorAll('.offer__slide'),
        arr = [],
        slide = document.querySelector('.offer__slider'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total'),
        sliderWrapper = document.querySelector('.offer__slider-wrapper'),
        sliderInner = document.querySelector('.offer_slider_inner'),
        width = window.getComputedStyle(sliderWrapper).width,

        prev1 = document.querySelector('prev'),
        next1 = document.querySelector('next');    



    if (sliders.length < 10) {
        total.textContent = `0${sliders.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = sliders.length;
        current.textContent = slideIndex;
    }

    sliders.forEach((item) => {
        item.style.width = width;
    });

    sliderInner.style.width = `${100 * sliders.length}%`;
    sliderInner.style.display = 'flex';
    sliderInner.style.transition = '0.5s all';


    sliderWrapper.style.overflow = 'hidden';

    //////////////////////////////

    function currentSlide(sliders, to) {
        if (sliders.length < 10) {
            to.textContent = `0${slideIndex}`;
        } else {
            to.textContent = slideIndex;
        }

    }

    function dotOpacity(arr) {
        arr.forEach(item => {
            item.style.opacity = '.5';
        });
        arr[slideIndex - 1].style.opacity = '1';
    }

    function getNumberFromString(str){
        return  +str.replace(/\D/g,'');
    }



    slide.style.position = 'relative';
    const indicator = document.createElement('ol');
    indicator.classList.add('carousel-indicators');

    indicator.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    margin-bottom: 2%;
    list-style: none;`;

    slide.append(indicator);

    for (let i = 0; i < sliders.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-carousel', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
            `;
        arr.push(dot);

        indicator.append(dot);

        if (i == 0) {
            dot.style.opacity = '1';
        }

    }






    ////////////////////////////////////////// slide po bokam
    const slide1 = document.createElement('a');
    slide1.classList.add('prev');
    slide1.innerHTML = '❮';

    const slide2 = document.createElement('a');
    slide2.classList.add('next');
    slide2.innerHTML = '❯';
    slide.append(slide1, slide2);



    slide.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('prev')) {

            if (offset == 0) {
                offset = 0;
            } else {
                offset -= getNumberFromString(width);//+width.slice(0, width.length - 2);
            }

            sliderInner.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 1) {
                slideIndex = 1;
            } else {
                slideIndex--;
            }
            currentSlide(sliders, current);

            dotOpacity(arr);
        }

    });

    slide.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('next')) {

            if (offset == (sliders.length - 1) * getNumberFromString(width)) {
                offset = (sliders.length - 1) * getNumberFromString(width);
            } else {
                offset += getNumberFromString(width);
            }
            sliderInner.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == sliders.length) {
                slideIndex = sliders.length;
            } else {
                slideIndex++;
            }
            currentSlide(sliders, current);

            dotOpacity(arr);
        }

    });
    //////////////////////////////////////////


    arr.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const ind = e.target.getAttribute('data-carousel');
            slideIndex = ind;
            dotOpacity(arr);

            

            currentSlide(sliders, current);

            offset = getNumberFromString(width) * (slideIndex - 1);
            sliderInner.style.transform = `translateX(-${offset}px)`;

        });
    });



    next.addEventListener('click', () => {
        console.log(arr);
        if (offset == (sliders.length - 1) * getNumberFromString(width)) {
            offset = 0;
        } else {
            offset +=  getNumberFromString(width);
        }
        sliderInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == sliders.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        currentSlide(sliders, current);
        dotOpacity(arr);  
    });



    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = (sliders.length - 1) * getNumberFromString(width);//+width.slice(0, width.length - 2);
        } else {
            offset -= getNumberFromString(width);//+width.slice(0, width.length - 2);
        }

        sliderInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = sliders.length;
        } else {
            slideIndex--;
        }


        currentSlide(sliders, current);

        dotOpacity(arr);
    });
}

module.exports = Sliders;