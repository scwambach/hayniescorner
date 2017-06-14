(function($) {

  // Anchor Scroll
  $(function() {
    $('a[href*=#]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


  // Activates the menu toggle
  $('.menu-toggle').click(function() {
    $('.business-nav').addClass('open')
  })

  $('.close-menu').click(function() {
    $('.business-nav').removeClass('open')
  })

  // Equal Heights Children - Cnt needs height
  function equalHeight(cnt) {
      var elementPadding = $(cnt).children().css('padding-top').slice(0,-2)*1 + $(cnt).children().css('padding-bottom').slice(0,-2)*1;
      var minHeight = 0;
      $(cnt).children().css('height', 'auto');
      $(cnt).children().each(function(){
        minHeight = $(this).height() > minHeight ? $(this).height() : minHeight;
      });
      minHeight = minHeight + elementPadding;
      $(cnt).children().not('.button').css('height', minHeight);
  }
  if ($('.equal-height, .events-list .slick-track').children().length) {
    setTimeout(function() {
      $('.equal-height, .events-list .slick-track').each(function() { equalHeight(this); });
    }, 100);

    $(window).resize(function() {
      $('.equal-height, .events-list .slick-track').each(function() {
        equalHeight(this);
      });
    })
  }

  //Sticky Header Classes
  function popOver() {
    $('header').removeClass('top');
    $('main').removeClass('top');
    $('header').addClass('over');
    $('main').addClass('over');
  }
  function popTop() {
    $('header').addClass('top');
    $('main').addClass('top');
    $('header').removeClass('over');
    $('main').removeClass('over');
  }

  //Menu listener for top of page
  var position = $(window).scrollTop();
  var aspot = $('.aspot, .title-bar').innerHeight();
  $(window).scroll(function() {
    var scrollPoint = $(window).scrollTop();
    if (scrollPoint > aspot) {
      var scroll = $(window).scrollTop();
      if (scroll > position) {
        popOver();
      } else {
        popTop();
      }
      position = scroll;
    } else {
      popTop();
    }
  });

  // Actives menu scrolling class
  $(window).bind('scroll', function() {
    if ($(window).scrollTop()) {
      $('header').addClass('scrolling');
      $('main').addClass('scrolling');
    } else {
      $('header').removeClass('scrolling');
      $('main').removeClass('scrolling');
    }
  });


$('.events-list').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

}(jQuery));
