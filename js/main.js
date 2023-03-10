(function ($) {

	"use strict";

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function () {
		$('.featured-carousel').owlCarousel({
			loop: true,
			autoplay: false,
			margin: 20,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>", "<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});

	};
	carousel();

})(jQuery);

$('nav a').click(function () {
	$('nav a').removeClass('active');
	$(this).addClass('active');
});