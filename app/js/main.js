$(document).ready(function() {

$('.transition').on('click', function() {
	$('#content').animate({
		top: "130px"
	})

	$('.js-value').css('display', 'none');

	$('#content').load("/culc/", function() {
		buttonsWidth();
		calculatorA();

		wrapper = $('.animation-demo');

		function hoverSvg(){
			iconToArrow = document.getElementById('animate-to-arrow');
			iconFromArrow = document.getElementById('animate-from-arrow');

			function animateIconToArrow(){
			  iconToArrow.beginElement();
				// wrapper.addClass('is-arrow').removeClass('is-menu');
				$('#svgAn1').css('opacity', '0');
				$('#svgAn2').css('opacity', '1');
			}

			function animateIconFromArrow(){
			  iconFromArrow.beginElement();
				// wrapper.addClass('is-menu').removeClass('is-arrow');
				// $('#svgAn2').fadeOut(450, function() {
				// 	$('#svgAn1').css('display', 'block');
				// });
				setTimeout(function() {
					$('#svgAn2').css('opacity', '0');
					$('#svgAn1').css('opacity', '1');
				}, 200)

			}

			$('.closer').hover(function(){
			  animateIconToArrow();
			}, function() {
				animateIconFromArrow();
			})
		}

		hoverSvg();
		$('.js-value2').css('display', 'block');
		$('.closer').on('click', function() {
			$('#content').animate({
				top: "100%"
			})
			$('body').css('position', 'static');
			$('.js-value').css('display', 'block');
			$('.js-value2').css('display', 'none');
			buttonsWidth();
		})

	});

	$('body').css('position', 'fixed');

})

setSize();

buttonsWidth();

slidesMethod();

$(window).resize(function(){
	setSize();

	if ($(window).outerWidth() > 769) {
		slidesMethodUnslick();
	}else{
		slidesMethod();
	}
})

function setSize(){
	var windowWindth = $(window).outerWidth();
	var windowHeight = $(window).height();

	if (windowWindth > 780) {
		$('.js-wrap').css({
			'width' : windowWindth,
			'height' : windowHeight
		})
	}else{
		$('.js-wrap').css({
			'width' : '100%',
			'height' : 'auto'
		})
	}

}

$('.methos__slide').each(function(){
	var windowWindth = $(window).outerWidth();
	if (windowWindth < 481) {
		$(this).css(
			'max-width', windowWindth
		)
	}
})

$('.slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: true,
	appendArrows: $('.slider-control')
});

$('.mobile-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: true,
});

function slidesMethod(){


$('.method__images').slick({
	// infinite         : false,
	// variableWidth    : true
	responsive: [
		{
			breakpoint: 10000,
			settings: "unslick"
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow     : 1,
				slidesToScroll   : 1,
				arrows           : true
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow     : 2,
				slidesToScroll   : 1,
				arrows           : true
			}
		}
	]
});

$('.about').slick({
	// infinite         : false,
	// variableWidth    : true
	responsive: [
		{
			breakpoint: 10000,
			settings: "unslick"
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow     : 1,
				slidesToScroll   : 1,
				arrows           : true
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow     : 2,
				slidesToScroll   : 1,
				arrows           : true
			}
		}
	]
});


}

function slidesMethodUnslick(){
	$('.method__images').slick('unslick');
	$('.about').slick('unslick');
}


function buttonsWidth(){
	$('.value__item-wrap').each(function(){
		$(this).css('width', $(this).find('span').width() + 20);
	})
}


// $('#mainPhone').inputmask({ mask: "+7[(999)-999-99-99]", greedy: false});
// $('#mainPhonePopup').inputmask("+7 (999) 999-99-99");
// $('#culcPhone').inputmask({ mask: "+7[(999)-999-99-99]", greedy: false});

$("#mainPhonePopup").mask("+7 (999) 999-99-99",{placeholder:" "});
$("#mainPhone").mask("+7 (999) 999-99-99",{placeholder:" "});
$("#culcPhone").mask("+7 (999) 999-99-99",{placeholder:" "});

