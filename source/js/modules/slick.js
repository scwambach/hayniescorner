require('slick-carousel');
const $ = require('jquery');

let eventItems = '';

$.getJSON('/js/events.json', (data) => {
  $.each(data, (i) => {
    eventItems += `<div class=event-item data-date=${data[i].dateInt}> <div class=event-image style="background-image: url(${data[i].image})"></div> <div class=content> <h4>${data[i].title}</h4> <p class=date>${data[i].date}</p> <hr> <div class=copy-box> ${data[i].content} </div> </div> </div>`;
  });

  $(eventItems).appendTo('.events-list');

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
});
