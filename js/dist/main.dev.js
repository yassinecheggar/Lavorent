"use strict";

(function ($) {
  $(function () {
    $("nav ul li > a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").slideToggle();
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $("html").click(function () {
      $(".nav-dropdown").hide();
    }); // Toggle open and close nav styles on click

    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
      $(".icon-container").toggleClass("hidden-container");
    });
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  });
})(jQuery);