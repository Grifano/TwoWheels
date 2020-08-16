// === #Burger icon click action ===

// === /Burger icon click action ===

//****************************************

// === #Button "UP" ===

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
// === Search popup ===

// Open the full screen search box
function openSearch() {
	document.getElementById("searchForm").style.transform = "scale(1)";
	document.querySelector("body").style.overflow = "hidden";
}

// Close the full screen search box
function closeSearch() {
	document.getElementById("searchForm").style.transform = "scale(0)";
	document.querySelector("body").style.overflow = "auto";
}
// === /Search popup ===
