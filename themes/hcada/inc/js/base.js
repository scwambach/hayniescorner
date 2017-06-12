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
