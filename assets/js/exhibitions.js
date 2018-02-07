//= includes/slick.js

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.collectionSlider();
      page.googleMap();
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
    googleMap: function () {
      if ($('#map').get(0) !== undefined) {
        var styles = [
          {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#444444"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "hue": "#ebff00"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [
              {
                "saturation": "-72"
              },
              {
                "gamma": "0.00"
              },
              {
                "lightness": "47"
              },
              {
                "weight": "5.59"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "saturation": "14"
              },
              {
                "lightness": "11"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              },
              {
                "hue": "#00ff00"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
              {
                "color": "#f2f2f2"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "lightness": 45
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "visibility": "on"
              }
            ]
          }
        ];
        var lat = $('.map-holder').data('lat');
        var lng = $('.map-holder').data('lng');
        var myLatlng = new google.maps.LatLng(lat, lng);
        var image = $('.map-holder').data('image');
        var mapOptions = {
          center: myLatlng,
          zoom: 12,
          styles: styles,
          draggable: !((typeof window.orientation !== 'undefined') ||
          (navigator.userAgent.indexOf('IEMobile') !== -1)),
          scrollwheel: false
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          icon: image
        });

        google.maps.event.addDomListener(window, "resize", function () {
          var mapCenter = map.getCenter();
          google.maps.event.trigger(map, "resize");
          map.setCenter(mapCenter);
        });
      }
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
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 9999,
            settings: {
              slidesToShow: 6
            }
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4
            }
          }
        ]
      });
      $('.images-slider a').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
          media: {}
        }
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