// $('.ajax-btn').on('click', function(event) {
// 	// console.log('success');
//
//
// })


	// console.log($('#mainPhone').val());
	$('#mainForm').submit(function(e) {
		event.preventDefault();
		$.ajax({
			url: "/mail.php",
			type: "post",
			data: $(this).find('input').serialize()
		}).done(function() {

			if ($('#mainPhone').val() != "") {
				$('#massage').fadeIn();
				setTimeout(function() {
					$('#massage').fadeOut();
				}, 2000)
				$('#mainPhone').val("")
			}else(
				$('#massage2').fadeIn(),
				setTimeout(function() {
					$('#massage2').fadeOut();
				}, 2000)
			)

			if ($('#mainPhonePopup').val() != "") {
				$('#massage').fadeIn();
				setTimeout(function() {
					$('#massage').fadeOut();
				}, 2000)
				$('#mainPhonePopup').val("")
			}else(
				$('#massage2').fadeIn(),
				setTimeout(function() {
					$('#massage2').fadeOut();
				}, 2000)
			)
			console.log('success');
		}).fail(function() {

			console.log('fail');
		})
	})


	$('#mainForm2').submit(function(e) {
		event.preventDefault();
		$.ajax({
			url: "/mail.php",
			type: "post",
			data: $(this).find('input').serialize()
		}).done(function() {

			// if ($('#mainPhone').val() != "") {
			// 	$('#massage').fadeIn();
			// 	setTimeout(function() {
			// 		$('#massage').fadeOut();
			// 	}, 2000)
			// 	$('#mainPhone').val("")
			// }else(
			// 	$('#massage2').fadeIn(),
			// 	setTimeout(function() {
			// 		$('#massage2').fadeOut();
			// 	}, 2000)
			// )

			if ($('#mainPhonePopup').val() != "") {
				$('#massage').fadeIn();
				setTimeout(function() {
					$('#massage').fadeOut();
				}, 2000)
				$('#mainPhonePopup').val("")
				// $('.recall-popup').fadeOut();
			}else(
				$('#massage2').fadeIn(),
				setTimeout(function() {
					$('#massage2').fadeOut();
				}, 2000)
			)
			console.log('success');
		}).fail(function() {

			console.log('fail');
		})
	})


	$('#culcForm').submit(function(e) {
		event.preventDefault();
		$.ajax({
			url: "/mail.php",
			type: "post",
			data: $(this).find('input').serialize()
		}).done(function() {

			if ($('#culcPhone').val() != "") {
				$('#massage').fadeIn();
				setTimeout(function() {
					$('#massage').fadeOut();
				}, 2000)
				$('#culcPhone').val("")
			}else(
				$('#massage2').fadeIn(),
				setTimeout(function() {
					$('#massage2').fadeOut();
				}, 2000)
			)
			console.log('success');
		}).fail(function() {

			console.log('fail');
		})
	})




$('.main-contact__qewstion-top').click(function(){
	var elem = $(this).parents('.main-contact__qewstion-block').find('.main-contact__qewstion-bottom');
	$(this)
	.addClass('main-contact__qewstion-top--active')
	.parents('.main-contact__qewstion-block')
	.siblings()
	.find('.main-contact__qewstion-top')
	.removeClass('main-contact__qewstion-top--active');

	if (elem.is(":hidden")) {
		$('.main-contact__qewstion-bottom').hide('slow'),
		elem.show('slow')
	}else{
		$('.main-contact__qewstion-bottom').hide('slow')
		$('.main-contact__qewstion-top').removeClass('main-contact__qewstion-top--active');
	}

})

var myMap;

ymaps.ready(mapInit);

function mapInit() {
		myMap = new ymaps.Map("map", {
			center: [55.15908456955195,61.37599949999997],
			zoom: 15
		});
		var myPlacemark = new ymaps.Placemark([55.15908456955195,61.37599949999997]);

		myMap.geoObjects.add(myPlacemark);
}

$('#morphing').fancybox();
$('#toRecall').fancybox();
$('#toRecall2').fancybox();
$('#toRecall3').fancybox();
$('#toRecallMobile').fancybox();
$('#toRecallRemont').fancybox();


var calculator = function(){
	var iphone = $('.js-iphone, #iPhone'),
		ipad = $('.js-ipad, #iPad'),
		samsung = $('.js-samsung, #Samsung'),
		iphoneModel = $('.js-iphoneModel'),
		ipadModel = $('.js-ipadModel'),
		samsungModel = $('.js-samsungModel');
//это можно оптимизировать
	iphone.click(function(){
		iphoneModel.addClass('model').siblings().removeClass('model');
		$('.calculate__iphone').addClass('active-img').siblings().removeClass('active-img');
		buttonsWidth();

		$('.js-iphone').addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		$('.calculate__left--phone').css(
			"display", "flex"
		).siblings().not('.calculate__right').css('display', 'none');

		$('.create-object').find('.value__table').remove();
		$('.value__block-wrap--hidden').fadeOut();
		summCo = 0;

		$('#value__price span').text(0);
	});
	ipad.click(function(){
		ipadModel.addClass('model').siblings().removeClass('model');
		$('.calculate__ipad').addClass('active-img').siblings().removeClass('active-img');
		buttonsWidth();

		$('.js-ipad').addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		$('.calculate__left--ipad').css(
			"display", "flex"
		).siblings().not('.calculate__right').css('display', 'none');

		$('.create-object').find('.value__table').remove();
		$('.value__block-wrap--hidden').fadeOut();
		summCo = 0;

		$('#value__price span').text(0);
	});
	samsung.click(function(){
		samsungModel.addClass('model').siblings().removeClass('model');
		$('.calculate__andriod').addClass('active-img').siblings().removeClass('active-img');
		buttonsWidth();

		$('.js-samsung').addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		$('.calculate__left--samsung').css(
			"display", "flex"
		).siblings().not('.calculate__right').css('display', 'none');

		$('.create-object').find('.value__table').remove();
		$('.value__block-wrap--hidden').fadeOut();
		summCo = 0;

		$('#value__price span').text(0);
	});

//это можно оптимизировать
	iphoneModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		getDatePrice();

		$('.create-object').find('.value__table').remove();
		$('.value__block-wrap--hidden').fadeOut();
		summCo = 0;

		$('#value__price span').text(0);
	});
	ipadModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		getDatePrice();

		$('.create-object').find('.value__table').remove();
		$('.value__block-wrap--hidden').fadeOut();
		summCo = 0;

		$('#value__price span').text(0);
	});
	samsungModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		getDatePrice();

		$('.create-object').find('.value__table').remove();
		$('.value__block-wrap--hidden').fadeOut();
		summCo = 0;

		$('#value__price span').text(0);
	});

