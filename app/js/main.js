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
	});
	ipad.click(function(){
		ipadModel.addClass('model').siblings().removeClass('model');
		$('.calculate__ipad').addClass('active-img').siblings().removeClass('active-img');
		buttonsWidth();

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');
	});
	samsung.click(function(){
		samsungModel.addClass('model').siblings().removeClass('model');
		$('.calculate__andriod').addClass('active-img').siblings().removeClass('active-img');
		buttonsWidth();

		$(this).addClass('active-btn').siblings().removeClass('active-btn');

		$('.calculate__item').removeClass('calculate__active-btn');
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
		chargingPort = _this.data("charging-port"),
		microphone = _this.data("microphone"),
		homeButton = _this.data("home-button"),
		speaker = _this.data("speaker"),
		sideButton = _this.data("side-button"),
		powerButton = _this.data("power-button"),
		quietSound = _this.data("quiet-sound"),
		battery = _this.data("battery"),
		photoCamera = _this.data("photo-camera"),
		headphonePort = _this.data("headphone-port");
		// var crackedScreen = _this.data();
		// console.log(crackedScreen);

		return putDatePrice();
	}

	function putDatePrice(){
		$('.cracked-screen').attr('data-price', crackedScreen);
		$('.charging-port').attr('data-price', chargingPort);
		$('.microphone').attr('data-price', microphone);
		$('.home-button').attr('data-price', homeButton);
		$('.speaker').attr('data-price', speaker);
		$('.side-button').attr('data-price', sideButton);
		$('.power-button').attr('data-price', powerButton);
		$('.quiet-sound').attr('data-price', quietSound);
		$('.battery').attr('data-price', battery);
		$('.photo-camera').attr('data-price', photoCamera);
		$('.headphone-port').attr('data-price', headphonePort);
	}

	$('.calculate__item').click(function(){
		var priceValue = $(this).data('price');
		// var counter = 0;		

		$('.value__price span').text(priceValue);

		



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
}

calculator();


})