$(document).ready(function(){
  $('.popular-destinations__items').slick({
    arrows: true, /*strelki*/
    slidesToShow: 4,
    infinite: false,
    dots: true

  });

  $('.stories-items').slick({
    arrows: true, /*strelki*/
    slidesToShow: 2,
    infinite: false,
    dots: true

  });


});



// for burger
const active = document.querySelector('.burger__menu'),
      headerMenu = document.querySelector('.header__menu'),
      body = document.querySelector('body');

      active.addEventListener('click', () => {
        active.classList.toggle('active');
        headerMenu.classList.toggle('active');
        body.classList.toggle('lock');
      });
