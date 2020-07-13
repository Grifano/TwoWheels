//****************************************
// === #Popup ===

// $('.popup_play').click(function () { // Вызываем функцию по нажатию на кнопку 
// 	var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id 
// 	$(popup_id).show(); // Открываем окно
// 	$('.popup-overlay').show(); // Открываем блок заднего фона
// 	$('.popup__item').show(); // Открываем блок заднего фона
// })
// $('.popup-overlay').click(function () { // Обрабатываем клик по заднему фону
// 	$('.popup-overlay, .popup, .popup__item').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
// });

// === Popup by FLS===

$('.pl').click(function (event) {
	var pl = $(this).attr('href').replace('#', '');
	var v = $(this).data('vid');
	popupOpen(pl, v);
	return false;
});
function popupOpen(pl, v) {
	$('.popup').removeClass('active').hide();
	if (!$('.menu__body').hasClass('active')) {
		//$('body').data('scroll',$(window).scrollTop());
	}
	if (!isMobile.any()) {
		$('body').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() }).addClass('lock');
		$('.pdb').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() });
	} else {
		setTimeout(function () {
			$('body').addClass('lock');
		}, 300);
	}
	history.pushState('', '', '#' + pl);
	if (v != '' && v != null) {
		$('.popup-' + pl + ' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/' + v + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
	}
	$('.popup-' + pl).fadeIn(300).delay(300).addClass('active');

	if ($('.popup-' + pl).find('.slick-slider').length > 0) {
		$('.popup-' + pl).find('.slick-slider').slick('setPosition');
	}
}
function openPopupById(popup_id) {
	$('#' + popup_id).fadeIn(300).delay(300).addClass('active');
}
function popupClose() {
	$('.popup').removeClass('active').fadeOut(300);
	if (!$('.menu__body').hasClass('active')) {
		if (!isMobile.any()) {
			setTimeout(function () {
				$('body').css({ paddingRight: 0 });
				$('.pdb').css({ paddingRight: 0 });
			}, 200);
			setTimeout(function () {
				$('body').removeClass('lock');
				//$('body,html').scrollTop(parseInt($('body').data('scroll')));
			}, 200);
		} else {
			$('body').removeClass('lock');
			//$('body,html').scrollTop(parseInt($('body').data('scroll')));
		}
	}
	$('.popup-video__value').html('');

	history.pushState('', '', window.location.href.split('#')[0]);
}
$('.popup-close,.popup__close').click(function (event) {
	popupClose();
	return false;
});
$('.popup').click(function (e) {
	if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
		popupClose();
		return false;
	}
});
// === Popup by FLS===

// === Stop video after close popup ===
// === video tag ===
$('#video-pd__stop').click(function (event) {
	$('#video-pd').get(0).pause();
});
$('#video-pd__play').click(function (event) {
	$('#video-pd').get(0).play();
});
// === /video tag ===

// === iframe tag ===
$('#video-pd__stop').click(function () {
	$('#video-pd-yt').each(function () {
		var el_src = $(this).attr("src");
		$(this).attr("src", el_src);
	});
});
// === /iframe tag ===
// === /Stop video after close popup ===

// === /Popup ===


//****************************************

// === #Ibg ===
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();
// === /Ibg ===

//****************************************

// === #Burger icon click action ===
$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
// === /Burger icon click action ===

//****************************************

// === #Button "UP" ===

// === Button "UP" from "luxdecor" ===
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 50) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}
});
$('#up').click(function (event) {
	$('body,html').animate({ scrollTop: 0 }, 300);
});
// === /Button "UP" from "luxdecor" ===

// === Enable up button ===
// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 200) {
//       $('.product-desc__up').addClass('active-up');
//     } else {
//       $('.product-desc__up').removeClass('active-up');
//     }
//   });
// });
// === /Enable up button ===

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

//=== #Images changer on pres button (img) ===

const smallImages = document.querySelectorAll(`.images-product__item img`);

smallImages.forEach(elem => elem.addEventListener("click", () => {
	let fullImage = document.querySelector(`.images-product__big-image img`);
	fullImage.src = elem.src;
}));

//=== /Images changer on pres button (img) ===

//****************************************

//=== #Tab class changer
// === JQuery ===
$('.js-tab-trigger').on('click', function () {
	var tabName = $(this).data('tab'),
		tab = $('.js-tab-content[data-tab="' + tabName + '"]');
	$('.js-tab-trigger.active-tab-pd').removeClass('active-tab-pd');
	$(this).addClass('active-tab-pd');
	$('.js-tab-trigger.open-tab-pd').removeClass('open-tab-pd');
	$(this).addClass('open-tab-pd');
	$('.js-tab-content.open-tab-pd').removeClass('open-tab-pd');
	tab.addClass('open-tab-pd');
});
// === /JQuery ===
// === JS ===
// var jsTriggers = document.querySelectorAll('.js-tab-trigger');
// jsTriggers.forEach(function (item, i) {
//   item.addEventListener('click', function () {
//     var tabName = this.getAttribute('data-tab');
//     tabContent = document.querySelectorAll('.js-tab-content[data-tab="' + tabName + '"]');
//     tabContent.classList.add('active');
//   });
// });
// === / JS ===
//=== /tab class changer

