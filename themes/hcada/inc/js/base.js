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
    $('.business-nav, nav.business-nav ul li.top-item').removeClass('open')
    $('nav.business-nav ul li.top-item .drop-down').slideUp()
  })

  $('.page-menu-toggle').click(function(){
    $('.menu-home-nav-container').slideToggle()
    $(this).toggleClass('open')
  })

  $('nav.aspot-nav ul li a').click(function(){
    $('.menu-home-nav-container').slideUp()
    $('.page-menu-toggle').removeClass('open')
  })

  $('nav.business-nav ul li.top-item').click(function(){
    if ($(this).hasClass('open')) {
      $('nav.business-nav ul li.top-item').removeClass('open')
      $('nav.business-nav ul li.top-item .drop-down').slideUp()
    } else {
      $('nav.business-nav ul li.top-item').removeClass('open')
      $(this).toggleClass('open')
      $('nav.business-nav ul li.top-item .drop-down').slideUp()
      $(this).find('.drop-down').slideToggle()
    }
  })

  $(window).resize(function() {
    $('nav.business-nav ul li.top-item').removeClass('open')
    $('nav.business-nav ul li.top-item .drop-down').slideUp()
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
  if ($('.equal-height').children().length) {
    setTimeout(function() {
      $('.equal-height').each(function() { equalHeight(this); });
    }, 100);

    $(window).resize(function() {
      $('.equal-height').each(function() {
        equalHeight(this);
      });
    })
  }

  function scrollIf() {
    var aHeight = $('.aspot').height()
    if ($(window).scrollTop() <= aHeight + 60) {
      $('.scroll-item').removeClass('over')
      $('.scroll-item').addClass('top')
    } else {
      $('.scroll-item').removeClass('top')
      $('.scroll-item').addClass('over')
    }
  }

  scrollIf()

  $(window).scroll(function() {
    scrollIf()
  })
  $(window).resize(function(){
    scrollIf()
  })


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
        adaptiveHeight: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

}(jQuery));
