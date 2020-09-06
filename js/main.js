$(document).ready(function () {

  $('.menu-button').click(function () {
    $('.menu-button').toggleClass('menu-button--active');
    $('.menu__nav').toggleClass('menu__nav--active');
  });


  const target = $('.counter');
  let targetPos = target.offset().top;
  let winHeight = $(window).height();
  let scrollToElem = targetPos - winHeight + 300;

  $(window).scroll(function () {
    let winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
      $('.counter__num').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).data('value')
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  });



  $('.agents-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '.slider-arrow__prev',
    nextArrow: '.slider-arrow__next',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  function windowSize() {
    if ($(window).width() < '476') {
      $('.footer-column__title').click(function (event) {
        $('.footer-column ul').not($(this).next()).slideUp(300);
        $('.footer-column__title').not($(this)).removeClass('footer-column__title--active');
        $(this).toggleClass('footer-column__title--active').next().slideToggle(300);
      });
    }
  }

  $(window).load(windowSize);

});