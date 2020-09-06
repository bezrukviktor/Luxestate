$(document).ready(function () {

  $('.menu-button').click(function () {
    $('.menu-button').toggleClass('menu-button--active');
    $('.menu__nav').toggleClass('menu__nav--active');
  });

  $('.counter__num').each(function(){
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function(now){
        $(this).text(Math.ceil(now));
      }
    });
  });

  $('.agents-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '.slider-arrow__prev',
    nextArrow: '.slider-arrow__next'
  });

});