//****************************************

// === #Form select ===
$(document).ready(function () {
	$('.form-pd__sel-del').click(function () {
		var $input = $(this).parent().find('.form-pd__quantity');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.form-pd__sel-add').click(function () {
		var $input = $(this).parent().find('.form-pd__quantity');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});
// === /Form select ===

//****************************************

// === #Slider ===
$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1, // Количество слайдов для отображения сразу в потоке
		slidesToScroll: 1, // Количество слайдов для пролиствыания за раз
		speed: 1000, // скорость прокрутки слайдов
		easing: 'linear', // вид анимации для прокрутки
		infinite: true, // бесконечность прокрутки, по умолчанию true
		initialSlide: 1, // указывает с какого слайда начинать прокрутку
		autoplay: false, // автоматическая прокрутка слайдов.
		autoplaySpeed: 300, // скорость автоматической прокрутки
		pauseOnFocus: true, // останавливает автоматическую прокрутку при нажатии на слайд
		pauseOnHover: true, // останавливает автоматическую прокрутку при наведении
		pauseOnDotsHover: true, // останавливает автоматическую прокрутку при наведении на точки
		draggable: false, // отключает пролистывание на ПК с зажатой кнопкой мыши
		swipe: true, // отключает пролистывание на tochscreen с зажатой кнопкой мыши
		touchThreshold: 10, // растояние для перехода на следующий слайд, чем више тем меньше нужно протянуть слайд. Применянтся для touchscreen
		touchMove: true, // вкл/выкл возможность двигать слайды 
		waitForAnimate: false, // вкл/выкл ожидание выполнения анимации пролистывания. Для быстрого пролистывания false.
		centerMode: false, // поумолчанию false. Ставит гоавный слайд всегда по центру
		variableWidth: false, // уберает пространство между слайдами, слайд заполняется шириной контента внутри
		rows: 1, // устанавлтивает количество обьектов в слайде в ряд. Тоесть один слайд имеет два ряда и в каждом ряде есть обьект
		slidesPerRow: 1, // естанавливает количество слайдов в ряде
		vertical: false, // меняет прокручевание на вертикальное. Но нужно убрать тогда display:flex если он задан для slide-track
		verticalSwiping: false, // Включает вертикальное пролистывание ещгсрыскуут
		// asNavFor: ".slider-big",
		// adaptiveHeight: true, // ! что бы работало нужно добавить - .slick-track: align-items: flex-start!
		responsive: [
			{
				breakpoint: 768,
				settings: {

				}
			},
			{
				breakpoint: 450,

			}
		],
		appendDots: $('.main-screen')
	});
});
// === /Slider ===

//****************************************

// === Spoilers ===

$(document).ready(function () {
	$('.spoilers__title').click(function (event) {
		if ($('.spoilers').hasClass('one')) { // .one - class for en/dis akordeon
			$('.spoilers__title').not($(this)).removeClass('active');
			$('.spoilers__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
// === /Spoilers ===

//****************************************

// === input html data ===
$('#vb__play').click(function () {
	$('.video-block__image').html('<video src="video/01.mp4" id="vb" autoplay="autoplay" muted="1" class="video-block__video"></video>');
});
// === /input html data ===

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

// === Paralax effekt ===
$(window).scroll(function (event) { // 
	var s = 0 - $(this).scrollTop() / 3;
	console.log(s);
	$('.main__bg').css('transform', 'translate3d(0,' + s + 'px,0)');
});
// === /Paralax effekt ===

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

// === Zoom (galery) так же нужно потключить baguetteBox.js ===
if ($('.gallery').length > 0) {
	baguetteBox.run('.gallery', {
		// Custom options
	});
}
// CLOUD-ZOOM
// <a rel="position:'right',adjustX:25,adjustY:0,Width: 432" href="img/product/zoom.jpg" class="cloud-zoom product-main-mainimage__item">
// 	<img class="cloudzoom-gallery" src="img/product/zoom.jpg" alt="" />
// </a>
// === /Zoom (galery) ===

//****************************************

// === Class changer on click ===
var langLink = document.getElementsByClassName("lang__link");
for (var i = 0; i < langLink.length; i++) {
	langLink[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
// === /Class changer on click ===

//****************************************

//=== Transfer block ===
// function myFunction(x) {
// 	if (x.matches) { // If media query matches
// 		// Declare a fragment:
// 		var fragment = document.createDocumentFragment();

// 		// Append desired element to the fragment:
// 		fragment.appendChild(document.getElementById('lang'));

// 		// Append fragment to desired element:
// 		document.getElementById('menuBody').appendChild(fragment);
// 	} else {
// 		// Append desired element to the fragment:
// 		fragment.appendChild(document.getElementById('menuBody'));

// 		// Append fragment to desired element:
// 		document.getElementById('menuBody').appendChild(fragment);
// 	}
// }

// var x = window.matchMedia("(max-width: 479px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes
//=== /Transfer block ===

//****************************************
