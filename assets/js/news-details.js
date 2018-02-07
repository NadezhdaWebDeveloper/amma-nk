//= includes/slick.js

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.imagesSlider();
    },
    imagesSlider: function () {
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 9999,
            settings: {
              slidesToShow: 7
            }
          },
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 4
            }
          }
        ]
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