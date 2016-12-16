$(document).ready(function() {

  var speed = 2000;

  $(".go-sponsors").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#sponsors").offset().top
    }, speed);
  });

  $(".go-map").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#map").offset().top
    }, speed);
  });

  $(".go-about").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, speed);
  });
});
