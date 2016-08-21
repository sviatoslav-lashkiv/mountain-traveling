$(document).ready(function() { 

// Скроллінг від 'якоря' до блока на який він ссилається
scrollingToBlock( $('.navbar') );
scrollingToBlock( $('.order-now') );

function scrollingToBlock (obj) {
	obj.on('click', 'a', function (event) {
	
		event.preventDefault(); // відміна стандартне відпрацювання переходу по ссилці
	
		var id = $(this).attr('href'), // забираєм id блока з атрибута href
	
		top = $(id).offset().top; // висота від початку сторінки до блока на який ссилається 'якірь'
	
		$('body,html').animate({scrollTop: top}, 1500); // анімація переходу на відстань top за 1500мс
});
}


// Blog read-more button
$('.blog-hide').css({'display' : 'none'});
$('#blog-read-more').click( function () {
	$('.blog-hide').toggle(500)
});

// Create a Tooltip bootsatrap
$('.header-content a').attr({ 'data-toggle':'tooltip' })

$('[data-toggle="tooltip"]').tooltip({ 'placement': 'right' }); 



//  Вирівнення висоти блоків journal-posts
function journalPostSize () {
	var x = $('.journal-post-img').width();
	var y = $('.journal-post-text').height();
	
	if( $(window).width() <= 768 ) {
		$('.journal-post-img, .journal-post-text').height(y+10);
	} else {
		$('.journal-post-img, .journal-post-text').height(x);
	}
}

journalPostSize();
$(window).resize(journalPostSize); // викликаємо функцію після зміни розміру вікна

// Наведення курсора на journal-post-text
$('.journal-post').hover( function () {
		$('.journal-post-img', this).animate({
			'opacity' :  '1'
		}, 500 );
		
		$('.journal-post-text', this).css({
			'backgroundColor' :  '#F6F4F5'
		});
		
		$('.journal-post-img img:first', this).css({
			'transform' :  'scale(1.1)',
			'transition' : 'all 300ms ease-in-out'
		});
	}, function () {
		$('.journal-post-img', this).animate({
			'opacity' :  '0.75'
		}, 500 );
		
		$('.journal-post-text', this).css({
			'backgroundColor' :  ''
		});
		
		$('.journal-post-img img', this).css({
			'transform' :  '',
			'transition' : 'all 300ms ease-in-out'
		});
	});

	
/********************* SCHEME BLOCK ANIMATION ***************************/
// Rounded BUS in scheme section
function schemeBg (bg, nxtBg) {
	bg.css({ 'backgroundColor' : '#d8e2ed', 'transition' : 'all 0.6s ease-in-out'	});
	nxtBg.addClass('animated shake').css({'backgroundColor' : '#F9CC9D'});
}

roundedBus1 ();

function roundedBus1 () {
		$('.scheme-blocks:eq(0)').one ( 'click',  function () {
			schemeBg ($('.scheme-bg:eq(0)'), $('.scheme-bg:eq(1)'));
			$('.road:eq(0)').slideDown(200);
			
			$('.bus')
				.css({ 'display' : 'block', 'left' : '0' })
				.removeClass( 'animated bounceOutRight' )
				.addClass( 'animated bounceInLeft' );
				
			roundedBus2 ();
		});
}
function  roundedBus2 (){
		$('.scheme-blocks:eq(1)').one ( 'click', function () {
			schemeBg ($('.scheme-bg:eq(1)'), $('.scheme-bg:eq(2)'));
			
			$('.road:eq(1)').slideDown(200);
			
			$('.bus')
				.removeClass('animated bounceInLeft')
				.animate({ 'left' : '120%' }, 1000);
			
			roundedBus3 ();
		});
}
function roundedBus3 () {
		$('.scheme-blocks:eq(2)').one ( 'click', function () {
			schemeBg ($('.scheme-bg:eq(2)'), $('.scheme-bg:eq(3)'));
			
			$('.road:eq(2)').slideDown(200);
			
			$('.bus').animate({ 'left' : '240%'	}, 1000);
			
			roundedBus4 ();
		});
}

function roundedBus4 () {
		$('.scheme-blocks:eq(3)').one ( 'click', function () {
			schemeBg ($('.scheme-bg:eq(3)'), $('.scheme-bg:eq(4)'));
			
			$('.road:eq(3)').slideDown(200);
			
			$('.bus')
				.animate({ 'left' : '360%' }, 1000)
				.addClass('animated bounceOutRight')
				.css('animation-delay', '1.5s');
				
			$('.road ').delay(2000).hide( 2000, function() {
				$('.scheme-bg').css({'backgroundColor' : ''});

				roundedBus1 ();	
			});
		});
}


// TRAVEL BLOCK ANIMATION
$('.price').css({'opacity' : '0'});

$('.travel-blocks').hover( function () {
	$('.price', this)
		.removeClass('fadeOut animated')
		.addClass('fadeIn animated');
		//.fadeIn(700);
 }, function () {
	$('.price', this)
		.removeClass('fadeIn animated')
		.addClass('fadeOut animated'); //.fadeOut(500)
} )


// Footer input animation
$('.footer-form-input').one( 'click', function() {
		$(this).addClass('animated pulse');
});



/***************** ANIMATION WOW ***************************************/
$.fn.fadeLeft = function  (delay) {
	$(this).addClass('wow fadeInLeft').attr('data-wow-delay', delay + 'ms');
}
$.fn.fadeRight = function  (delay) {
	$(this).addClass('wow fadeInRight').attr('data-wow-delay', delay + 'ms');	
}
$.fn.fadeUp = function  (delay) {
	$(this).addClass('wow fadeInUp').attr('data-wow-delay', delay + 'ms');
}
$.fn.fadeDown = function  (delay) {
	$(this).addClass('wow fadeInDown').attr('data-wow-delay', delay + 'ms');	
}

//Header
$('.header').addClass('wow fadeIn');
$('.header-logo').addClass('wow fadeInRight');
$('.navbar-header').addClass('wow fadeInLeft');
$('.navbar-nav [href*=blog]').fadeLeft('700');
$('.navbar-nav [href*=journal]').fadeLeft('600');
$('.navbar-nav [href*=scheme]').fadeLeft('500');
$('.navbar-nav [href*=travel]').fadeLeft('400');
$('.navbar-nav [href*=gallery]').fadeLeft('300');
$('.navbar-nav [href*=footer]').fadeLeft('200');
$('.navbar-nav button').fadeLeft('10');
$('.header-content').addClass('wow fadeIn').attr('data-wow-duration', '2000ms');		
$('.header-content h1:eq(0)').addClass('wow bounceInDown').attr('data-wow-duration', '2200ms');		
$('.header-content h1:eq(1)').addClass('wow bounceInUp').attr('data-wow-duration', '2400ms');		
$('.header-content p').fadeLeft('1400');		
$('.header-content a').fadeLeft('1600');		

// Blog
$('#blog, .blog').addClass('wow fadeIn');		
$('.blog-text h4').fadeLeft('200');		
$('.blog-text p').fadeLeft('500');		
$('.blog-text button').fadeLeft('800');		
$('.blog-img-big').addClass('wow rollIn').attr({'data-wow-delay':'400ms'});		
$('.blog-img-big').addClass('wow rollIn').attr({'data-wow-delay':'400ms'});		
$('.blog-img-small').addClass('wow rotateInUpLeft');

// Journal
$('#journal');		
$('.journal-post-img:eq(0)').fadeLeft('400');	
$('.journal-post-text:eq(0)').fadeRight('400');	
$('.journal-post-img:eq(1)').fadeRight('400');	
$('.journal-post-text:eq(1)').fadeLeft('400');
$('.journal-post-img:eq(2)').fadeDown('400');	
$('.journal-post-text:eq(2)').fadeUp('400');
$('#journal h4').addClass('wow pulse').attr('data-wow-delay', '400ms');

// Offer
$('#order-now').addClass('wow fadeIn').attr({'data-wow-delay':'0'});	
$('#order-now h5').addClass('wow bounceInLeft').attr('data-wow-delay', '200ms');	
$('#order-now p:eq(0)').fadeLeft('150');
$('.offer-form').fadeLeft('400');
$('#form-name').fadeRight('600');
$('#form-phone').fadeRight('650');
$('.offer-form button').fadeRight('800');
$('#order-now p:eq(1)').fadeLeft('850');

// Scheme
$('#scheme h4').addClass('wow bounceInLeft').attr('data-wow-delay', '100ms');
$('.scheme-wrap-line').addClass('wow zoomIn').attr('data-wow-delay', '1600ms');	
$('.scheme-line').addClass('wow zoomIn').attr('data-wow-delay', '1600ms');
$('.scheme-num').addClass('wow flipInX');
$('.scheme-num:eq(0)').attr({'data-wow-delay':'1000ms'});
$('.scheme-num:eq(1)').attr({'data-wow-delay':'1200ms'});
$('.scheme-num:eq(2)').attr({'data-wow-delay':'1400ms'});
$('.scheme-num:eq(3)').attr({'data-wow-delay':'1600ms'});
$('.scheme-bg').addClass('wow swing');	
$('.scheme-blocks h5').fadeUp('600');
$('.scheme-blocks p').fadeUp('900');
	
// Travel
$('.travel-wrap').addClass('wow fadeIn');
$('.travel-wrap h4').fadeLeft('200');
$('.travel-blocks:eq(0)').fadeLeft('400');
$('.travel-blocks:eq(1)').fadeLeft('600');
$('.travel-blocks:eq(2)').fadeLeft('800');
$('.travel-blocks:eq(3)').fadeLeft('1000');

// Gallery
$('#gallery h4').fadeLeft('800');
$('.gallery-img:eq(0)').fadeRight('400');
$('.gallery-img:eq(2)').fadeRight('600');
$('.gallery-img:eq(4)').fadeRight('800');
$('.gallery-img:eq(1)').fadeRight('1000');
$('.gallery-img:eq(3)').fadeRight('1200');
$('.gallery-img:eq(5)').fadeRight('1400');

// Footer
$('.footer-wrap').addClass('wow fadeIn');
$('.footer-wrap h4').fadeLeft('400');
$('.footer-wrap p:eq(0)').fadeLeft('600');
$('.footer-wrap p:eq(1)').fadeLeft('800');
$('.footer-wrap p:eq(2)').fadeLeft('1000');
$('.footer-wrap p:eq(3)').fadeLeft('1200');

}); //Конец ready
