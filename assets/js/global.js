//= includes/_jcf.js
//= includes/jcf.checkbox.js
//= includes/jcf.radio.js
//= includes/jcf.select.js
//= includes/fancybox.js
//= includes/jquery.fancybox-media.js
//= includes/datepicker.js

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      var data = localStorage.getItem('flag');
      data = JSON.parse(data);
      if (data == 0) {
        $('.tags').addClass('selected');
      }
      page.noDev();
      page.mobileNav();
      page.headerSearch();
      page.headerActivities();
      page.langs();
      page.tabs();
      page.textContent();
      page.video();
      page.moreTags();
      page.showPopupForm();
      page.datePicker();
    },
    noDev: function () {
      if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
        $('.no-dev').removeClass('no-dev');
      }
    },
    isDev: function () {
      return !$('html').hasClass('no-dev') || window.innerWidth < 1280;
    },
    mobileNav: function () {
      $('.btn-menu').on('click', function (e) {
        $(this).toggleClass('btn-open');
        $('.main-menu').slideToggle();
        if (!$('html').hasClass('no-dev') || window.innerWidth < 1025) {
          $('body').toggleClass('no-scroll');
        }
        e.preventDefault();
      });
      if (!$('html').hasClass('no-dev') || window.innerWidth < 1025) {
        $('.main-nav .menu-item-has-children').find('> a').on('click', function (e) {
          var $this = $(this);
          var parent = $this.closest('li');
          var ul = parent.find('ul');

          if (parent.hasClass('active')) {
            parent.removeClass('active');
            ul.slideUp();
          } else {
            parent.siblings('.active').removeClass('active').find('ul').slideUp();
            parent.addClass('active');
            ul.slideDown();
          }
          e.preventDefault();
        });
      }
    },
    headerSearch: function () {
      var searchWrap = $('.header-search');
      var searchInner = searchWrap.find('.search-inner');
      var iconSearch = searchWrap.find('.icon-search');
      iconSearch.on('click', function () {
        $(this).hide();
        searchInner.slideDown();
        $('body').css('overflow', 'hidden');
      });
      searchWrap.find('.close').on('click', function () {
        searchInner.slideUp();
        iconSearch.show();
        $('body').css('overflow', 'visible');
      });
    },
    headerActivities: function () {
      var $header = $('.header_');
      var top = $(document).scrollTop();
      if ($('html').hasClass('no-dev') && window.innerWidth >= 1025) {
        if (top > 0) {
          $header.addClass('scrolled');
        } else {
          $header.removeClass('scrolled');
        }
      }
    },
    langs: function () {
      $('.lang-switcher > a').on('click', function (e) {
        $(this).parent().toggleClass('opened');
        $(this).next().slideToggle();
        e.preventDefault();
      });
      $(document).click(function (event) {
        var langs = $('.lang-switcher');
        if (!$(event.target).closest(langs).length) {
          if (langs.is(":visible")) {
            langs.find('ul').hide();
            langs.removeClass('opened');
          }
        }
      });
    },
    tabs: function () {
      $('.tabs-wrap.tabs .tabs-nav').on('click', 'a', function (e) {
        var tab = $(this).parent();
        var tabIndex = tab.index();
        var tabPanel = $(this).closest('.tabs-wrap');
        var tabPane = tabPanel.find('.tab').eq(tabIndex);
        tabPanel.find('.active').removeClass('active');
        tab.addClass('active');
        tabPane.addClass('active');
        page.textContent();
        e.preventDefault();
      });
    },
    customForm: function () {
      $('select').find('option:first').addClass('hideme');
      jcf.setOptions('Select', {
        wrapNative: true,
        useCustomScroll: true,
        wrapNativeOnMobile: true,
        fakeDropInBody: false
      });
      jcf.replaceAll();
    },
    textContent: function () {
      var item = $('.text-content');
      item.each(function () {
        var $this = $(this);
        var maxHeight = $this.innerHeight();
        var btn = $this.closest('.info-area').find('.more');
        var currentHeight = $this.find('.text').innerHeight();
        if (currentHeight > maxHeight) {
          $this.addClass('short');
          btn.css('display', 'inline-block');
        }
        btn.on('click', function (e) {
          $(this).closest('.info-area').find('.text-content').addClass('full');
          $(this).hide();
          e.preventDefault();
        });
      });
    },
    video: function () {
      $('.btn-video').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
          media: {}
        }
      });
    },
    moreTags: function () {
      var tags = $('.tags');
      var maxHeight = tags.find('form').innerHeight();
      var btn = tags.find('.more-tags');
      var currentHeight = tags.find('ul').innerHeight() - 10;
      if (currentHeight > maxHeight) {
        btn.show();
      }
      btn.on('click', function (e) {
        $(this).closest('.tags').addClass('full');
        $(this).hide();
        e.preventDefault();
      });
      var checkboxes = tags.find('input[type="checkbox"]');
      checkboxes.on('change', function () {
        var checkedItems = $('input[type="checkbox"]:checked').length;
        if (checkedItems >= 1) {
          tags.addClass('selected');
          localStorage.setItem('flag', 0);
        } else {
          tags.removeClass('selected');
          localStorage.setItem('flag', 1);
        }
      });
    },
    showPopupForm: function () {
      $('.show-popup').on('click', function (e) {
        $('.popup-form').addClass('active');
        $('body').addClass('no-scroll');
        e.preventDefault();
      });
      $('.popup-form .close').on('click', function () {
        $('.popup-form').removeClass('active');
        $('body').removeClass('no-scroll');
      });
    },
    datePicker: function () {
      if ($('.datepicker').length){
        $('.datepicker').datepicker();
      }
    },
    load: function () {
      $('.wrapper').css('opacity', 1);
      page.customForm();
    },
    resize: function () {
    },
    scroll: function () {
      page.headerActivities();
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
