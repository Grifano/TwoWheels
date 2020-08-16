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
filterSelection("all")
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("product__column");
	if (c == "all") c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

// Show filtered elements
function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("productFilterBtnContainer");
var btns = btnContainer.getElementsByClassName("filter__link");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
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