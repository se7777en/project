$(document).ready(function () {
	$('.destionations__item-inner').slick({
		arrows: true,
		/*strelki*/
		slidesToShow: 4,
		infinite: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1376,
				settings: {
					slidesToShow: 3
				}
			},

			{
				breakpoint: 1090,
				settings: {
					arrows: false,
					slidesToShow: 3
				}
			},

			{
				breakpoint: 851,
				settings: {
					arrows: false,
					slidesToShow: 2
				}
			},

			{
				breakpoint: 572,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
		]

	});
});

$(document).ready(function () {
	$('.stories-items').slick({
		arrows: true, /*strelki*/
		slidesToShow: 2,
		infinite: false,
		dots: true,
		responsive: [
			{
				breakpoint: 586,
				settings: {
					slidesToShow: 1
				}
			}
		]

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





const items = document.querySelectorAll('.footer__item');

items.forEach((item, ind) => {

    item.addEventListener('click', (e) => {
	
        item.classList.toggle('open');


        const element = item.querySelector('.footer-item__support');

        if (item.classList.contains('open')) {
            element.style = 'transition: all .3s linear;';
            element.style.height = `${element.scrollHeight + 20}px`;
            // item.querySelector('i').classList.replace('fa-plus', 'fa-minus');
            item.querySelector('i').style = 'transform: rotate(45deg);';


        } else {
            element.style = 'transition: none; opacity: 0;';
            element.style.height = '0px';
            // item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
            item.querySelector('i').style = 'transform: rotate(0deg);';
        }
    });
});