//это можно оптимизировать
	function getDatePrice(){

		crackedScreen = _this.data("cracked-screen"),
		housing = _this.data("housing"),
		microphone = _this.data("microphone"),
		homeButton = _this.data("home-button"),
		brokenGlass = _this.data("broken-glass"),
		diagnostics = _this.data("diagnostics"),
		powerButton = _this.data("power-button"),
		quietSound = _this.data("quiet-sound"),
		battery = _this.data("battery"),
		photoCamera = _this.data("photo-camera"),
		other = _this.data("other");

		ch_crackedScreen = _this.data("ch-cracked-screen"),
		ch_housing = _this.data("ch-housing"),
		ch_microphone = _this.data("ch-microphone"),
		ch_homeButton = _this.data("ch-home-button"),
		ch_brokenGlass = _this.data("ch-broken-glass"),
		ch_diagnostics = _this.data("ch-diagnostics"),
		ch_powerButton = _this.data("ch-power-button"),
		ch_quietSound = _this.data("ch-quiet-sound"),
		ch_battery = _this.data("ch-battery"),
		ch_photoCamera = _this.data("ch-photo-camera"),
		ch_other = _this.data("ch-other");

		return putDatePrice();
	}
//это можно оптимизировать
	function putDatePrice(){
		$('.cracked-screen').data('price', crackedScreen).data('ch-price', ch_crackedScreen).attr('data-price', crackedScreen).attr('data-ch-price', ch_crackedScreen);
		$('.housing').data('price', housing).data('ch-price', ch_housing).attr('data-price', housing).attr('data-ch-price', ch_housing);
		$('.microphone').data('price', microphone).data('ch-price', ch_microphone).attr('data-price', microphone).attr('data-ch-price', ch_microphone);
		$('.home-button').data('price', homeButton).data('ch-price', ch_homeButton).attr('data-price', homeButton).attr('data-ch-price', ch_homeButton);
		$('.broken-glass').data('price', brokenGlass).data('ch-price', ch_brokenGlass).attr('data-price', brokenGlass).attr('data-ch-price', ch_brokenGlass);
		$('.diagnostics').data('price', diagnostics).data('ch-price', ch_diagnostics).attr('data-price', diagnostics).attr('data-ch-price', ch_diagnostics);
		$('.power-button').data('price', powerButton).data('ch-price', ch_powerButton).attr('data-price', powerButton).attr('data-ch-price', ch_powerButton);
		$('.quiet-sound').data('price', quietSound).data('ch-price', ch_quietSound).attr('data-price', quietSound).attr('data-ch-price', ch_quietSound);
		$('.battery').data('price', battery).data('ch-price', ch_battery).attr('data-price', battery).attr('data-ch-price', ch_battery);
		$('.photo-camera').data('price', photoCamera).data('ch-price', ch_photoCamera).attr('data-price', photoCamera).attr('data-ch-price', ch_photoCamera);
		$('.other').data('price', other).data('ch-price', ch_other).attr('data-price', other).attr('data-ch-price', ch_other);
	}

	var datacount = 0;
	var ii = 0;
	var summCo = 0;
	var summ = $('#value__price span').text();

