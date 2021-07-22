'use strict';

$(document).ready(function () {

	$('.js_tabs').tabsPlugin();

	$('.js_icon_menu').click(function () {
		$(this).next().slideToggle();
		$(this).toggleClass('open');
	});

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		//slidesPerView: 2,
		spaceBetween: 20,
		centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});
});