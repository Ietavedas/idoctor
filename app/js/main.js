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

$("#mainPhonePopup").mask("+7(999)-999-99-99",{placeholder:" "});
$("#mainPhone").mask("+7(999)-999-99-99",{placeholder:" "});
$("#culcPhone").mask("+7(999)-999-99-99",{placeholder:" "});


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

		$('#value__price span').text(0);
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

		$('#value__price span').text(0);
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

		$('#value__price span').text(0);
	});


	iphoneModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		getDatePrice();

		$('#value__price span').text(0);
	});
	ipadModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		getDatePrice();

		$('#value__price span').text(0);
	});
	samsungModel.find('.value__item-wrap').click(function(){

		_this = $(this);

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');

		getDatePrice();

		$('.create-object .value__table').remove();

		$('#value__price span').text(0);
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

	var datacount = 0;
	var ii = 0;
	var summCo = 0;
	var summ = $('#value__price span').text();

	$('.calculate__item').on('click', function () {

		dataID = $(this).data('id');
		var dataName = $(this).data('name'),
			imgClass = $(this).data('class'),
			usPrice = $(this).data('price'),
			chPrice = $(this).data('ch-price');

			// console.log(chPrice);

		if ($(this).hasClass('calculate__active-btn')) {

			var x =$(this).data('datacount');

			$(this).removeClass('calculate__active-btn');

			// $('.value__table').each(function( index, element){})
			// ii++;
			// var dataN = $(this).data('datacount', datacount);
			// Number(dataN);
				
			// if ( datacount > x ) {
			// 	console.log("datacount :" + datacount);
			// 	console.log("x : " + x);

			// 	datacount = datacount - 1;
				
			// 	console.log("datacount после :" + datacount);

			// 	$(this).attr('data-datacount', datacount);
			// 	console.log(datacount);

			// 	$('.calculate__item[data-id="' + dataID + '"]').attr('data-datacount', datacount);
			// }

			var createObject = $('.create-object');

			var count = [];

			// count = createObject.find('.value__table').filter(':odd').addClass('D');
			count = createObject.find('.value__table[data-id="' + dataID + '"] span');

			if (count.hasClass('D')) {

				count.each(function(index, element){

					// console.log($(this));
					// console.log(count);

					$(element).find('.value__price-old span').text("");
					// console.log("222");

					usPrice = Number(usPrice);
					chPrice = Number(chPrice);

					// console.log($(element));
					// var obj1 = (usPrice * 100) / 70;
					// var qqq = usPrice - obj1; // посчитали цену США

					// var obj2 = (yyy * 100) / 70;
					// var yyy = yyy - obj2; // посчитали цену Китай

					$(element).find('.value__price .D').text(usPrice);
					$(element).find('.value__price span').removeClass('D');

					var end = $(element).find('.value__price span').text();
					summCo = summCo - +end;
					$('#value__price span').text(summCo);
				
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

					$(element).find('.value__price span').text(qqq);
					$(element).find('.value__price span').removeClass('D');
				
				})
			}

			var end = $('.value__table[data-id="' + dataID + '"]').find('.value__price span').text();
			summCo = summCo - +end;
			$('#value__price span').text(summCo);

						// console.log(end);

			$('.value__table[data-id="' + dataID + '"]').remove();
			ii--;

		}else{

			$(this).addClass('calculate__active-btn');

			datacount++;

			$(this).attr('data-datacount', datacount);

			//обложка таблицы
			var createObject = $('.create-object');

			// создаем внутренние элементы таблицы
			createObject.prepend('<div class="value__table" data-datacount="' + datacount + '" data-id="' + dataID + '"><div class="value__close"></div><div class="value__table-row"><div class="value__table-finish"><div class="value__content"><div class="value__ebala"><div class="value__ebala-detail ' + imgClass + '"><span>' + dataName + '</span></div></div></div></div><div class="value__table-finish"><div class="value__content"><div class="value__ebala"><div class="value__item-wrap active-btn" data-price="' + usPrice + '"><span>США</span></div><div class="value__item-wrap" data-ch-price="' + chPrice + '"><span>Китай</span></div></div></div></div><div class="value__table-finish"><div class="value__content"><div class="value__ebala"><div class="value__price-old"><span></span></div><div class="value__price"><span></span></div></div></div></div></div></div>');

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

					$(element).find('.value__price span').text(qqq);
					$(element).find('.value__price span').addClass('D');

					var end = $(element).find('.value__price span').text();
					summCo = summCo + +end;
					$('#value__price span').text(summCo);

				}else{
					$(element).find('.value__price-old span').text("");
					$(element).find('.value__price span').text(usPrice);

					var end = $(element).find('.value__price span').text();
					summCo = summCo + +end;
					$('#value__price span').text(summCo);
				}
			})	
		}

		if ($('.calculate__active-btn').length > 0) {
			$('.value__block-wrap--hidden').fadeIn();
		}else{
			$('.value__block-wrap--hidden').fadeOut();
		}

		// $('.value__item-wrap').each(function(){
		// 	if ($('.value__item-wrap').data('price') == "0") {
		// 		$(this).css('display', 'none');
		// 	}

		// 	if ($('.value__item-wrap').data('ch-price') == "0") {
		// 		$(this).css('display', 'none');
		// 	}
		// console.log($('.value__item-wrap').data('price'));
		// })

		if ($(this).data('price') == 0) {
			console.log(777);
			$('.create-object').find('.value__table[data-id="' + dataID + '"]').find('.value__item-wrap[data-price="' + usPrice + '"]').css('display', 'none');
		}
			console.log($(this).data('ch-price'));

		if ($(this).data('ch-price') == 0) {
			console.log($('.create-object').find('.value__table[data-id="' + dataID + '"]').find('.value__item-wrap[data-price="' + chPrice + '"]'));
			$('.create-object').find('.value__table[data-id="' + dataID + '"]').find('.value__item-wrap[data-price="' + chPrice + '"]').css('display', 'none');
		}else{
			$('.create-object').find('.value__table[data-id="' + dataID + '"]').find('.value__item-wrap[data-price="' + chPrice + '"]').css('display', 'none');
		}
		

	});

	$('html').on('click', '.value__close', function () {

		dataID = $(this).parent().data('id');

		var end = $('.value__table[data-id="' + dataID + '"]').find('.value__price span').text();
			summCo = summCo - +end;
			$('#value__price span').text(summCo);

		$(this).parent('.value__table[data-id="' + dataID + '"]').remove();
		$('.calculate__item[data-id="' + dataID + '"]').removeClass('calculate__active-btn');

		if ($('.calculate__active-btn').length < 1) {
			$('.value__block-wrap--hidden').fadeOut();
		}
	})

}

calculator();

});
