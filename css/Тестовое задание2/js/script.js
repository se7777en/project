$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');

    });
});




/*Slick__Slider*/
$(document).ready(function () {
    $('.service__wrapper').slick({
        arrows: true, /*strelki*/
        dots: true, /*tochki dlya slaida*/
        slidesToShow: 1,/*kolichestvo slaidov kotoroe otobrajaetsya*/
        /*------*/
        autoplay: false,/* avtoperekluchenie slaidov pri infinite: true prolistivaetsya krasivee*/
        autoplaySpeed: 800, /*vremya autopereklucheniya slaidov po umolchaniu 3000 3s*/
        speed: 1000,/*skorost prokruchivaniya po umolchaniu 300ms*/
        /*-------*/
        adaptiveHeight: true, /* dlya adaptacii po visote*/
        slidesToScroll: 1, /*kolichestvo slaidov prokruchivaemoe za odin raz*/
        easing: 'ease', /*animaciya perexoda slaida po umolchaniu linear  https://fls.guru/csstransition.html*/
        infinite: false, /*buder li slaider beskonechni po umolchaniu true*/
        initialSlide: 0, /* startovi slaid po umolchaniu 0*/

        pauseOnFocus: false, /*ostanavlivaet prokrutku pri fokuse*/
        pauseOnHover: false, /*ostanavlivaet prokrutku pri hovere*/
        pauseOnDotsHover: false, /*ostanavlivaet prokrutku pri hovere na dotsi*/

        draggable: false, /* swaipat listat na PK mishkoi strelkomi po umolchaniu vklucheno*/
        swipe: false, /* swaipat listat na mobilnom ustroistve po umolchaniu vklucheno*/
        touchThreshold: 10, /* kak proisxodit swaip pri kasanii*/
        touchMove: true, /* peredvigat palcem ne smojem*/
        waitForAnimate: true, /*jdet okonchaniya animacii pri perekluchenii slaida*/

        centerMode: false, /* po umolchaniu false osnovnoi slaider po centru i emu dobavlyaetsya klass slick-center*/
        variableWidth: false, /* rastoyanie mejdu slaidami ubiraetsya robotaet s centerMode luchshe*/
        rows: 1, /*kolichestvo ryadov po umolchaniu 1*/
        slidesPerRows: 1,/*kolichestvo slaidov v ryadu*/


        /*========*/
        vertical: false, /* nujno sdelat element blochnim a u nas flex .service__wrapper .slick-track i ukazivaem fiksirovanuu visotu bloku*/
        verticalSwiping: false, /*vertikalni swaip*/
        /*========*/

        // fade: true, /*slaidi budut zamenyatsya a ne prolistivatsya*/

        //asNavFor: ".slider", /*kogda 2 slaidera, mojno ix svyazat u 1 slaida ukazat klass 2 slaida u 2 slaida ukazat klass 1 slaida i pri skrole 2 slaida skrolitsya budut oba slaida*/


        mobileFirst: false, /* vkluchaet mobile first dlya responsive:*/

        //  appendArrows: $('.content'), /*peremeshaet strelki v opredeleni block*/
        //  appendDots: $('.content') /*peremeshaet dotsi v opredeleni block*/

        responsive: [
            {
              breakpoint: 937,
              settings: {
                dots: false,
                arrows: false,
                autoplay: false,
                infinite: true

              }
                }]
    });

    // $('.service__wrapper').slick('setPosition'); /* vstrexnet slaider i postavit na mesto*/

    /*metodi*/
    $('.service__wrapper_').slick('goTo', 0); /*prolistnet do 3 slaida*/

    $('.service__wrapper_').slick('slickPrev');/*prolistnet slaid nazad*/
    $('.service__wrapper_').slick('slickNext');/*prolistnet slaid vpered*/

    $('.service__wrapper_').slick('slickPlay');/*zapustit slaider*/


    $('.service__wrapper_').slick('slickNext');/*prolistnet slaid vpered*/


    $('.link_l').click(function (event) {
        $('.service__wrapper').slick('slickPause');/*postavit na pauzu*/
    });
});




$(document).ready(function () {
    $('.slider__images').slick({
        arrows: true, /*strelki*/
        slidesToShow: 3,/*kolichestvo slaidov kotoroe otobrajaetsya*/ 
        appendArrows: $('.slider__inner-arrows'),
        infinite: false,
        speed: 1000,
        easing: 'ease'
    });
});

