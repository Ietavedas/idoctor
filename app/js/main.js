$(document).ready(function() {

setSize();

buttonsWidth();

$(window).resize(function(){
	setSize();
})
	

function setSize(){
	var windowWindth = $(window).width();
	var windowHeight = $(window).height();

	$('.js-wrap').css({
		'width' : windowWindth,
		'height' : windowHeight
	})
}

$('.slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: true,
	appendArrows: $('.slider-control')
});


function buttonsWidth(){
	$('.value__item-wrap').each(function(){
		$(this).css('width', $(this).find('span').width() + 20);
	})
}


$('#mainPhone').inputmask("+7 (999) 999-99-99");


$('.main-contact__qewstion-top').click(function(){
	var elem = $(this).parents('.main-contact__qewstion-block').find('.main-contact__qewstion-bottom');

	if (elem.is(":hidden")) {
		$('.main-contact__qewstion-bottom').hide('slow'),
		elem.show('slow')
	}else{
		$('.main-contact__qewstion-bottom').hide('slow')
	}
	
})

$('#morphing').fancybox();


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
		// var crackedScreen = $(this).parent('.js-iphoneModel').find('.active-btn').data('cracked-screen');
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
		// var crackedScreen = _this.data();
		// console.log(crackedScreen);

		return putDatePrice();
	}

	function putDatePrice(){
		$('.cracked-screen').attr('data-price', crackedScreen);
		$('.housing').attr('data-price', housing);
		$('.microphone').attr('data-price', microphone);
		$('.home-button').attr('data-price', homeButton);
		$('.broken-glass').attr('data-price', brokenGlass);
		$('.diagnostics').attr('data-price', diagnostics);
		$('.power-button').attr('data-price', powerButton);
		$('.quiet-sound').attr('data-price', quietSound);
		$('.battery').attr('data-price', battery);
		$('.photo-camera').attr('data-price', photoCamera);
		$('.other').attr('data-price', other);
	}

	$('.calculate__item').click(function(){
		// var priceValue = $(this).data('price');
		// var counter = 0;		

		// $('.value__price span').text(priceValue);
		

		if ($(this).hasClass('calculate__active-btn')) {
			$(this).removeClass('calculate__active-btn');
			// var counter = $('.calculate__active-btn').length;
			// $(this).find('.calculate__counter').text(counter);
			var i = 0;
			$('.calculate__active-btn').each(function(){
				i++;
				$(this).find('.calculate__counter').text(i)
			})
				// for( var i=0; i<=counter; i++){
				// 	$('.calculate__counter').text(i);
				// }
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
	})

	$('.broken-glass').click(function(){

		idValPrice = $('#value__price span');

		if ($(this).hasClass('calculate__active-btn')) {
			var priceValue1 = $(this).data('price');
			$('.table-1').fadeIn();
			$('.table-1').find('.value__price span').text(priceValue1);

			idValPrice.val() + priceValue1;

		}else{
			$('.table-1').fadeOut();
		}
	})
	$('.cracked-screen').click(function(){
		if ($(this).hasClass('calculate__active-btn')) {
			var priceValue2 = $(this).data('price');
			$('.table-2').fadeIn();
			$('.table-2').find('.value__price span').text(priceValue2);

			idValPrice.val() + priceValue2;
		}else{
			$('.table-2').fadeOut();
		}
	})
	$('.battery').click(function(){
		if ($(this).hasClass('calculate__active-btn')) {
			var priceValue3 = $(this).data('price');
			$('.table-3').fadeIn();
			$('.table-3').find('.value__price span').text(priceValue3);

		}else{
			$('.table-3').fadeOut();
		};
	})
	$('.diagnostics').click(function(){
		if ($(this).hasClass('calculate__active-btn')) {
			var priceValue4 = $(this).data('price');
			$('.table-4').fadeIn();
			$('.table-4').find('.value__price span').text(priceValue4);

		}else{
			$('.table-4').fadeOut();
		}
	})
	$('.power-button').click(function(){
		if ($(this).hasClass('calculate__active-btn')) {
			var priceValue5 = $(this).data('price');
			$('.table-5').fadeIn();
			$('.table-5').find('.value__price span').text(priceValue5);

		}else{
			$('.table-5').fadeOut();
		}
	})
	$('.quiet-sound').click(function(){
		if ($(this).hasClass('calculate__active-btn')) {
			var priceValue6 = $(this).data('price');
			$('.table-6').fadeIn();
			$('.table-6').find('.value__price span').text(priceValue6);

		}else{
			$('.table-6').fadeOut();
		}
	})
	$('.photo-camera').click(function(){
		if ($(this).hasClass('calculate__active-btn')) {
			var priceValue7 = $(this).data('price');
			$('.table-7').fadeIn();
			$('.table-7').find('.value__price span').text(priceValue7);

		}else{
			$('.table-7').fadeOut();
		}
	})
	$('.home-button').click(function(){
		if ($(this).hasClass('calculate__active-btn')) {
			var priceValue8 = $(this).data('price');
			$('.table-8').fadeIn();
			$('.table-8').find('.value__price span').text(priceValue8);

		}else{
			$('.table-8').fadeOut();
		}
	})
	$('.microphone').click(function(){
		if ($(this).hasClass('calculate__active-btn')) {
			var priceValue9 = $(this).data('price');
			$('.table-9').fadeIn();
			$('.table-9').find('.value__price span').text(priceValue9);

		}else{
			$('.table-9').fadeOut();
		}
	})
	$('.housing').click(function(){
		if ($(this).hasClass('calculate__active-btn')) {
			var priceValue10 = $(this).data('price');
			$('.table-10').fadeIn();
			$('.table-10').find('.value__price span').text(priceValue10);

		}else{
			$('.table-10').fadeOut();
		}
	})
	$('.other').click(function(){
		if ($(this).hasClass('calculate__active-btn')) {
			var priceValue11 = $(this).data('price');
			$('.table-11').fadeIn();
			$('.table-11').find('.value__price span').text(priceValue11);

		}else{
			$('.table-11').fadeOut();
		}
	})

	$('.value__close').on('click', function(){

		var _this_1 = $('.broken-glass'),
		 _this_2 = $('.cracked-screen'),
		 _this_3 = $('.battery'),
		 _this_4 = $('.diagnostics'),
		 _this_5 = $('.power-button'),
		 _this_6 = $('.quiet-sound'),
		 _this_7 = $('.photo-camera'),
		 _this_8 = $('.home-button'),
		 _this_9 = $('.microphone'),
		 _this_10 = $('.housing'),
		 _this_11 = $('.other');

		if ( $(this).parent().hasClass('table-1') ) { _this_1.removeClass('calculate__active-btn') }
		if ( $(this).parent().hasClass('table-2') ) { _this_2.removeClass('calculate__active-btn') }
		if ( $(this).parent().hasClass('table-3') ) { _this_3.removeClass('calculate__active-btn') }
		if ( $(this).parent().hasClass('table-4') ) { _this_4.removeClass('calculate__active-btn') }
		if ( $(this).parent().hasClass('table-5') ) { _this_5.removeClass('calculate__active-btn') }
		if ( $(this).parent().hasClass('table-6') ) { _this_6.removeClass('calculate__active-btn') }
		if ( $(this).parent().hasClass('table-7') ) { _this_7.removeClass('calculate__active-btn') }
		if ( $(this).parent().hasClass('table-8') ) { _this_8.removeClass('calculate__active-btn') }
		if ( $(this).parent().hasClass('table-9') ) { _this_9.removeClass('calculate__active-btn') }
		if ( $(this).parent().hasClass('table-10') ) { _this_10.removeClass('calculate__active-btn') }
		if ( $(this).parent().hasClass('table-11') ) { _this_11.removeClass('calculate__active-btn') }

		$(this).parent().fadeOut();
	})

	

}

calculator();


})