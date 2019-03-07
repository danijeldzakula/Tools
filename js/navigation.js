$(document).ready(function() {
	var globalHeader = $('.global__header').outerHeight() + 30;

	$('a[href*=#]').bind('click', function(e) {
		e.preventDefault();	
		var target = $(this).attr("href");
		var	offsetTop = target === "#" ? 0 : $(target).offset().top - globalHeader;

		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 200);

		return false;
	});
});

$(window).scroll(function() {
	var scrollDistance = $(window).scrollTop() + 40;
	$('.global__section').each(function(i) {
		if ($(this).position().top <= scrollDistance) {
			$('.global__nav li a.is-active').removeClass('is-active');
			$('.global__nav li a').eq(i).addClass('is-active');
		}
	});
}).scroll();