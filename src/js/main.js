(function ($) {

	// clicked

	$('.close-btn').click(function(){
		$('.clicked a').css('opacity', 0);
		$('.clicked').slideUp(300);
	})

	// menu 

	$('.search-ic').click(function(e){
		e.preventDefault();
		$('#header-search').toggleClass('w200 visible');
		setTimeout(function(){
			$('#s').focus();
		}, 200);
		
	})
	$('#header-search input').blur(function(){
		$(this).toggleClass('w0');
		$('#header-search').toggleClass('w200 visible');
	})

	$('close-search').click(function(){
		$('#header-search input').toggleClass('w0');
		$('#header-search').toggleClass('w200 visible');
	})

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

}(jQuery));