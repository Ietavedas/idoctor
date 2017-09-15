$(document).ready(function() {

setSize();

buttonsWidth();

// if ($(window).outerWidth() < 1080) {
// 	$('.method__images').addClass('js-method');
// }else{
// 	$('.method__images').removeClass('js-method');
// }

	slidesMethod();
// if($(window).outerWidth() < 769){
// }



$(window).resize(function(){
	setSize();
	


	if ($(window).outerWidth() > 480) {
		slidesMethodUnslick();
	}else{
		slidesMethod();
	}
})
	

function setSize(){
	var windowWindth = $(window).outerWidth();
	var windowHeight = $(window).height();

	if (windowWindth > 1080) {
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
			breakpoint: 480,
			settings: {
				slidesToShow     : 1,
				slidesToScroll   : 1,
				arrows           : false
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
				arrows           : false
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


$('#mainPhone').inputmask({ mask: "+9[(999)-999-99-99]", greedy: false});
$('#mainPhonePopup').inputmask("+7 (999) 999-99-99");


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

		if ($('.calculate__item').hasClass('calculate__active-btn')) {
			$('.value__block-wrap--hidden').fadeIn();
		}else{
			$('.value__block-wrap--hidden').fadeOut();
		}

		//тут ска

		// var arr = $('.value__price span');
		// var arr = $('.value__price span');

		// // console.log(arr);
		// Number(arr);

		// for (i = 0; i < arr.length; i++) {

		// 	parseFloat(arr[i]);
		// 	console.log(arr[i]);

		// 	if ( arr[i] % 2 == 0 ) {

		// 		// console.log( arr[i] );

		// 		// console.log('!!!');

		// 	}

		// }

		// if ($('.value__table').is(':visible').length == 2) {
			
		// }
	})

	idValPrice = $('#value__price span').text();
	var idValPrice = Number(idValPrice);
	// console.log(idValPrice);

	$('.broken-glass').click(function(){

		var priceValue1 = $(this).data('price');
		var priceValue1 = Number(priceValue1);

		if ($(this).hasClass('calculate__active-btn')) {
			$('.table-1').fadeIn();
			$('.table-1').find('.value__price span').text(priceValue1);

			idValPrice += +priceValue1;

			$('#value__price span').text(idValPrice);

		}else{
			$('.table-1').fadeOut();

			idValPrice -= +priceValue1;

			$('#value__price span').text(idValPrice);
		}
	})
	$('.cracked-screen').click(function(){

		var priceValue2 = $(this).data('price');
		var priceValue2 = Number(priceValue2);
		if ($(this).hasClass('calculate__active-btn')) {
			$('.table-2').fadeIn();
			$('.table-2').find('.value__price span').text(priceValue2);

			idValPrice += +priceValue2 - 30%;

			$('#value__price span').text(idValPrice);

			// idValPrice.val() + priceValue2;
		}else{
			$('.table-2').fadeOut();
			idValPrice -= +priceValue2 - 30%;

			$('#value__price span').text(idValPrice);
		}
	})
	$('.battery').click(function(){
		var priceValue3 = $(this).data('price');
		var priceValue3 = Number(priceValue3);
		if ($(this).hasClass('calculate__active-btn')) {
			$('.table-3').fadeIn();
			$('.table-3').find('.value__price span').text(priceValue3);

			idValPrice += +priceValue3;

			$('#value__price span').text(idValPrice);

		}else{
			$('.table-3').fadeOut();
			idValPrice -= +priceValue3;

			$('#value__price span').text(idValPrice);
		};
	})
	$('.diagnostics').click(function(){
		var priceValue4 = $(this).data('price');
		var priceValue4 = Number(priceValue4);
		if ($(this).hasClass('calculate__active-btn')) {
			$('.table-4').fadeIn();
			$('.table-4').find('.value__price span').text(priceValue4);

			idValPrice += +priceValue4;

			$('#value__price span').text(idValPrice);

		}else{
			$('.table-4').fadeOut();
			idValPrice -= +priceValue4;

			$('#value__price span').text(idValPrice);
		}
	})
	$('.power-button').click(function(){
		var priceValue5 = $(this).data('price');
		var priceValue5 = Number(priceValue5);
		if ($(this).hasClass('calculate__active-btn')) {
			$('.table-5').fadeIn();
			$('.table-5').find('.value__price span').text(priceValue5);

			idValPrice += +priceValue5;

			$('#value__price span').text(idValPrice);

		}else{
			$('.table-5').fadeOut();
			idValPrice -= +priceValue5;

			$('#value__price span').text(idValPrice);
		}
	})
	$('.quiet-sound').click(function(){
		var priceValue6 = $(this).data('price');
		var priceValue6 = Number(priceValue6);
		if ($(this).hasClass('calculate__active-btn')) {
			$('.table-6').fadeIn();
			$('.table-6').find('.value__price span').text(priceValue6);

			idValPrice += +priceValue6;

			$('#value__price span').text(idValPrice);

		}else{
			$('.table-6').fadeOut();
			idValPrice -= +priceValue6;

			$('#value__price span').text(idValPrice);
		}
	})
	$('.photo-camera').click(function(){
		var priceValue7 = $(this).data('price');
		var priceValue7 = Number(priceValue7);
		if ($(this).hasClass('calculate__active-btn')) {
			$('.table-7').fadeIn();
			$('.table-7').find('.value__price span').text(priceValue7);

			idValPrice += +priceValue7;

			$('#value__price span').text(idValPrice);

		}else{
			$('.table-7').fadeOut();
			idValPrice -= +priceValue7;

			$('#value__price span').text(idValPrice);
		}
	})
	$('.home-button').click(function(){
		var priceValue8 = $(this).data('price');
		var priceValue8 = Number(priceValue8);
		if ($(this).hasClass('calculate__active-btn')) {
			$('.table-8').fadeIn();
			$('.table-8').find('.value__price span').text(priceValue8);

			idValPrice += +priceValue8;

			$('#value__price span').text(idValPrice);

		}else{
			$('.table-8').fadeOut();
			idValPrice -= +priceValue8;

			$('#value__price span').text(idValPrice);
		}
	})
	$('.microphone').click(function(){
		var priceValue9 = $(this).data('price');
		var priceValue9 = Number(priceValue9);
		if ($(this).hasClass('calculate__active-btn')) {
			$('.table-9').fadeIn();
			$('.table-9').find('.value__price span').text(priceValue9);

			idValPrice += +priceValue9;

			$('#value__price span').text(idValPrice);

		}else{
			$('.table-9').fadeOut();
			idValPrice -= +priceValue9;

			$('#value__price span').text(idValPrice);
		}
	})
	$('.housing').click(function(){
		var priceValue10 = $(this).data('price');
		var priceValue10 = Number(priceValue10);
		if ($(this).hasClass('calculate__active-btn')) {
			$('.table-10').fadeIn();
			$('.table-10').find('.value__price span').text(priceValue10);

			idValPrice += +priceValue10;

			$('#value__price span').text(idValPrice);

		}else{
			$('.table-10').fadeOut();
			idValPrice -= +priceValue10;

			$('#value__price span').text(idValPrice);
		}
	})
	$('.other').click(function(){
		var priceValue11 = $(this).data('price');
		var priceValue11 = Number(priceValue11);
		if ($(this).hasClass('calculate__active-btn')) {
			$('.table-11').fadeIn();
			$('.table-11').find('.value__price span').text(priceValue11);

			idValPrice += +priceValue11;

			$('#value__price span').text(idValPrice);

		}else{
			$('.table-11').fadeOut();
			idValPrice -= +priceValue11;

			$('#value__price span').text(idValPrice);
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

		rmPrice = $(this).parent('.value__table').find('.value__price span').text();

		idValPrice -= +rmPrice;

		$('#value__price span').text(idValPrice);

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

		// if ($('.value__table').is(':visible').length == 0) {
		// 	$('.value__block-wrap--hidden').fadeOut();
		// }
	})

}

calculator();

});