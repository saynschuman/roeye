(function ($) {

	// clicked

	$('.close-btn').click(function(){
		$('.clicked a').css('opacity', 0);
		$('.clicked').slideUp(300);

		setTimeout(function(){
			var searchTop = $('.main-screen').offset().top;
			$('#header-search').css('top', searchTop);		
		}, 500);
	})

	$(window).on('load, resize', function(){
		var searchTop = $('.main-screen').offset().top;
		$('#header-search').css('top', searchTop);

	})
	
	$(window).on('load resize', function(){
		var submenu = $('header.header .middle-header nav ul li .submenu'),
			submenuInner = $('.submenu-inner'),
			ulPosition = $('header.header .middle-header nav ul li a').offset().left;
			submenu.width(innerWidth).offset({
				left: 0
			})
			submenuInner.offset({
				left: ulPosition
			})
		if($(window).width() < 1200) {
			var searchTop = $('.main-screen').offset().top - 10;
			submenu.offset({
				left: 0
			}).css({
				'z-index': '9999',
				width: '100%',
				'max-width': '320',
				left: '0',
				top: '15px',
				'margin-bottom': '20px'
			});

		}
	})
	// menu 

	$('.search-ic').click(function(e){
		e.preventDefault();
		$('#header-search').toggleClass('w200 visible');
		var width = $('.container').width();
		$('#header-search').width(innerWidth);
		$('.search-container').width(width);
		setTimeout(function(){
			$('#s').focus();
		}, 200);
		
	})

	$('#close-search').click(function(){
		$('#s').toggleClass('w0');
		$('#header-search').toggleClass('w200 visible');
		$('.search-container').width(0);
	})

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('#header-search');
		var div_2 = $('.search-ic');

			if (!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0 
			    && !div_2.is(e.target)) { // и не по ссылке открытия
					$('#s').removeClass('w0');
					$('#header-search').removeClass('w200 visible');
					$('.search-container').width(0);
			}
	});	

	$(document).keyup(function(e) {
	     if (e.keyCode == 27) { // escape key maps to keycode `27`
	     	$('#s').toggleClass('w0');
			$('#header-search').toggleClass('w200 visible');
			$('.search-container').width(0);
	    }
	});		


	// wow

	new WOW().init();

	// mobile menu

	$('.mobile-menu').click(function() {
		$(this).toggleClass('active');

	});

	// validation

	$("#land-1-form").validate({
		rules:{
			name:{
				required: true,
				minlength: 2
			},
			adress:{
				required: true,
				minlength: 5
			},
			email:{
				required: true
			}
		}
	});
	$("#land-2-form").validate({
		rules:{
			name:{
				required: true,
				minlength: 2
			},
			adress:{
				required: true,
				minlength: 5
			},
			email:{
				required: true
			}
		}
	});
	$("#subscribe").validate({
		rules:{
			email:{
				required: true
			}
		}
	});

	$("#header-search").validate({
		rules:{
			search:{
				required: true,
				minlength: 5
			}
		}
	});

}(jQuery));