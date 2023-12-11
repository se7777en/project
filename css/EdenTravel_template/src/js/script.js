$(document).ready(function () {
  $('.destionations__item-inner').slick({
    arrows: false,
    /*strelki*/
    slidesToShow: 4,
    infinite: false,
    dots: false,
    // responsive:[
		// 	{
		// 		breakpoint: 1098,
		// 		settings: {
		// 			slidesToShow: 3
		// 		}
		// 	},

		// 	{
		// 		breakpoint: 550,
		// 		settings: {
		// 			slidesToShow: 1
		// 		}
		// 	}
		// ]

  });
});

$(document).ready(function () {
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