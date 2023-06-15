require('es6-promise').polyfill(); // dlya standarta es6
import 'nodelist-foreach-polyfill'; // polifil dlya foreach


import Tabs from './modules/Tabs';
import Modals from './modules/Modals';
import Timer from './modules/Timer';
import Cards from './modules/Cards';
import Calc from './modules/Calc';
import Forms from './modules/Forms';
import Sliders from './modules/Sliders';
import {openModal} from './modules/Modals';

window.addEventListener('DOMContentLoaded', () => {

      const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);
   
/*const Tabs = require('./modules/Tabs'),
      Modals = require('./modules/Modals'),
      Timer = require('./modules/Timer'),
      Cards = require('./modules/Cards'),
      Calc  = require('./modules/Calc'),
      Forms = require('./modules/Forms'),
      Sliders = require('./modules/Sliders');*/



      Tabs('.tabheader__item', '.tabheader__items', '.tabcontent', 'tabheader__item_active');
      Modals('[data-modal]','.modal',modalTimerId);
      Timer('.timer', '2023-01-05 00:00:00');
      //Wed Jan 04 2023 10:51:18 GMT+0400
      Cards();
      Calc();
      Forms('form', modalTimerId);
      Sliders({
            container: '.offer__slider',
            nextArrow: '.offer__slider-next',
            prevArrow: '.offer__slider-prev',
            totalCounter: '#total',
            currentCounter: '#current',
            wrapper: '.offer__slider-wrapper',
            field: '.offer_slider_inner',
            slider: '.offer__slide'
      });

});



//599909066 
//20 44 16 67 6