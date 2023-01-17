(function ($) {
  $(function () {
    $("nav ul li > a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").slideToggle();
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
      $(".icon-container").toggleClass("hidden-container");
    });
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  });
})(jQuery);

$(".brand-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(".offer-carousel").owlCarousel({
  loop: true,
  nav: true,

  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

$(".history-carousel").owlCarousel({
  loop: true,
  nav: true,

  responsive: {
    0: {
      items: 3,
    },
    1000: {
      items: 6,
    },
    1200: {
      items: 6,
    },
  },
});