// клик на кнопку калькулятора, вся магия здесь
	$('.calculate__item').on('click', function (event) {

		dataID = $(this).data('id');
		var dataName = $(this).data('name'),
			imgClass = $(this).data('class'),
			usPrice = $(this).data('price'),
			chPrice = $(this).data('ch-price');

		if ($(this).hasClass('calculate__active-btn')) {

			var x =$(this).data('datacount');

			$(this).removeClass('calculate__active-btn');

			var createObject = $('.create-object');

			var count = [];

			// count = createObject.find('.value__table').filter(':odd').addClass('D');
			count = createObject.find('.value__table[data-id="' + dataID + '"] span');

			if (count.hasClass('D')) {

				count.each(function(index, element){

					$(element).find('.value__price-old span').text("");

					usPrice = Number(usPrice);
					chPrice = Number(chPrice);

					$(element).find('.value__price .D').text(usPrice);
					$(element).find('.value__price span').removeClass('D');

					// var end = $(element).find('.value__price span').text();
					var end = $(element).find('.value__price .hui').text();
					summCo = summCo - +end;
					var zz = accounting.formatNumber(summCo, " ");
					// console.log(zz);
					$('#value__price .her').text(summCo);
					$('#value__price span').text(zz);

				})

			}else{

				count.each(function(index, element){

					console.log("55");

					$(element).find('.value__price-old span').text(usPrice);
					// console.log(ii);

					usPrice = Number(usPrice);
					chPrice = Number(chPrice);

					// console.log($(element));
					var obj1 = (usPrice * 30) / 100;
					var qqq = usPrice - obj1; // посчитали цену США

					var obj2 = (yyy * 30) / 100;
					var yyy = yyy - obj2; // посчитали цену Китай
					var dd = accounting.formatNumber(qqq, " ");
					console.log(dd);
					$(element).find('.value__price span').text(dd);
					$(element).find('.value__price .hui').text(qqq);
					$(element).find('.value__price span').removeClass('D');

				})
			}

			var end = $('.value__table[data-id="' + dataID + '"]').find('.value__price .hui').text();
			summCo = summCo - +end;
			var zz = accounting.formatNumber(summCo, " ");
			$('#value__price .her').text(summCo);
			$('#value__price span').text(zz);

			$('.value__table[data-id="' + dataID + '"]').remove();
			ii--;

		}else{

			$(this).addClass('calculate__active-btn');

			datacount++;

			$(this).attr('data-datacount', datacount);

			//обложка таблицы
			var createObject = $('.create-object');

			//вычисляем производителя
			var hasPrice;

			if (usPrice == usPrice && chPrice == 0) {
				console.log(12);
				hasPrice = '<div class="value__item-wrap value__item-wrap-us active-btn" data-price="' + usPrice + '"><span>США</span></div>';
			}else if (chPrice == chPrice && usPrice == 0) {
				console.log(14);
				hasPrice = '<div class="value__item-wrap value__item-wrap-ch active-btn" data-ch-price="' + chPrice + '"><span>Китай</span></div>';
			}else if (usPrice == usPrice && chPrice == chPrice) {
				console.log(16);
				hasPrice = '<div class="value__item-wrap value__item-wrap-us active-btn" data-price="' + usPrice + '"><span>США</span></div><div class="value__item-wrap value__item-wrap-ch" data-ch-price="' + chPrice + '"><span>Китай</span></div>';
			}else if (usPrice == 0 && chPrice == 0) {
				console.log(17);
				hasPrice = '';
			}

			// создаем внутренние элементы таблицы
			createObject.append('<div id="' + datacount + '" class="value__table" data-datacount="' + datacount + '" data-id="' + dataID + '"><div class="value__close"></div><div class="value__table-row"><div class="value__table-finish"><div class="value__content"><div class="value__ebala"><div class="value__ebala-detail ' + imgClass + '"><span>' + dataName + '</span></div></div></div></div><div class="value__table-finish"><div class="value__content"><div class="value__ebala"> ' + hasPrice + ' </div></div></div><div class="value__table-finish"><div class="value__content"><div class="value__ebala"><div class="value__price-old"><span></span></div><div class="value__price"><span></span><div class="hui"></div></div></div></div></div></div></div>');

			var count = [];

			// count = createObject.find('.value__table').filter(':odd').addClass('D');
			count = createObject.find('.value__table[data-id="' + dataID + '"]');

			count.each(function(index, element){

				ii++;

				if (ii % 2 === 0) {

					if (usPrice == "0") {
						$(element).find('.value__price-old span').text(chPrice);
					}else {
						$(element).find('.value__price-old span').text(usPrice);
					}

					usPrice = Number(usPrice);
					chPrice = Number(chPrice);

					// console.log($(element));
					var qqq = chPrice;
					var yyy = chPrice;

					var obj1 = (usPrice * 30) / 100;
					var qqq = usPrice - obj1; // посчитали цену США

					var obj2 = (chPrice * 30) / 100;
					var yyy = yyy - +obj2; // посчитали цену Китай
					var ee = accounting.formatNumber(qqq, 0, " ");
					var ff = accounting.formatNumber(yyy, 0, " ");

					Number(ee);
					Number(ff);
					// console.log(ee);

					if (usPrice == "0") {
						$(element).find('.value__price span').text(ff);
						$(element).find('.value__price .hui').text(yyy);
					}else {
						$(element).find('.value__price span').text(ee);
						$(element).find('.value__price .hui').text(qqq);
					}

					console.log(yyy);

					$(element).find('.value__price span').addClass('D');

					var end = $(element).find('.value__price .hui').text();
					// Number(end);
					console.log(end);

					summCo = summCo + +end;
					// var summCo = accounting.formatNumber(summCo, " ");
					// console.log(summCo);
					var zz = accounting.formatNumber(summCo, 0, " ");
					$('#value__price .her').text(summCo);
					$('#value__price span').text(zz);

				}else{

					var oo = accounting.formatNumber(usPrice, 0, " ");
					var oo2 = accounting.formatNumber(usPrice, 0, " ");
					$(element).find('.value__price-old span').text("");

					if (usPrice == "0") {
						$(element).find('.value__price span').text(oo2);
						$(element).find('.value__price-old span').text(chPrice);
					}else {
						$(element).find('.value__price span').text(oo);
						$(element).find('.value__price .hui').text(usPrice);
					}

					var end = $(element).find('.value__price .hui').text();
					summCo = summCo + +end;
					var zz = accounting.formatNumber(summCo, 0, " ");
					$('#value__price .her').text(summCo);
					$('#value__price span').text(zz);
				}

				// if ($('.calculate__active-btn').length > 1) {
				// 	var destination = $('#hz').offset().top - 500;
				// 	$('html, body').animate({ scrollTop: destination }, 1100);
				// }else {
				// 	var destination = $('.value').offset().top + 1100;
				// 	$('html, body').animate({ scrollTop: destination }, 1100);
				// }
			})
		}

		if ($('.calculate__active-btn').length > 0) {
			$('.value__block-wrap--hidden').fadeIn();
		}else{
			$('.value__block-wrap--hidden').fadeOut();
		}

	});

	$('html').on('click', '.value__close', function () {

		dataID = $(this).parent().data('id');

		var end = $('.value__table[data-id="' + dataID + '"]').find('.value__price .hui').text();
			summCo = summCo - +end;
			var zz = accounting.formatNumber(summCo, 0, " ");
			$('#value__price .her').text(summCo);
			$('#value__price span').text(zz);

		$(this).parent('.value__table[data-id="' + dataID + '"]').remove();
		$('.calculate__item[data-id="' + dataID + '"]').removeClass('calculate__active-btn');

		if ($('.calculate__active-btn').length < 1) {
			$('.value__block-wrap--hidden').fadeOut();
		}
	})

	$('html').on('click', '.value__item-wrap-us', function () {
		if ($(this).hasClass('active-btn')) {
			return false;
		}else {
			$(this).addClass('active-btn').siblings().removeClass('active-btn');

			var prodPrice = $(this).parents('.value__table').find('.value__price span');
			var prodPriceOld = $(this).parents('.value__table').find('.value__price-old span');
			var putPrice = $(this).data('price');
			var getPrice = $(this).parent().find('.value__item-wrap-ch').data('ch-price');
			var summ = $('#value__price .her').text();

			putPrice = Number(putPrice);
			getPrice = Number(getPrice);
			summ = Number(summ);

			if (prodPrice.hasClass('D')) {
				prodPriceOld.text(putPrice);
				var qwer = prodPriceOld.text(putPrice);
				console.log(qwer);
				var obj1 = (putPrice * 30) / 100;
				var putPrice = putPrice - obj1; // посчитали цену США

				var obj2 = (getPrice * 30) / 100;
				var getPrice = getPrice - obj2; // посчитали цену Китай

				prodPrice.text(putPrice);

				var itog = summ - getPrice + putPrice;
			}else {
				prodPrice.text(putPrice);

				var itog = summ - getPrice + putPrice;
			}
			var zz = accounting.formatNumber(itog, 0, " ");
			$('#value__price .her').text(itog);
			$('#value__price span').text(zz);
		}
	})

	$('html').on('click', '.value__item-wrap-ch', function () {
		if ($(this).hasClass('active-btn')) {
			return false;
		}else {
			$(this).addClass('active-btn').siblings().removeClass('active-btn');

			var prodPrice = $(this).parents('.value__table').find('.value__price span');
			var prodPriceOld = $(this).parents('.value__table').find('.value__price-old span');
			var putPrice = $(this).data('ch-price');
			var getPrice = $(this).parent().find('.value__item-wrap-us').data('price');
			var summ = $('#value__price .her').text();

			putPrice = Number(putPrice);
			getPrice = Number(getPrice);
			summ = Number(summ);

			if (prodPrice.hasClass('D')) {
				prodPriceOld.text(putPrice);
				var obj1 = (putPrice * 30) / 100;
				var putPrice = putPrice - obj1; // посчитали цену Китай

				var obj2 = (getPrice * 30) / 100;
				var getPrice = getPrice - obj2; // посчитали цену США

				prodPrice.text(putPrice);

				var itog = summ - getPrice + putPrice;
			}else {
				prodPrice.text(putPrice);

				var itog = summ - getPrice + putPrice;
			}

			var zz = accounting.formatNumber(itog, 0, " ");
			$('#value__price .her').text(itog);
			$('#value__price span').text(zz);
		}
	})

	$('#iPhone').on('click', function(event) {
		event.preventDefault();
		buttonsWidth();
		var lll = $('.value').offset().top;
		$('html, body').animate({
			scrollTop: lll
		})
		$('.js-iphoneModel').addClass('model').siblings().removeClass('model');
		$('.value__item-wrap').each(function(){
			$(this).css('width', $(this).find('span').width() + 20);
		})
	})
	$('#iPad').on('click', function(event) {
		event.preventDefault();
		buttonsWidth();
		var lll = $('.value').offset().top;
		$('html, body').animate({
			scrollTop: lll
		})
		$('.js-ipadModel').addClass('model').siblings().removeClass('model');
		$('.value__item-wrap').each(function(){
			$(this).css('width', $(this).find('span').width() + 20);
		})
	})
	$('#Samsung').on('click', function(event) {
		event.preventDefault();

		var lll = $('.value').offset().top;
		$('html, body').animate({
			scrollTop: lll
		})
		$('.js-samsungModel').addClass('model').siblings().removeClass('model');
		$('.value__item-wrap').each(function(){
			$(this).css('width', $(this).find('span').width() + 20);
		})
	})

	$('.value__item-wrap').on('click', function() {
		var zzzz = $(this).data('i');
		console.log(zzzz)

		$('.calcul_img[data-i="' + zzzz + '"]').addClass('active-img').siblings().removeClass('active-img');
	})

}

