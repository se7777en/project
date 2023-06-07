$(document).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');

    });

    $('.showmodal').click(function(){
        $('.popup').addClass('active');
         $('body').addClass('lock');

    });

    $('.popup__close').click(function(){
        $('.popup').removeClass('active');
        $('body').removeClass('lock');
    });

    

   
    
});