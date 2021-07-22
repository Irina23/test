'use strict';

$(document).ready(function () {

	$('.js_tabs').tabsPlugin();

	$('.panel-heading').click(function () {
		$(this).toggleClass('in').next().slideToggle();
	});

	//open menu

	$('.js_icon_menu').on('click', function () {
		$(this).toggleClass('open');
		$('.js_menu').toggleClass('open');

		$('body').toggleClass('no-scroll');
	});
});