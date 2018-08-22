const $ = require('jquery');

$('.menu a').click(function anchroScroll() {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top,
  }, 500);
  return false;
});

function scrollNav(scrollElm) {
  const winTop = $(window).scrollTop();
  const containerHeight = $('.aspot').outerHeight();
  const scrollItemHeight = $('.aspot-nav').outerHeight();
  if (winTop >= (containerHeight - scrollItemHeight)) {
    scrollElm.addClass('over').removeClass('top');
  } else {
    scrollElm.removeClass('over').addClass('top');
  }
}

scrollNav($('.scroll-item'));

$(window).on('scroll', () => {
  scrollNav($('.scroll-item'));
});
