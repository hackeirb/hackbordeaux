$(document).ready(function() {
  var speed = 500;

  /*
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
  });*/

  $("a[href*='#']").on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});

});
