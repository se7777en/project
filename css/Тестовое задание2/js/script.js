$(document).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');

    });
});




/*Slick__Slider*/
$(document).ready(function(){
	$('.service__wrapper').slick({
        arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
    });
});

  