calculator();

var calculatorA = function(){
	var iphone = $('.js-iphone2, #iPhone'),
		ipad = $('.js-ipad2, #iPad'),
		samsung = $('.js-samsung2, #Samsung'),
		iphoneModel = $('.js-iphoneModel2'),
		ipadModel = $('.js-ipadModel2'),
		samsungModel = $('.js-samsungModel2');
//это можно оптимизировать
	iphone.click(function(){
		iphoneModel.addClass('model').siblings().removeClass('model');
		$('.calculate__iphone').addClass('active-img').siblings().removeClass('active-img');
		buttonsWidth();

		$('.js-iphone2').addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item2').removeClass('calculate__active-btn');

		$('.calculate__left--phone2').css(
			"display", "flex"
		).siblings().not('.calculate__right').css('display', 'none');

		$('.create-object2').find('.value__table').remove();
		$('.value__block-wrap--hidden2').fadeOut();
		summCo = 0;

		$('#value__price2 span').text(0);
	});
	ipad.click(function(){
		ipadModel.addClass('model').siblings().removeClass('model');
		$('.calculate__ipad2').addClass('active-img').siblings().removeClass('active-img');
		buttonsWidth();

		$('.js-ipad2').addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item2').removeClass('calculate__active-btn');

		$('.calculate__left--ipad2').css(
			"display", "flex"
		).siblings().not('.calculate__right2').css('display', 'none');

		$('.create-object2').find('.value__table').remove();
		$('.value__block-wrap--hidden2').fadeOut();
		summCo = 0;

		$('#value__price2 span').text(0);
	});
	samsung.click(function(){
		samsungModel.addClass('model').siblings().removeClass('model');
		$('.calculate__andriod2').addClass('active-img').siblings().removeClass('active-img');
		buttonsWidth();

		$('.js-samsung2').addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item2').removeClass('calculate__active-btn');

		$('.calculate__left--samsung2').css(
			"display", "flex"
		).siblings().not('.calculate__right2').css('display', 'none');

		$('.create-object2').find('.value__table').remove();
		$('.value__block-wrap--hidden2').fadeOut();
		summCo = 0;

		$('#value__price2 span').text(0);
	});

//это можно оптимизировать
	iphoneModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item2').removeClass('calculate__active-btn');

		getDatePrice();

		$('.create-object2').find('.value__table').remove();
		$('.value__block-wrap--hidden2').fadeOut();
		summCo = 0;

		$('#value__price span').text(0);
	});
	ipadModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item2').removeClass('calculate__active-btn');

		getDatePrice();

		$('.create-object2').find('.value__table').remove();
		$('.value__block-wrap--hidden2').fadeOut();
		summCo = 0;

		$('#value__price2 span').text(0);
	});
	samsungModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item2').removeClass('calculate__active-btn');

		getDatePrice();

		$('.create-object2').find('.value__table').remove();
		$('.value__block-wrap--hidden2').fadeOut();
		summCo = 0;

		$('#value__price2 span').text(0);
	});

