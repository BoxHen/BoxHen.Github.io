$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").removeClass("top-nav-collapse").fadeTo(50,0.8);
  } else {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  }
});
