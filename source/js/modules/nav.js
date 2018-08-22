const $ = require('jquery');

$('.menu-toggle').click(() => {
  $('.business-nav').toggleClass('open');
});

$('.top-item a').click(function navSlide() {
  if ($(this).parent().attr('class') === 'top-item open') {
    $('.top-item').removeClass('open');
    $('.top-item .drop-down').slideUp();
  } else {
    $('.top-item').removeClass('open');
    $('.top-item .drop-down').slideUp();
    $(this).parent().addClass('open');
    $(this).parent().find('.drop-down').slideDown();
  }
});