//это можно оптимизировать
	function getDatePrice(){

		crackedScreen = _this.data("cracked-screen"),
		housing = _this.data("housing"),
		microphone = _this.data("microphone"),
		homeButton = _this.data("home-button"),
		brokenGlass = _this.data("broken-glass"),
		diagnostics = _this.data("diagnostics"),
		powerButton = _this.data("power-button"),
		quietSound = _this.data("quiet-sound"),
		battery = _this.data("battery"),
		photoCamera = _this.data("photo-camera"),
		other = _this.data("other");

		ch_crackedScreen = _this.data("ch-cracked-screen"),
		ch_housing = _this.data("ch-housing"),
		ch_microphone = _this.data("ch-microphone"),
		ch_homeButton = _this.data("ch-home-button"),
		ch_brokenGlass = _this.data("ch-broken-glass"),
		ch_diagnostics = _this.data("ch-diagnostics"),
		ch_powerButton = _this.data("ch-power-button"),
		ch_quietSound = _this.data("ch-quiet-sound"),
		ch_battery = _this.data("ch-battery"),
		ch_photoCamera = _this.data("ch-photo-camera"),
		ch_other = _this.data("ch-other");

		return putDatePrice();
	}
//это можно оптимизировать
	function putDatePrice(){
		$('.cracked-screen').data('price', crackedScreen).data('ch-price', ch_crackedScreen).attr('data-price', crackedScreen).attr('data-ch-price', ch_crackedScreen);
		$('.housing').data('price', housing).data('ch-price', ch_housing).attr('data-price', housing).attr('data-ch-price', ch_housing);
		$('.microphone').data('price', microphone).data('ch-price', ch_microphone).attr('data-price', microphone).attr('data-ch-price', ch_microphone);
		$('.home-button').data('price', homeButton).data('ch-price', ch_homeButton).attr('data-price', homeButton).attr('data-ch-price', ch_homeButton);
		$('.broken-glass').data('price', brokenGlass).data('ch-price', ch_brokenGlass).attr('data-price', brokenGlass).attr('data-ch-price', ch_brokenGlass);
		$('.diagnostics').data('price', diagnostics).data('ch-price', ch_diagnostics).attr('data-price', diagnostics).attr('data-ch-price', ch_diagnostics);
		$('.power-button').data('price', powerButton).data('ch-price', ch_powerButton).attr('data-price', powerButton).attr('data-ch-price', ch_powerButton);
		$('.quiet-sound').data('price', quietSound).data('ch-price', ch_quietSound).attr('data-price', quietSound).attr('data-ch-price', ch_quietSound);
		$('.battery').data('price', battery).data('ch-price', ch_battery).attr('data-price', battery).attr('data-ch-price', ch_battery);
		$('.photo-camera').data('price', photoCamera).data('ch-price', ch_photoCamera).attr('data-price', photoCamera).attr('data-ch-price', ch_photoCamera);
		$('.other').data('price', other).data('ch-price', ch_other).attr('data-price', other).attr('data-ch-price', ch_other);
	}

	var datacount = 0;
	var ii = 0;
	var summCo = 0;
	var summ = $('#value__price2 span').text();

