//****************************************

// === ibg ===
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();
// === /ibg ===

//****************************************

// === #Burger icon click action ===
$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
// === /Burger icon click action ===

//****************************************

// === #Button "UP" ===

$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 500) {
		$('.up').fadeIn(400);
	} else {
		$('.up').fadeOut(400);
	}
});
$('.up').click(function () {
	$('body,html').animate({ scrollTop: 0 }, 1000);
});
// === /Button "UP" ===

//****************************************

//=== #Change class after scroll ===
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 500) {
		$('.header__bg').addClass('show');
	} else {
		$('.header__bg').removeClass('show');
	}
});
//=== /change class after scroll ===

//****************************************

// === #Slider ===
var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	speed: 600,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})
// === /Slider ===

//****************************************

// === Spoilers ===
$(document).ready(function () {
	$('.spoiler__title').click(function (event) {
		if ($('.spoiler').hasClass('one')) { // .one - class for en/dis akordeon
			$('.spoiler__title').not($(this)).removeClass('active');
			$('.spoiler__item').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
// === /Spoilers ===

//****************************************

// === Read window height & set it for class (fix for IE11) ===
$(window).resize(function (event) {
	mainblock();
});
function mainblock() {
	var h = $(Window).outerHeight();
	$('.mainblock').css('min-height', h);
}
mainblock();
// === /Read window height & set it for class ===

//****************************************

// === Filtr & lighted active item ===
$('.filter__link').click(function (event) {
	var i = $(this).data('filter'); // $(this) - значит к только этому ('.filter__item').
	if (!$(e.target).closest(".parent_block").length) {
		$('.toggled_block').hide();
	}
	if (i == 1) { // если class .filter__item имеет data-filter="1" - значит...
		$('.product__column').show(); // ...показать колонки.
	} else { // иначе...
		$('.product__column').hide(); // ...спрятать все колонки.
		$('.product__column.f_' + i).show(); // но показать те которые имеют клас f_ + i
	}
	// Подвсветка активного фильтра
	$('.filter__link').removeClass('active');
	$(this).addClass('active');
	return false;
});
// === Filtr & lighted active item ===

//****************************************

// === goto переход на следусчий блок при нажатии ===
$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');
	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.menu__body').hasClass('active')) {
		$('.menu__body,.icon-menu').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});
// === /goto переход на следусчий блок при нажатии ===

//****************************************

// === Click anyware ===
// $(document).on('click touchstart', function (e) {
// 	if (!$(e.target).is("*")) {
// 		$('.header__menu').removeClass('active');
// 	};
// });
// === /Click anyware ===

//****************************************
// === Change class on window resize ===
$(document).ready(function (event) {
	var windowWidth = $('body').innerWidth(); // $(t	his) - значит к только этому ('.filter__item').
	if (windowWidth < 1023) { // если class .filter__item имеет data-filter="1" - значит...
		$('.info').hassClass('.spoiler').$('.info__title').addClass('.spoiler__title'); // ...показать колонки.
	} else { // иначе...
		$('.spoiler__title').removeClass('.spoiler__title'); // ...спрятать все колонки.
	}
	return false;
});
// === /Change class on window resize ===