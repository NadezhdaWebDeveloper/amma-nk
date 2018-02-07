//= includes/slick.js

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.collectionSlider();
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
