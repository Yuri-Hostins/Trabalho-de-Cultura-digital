if (navigator.userAgent) {
  $(window).scroll(function () {
    $(".timeline .onehalf, .timeline .onehalf--title, .timeline .onehalf--text").each(function () {
      var scrollTop = $(window).scrollTop(),
        elementOffset = $(this).offset().top,
        distance = elementOffset - scrollTop,
        windowHeight = $(window).height(),
        breakPoint = windowHeight * 0.9;

      $(this).toggleClass("move", distance > breakPoint);
    });
  });
}
