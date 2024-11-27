// $(document).ready(function(){
//     $('.header__burger').click(function(){
//         $('.header__burger, .header__menu').toggleClass('active');
//         $('body').toggleClass('lock');

//     });
// });


'use strict';

const active = document.querySelector('.header__burger'),
  headerMenu = document.querySelector('.header__menu'),
  body = document.querySelector('body');

active.addEventListener('click', () => {
  active.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('lock');
});




// function downloadResumeAsPDF() {
//   const element = document.body; // Выбираем весь HTML документ

//   // Настройки PDF
//   const options = {
//       filename: 'resume.pdf',
//       html2canvas: { scale: 2 }, // масштаб для html2canvas
//       jsPDF: {
//           format: [350, 297], // Размер страницы A4 в миллиметрах [ширина, высота]
//           orientation: 'portrait', // Ориентация страницы (landscape - альбомная)
//           unit: 'mm' // Единица измерения миллиметры
//       }
//   };

//   // Создаем PDF
//   html2pdf().set(options).from(element).save();
// }

// document.getElementById('downloadButton').addEventListener('click', downloadResumeAsPDF);