// клик на кнопку калькулятора, вся магия здесь
	$('.calculate__item2').on('click', function (event) {
		console.log('');

		dataID = $(this).data('id');
		var dataName = $(this).data('name'),
			imgClass = $(this).data('class'),
			usPrice = $(this).data('price'),
			chPrice = $(this).data('ch-price');

		if ($(this).hasClass('calculate__active-btn')) {

			var x =$(this).data('datacount');

			$(this).removeClass('calculate__active-btn');

			var createObject = $('.create-object2');

			var count = [];

			count = createObject.find('.value__table[data-id="' + dataID + '"] span');

			if (count.hasClass('D')) {

				count.each(function(index, element){

					$(element).find('.value__price-old span').text("");

					usPrice = Number(usPrice);
					chPrice = Number(chPrice);

					$(element).find('.value__price .D').text(usPrice);
					$(element).find('.value__price span').removeClass('D');

					var end = $(element).find('.value__price .hui').text();
					summCo = summCo - +end;
					var zz = accounting.formatNumber(summCo, " ");

					$('#value__price2 .her').text(summCo);
					$('#value__price2 span').text(zz);

				})

			}else{

				count.each(function(index, element){

					console.log("55");

					$(element).find('.value__price-old span').text(usPrice);

					usPrice = Number(usPrice);
					chPrice = Number(chPrice);

					var obj1 = (usPrice * 30) / 100;
					var qqq = usPrice - obj1; // посчитали цену США

					var obj2 = (yyy * 30) / 100;
					var yyy = yyy - obj2; // посчитали цену Китай
					var dd = accounting.formatNumber(qqq, " ");
					console.log(dd);
					$(element).find('.value__price span').text(dd);
					$(element).find('.value__price .hui').text(qqq);
					$(element).find('.value__price span').removeClass('D');

				})
			}

			var end = $('.value__table[data-id="' + dataID + '"]').find('.value__price .hui').text();
			summCo = summCo - +end;
			var zz = accounting.formatNumber(summCo, " ");
			$('#value__price2 .her').text(summCo);
			$('#value__price2 span').text(zz);

			$('.value__table[data-id="' + dataID + '"]').remove();
			ii--;

		}else{

			$(this).addClass('calculate__active-btn');

			datacount++;

			$(this).attr('data-datacount', datacount);

			//обложка таблицы
			var createObject = $('.create-object2');

			//вычисляем производителя
			var hasPrice;

			if (usPrice == usPrice && chPrice == 0) {
				console.log(12);
				hasPrice = '<div class="value__item-wrap value__item-wrap-us2 active-btn" data-price="' + usPrice + '"><span>США</span></div>';
			}else if (chPrice == chPrice && usPrice == 0) {
				console.log(14);
				hasPrice = '<div class="value__item-wrap value__item-wrap-ch2 active-btn" data-ch-price="' + chPrice + '"><span>Китай</span></div>';
			}else if (usPrice == usPrice && chPrice == chPrice) {
				console.log(16);
				hasPrice = '<div class="value__item-wrap value__item-wrap-us2 active-btn" data-price="' + usPrice + '"><span>США</span></div><div class="value__item-wrap value__item-wrap-ch2" data-ch-price="' + chPrice + '"><span>Китай</span></div>';
			}else if (usPrice == 0 && chPrice == 0) {
				console.log(17);
				hasPrice = '';
			}

			// создаем внутренние элементы таблицы
			createObject.append('<div id="' + datacount + '" class="value__table" data-datacount="' + datacount + '" data-id="' + dataID + '"><div class="value__close"></div><div class="value__table-row"><div class="value__table-finish"><div class="value__content"><div class="value__ebala"><div class="value__ebala-detail ' + imgClass + '"><span>' + dataName + '</span></div></div></div></div><div class="value__table-finish"><div class="value__content"><div class="value__ebala"> ' + hasPrice + ' </div></div></div><div class="value__table-finish"><div class="value__content"><div class="value__ebala"><div class="value__price-old"><span></span></div><div class="value__price"><span></span><div class="hui"></div></div></div></div></div></div></div>');

			var count = [];

			count = createObject.find('.value__table[data-id="' + dataID + '"]');

			count.each(function(index, element){

				ii++;

				if (ii % 2 === 0) {

					if (usPrice == "0") {
						$(element).find('.value__price-old span').text(chPrice);
					}else {
						$(element).find('.value__price-old span').text(usPrice);
					}

					usPrice = Number(usPrice);
					chPrice = Number(chPrice);

					var qqq = chPrice;
					var yyy = chPrice;

					var obj1 = (usPrice * 30) / 100;
					var qqq = usPrice - obj1; // посчитали цену США

					var obj2 = (yyy * 30) / 100;
					var yyy = yyy - +obj2; // посчитали цену Китай
					var ee = accounting.formatNumber(qqq, 0, " ");
					var ff = accounting.formatNumber(yyy, 0, " ");

					Number(ee);
					Number(ff);

					if (usPrice == "0") {
						$(element).find('.value__price span').text(ff);
						$(element).find('.value__price .hui').text(yyy);
					}else {
						$(element).find('.value__price span').text(ee);
						$(element).find('.value__price .hui').text(qqq);
					}
					$(element).find('.value__price span').addClass('D');

					var end = $(element).find('.value__price .hui').text();
					// Number(end);
					console.log(end);

					summCo = summCo + +end;

					var zz = accounting.formatNumber(summCo, 0, " ");
					$('#value__price2 .her').text(summCo);
					$('#value__price2 span').text(zz);

				}else{
					var oo = accounting.formatNumber(usPrice, 0, " ");
					var oo2 = accounting.formatNumber(usPrice, 0, " ");
					$(element).find('.value__price-old span').text("");

					if (usPrice == "0") {
						$(element).find('.value__price span').text(oo2);
						$(element).find('.value__price-old span').text(chPrice);
					}else {
						$(element).find('.value__price span').text(oo);
						$(element).find('.value__price .hui').text(usPrice);
					}

					var end = $(element).find('.value__price .hui').text();
					summCo = summCo + +end;
					var zz = accounting.formatNumber(summCo, 0, " ");
					$('#value__price2 .her').text(summCo);
					$('#value__price2 span').text(zz);
				}

				// if ($('.calculate__active-btn').length > 1) {
				// 	var destination = $('#hz').offset().top - 500;
				// 	$('html, body').animate({ scrollTop: destination }, 1100);
				// }else {
				// 	var destination = $('.value').offset().top + 1100;
				// 	$('html, body').animate({ scrollTop: destination }, 1100);
				// }
			})
		}

		if ($('.calculate__active-btn').length > 0) {
			$('.value__block-wrap--hidden2').fadeIn();
		}else{
			$('.value__block-wrap--hidden2').fadeOut();
		}

	});

	$('html').on('click', '.value__close', function () {

		dataID = $(this).parent().data('id');

		var end = $('.value__table[data-id="' + dataID + '"]').find('.value__price .hui').text();
			summCo = summCo - +end;
			var zz = accounting.formatNumber(summCo, 0, " ");
			$('#value__price2 .her').text(summCo);
			$('#value__price2 span').text(zz);

		$(this).parent('.value__table[data-id="' + dataID + '"]').remove();
		$('.calculate__item[data-id="' + dataID + '"]').removeClass('calculate__active-btn');

		if ($('.calculate__active-btn').length < 1) {
			$('.value__block-wrap--hidden2').fadeOut();
		}
	})

	$('html').on('click', '.value__item-wrap-us2', function () {
		if ($(this).hasClass('active-btn')) {
			return false;
		}else {
			$(this).addClass('active-btn').siblings().removeClass('active-btn');

			var prodPrice = $(this).parents('.value__table').find('.value__price span');
			var prodPriceOld = $(this).parents('.value__table').find('.value__price-old span');
			var putPrice = $(this).data('price');
			var getPrice = $(this).parent().find('.value__item-wrap-ch2').data('ch-price');
			var summ = $('#value__price2 .her').text();

			putPrice = Number(putPrice);
			getPrice = Number(getPrice);
			summ = Number(summ);

			if (prodPrice.hasClass('D')) {
				prodPriceOld.text(putPrice);
				var qwer = prodPriceOld.text(putPrice);
				console.log(qwer);
				var obj1 = (putPrice * 30) / 100;
				var putPrice = putPrice - obj1; // посчитали цену США

				var obj2 = (getPrice * 30) / 100;
				var getPrice = getPrice - obj2; // посчитали цену Китай

				prodPrice.text(putPrice);

				var itog = summ - getPrice + putPrice;
			}else {
				prodPrice.text(putPrice);

				var itog = summ - getPrice + putPrice;
			}
			var zz = accounting.formatNumber(itog, 0, " ");
			$('#value__price2 .her').text(itog);
			$('#value__price2 span').text(zz);
		}
	})

	$('html').on('click', '.value__item-wrap-ch2', function () {
		if ($(this).hasClass('active-btn')) {
			return false;
		}else {
			$(this).addClass('active-btn').siblings().removeClass('active-btn');

			var prodPrice = $(this).parents('.value__table').find('.value__price span');
			var prodPriceOld = $(this).parents('.value__table').find('.value__price-old span');
			var putPrice = $(this).data('ch-price');
			var getPrice = $(this).parent().find('.value__item-wrap-us2').data('price');
			var summ = $('#value__price2 .her').text();

			putPrice = Number(putPrice);
			getPrice = Number(getPrice);
			summ = Number(summ);

			if (prodPrice.hasClass('D')) {
				prodPriceOld.text(putPrice);
				var obj1 = (putPrice * 30) / 100;
				var putPrice = putPrice - obj1; // посчитали цену Китай

				var obj2 = (getPrice * 30) / 100;
				var getPrice = getPrice - obj2; // посчитали цену США

				prodPrice.text(putPrice);

				var itog = summ - getPrice + putPrice;
			}else {
				prodPrice.text(putPrice);

				var itog = summ - getPrice + putPrice;
			}

			var zz = accounting.formatNumber(itog, 0, " ");
			$('#value__price2 .her').text(itog);
			$('#value__price2 span').text(zz);
		}
	})

	$('#iPhone').on('click', function(event) {
		event.preventDefault();
		buttonsWidth();
		var lll = $('.value').offset().top;
		$('html, body').animate({
			scrollTop: lll
		})
		$('.js-iphoneModel2').addClass('model').siblings().removeClass('model');
		$('.value__item-wrap').each(function(){
			$(this).css('width', $(this).find('span').width() + 20);
		})
	})
	$('#iPad').on('click', function(event) {
		event.preventDefault();
		buttonsWidth();
		var lll = $('.value').offset().top;
		$('html, body').animate({
			scrollTop: lll
		})
		$('.js-ipadModel2').addClass('model').siblings().removeClass('model');
		$('.value__item-wrap').each(function(){
			$(this).css('width', $(this).find('span').width() + 20);
		})
	})
	$('#Samsung').on('click', function(event) {
		event.preventDefault();

		var lll = $('.value').offset().top;
		$('html, body').animate({
			scrollTop: lll
		})
		$('.js-samsungModel2').addClass('model').siblings().removeClass('model');
		$('.value__item-wrap').each(function(){
			$(this).css('width', $(this).find('span').width() + 20);
		})
	})

	$('.value__item-wrap').on('click', function() {
		var zzzz = $(this).data('i');

		$('.calcul_img[data-i="' + zzzz + '"]').addClass('active-img').siblings().removeClass('active-img');
	})

}

});
