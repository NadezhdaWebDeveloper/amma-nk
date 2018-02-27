(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.searchInput();
    },
    searchInput: function () {
      var input = $('.search-filter .form-control');
      var btn = $('.search-filter .delete');
      input.on('keyup', function (event) {
        var value = $(this).val();
        if (value !== '') {
          btn.show();
        } else {
          btn.hide();
        }
      });
      btn.on('click', function () {
        input.val(' ');
        $(this).hide();
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