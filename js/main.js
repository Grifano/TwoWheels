//****************************************
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
	if ($(window).scrollTop() > 200) {
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
		autoplaySpeed: 1000, // скорость автоматической прокрутки
		pauseOnFocus: true, // останавливает автоматическую прокрутку при нажатии на слайд
		pauseOnHover: true, // останавливает автоматическую прокрутку при наведении
		pauseOnDotsHover: true, // останавливает автоматическую прокрутку при наведении на точки
		draggable: false, // отключает пролистывание на ПК с зажатой кнопкой мыши
		swipe: false, // отключает пролистывание на tochscreen с зажатой кнопкой мыши
		touchThreshold: 10, // растояние для перехода на следующий слайд, чем више тем меньше нужно протянуть слайд. Применянтся для touchscreen
		touchMove: false, // вкл/выкл возможность двигать слайды 
		waitForAnimate: false, // вкл/выкл ожидание выполнения анимации пролистывания. Для быстрого пролистывания false.
		centerMode: false, // поумолчанию false. Ставит гоавный слайд всегда по центру
		variableWidth: false, // уберает пространство между слайдами, слайд заполняется шириной контента внутри
		rows: 1, // устанавлтивает количество обьектов в слайде в ряд. Тоесть один слайд имеет два ряда и в каждом ряде есть обьект
		slidesPerRow: 1, // естанавливает количество слайдов в ряде
		vertical: true, // меняет прокручевание на вертикальное. Но нужно убрать тогда display:flex если он задан для slide-track
		verticalSwiping: false, // Включает вертикальное пролистывание ещгсрыскуут
		// asNavFor: ".slider-big",
		// adaptiveHeight: true, // ! что бы работало нужно добавить - .slick-track: align-items: flex-start!
		responsive: [
			{
				breakpoint: 835,
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
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
  let originalPositions = [];
  let daElements = document.querySelectorAll('[data-da]');
  let daElementsArray = [];
  let daMatchMedia = [];
  //Заполняем массивы
  if (daElements.length > 0) {
    let number = 0;
    for (let index = 0; index < daElements.length; index++) {
      const daElement = daElements[index];
      const daMove = daElement.getAttribute('data-da');
      if (daMove != '') {
        const daArray = daMove.split(',');
        const daPlace = daArray[1] ? daArray[1].trim() : 'last';
        const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
        const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
        const daDestination = document.querySelector('.' + daArray[0].trim())
        if (daArray.length > 0 && daDestination) {
          daElement.setAttribute('data-da-index', number);
          //Заполняем массив первоначальных позиций
          originalPositions[number] = {
            "parent": daElement.parentNode,
            "index": indexInParent(daElement)
          };
          //Заполняем массив элементов 
          daElementsArray[number] = {
            "element": daElement,
            "destination": document.querySelector('.' + daArray[0].trim()),
            "place": daPlace,
            "breakpoint": daBreakpoint,
            "type": daType
          }
          number++;
        }
      }
    }
    dynamicAdaptSort(daElementsArray);

    //Создаем события в точке брейкпоинта
    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daBreakpoint = el.breakpoint;
      const daType = el.type;

      daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
      daMatchMedia[index].addListener(dynamicAdapt);
    }
  }
  //Основная функция
  function dynamicAdapt(e) {
    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daElement = el.element;
      const daDestination = el.destination;
      const daPlace = el.place;
      const daBreakpoint = el.breakpoint;
      const daClassname = "_dynamic_adapt_" + daBreakpoint;

      if (daMatchMedia[index].matches) {
        //Перебрасываем элементы
        if (!daElement.classList.contains(daClassname)) {
          let actualIndex = indexOfElements(daDestination)[daPlace];
          if (daPlace === 'first') {
            actualIndex = indexOfElements(daDestination)[0];
          } else if (daPlace === 'last') {
            actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
          }
          daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
          daElement.classList.add(daClassname);
        }
      } else {
        //Возвращаем на место
        if (daElement.classList.contains(daClassname)) {
          dynamicAdaptBack(daElement);
          daElement.classList.remove(daClassname);
        }
      }
    }
    customAdapt();
  }

  //Вызов основной функции
  dynamicAdapt();

  //Функция возврата на место
  function dynamicAdaptBack(el) {
    const daIndex = el.getAttribute('data-da-index');
    const originalPlace = originalPositions[daIndex];
    const parentPlace = originalPlace['parent'];
    const indexPlace = originalPlace['index'];
    const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
    parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
  }
  //Функция получения индекса внутри родителя
  function indexInParent(el) {
    var children = Array.prototype.slice.call(el.parentNode.children);
    return children.indexOf(el);
  }
  //Функция получения массива индексов элементов внутри родителя 
  function indexOfElements(parent, back) {
    const children = parent.children;
    const childrenArray = [];
    for (let i = 0; i < children.length; i++) {
      const childrenElement = children[i];
      if (back) {
        childrenArray.push(i);
      } else {
        //Исключая перенесенный элемент
        if (childrenElement.getAttribute('data-da') == null) {
          childrenArray.push(i);
        }
      }
    }
    return childrenArray;
  }
  //Сортировка объекта
  function dynamicAdaptSort(arr) {
    arr.sort(function (a, b) {
      if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
    });
    arr.sort(function (a, b) {
      if (a.place > b.place) { return 1 } else { return -1 }
    });
  }
  //Дополнительные сценарии адаптации
  function customAdapt() {
    //const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
}());

/*
let block = document.querySelector('.click');
block.addEventListener("click", function (e) {
	alert('Все ок ;)');
});
*/

/*
//Объявляем переменные
const parent_original = document.querySelector('.content__blocks_city');
const parent = document.querySelector('.content__column_river');
const item = document.querySelector('.content__block_item');

//Слушаем изменение размера экрана
window.addEventListener('resize', move);

//Функция
function move(){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 992) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[2]);
			item.classList.add('done');
		}
	} else {
		if (item.classList.contains('done')) {
			parent_original.insertBefore(item, parent_original.children[2]);
			item.classList.remove('done');
		}
	}
}

//Вызываем функцию
move();

*/
