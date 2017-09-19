$(document).ready(function() {

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
			breakpoint: 769,
			settings: {
				slidesToShow     : 2,
				slidesToScroll   : 1,
				arrows           : true
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow     : 1,
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
			breakpoint: 480,
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


$('#mainPhone').inputmask({ mask: "+7[(999)-999-99-99]", greedy: false});
$('#mainPhonePopup').inputmask("+7 (999) 999-99-99");
$('#culcPhone').inputmask({ mask: "+7[(999)-999-99-99]", greedy: false});


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


var calculator = function(){
	var iphone = $('.js-iphone'),
		ipad = $('.js-ipad'),
		samsung = $('.js-samsung'),
		iphoneModel = $('.js-iphoneModel'),
		ipadModel = $('.js-ipadModel'),
		samsungModel = $('.js-samsungModel');

	iphone.click(function(){
		iphoneModel.addClass('model').siblings().removeClass('model');
		$('.calculate__iphone').addClass('active-img').siblings().removeClass('active-img');
		buttonsWidth();

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		$('.calculate__left--phone').css(
			"display", "flex"
		).siblings().not('.calculate__right').css('display', 'none');
	});
	ipad.click(function(){
		ipadModel.addClass('model').siblings().removeClass('model');
		$('.calculate__ipad').addClass('active-img').siblings().removeClass('active-img');
		buttonsWidth();

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		$('.calculate__left--ipad').css(
			"display", "flex"
		).siblings().not('.calculate__right').css('display', 'none');

	});
	samsung.click(function(){
		samsungModel.addClass('model').siblings().removeClass('model');
		$('.calculate__andriod').addClass('active-img').siblings().removeClass('active-img');
		buttonsWidth();

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		$('.calculate__left--samsung').css(
			"display", "flex"
		).siblings().not('.calculate__right').css('display', 'none');
	});


	iphoneModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		getDatePrice();
	});
	ipadModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		getDatePrice();
	});
	samsungModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		getDatePrice();
	});


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

	$('.act').on('click', function(e){

		$(this).removeClass('act');

		if ($(this).hasClass('calculate__active-btn')) {
			// $(this).removeClass('calculate__active-btn');

			var i = 0;
			$('.calculate__active-btn').each(function(){

				i++;
				$(this).find('.calculate__counter').text(i);
				// console.log(i);
				var counterRemDiscount = $(this).find('.calculate__counter').text();
					counterRemDiscount = Number(counterRemDiscount);

				var elem = $(this).data('id'); // этот атрибут равен текущему счетчику кнопок в калькуляторе

				if (counterRemDiscount % 2 == 0) {

					var qqq = $(this).data('price'); // США
					qqq = Number(qqq);
					var yyy = $(this).data('ch-price'); // Китай
					yyy = Number(yyy);

					var obj1 = (qqq * 30) / 100;
					var qqq = qqq - obj1; // посчитали цену США

					var obj2 = (yyy * 30) / 100;
					var yyy = yyy - obj2; // посчитали цену Китай

					$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-us').attr('data-price', qqq); // записываем цену в атрибут для кнопки США
					$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-ch').attr('data-ch-price', yyy); // записываем цену в атрибут для кнопки Китай

					// $('.value__table[data-id="' + elem + '"]').fadeIn();
					$('.value__table[data-id="' + elem + '"]').find('.value__price span').text(qqq); // по дефолту записываем цену США
				}else {
					var qqq = $(this).data('price'); // США
					qqq = Number(qqq);
					var yyy = $(this).data('ch-price'); // Китай
					yyy = Number(yyy);

					$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-us').attr('data-price', qqq); // записываем цену в атрибут для кнопки США
					$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-ch').attr('data-ch-price', yyy); // записываем цену в атрибут для кнопки Китай

					// $('.value__table[data-id="' + elem + '"]').fadeIn();
					$('.value__table[data-id="' + elem + '"]').find('.value__price span').text(qqq); 
				}
			})

		}else{
			$(this).addClass('calculate__active-btn');
			var counter = $('.calculate__active-btn').length;
			$(this).find('.calculate__counter').text(counter);
		}

		var counter = $('.calculate__active-btn').length;

		if (counter > 0) {
			$('.calculate__discount-wrap').animate({
				opacity: 1
			}, 300);
		}else{
			$('.calculate__discount-wrap').animate({
				opacity: 0
			}, 300);
		}

		if ($('.calculate__item').hasClass('calculate__active-btn')) {
			$('.value__block-wrap--hidden').fadeIn();
			$('.recall-fon').fadeOut();
		}else{
			$('.value__block-wrap--hidden').fadeOut();
			$('.recall-fon').fadeIn();
		}

		var counterDiscount = $(this).find('.calculate__counter').text();
			counterDiscount = Number(counterDiscount);

		var elem = $(this).data('id'); // этот атрибут равен текущему счетчику кнопок в калькуляторе

		if ($(this).hasClass('calculate__active-btn')){
			if (counterDiscount % 2 == 0) {

				var qqq = $(this).data('price'); // США
				var qqq = Number(qqq);
				var yyy = $(this).data('ch-price'); // Китай
				var yyy = Number(yyy);

				var obj1 = (qqq * 30) / 100;
				var qqq = qqq - obj1; // посчитали цену США

				var obj2 = (yyy * 30) / 100;
				var yyy = yyy - obj2; // посчитали цену Китай

				$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-us').attr('data-price', qqq); // записываем цену в атрибут для кнопки США
				$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-ch').attr('data-ch-price', yyy); // записываем цену в атрибут для кнопки Китай

				$('.value__table[data-id="' + elem + '"]').fadeIn();
				$('.value__table[data-id="' + elem + '"]').find('.value__price span').text(qqq); // по дефолту записываем цену США
				$('.value__table[data-id="' + elem + '"]').find('.value__price span').attr("data-s", qqq);
				// var qqq = 0;
				var endPrice = $('.value__table[data-id="' + elem + '"]').find('.value__price span').text();
			    var endPrice = Number(endPrice);


			var idValPrice = $('#value__price span').text();
			var idValPrice = Number(idValPrice);
			var idValPrice = idValPrice + endPrice;
			$('#value__price span').text(idValPrice);
			}else{
				var qqq = $(this).data('price');
				var qqq = Number(qqq);
				var yyy = $(this).data('ch-price');

				$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-us').attr('data-price', qqq);
				$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-ch').attr('data-ch-price', yyy);

				$('.value__table[data-id="' + elem + '"]').fadeIn();
				$('.value__table[data-id="' + elem + '"]').find('.value__price span').text(qqq);
				$('.value__table[data-id="' + elem + '"]').find('.value__price span').attr("data-s", qqq);
			// var qqq = 0;
				var endPrice = $('.value__table[data-id="' + elem + '"]').find('.value__price span').text();
				var endPrice = Number(endPrice);
				// console.log(qqq);

				var idValPrice = $('#value__price span').text();
				var idValPrice = Number(idValPrice);
				var idValPrice = idValPrice + endPrice;
				$('#value__price span').text(idValPrice);
				}
			// if ($(this).hasClass('act')) {
			// }
			$(this).unbind('click');
		}else{
			// $('#value__price span').text(idValPrice);
			// e.preventDefault;
			// var qqq = $(this).data('price'); // США
			// 	var qqq = Number(qqq);
			// 	var yyy = $(this).data('ch-price'); // Китай
			// 	var yyy = Number(yyy);


				// console.log(qqq);
				// var qqq = (qqq * 100) / 70;
				// var qqq = qqq - obj1; // посчитали цену США

				// var yyy = (yyy * 100) / 70;
				// var yyy = yyy - obj2; // посчитали цену Китай



			// 	$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-us').attr('data-price', qqq);
			// 	$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-ch').attr('data-ch-price', yyy);
			// $('.value__table[data-id="' + elem + '"]').fadeOut();
			// $('.value__table[data-id="' + elem + '"]').find('.value__price span').text(qqq);
			// $('.value__table[data-id="' + elem + '"]').find('.value__price span').attr("data-s", qqq);



			// var endPrice = $('.value__table[data-id="' + elem + '"]').find('.value__price span').text(qqq);
			// var endPrice = Number(qqq);

			// var idValPrice = $('#value__price span').text();
			// var idValPrice = Number(idValPrice);
			// var idValPrice = idValPrice - endPrice;
			// $('#value__price span').text(idValPrice);
			// // console.log(endPrice);

			// var zalupa = 0;
			// var Dzalupa = 0;

			// $('.value__table[data-id="' + elem + '"]:visible').find('.value__price span').each(function(){
			// 	var zalupa = +$(this).text();
			// 	// var zalupa = Number(zalupa);
			// 	Dzalupa += zalupa;
			// 	console.log(Dzalupa);

			// 	// zalupa += huhu;
			// })

			
		}

		// var zalupa = 0;

		// $('.value__price span').each(function(){
		// 	var huhu = $(this).text();
		// 	var huhu = Number(huhu);
		// 	console.log(huhu);

		// 	zalupa += huhu;
		// })

		// $('#value__price span').text(zalupa);

	})

	// $('.calculate__active-btn').on('click', function(){
	// 	var elem = $(this).data('id');
	// 		$('.value__table[data-id="' + elem + '"]').fadeOut();

	// 		var endPrice = $('.value__table[data-id="' + elem + '"]').find('.value__price span').text();
	// 		endPrice = Number(endPrice);

	// 		var idValPrice = $('#value__price span').text();
	// 		idValPrice = Number(idValPrice);
	// 		idValPrice -= endPrice;
	// 		$('#value__price span').text(idValPrice);
	// })

	$('.value__close').on('click', function(){
		var elem = $(this).parents('.value__table').data('id');
		$(this).parents('.value__table').fadeOut();

		$('.calculate__item[data-id="' + elem + '"]').removeClass('calculate__active-btn');
		$('.calculate__item[data-id="' + elem + '"]').bind('click', function(e){

		$(this).removeClass('act');

		if ($(this).hasClass('calculate__active-btn')) {
			// $(this).removeClass('calculate__active-btn');

			var i = 0;
			$('.calculate__active-btn').each(function(){

				i++;
				$(this).find('.calculate__counter').text(i);
				// console.log(i);
				var counterRemDiscount = $(this).find('.calculate__counter').text();
					counterRemDiscount = Number(counterRemDiscount);

				var elem = $(this).data('id'); // этот атрибут равен текущему счетчику кнопок в калькуляторе

				if (counterRemDiscount % 2 == 0) {

					var qqq = $(this).data('price'); // США
					qqq = Number(qqq);
					var yyy = $(this).data('ch-price'); // Китай
					yyy = Number(yyy);

					var obj1 = (qqq * 30) / 100;
					var qqq = qqq - obj1; // посчитали цену США

					var obj2 = (yyy * 30) / 100;
					var yyy = yyy - obj2; // посчитали цену Китай

					$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-us').attr('data-price', qqq); // записываем цену в атрибут для кнопки США
					$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-ch').attr('data-ch-price', yyy); // записываем цену в атрибут для кнопки Китай

					// $('.value__table[data-id="' + elem + '"]').fadeIn();
					$('.value__table[data-id="' + elem + '"]').find('.value__price span').text(qqq); // по дефолту записываем цену США
				}else {
					var qqq = $(this).data('price'); // США
					qqq = Number(qqq);
					var yyy = $(this).data('ch-price'); // Китай
					yyy = Number(yyy);

					$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-us').attr('data-price', qqq); // записываем цену в атрибут для кнопки США
					$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-ch').attr('data-ch-price', yyy); // записываем цену в атрибут для кнопки Китай

					// $('.value__table[data-id="' + elem + '"]').fadeIn();
					$('.value__table[data-id="' + elem + '"]').find('.value__price span').text(qqq); 
				}
			})

		}else{
			$(this).addClass('calculate__active-btn');
			var counter = $('.calculate__active-btn').length;
			$(this).find('.calculate__counter').text(counter);
		}

		var counter = $('.calculate__active-btn').length;

		if (counter > 0) {
			$('.calculate__discount-wrap').animate({
				opacity: 1
			}, 300);
		}else{
			$('.calculate__discount-wrap').animate({
				opacity: 0
			}, 300);
		}

		if ($('.calculate__item').hasClass('calculate__active-btn')) {
			$('.value__block-wrap--hidden').fadeIn();
			$('.recall-fon').fadeOut();
		}else{
			$('.value__block-wrap--hidden').fadeOut();
			$('.recall-fon').fadeIn();
		}

		var counterDiscount = $(this).find('.calculate__counter').text();
			counterDiscount = Number(counterDiscount);

		var elem = $(this).data('id'); // этот атрибут равен текущему счетчику кнопок в калькуляторе

		if ($(this).hasClass('calculate__active-btn')){
			if (counterDiscount % 2 == 0) {

				var qqq = $(this).data('price'); // США
				var qqq = Number(qqq);
				var yyy = $(this).data('ch-price'); // Китай
				var yyy = Number(yyy);

				var obj1 = (qqq * 30) / 100;
				var qqq = qqq - obj1; // посчитали цену США

				var obj2 = (yyy * 30) / 100;
				var yyy = yyy - obj2; // посчитали цену Китай

				$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-us').attr('data-price', qqq); // записываем цену в атрибут для кнопки США
				$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-ch').attr('data-ch-price', yyy); // записываем цену в атрибут для кнопки Китай

				$('.value__table[data-id="' + elem + '"]').fadeIn();
				$('.value__table[data-id="' + elem + '"]').find('.value__price span').text(qqq); // по дефолту записываем цену США
				$('.value__table[data-id="' + elem + '"]').find('.value__price span').attr("data-s", qqq);
				// var qqq = 0;
				var endPrice = $('.value__table[data-id="' + elem + '"]').find('.value__price span').text();
			    var endPrice = Number(endPrice);


			var idValPrice = $('#value__price span').text();
			var idValPrice = Number(idValPrice);
			var idValPrice = idValPrice + endPrice;
			$('#value__price span').text(idValPrice);
			}else{
				var qqq = $(this).data('price');
				var qqq = Number(qqq);
				var yyy = $(this).data('ch-price');

				$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-us').attr('data-price', qqq);
				$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-ch').attr('data-ch-price', yyy);

				$('.value__table[data-id="' + elem + '"]').fadeIn();
				$('.value__table[data-id="' + elem + '"]').find('.value__price span').text(qqq);
				$('.value__table[data-id="' + elem + '"]').find('.value__price span').attr("data-s", qqq);
			// var qqq = 0;
				var endPrice = $('.value__table[data-id="' + elem + '"]').find('.value__price span').text();
				var endPrice = Number(endPrice);
				// console.log(qqq);

				var idValPrice = $('#value__price span').text();
				var idValPrice = Number(idValPrice);
				var idValPrice = idValPrice + endPrice;
				$('#value__price span').text(idValPrice);
				}
			// if ($(this).hasClass('act')) {
			// }
			$(this).unbind('click');
		}else{
			// $('#value__price span').text(idValPrice);
			// e.preventDefault;
			// var qqq = $(this).data('price'); // США
			// 	var qqq = Number(qqq);
			// 	var yyy = $(this).data('ch-price'); // Китай
			// 	var yyy = Number(yyy);


				// console.log(qqq);
				// var qqq = (qqq * 100) / 70;
				// var qqq = qqq - obj1; // посчитали цену США

				// var yyy = (yyy * 100) / 70;
				// var yyy = yyy - obj2; // посчитали цену Китай



			// 	$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-us').attr('data-price', qqq);
			// 	$('.value__table[data-id="' + elem + '"]').find('.value__item-wrap-ch').attr('data-ch-price', yyy);
			// $('.value__table[data-id="' + elem + '"]').fadeOut();
			// $('.value__table[data-id="' + elem + '"]').find('.value__price span').text(qqq);
			// $('.value__table[data-id="' + elem + '"]').find('.value__price span').attr("data-s", qqq);



			// var endPrice = $('.value__table[data-id="' + elem + '"]').find('.value__price span').text(qqq);
			// var endPrice = Number(qqq);

			// var idValPrice = $('#value__price span').text();
			// var idValPrice = Number(idValPrice);
			// var idValPrice = idValPrice - endPrice;
			// $('#value__price span').text(idValPrice);
			// // console.log(endPrice);

			// var zalupa = 0;
			// var Dzalupa = 0;

			// $('.value__table[data-id="' + elem + '"]:visible').find('.value__price span').each(function(){
			// 	var zalupa = +$(this).text();
			// 	// var zalupa = Number(zalupa);
			// 	Dzalupa += zalupa;
			// 	console.log(Dzalupa);

			// 	// zalupa += huhu;
			// })

			
		}

		// var zalupa = 0;

		// $('.value__price span').each(function(){
		// 	var huhu = $(this).text();
		// 	var huhu = Number(huhu);
		// 	console.log(huhu);

		// 	zalupa += huhu;
		// })

		// $('#value__price span').text(zalupa);

	})

		var endPrice = $('.value__table[data-id="' + elem + '"]').find('.value__price span').text();
		endPrice = Number(endPrice);

		var idValPrice = $('#value__price span').text();
		idValPrice = Number(idValPrice);
		idValPrice -= endPrice;
		$('#value__price span').text(idValPrice);

		if ($('.value__table:visible').length < 2) {
			$('.value__block-wrap--hidden').fadeOut();
			$('.recall-fon').fadeIn();
			$('.calculate__discount-wrap').animate({
				opacity: 0
			}, 300)
		}

		var i = 0;
		$('.calculate__active-btn').each(function(){

		i++;
		$(this).find('.calculate__counter').text(i);
		// console.log(i);
		var counterRemDiscount = $(this).find('.calculate__counter').text();
			counterRemDiscount = Number(counterRemDiscount);
		})
	});


	$('.value__ebala').find('.value__item-wrap-us').click(function(){
		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		var dataUSA = $(this).parents('.value__table').find('.value__item-wrap-us').data('price');
		var dataCH = $(this).parents('.value__table').find('.value__item-wrap-ch').data('ch-price');
		var idValPrice = $('#value__price span').text();

		$(this).parents('.value__table').find('.value__price span').text(dataUSA);

		if ($(this).hasClass('active-btn')) {
			dataUSA = Number(dataUSA);
			dataCH = Number(dataCH);
			idValPrice = Number(idValPrice);
			idValPrice += dataUSA - dataCH;
			$('#value__price span').text(idValPrice);
		}
	});

	$('.value__ebala').find('.value__item-wrap-ch').click(function(){
		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		var dataUSA = $(this).parents('.value__table').find('.value__item-wrap-us').data('price');
		var dataCH = $(this).parents('.value__table').find('.value__item-wrap-ch').data('ch-price');
		var idValPrice = $('#value__price span').text();

		console.log(dataCH);

		$(this).parents('.value__table').find('.value__price span').text(dataCH);

		if ($(this).hasClass('active-btn')) {
			dataCH = Number(dataCH);
			dataUSA = Number(dataUSA);
			idValPrice = Number(idValPrice);
			idValPrice += dataCH - dataUSA;
			$('#value__price span').text(idValPrice);
		}
	});

}

calculator();

});
