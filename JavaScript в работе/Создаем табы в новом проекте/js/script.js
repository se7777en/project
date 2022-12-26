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



      Tabs();
      Modals('[data-modal]','.modal',modalTimerId);
      Timer();
      Cards();
      Calc();
      Forms('form', modalTimerId);
      Sliders();

});



//599909066 
//20 44 16 67 6