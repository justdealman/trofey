/*function slider() {
	$('.slider .temp > div').each(function() {
		var path = $(this).children('img').attr('src');
		$(this).css({
			'background': 'url("'+path+'") no-repeat center center'
		});
	})
	$('.slider .container').empty();
	$('.slider .prev, .slider .next, .slider .pagination').remove();
	$('.slider .container').html($('.slider .temp').html());
	$('.slider, .slider .container, .slider .container > div').width($('.wrapper').width());
	$('.slider').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuad',
		play: 10000,
		pause: 2500,
	});
}*/
$(function() {	
	/*$('.slider-i .main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: false,
		asNavFor: '.slider-i .preview'
	});*/
	$('.slider-i .preview').slick({
		slidesToShow: 14,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1597,
				settings: {
					slidesToShow: 13
				}
			}, {
				breakpoint: 1499,
				settings: {
					slidesToShow: 12
				}
			}, {
				breakpoint: 1401,
				settings: {
					slidesToShow: 11
				}
			}, {
				breakpoint: 1303,
				settings: {
					slidesToShow: 11
				}
			}, {
				breakpoint: 1205,
				settings: {
					slidesToShow: 10
				}
			}, {
				breakpoint: 1107,
				settings: {
					slidesToShow: 9
				}
			}, {
				breakpoint: 1009,
				settings: {
					slidesToShow: 8
				}
			}, {
				breakpoint: 911,
				settings: {
					slidesToShow: 7
				}
			}, {
				breakpoint: 813,
				settings: {
					slidesToShow: 6
				}
			}, {
				breakpoint: 777,
				settings: {
					slidesToShow: 10
				}
			}, {
				breakpoint: 720,
				settings: {
					slidesToShow: 9
				}
			}, {
				breakpoint: 720,
				settings: {
					slidesToShow: 9
				}
			}, {
				breakpoint: 660,
				settings: {
					slidesToShow: 8
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 7
				}
			}, {
				breakpoint: 540,
				settings: {
					slidesToShow: 6
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 5
				}
			}, {
				breakpoint: 420,
				settings: {
					slidesToShow: 4
				}
			}
		]
	});
	$('.product-b .reviews-l .buyed').slick({
		slidesToShow: 16,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1377,
				settings: {
					slidesToShow: 14
				}
			}, {
				breakpoint: 1101,
				settings: {
					slidesToShow: 7
				}
			}, {
				breakpoint: 777,
				settings: {
					slidesToShow: 4
				}
			}
		]
	});
	$('.contacts-l .address .core .photos').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 777,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.club-b .photos > div').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 777,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.product-b .slider .core').each(function() {
		$(this).slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			infinite: true,
			arrows: true,
			dots: false,
			responsive: [
				{
					breakpoint: 1597,
					settings: {
						slidesToShow: 5
					}
				}, {
					breakpoint: 1377,
					settings: {
						slidesToShow: 4
					}
				}
			]
		});
	});
	$('.img-bg').each(function() {
		if ( !$(this).hasClass('contain') ) {
			var c = 'cover';
		} else {
			var c = 'contain';
		}
		$(this).parent().css({
			'background': 'url("'+$(this).attr('src')+'") no-repeat center center',
			'background-size': c
		});
	});
	$('.item-e .preview').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		vertical: true,
		verticalSwiping: true
	});
	$('.item-e .preview').each(function() {
		var t = $(this);
		t.find('.item > div').on('click', function() {
			var a = $(this).attr('data-p');
			t.find('.item > div').removeClass('active');
			t.find('.item > div[data-p="'+a+'"]').addClass('active');
			t.parents('.item-e').find('.main > div[data-m="'+a+'"]').show().siblings('div[data-m]').hide();
		}).filter('[data-p="1"]').click();
	});
	$(window).on('resize', function() {
		$(function() {
			if ( Modernizr.mq('(max-width:1377px)') && Modernizr.mq('(min-width:1102px)') ) {
				var m = 30;
			} else if ( Modernizr.mq('(max-width:1101px)') ) {
				var m = 16;
			} else{
				var m = 35;
			}
			$('.categories-i .col .item').each(function() {
				if ( !$(this).hasClass('tall') ) {
					var h = $(this).outerWidth();
				} else {
					var h = $(this).outerWidth()*2+m;
				}
				$(this).height(h).find('a').height(h);
			});
		});
	});
	$(window).on('load', function() {
		$('.franchise-b .slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			dots: true,
			adaptiveHeight: true
		});
		$('.franchise-b .support .core').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: true,
			dots: false,
			adaptiveHeight: true
		});
	});
	$('[data-card] .preview').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		responsive: [
			{
				breakpoint: 1101,
				settings: {
					vertical: false
				}
			}
		]
	});
	$('[data-card] [data-preview]').on('click', function(e) {
		e.preventDefault();
		var t = $(this).parents('[data-card]');
		var id = $(this).attr('data-preview');
		t.find('[data-big="'+id+'"]').addClass('active').siblings().removeClass('active');
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	$('[data-card] [data-slick-index="0"] [data-preview]').trigger('click');
	$('[data-card] .preview').on('afterChange', function() {
		var current = $(this).find('.item.active > div').attr('data-preview');
		$(this).find('.item > div[data-preview="'+current+'"]').parent().addClass('active');
	});
	$('.new-today .core .item > div').on('mouseenter', function() {
		var t = $(this).find('h5');
		var h = t.height();
		var m = t.find('span').outerHeight()/2;
		t.height(h).css({
			'margin-top': -h/2+'px'
		});
		t.find('span').css({
			'margin-top': -m+'px'
		});
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	var isMobile = false;
	var justSwitched = false;
	function detectDevice() {
		var temp = isMobile;
		if ( Modernizr.mq('(max-width:1377px)') ) {
			isMobile = true;
		} else {
			isMobile = false;
		}
		if ( temp == isMobile ) {
			justSwitched = false;
		} else {
			justSwitched = true;
		}
	}
	$(window).on('load resize', function() {
		$('.new-today .core > div, .articles-l .core').masonry({
			itemSelector: '.item',
			percentPosition: true,
			transitionDuration: 0
		});
		detectDevice();
		if ( justSwitched ) {
			if ( isMobile ) {
				$('body').prepend('<div class="mobile-drop"><div><div class="core"><span class="close"></span></div></div></div>');
				$('header .phones p.call').detach().appendTo('.mobile-drop .core');
				$('header .search').detach().appendTo('.mobile-drop .core');
				$('.panel-e .nav').detach().appendTo('.mobile-drop .core');
			} else {
				$('.mobile-drop .search').detach().appendTo('header > div');
				$('.mobile-drop .nav').detach().prependTo('.panel-e');
				$('.mobile-drop p.call').detach().appendTo('header .phones');
				$('.mobile-drop').remove();
			}
		}
		if ( Modernizr.mq('(max-width:1101px)') ) {
			$('.product-b .preview').detach().insertAfter('.product-b .big');
		} else {
			$('.product-b .preview').detach().insertBefore('.product-b .big');
		}
	});
	$(window).trigger('resize');
	$('.menu-open').on('click', function(e) {
		e.preventDefault();
		$('.mobile-drop').stop().slideDown(200);
	});
	$('.mobile-drop .close').on('click', function(e) {
		e.preventDefault();
		$('.mobile-drop').stop().slideUp(200);
	});
	$(window).on('click', function() {
		$('.mobile-drop').stop().slideUp(200);
	});
	$('.menu-open, .mobile-drop').on('click', function(e) {
		e.stopPropagation();
	});
	$('input[type="checkbox"], input[type="radio"]').uniform();
	$('.price-range').each(function() {
		var t = $(this)
		var thisMin = eval(t.find('.slide').attr('data-min'));
		var thisMax = eval(t.find('.slide').attr('data-max'));
		var start = eval(t.find('.slide').attr('data-min'));
		var end = eval(t.find('.slide').attr('data-max'));
		var step = eval(t.find('.slide').attr('data-step'));
		$(this).find('.slide').slider({
			value: 20000,
			range: true,
			min: thisMin,
			max: thisMax,
			step: step,
			values: [start, end],
			slide: function(event, ui) {
				t.find('.input .from').val(ui.values[0]+' р.');
				t.find('.input .to').val(ui.values[1]+' р.');
			},
			change: function(event, ui) {
				if ( ui.values[0] != eval(t.find('.slide').attr('data-min')) || ui.values[1] != eval(t.find('.slide').attr('data-max')) ) {
					t.parents('.range').addClass('active').children('p').text('Цена: '+ui.values[0]+'—'+ui.values[1]);
				} else {
					t.parents('.range').removeClass('active').children('p').text('Цена');
				}
			}
		});
		t.find('.input .from').val(start+' р.');
		t.find('.input .to').val(end+' р.');
	});
	$('.content-b .rc .filter .more li.range .remove').on('click', function(e) {
		e.preventDefault();
		$(this).siblings('p').text('Цена').parent().removeClass('active');
		$(this).parent().find('.slide').slider('values',0,eval($(this).parent().find('.slide').attr('data-min'))).siblings().find('input.from').val($(this).parent().find('.slide').attr('data-min')+' р.');
		$(this).parent().find('.slide').slider('values',1,eval($(this).parent().find('.slide').attr('data-max'))).siblings().find('input.to').val($(this).parent().find('.slide').attr('data-max')+' р.');
	});
	$('.content-b .rc .filter .more .list input[type="checkbox"]').on('click', function(e) {
		var t = $(this).parents('.list');
		var l = '';
		t.find('label').each(function() {
			if ( $(this).find('input[type="checkbox"]').prop('checked') == true ) {
				l = l+$(this).text()+', ';
			}
		});
		if ( l == '' ) {
			t.siblings('p').text(t.siblings('p').attr('data'));
			t.parent('li').removeClass('active');
		} else {
			t.siblings('p').text(t.siblings('p').attr('data')+': '+l.slice(0,-2));
			t.parent('li').addClass('active');
		}
	});
	$('.content-b .rc .filter .more li.multiply .remove').on('click', function(e) {
		e.preventDefault();
		$(this).siblings('p').text($(this).siblings('p').attr('data')).parent().removeClass('active');
		$(this).siblings('.list').find('input[type="checkbox"]').attr('checked',false);
		$.uniform.update();
	});
	$('.content-b .rc .filter .more > li > p').on('click', function() {
		var t = $(this).siblings('.list');
		t.parent().siblings().find('.list').hide();
		if ( t.is(':hidden') ) {
			t.show();
			if ( $(this).parent().hasClass('multiply') ) {
				t.children('div').jScrollPane()
			}
		} else {
			t.hide();
		}
	});
	$('html').on('click', function() {
		$('.content-b .rc .filter .more > li .list').hide();
	});
	$('.content-b .rc .filter .more > li .list, .content-b .rc .filter .more > li > p').click(function(e) {
		e.stopPropagation();
	});
	$('select').selectric();
	$('[data-rating-fixed]').each(function() {
		$(this).addClass('rate-'+$(this).attr('data-current'));
	});
	$('[data-favorite-toggle]').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});
	$('[data-compare-toggle]').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});
	$('[data-open]').on('click', function(e) {
		e.preventDefault();
		var t = $('.modal[data-target="'+$(this).attr('data-open')+'"]');
		$('.fade').stop(true,true).fadeIn(300);
		var h = $(window).scrollTop()+($(window).height()-t.outerHeight())/2;
		t.css({
			'top': h+'px'
		}).stop(true,true).fadeIn(300).siblings('[data-target]').stop(true,true).fadeOut(300);
		formLabel();
	});
	$('.fade, .modal .close').on('click', function(e) {
		e.preventDefault();
		$('.fade, .modal').stop(true,true).fadeOut(300);
	});
});