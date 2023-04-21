$(function(){
  $('.top__slider').slick({
      arrows: false,
      dots: true,
      fade: true,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: false
          }
        }
      ]  
  });

  $('.reviews__slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1141,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 847,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 586,
          settings: {
            slidesToShow: 1
          }
        }
      ] 
  });



$('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active');
});

// document.querySelector('.menu__btn').addEventListener('click',()=>{
//     document.querySelector('.menu__list').classList.toggle('menu__list--active');
// });





});
