require('slick-carousel');
const $ = require('jquery');

const $wrapper = $('.events-list');

$wrapper.find('.event-item')
  .sort((a, b) => Number(a.getAttribute('data-date'))
  - Number(b.getAttribute('data-date')))
  .appendTo($wrapper);

$('.events-list').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
