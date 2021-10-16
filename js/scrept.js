$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 5) {
      $('.menu').addClass('fixed');
    } else {
      $('.menu').removeClass('fixed');
    }

  });



});