;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
  $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
  $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
  $('input, textarea').placeholder();
  $.fn.foundationButtons          ? $doc.foundationButtons() : null;
  $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
  $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
  $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
  $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
  $.fn.foundationTabs             ? $doc.foundationTabs() : null;

  // Hide address bar on mobile devices
  if (Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

  $("#frmTravis").on('submit', function(e) {
    TravisFavicon($("#travis_user").val(), $("#travis_project").val());
    $("#see_fav").slideDown();
    setTimeout(function() {
      $("#see_fav").slideUp();
    }, 2000);

    e.preventDefault();
  });

  $("#samples a").on('click', function(e) {
    e.preventDefault();
    $("#travis_user").val($(this).data('user'));
    $("#travis_project").val($(this).data('project'));
    $("#frmTravis").submit();
  })

})(jQuery, this);
