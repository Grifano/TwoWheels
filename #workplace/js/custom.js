// === #Burger icon click action ===
function burgerIcon() {
	document.body.classList.toggle('_lock')
	var menuShow = document.getElementById("showMenu");
	menuShow.classList.toggle('_show');
	var burgerClose = document.getElementById('burgerClose');
	burgerClose.classList.toggle('_active');
}
// === /Burger icon click action ===

//****************************************

// === #Button "UP" ===
upBtn = document.getElementById("upBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { showBtnUp() };

function showBtnUp() {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		upBtn.style.transform = "scale(1)";
	} else {
		upBtn.style.transform = "scale(0)";
	}
}

function scrollTopSmooth() {
	scrollToTop(document.documentElement, 0, 1250);
}

function scrollToTop(element, to, duration) {
	var start = element.scrollTop,
		change = to - start,
		currentTime = 300,
		increment = 20

	var animateScroll = function () {
		currentTime += increment;
		var val = Math.easeInOutQuad(currentTime, start, change, duration);
		element.scrollTop = val;
		if (currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	};
	animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t + b;
	t--;
	return -c / 2 * (t * (t - 2) - 1) + b;
};
// === /Button "UP" ===

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

// === /Change class on window resize ===
//****************************************

// === Search ===
function openSearch() {
	var searchIcon = document.getElementById("searchIcon");
	searchIcon.classList.toggle('_change');
	var searchForm = document.getElementById("searchForm");
	searchForm.classList.toggle('_show');
}
// === /Search ===
