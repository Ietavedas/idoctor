$(document).ready(function() {

$('.transition').on('click', function() {
	$('#content').animate({
		top: "130px"
	})

	// $('.js-value').css('display', 'none');

	$('#content').load("culc.html", function() {
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
		// $('.js-value2').css('display', 'block');
		$('.closer').on('click', function() {
			$('#content').animate({
				top: "100%"
			})
			$('body').css('position', 'static');
			// $('.js-value').css('display', 'block');
			// $('.js-value2').css('display', 'none');
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


// $('#mainForm').validate({
// 	rules: {
// 		phone: {
// 			requared: true
// 		}
// 	}
// });

// $('#culcForm').submit(function() {
// 		var form = $(this);
// 		var error = false;
//
// 		form.find('.recall__phone').each(function () {
// 			if($(this).val() == ''){
// 				// alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!'); // гoвoрим зaпoлняй!
// 				$('#massage2').css('display', 'block');
// 				error = true; // oшибкa
// 			}
// 		});
// 		if (!error) { // eсли oшибки нeт
// 			var data = form.serialize(); // пoдгoтaвливaeм дaнныe
// 			$.ajax({ // инициaлизируeм ajax зaпрoс
// 			   type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
// 			   url: 'gogogo.php', // путь дo oбрaбoтчикa, у нaс oн лeжит в тoй жe пaпкe
// 			   dataType: 'json', // oтвeт ждeм в json фoрмaтe
// 			   data: data, // дaнныe для oтпрaвки
// 		       beforeSend: function(data) { // сoбытиe дo oтпрaвки
// 		            form.find('input[type="submit"]').attr('disabled', 'disabled'); // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
// 		          },
// 		       success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
// 		       		if (data['error']) { // eсли oбрaбoтчик вeрнул oшибку
// 		       			alert(data['error']); // пoкaжeм eё тeкст
// 		       		} else { // eсли всe прoшлo oк
// 		       			alert('Письмo oтврaвлeнo! Чeкaйтe пoчту! =)'); // пишeм чтo всe oк
// 		       		}
// 		         },
// 		       error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
// 		            alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
// 		            alert(thrownError); // и тeкст oшибки
// 		         },
// 		       complete: function(data) { // сoбытиe пoслe любoгo исхoдa
// 		            form.find('input[type="submit"]').prop('disabled', false); // в любoм случae включим кнoпку oбрaтнo
// 		         }
//
// 			     });
// 		}
// })


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
		$('.cracked-screen').attr('data-price', crackedScreen).attr('data-ch-price', ch_crackedScreen);
		$('.housing').attr('data-price', housing).attr('data-ch-price', ch_housing);
		$('.microphone').attr('data-price', microphone).attr('data-ch-price', ch_microphone);
		$('.home-button').attr('data-price', homeButton).attr('data-ch-price', ch_homeButton);
		$('.broken-glass').attr('data-price', brokenGlass).attr('data-ch-price', ch_brokenGlass);
		$('.diagnostics').attr('data-price', diagnostics).attr('data-ch-price', ch_diagnostics);
		$('.power-button').attr('data-price', powerButton).attr('data-ch-price', ch_powerButton);
		$('.quiet-sound').attr('data-price', quietSound).attr('data-ch-price', ch_quietSound);
		$('.battery').attr('data-price', battery).attr('data-ch-price', ch_battery);
		$('.photo-camera').attr('data-price', photoCamera).attr('data-ch-price', ch_photoCamera);
		$('.other').attr('data-price', other).attr('data-ch-price', ch_other);
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

			if (usPrice == usPrice && chPrice == undefined) {
				console.log(12);
				hasPrice = '<div class="value__item-wrap value__item-wrap-us active-btn" data-price="' + usPrice + '"><span>США</span></div>';
			}else if (chPrice == chPrice && usPrice == undefined) {
				console.log(14);
				hasPrice = '<div class="value__item-wrap value__item-wrap-ch active-btn" data-ch-price="' + chPrice + '"><span>Китай</span></div>';
			}else if (usPrice == usPrice && chPrice == chPrice) {
				console.log(16);
				hasPrice = '<div class="value__item-wrap value__item-wrap-us active-btn" data-price="' + usPrice + '"><span>США</span></div><div class="value__item-wrap value__item-wrap-ch" data-ch-price="' + chPrice + '"><span>Китай</span></div>';
			}else if (usPrice == undefined && chPrice == undefined) {
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
					$(element).find('.value__price-old span').text(usPrice);

					usPrice = Number(usPrice);
					chPrice = Number(chPrice);

					// console.log($(element));
					var obj1 = (usPrice * 30) / 100;
					var qqq = usPrice - obj1; // посчитали цену США

					var obj2 = (yyy * 30) / 100;
					var yyy = yyy - obj2; // посчитали цену Китай
					var ee = accounting.formatNumber(qqq, 0, " ");
					Number(ee);
					// console.log(ee);
					$(element).find('.value__price span').text(ee);
					$(element).find('.value__price .hui').text(qqq);
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
					$(element).find('.value__price-old span').text("");
					$(element).find('.value__price span').text(oo);
					$(element).find('.value__price .hui').text(usPrice);

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
			// $('.calculate__discount-wrap').animate({
			// 	opacity: 1
			// })
		}else{
			$('.value__block-wrap--hidden').fadeOut();
			// $('.calculate__discount-wrap').animate({
			// 	opacity: 0
			// })
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
			// $('.calculate__discount-wrap').animate({
			// 	opacity: 0
			// })
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

			// console.log(itog);

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
		$('.calculate__iphone2').addClass('active-img').siblings().removeClass('active-img');
		buttonsWidth();

		$('.js-iphone2').addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item2').removeClass('calculate__active-btn2');

		$('.calculate__left--phone2').css(
			"display", "flex"
		).siblings().not('.calculate__right2').css('display', 'none');

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

		$('.calculate__item2').removeClass('calculate__active-btn2');

		$('.calculate__left--ipad2').css(
			"display", "flex"
		).siblings().not('.calculate__right2').css('display', 'none');

		$('.create-object2').find('.value__table2').remove();
		$('.value__block-wrap--hidden2').fadeOut();
		summCo = 0;

		$('#value__price2 span').text(0);
	});
	samsung.click(function(){
		samsungModel.addClass('model').siblings().removeClass('model');
		$('.calculate__andriod2').addClass('active-img').siblings().removeClass('active-img');
		buttonsWidth();

		$('.js-samsung2').addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item2').removeClass('calculate__active-btn2');

		$('.calculate__left--samsung2').css(
			"display", "flex"
		).siblings().not('.calculate__right2').css('display', 'none');

		$('.create-object2').find('.value__table2').remove();
		$('.value__block-wrap--hidden2').fadeOut();
		summCo = 0;

		$('#value__price2 span').text(0);
	});

//это можно оптимизировать
	iphoneModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item2').removeClass('calculate__active-btn2');

		getDatePrice();

		$('.create-object2').find('.value__table2').remove();
		$('.value__block-wrap--hidden2').fadeOut();
		summCo = 0;

		$('#value__price2 span').text(0);
	});
	ipadModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item2').removeClass('calculate__active-btn2');

		getDatePrice();

		$('.create-object2').find('.value__table').remove();
		$('.value__block-wrap--hidden2').fadeOut();
		summCo = 0;

		$('#value__price2 span').text(0);
	});
	samsungModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item2').removeClass('calculate__active-btn2');

		getDatePrice();

		$('.create-object2').find('.value__table2').remove();
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
		$('.cracked-screen').attr('data-price', crackedScreen).attr('data-ch-price', ch_crackedScreen);
		$('.housing').attr('data-price', housing).attr('data-ch-price', ch_housing);
		$('.microphone').attr('data-price', microphone).attr('data-ch-price', ch_microphone);
		$('.home-button').attr('data-price', homeButton).attr('data-ch-price', ch_homeButton);
		$('.broken-glass').attr('data-price', brokenGlass).attr('data-ch-price', ch_brokenGlass);
		$('.diagnostics').attr('data-price', diagnostics).attr('data-ch-price', ch_diagnostics);
		$('.power-button').attr('data-price', powerButton).attr('data-ch-price', ch_powerButton);
		$('.quiet-sound').attr('data-price', quietSound).attr('data-ch-price', ch_quietSound);
		$('.battery').attr('data-price', battery).attr('data-ch-price', ch_battery);
		$('.photo-camera').attr('data-price', photoCamera).attr('data-ch-price', ch_photoCamera);
		$('.other').attr('data-price', other).attr('data-ch-price', ch_other);
	}

	var datacount = 0;
	var ii = 0;
	var summCo = 0;
	var summ = $('#value__price2 span').text();

// клик на кнопку калькулятора, вся магия здесь
	$('.calculate__item2').on('click', function (event) {

		dataID = $(this).data('id');
		var dataName = $(this).data('name'),
			imgClass = $(this).data('class'),
			usPrice = $(this).data('price'),
			chPrice = $(this).data('ch-price');

		if ($(this).hasClass('calculate__active-btn2')) {

			var x =$(this).data('datacount');

			$(this).removeClass('calculate__active-btn2');

			var createObject = $('.create-object2');

			var count = [];

			// count = createObject.find('.value__table').filter(':odd').addClass('D');
			count = createObject.find('.value__table2[data-id="' + dataID + '"] span');

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
					$('#value__price2 .her').text(summCo);
					$('#value__price2 span').text(zz);

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

			var end = $('.value__table2[data-id="' + dataID + '"]').find('.value__price .hui').text();
			summCo = summCo - +end;
			var zz = accounting.formatNumber(summCo, " ");
			$('#value__price2 .her').text(summCo);
			$('#value__price2 span').text(zz);

			$('.value__table2[data-id="' + dataID + '"]').remove();
			ii--;

		}else{

			$(this).addClass('calculate__active-btn2');

			datacount++;

			$(this).attr('data-datacount', datacount);

			//обложка таблицы
			var createObject = $('.create-object2');

			//вычисляем производителя
			var hasPrice;

			if (usPrice == usPrice && chPrice == undefined) {
				console.log(12);
				hasPrice = '<div class="value__item-wrap value__item-wrap-us2 active-btn" data-price="' + usPrice + '"><span>США</span></div>';
			}else if (chPrice == chPrice && usPrice == undefined) {
				console.log(14);
				hasPrice = '<div class="value__item-wrap value__item-wrap-ch2 active-btn" data-ch-price="' + chPrice + '"><span>Китай</span></div>';
			}else if (usPrice == usPrice && chPrice == chPrice) {
				console.log(16);
				hasPrice = '<div class="value__item-wrap value__item-wrap-us2 active-btn" data-price="' + usPrice + '"><span>США</span></div><div class="value__item-wrap value__item-wrap-ch2" data-ch-price="' + chPrice + '"><span>Китай</span></div>';
			}else if (usPrice == undefined && chPrice == undefined) {
				console.log(17);
				hasPrice = '';
			}

			// создаем внутренние элементы таблицы
			createObject.append('<div id="' + datacount + '" class="value__table2" data-datacount="' + datacount + '" data-id="' + dataID + '"><div class="value__close"></div><div class="value__table-row"><div class="value__table-finish"><div class="value__content"><div class="value__ebala"><div class="value__ebala-detail ' + imgClass + '"><span>' + dataName + '</span></div></div></div></div><div class="value__table-finish"><div class="value__content"><div class="value__ebala"> ' + hasPrice + ' </div></div></div><div class="value__table-finish"><div class="value__content"><div class="value__ebala"><div class="value__price-old"><span></span></div><div class="value__price"><span></span><div class="hui"></div></div></div></div></div></div></div>');

			var count = [];

			// count = createObject.find('.value__table').filter(':odd').addClass('D');
			count = createObject.find('.value__table2[data-id="' + dataID + '"]');

			count.each(function(index, element){

				ii++;

				if (ii % 2 === 0) {
					$(element).find('.value__price-old span').text(usPrice);

					usPrice = Number(usPrice);
					chPrice = Number(chPrice);

					// console.log($(element));
					var obj1 = (usPrice * 30) / 100;
					var qqq = usPrice - obj1; // посчитали цену США

					var obj2 = (yyy * 30) / 100;
					var yyy = yyy - obj2; // посчитали цену Китай
					var ee = accounting.formatNumber(qqq, 0, " ");
					Number(ee);
					// console.log(ee);
					$(element).find('.value__price span').text(ee);
					$(element).find('.value__price .hui').text(qqq);
					$(element).find('.value__price span').addClass('D');

					var end = $(element).find('.value__price .hui').text();
					// Number(end);
					console.log(end);

					summCo = summCo + +end;
					// var summCo = accounting.formatNumber(summCo, " ");
					// console.log(summCo);
					var zz = accounting.formatNumber(summCo, 0, " ");
					$('#value__price2 .her').text(summCo);
					$('#value__price2 span').text(zz);

				}else{
					var oo = accounting.formatNumber(usPrice, 0, " ");
					$(element).find('.value__price-old span').text("");
					$(element).find('.value__price span').text(oo);
					$(element).find('.value__price .hui').text(usPrice);

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

		if ($('.calculate__active-btn2').length > 0) {
			$('.value__block-wrap--hidden2').fadeIn();
			// $('.calculate__discount-wrap').animate({
			// 	opacity: 1
			// })
		}else{
			$('.value__block-wrap--hidden2').fadeOut();
			// $('.calculate__discount-wrap').animate({
			// 	opacity: 0
			// })
		}

	});

	$('html').on('click', '.value__close', function () {

		dataID = $(this).parent().data('id');

		var end = $('.value__table2[data-id="' + dataID + '"]').find('.value__price .hui').text();
			summCo = summCo - +end;
			var zz = accounting.formatNumber(summCo, 0, " ");
			$('#value__price2 .her').text(summCo);
			$('#value__price2 span').text(zz);

		$(this).parent('.value__table2[data-id="' + dataID + '"]').remove();
		$('.calculate__item2[data-id="' + dataID + '"]').removeClass('calculate__active-btn2');

		if ($('.calculate__active-btn2').length < 1) {
			$('.value__block-wrap--hidden2').fadeOut();
			// $('.calculate__discount-wrap').animate({
			// 	opacity: 0
			// })
		}
	})

	$('html').on('click', '.value__item-wrap-us2', function () {
		if ($(this).hasClass('active-btn')) {
			return false;
		}else {
			$(this).addClass('active-btn').siblings().removeClass('active-btn');

			var prodPrice = $(this).parents('.value__table2').find('.value__price span');
			var prodPriceOld = $(this).parents('.value__table2').find('.value__price-old span');
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

			var prodPrice = $(this).parents('.value__table2').find('.value__price span');
			var prodPriceOld = $(this).parents('.value__table2').find('.value__price-old span');
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

			// console.log(itog);

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
		console.log(zzzz)

		$('.calcul_img[data-i="' + zzzz + '"]').addClass('active-img').siblings().removeClass('active-img');
	})

}

});
