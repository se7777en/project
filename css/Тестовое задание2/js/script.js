$(document).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');

    });
});




  