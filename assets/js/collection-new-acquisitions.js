//= includes/slick.js

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.collectionSlider();
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
    imagesSlider: function () {
      var slider = $('.images-slider');
      var pager = $('.artwork-category');
      slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true
      });
      slider.find('a').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
          media: {}
        }
      });
      slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        pager.find('.item').eq(nextSlide).addClass('current').siblings().removeClass('current');
      });
      pager.find('a').on('click', function () {
        var parent = $(this).parent();
        var index = parent.index();
        parent.addClass('current').siblings().removeClass('current');
        slider.slick('slickGoTo', index);
        return false;
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
