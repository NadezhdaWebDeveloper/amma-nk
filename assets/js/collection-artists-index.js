//= includes/slick.js

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.artistsIndex();
      page.imagesSlider();
    },
    collectionSlider: function () {
      if ($('.collection-slider').length) {
        $('.collection-slider').slick({
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 9999,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      }
    },
    artistsIndex: function () {
      var item = $('.artists-alphabet').find('.item');
      item.each(function () {
        var $this = $(this);
        var maxHeight = $this.find('.inner').innerHeight();
        var btn = $this.find('.more');
        var currentHeight = $this.find('ul').innerHeight();
        if (currentHeight > maxHeight) {
          btn.css('display', 'inline-block');
        }
        btn.on('click', function (e) {
          if (!$(this).hasClass('opened')) {
            $(this).closest('.item').addClass('active');
            $(this).addClass('opened').text('less');
          } else {
            $(this).removeClass('opened').text('more');
            $(this).closest('.item').removeClass('active');
          }
          e.preventDefault();
        });
      });
      page.collectionSlider();
    },
    imagesSlider: function () {
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        infinite: false
      });
    },
    load: function () {
    },
    resize: function () {
    },
    scroll: function () {
    }
  };

  $(document).ready(page.init);
  $(window).on({
    'load': page.load,
    'resize': page.resize,
    'scroll': page.scroll
  });

  window.isDevice = page.isDev;

})(jQuery, window, document);
