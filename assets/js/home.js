//= includes/slick.js
//= includes/box-slider-all.jquery.min.js

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      // page.mainGallery();
      page.bigSlider();
      page.collectionGallery();
    },
    noDev: function () {
      if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
        $('.no-dev').removeClass('no-dev');
      }
    },
    isDev: function () {
      return !$('html').hasClass('no-dev') || window.innerWidth < 1280;
    },
    bigSlider: function () {
      var parent = $('.big-slider');
      var countSlide = parent.find(".item").length;
      var sliderControl = $('.slider-controls');
      if (countSlide > 1) {
        parent.boxSlider({
          effect: 'fade',
          autoScroll: true,
          timeout: 10000,
          slideInterval: 0,
          onafter: function () {
            var ind = $('.jbs-current').index();
            sliderControl.find('a').removeClass('current');
            sliderControl.find('li').eq(ind).find('a').addClass('current');
          }
        });

        sliderControl.on('click', 'a', function (e) {
          var currentSlide = $(this).parent().index()
          sliderControl.find('a').removeClass('current');
          $(this).addClass('current');
          parent.boxSlider('showSlide', currentSlide);
          e.preventDefault();
        });
      } else {
        sliderControl.addClass('hide');
      }
    },
    mainGallery: function () {
      if ($('.main-gallery').length) {
        $('.main-gallery').slick({
          infinite: true,
          speed: 1000,
          cssEase: 'ease-out',
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          autoplay: true,
          autoplaySpeed: 4000,
          responsive: [
            {
              breakpoint: 9999,
              settings: {
                slidesToShow: 1,
                centerPadding: '520px'
              }
            },
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 1,
                centerPadding: '360px'
              }
            },
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 1,
                centerPadding: '250px'
              }
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                centerPadding: '200px'
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerPadding: '120px'
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                variableWidth: true,
                centerMode: true
              }
            }
          ]
        });
      }
    },
    collectionGallery: function () {
      if ($('.collection-gallery').length) {
        if ($('html').hasClass('no-dev') && window.innerWidth >= 1025) {
          $('.collection-gallery').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            //infinite: false,
            variableWidth: true
          });
        }
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