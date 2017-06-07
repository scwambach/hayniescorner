(function($) {

  //Equal Height Divs
  $(window).load(function() {
    var copy_height = $('.aspot .copy-container, .quote-with-image .quote-container').outerHeight();
    var quote_height = $('.quote-with-image .quote-container').outerHeight();
    var menu_height = $('nav .menu-main-menu-container').outerHeight();
    $('.aspot .featured-image').height(copy_height);
    $('.quote-image').height(quote_height);
    $('header .top_bar').css('top', menu_height);

    $(window).resize(function() {
      var copy_height = $('.aspot .copy-container, .quote-with-image .quote-container').outerHeight();
      var quote_height = $('.quote-with-image .quote-container').outerHeight();
      var menu_height = $('nav .menu-main-menu-container').outerHeight();
      $('.aspot .featured-image').height(copy_height);
      $('.quote-image, img.ribbon').height(quote_height);
      $('header .top_bar').css('top', menu_height);
    });
  });

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

  // Activates the menu toggle
  $('#menu-toggle').click(function() {
    $('html').toggleClass('slideOver');
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

  //Resets the menu
  $(window).resize(function() {
    $('html').removeClass('slideOver');
  });

  //Animated Counter
  $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });

  //Removes any epmty <p>
  $('.copy-container p').each(function() {
    var $this = $(this);
    if ($this.html().replace(/\s|&nbsp;/g, '').length === 0)
      $this.remove();
  });

  //Resizes the "Logo Row" images to half size
  $(window).load(function() {
    $('.logos img').each(function () {
      var w = $(this).outerWidth();
      $(this).attr('width', w/2);
    });

    if (document.body.scrollTop === 0) {
      $('header').addClass('top');
    } else {
      $('header').removeClass('top');
    }

  });

  // Activates the menu toggle
  $('#menu-toggle').click(function() {
    $('body').toggleClass('slideOver');
  });
  //Resets the menu
  $(window).resize(function() {
    $('body').removeClass('slideOver');
  });
}(jQuery));
