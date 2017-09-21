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

	$('.calculate__item').on('click', function () {

			dataID = $(this).data('id');
			var dataName = $(this).data('name'),
					imgClass = $(this).data('class'),
					usPrice = $(this).data('price'),
					chPrice = $(this).data('ch-price');

			usPrice = Number(usPrice);
			chPrice = Number(chPrice);

			var obj1 = (qqq * 30) / 100;
			var qqq = qqq - obj1; // посчитали цену США

			var obj2 = (yyy * 30) / 100;
			var yyy = yyy - obj2; // посчитали цену Китай



			if ($(this).hasClass('calculate__active-btn')) {

					$(this).removeClass('calculate__active-btn');

					$('.value__table[data-id="' + dataID + '"]').remove();

			}else{

					$(this).addClass('calculate__active-btn');

					//обложка таблицы
					var createObject = $('.create-object');

					// создаем внутренние элементы таблицы
					createObject.prepend('<div class="value__table" data-id="' + dataID + '"><div class="value__close"></div><div class="value__table-row"><div class="value__table-finish"><div class="value__content"><div class="value__ebala"><div class="value__ebala-detail ' + imgClass + '"><span>' + dataName + '</span></div></div></div></div><div class="value__table-finish"><div class="value__content"><div class="value__ebala"><div class="value__item-wrap active-btn"><span>США</span></div></div></div></div><div class="value__table-finish"><div class="value__content"><div class="value__ebala"><div class="value__price-old"><span></span></div><div class="value__price"><span>' + usPrice + '</span></div></div></div></div></div></div>');

					var count = [];

					count = createObject.find('.value__table');

					for (var i = 0; i < count.length; i += 2) {
			      count[i].style.background = "red";
			    }


					console.log(count);

			}

			// $('.create-object').find('.value__table').filter(":odd").find('.value__price').css('color', 'red');

	});

	$('html').on('click', '.value__close', function () {
			$(this).parent('.value__table').remove();
	})

}

calculator();

});
