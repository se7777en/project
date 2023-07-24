$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger, .main-menu').toggleClass('active');
        $('body').toggleClass('lock');

    });

  
});