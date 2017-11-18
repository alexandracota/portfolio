$(document).ready(function() {

		$('.project-image').on('mouseenter', function(event) {
		$(event.currentTarget).animate({
			opacity: 0.25
		}, 'fast').on('mouseleave', function(event) {
			$(event.currentTarget).animate({
				opacity: 1
			}, 'fast')
		})
	});

	$('.icons').on('mouseenter', function(event) {
		$(event.currentTarget).animate({
			opacity: 0.25
		}, 'fast').on('mouseleave', function(event) {
			$(event.currentTarget).animate({
				opacity: 1
			}, 'fast')
		})
	});


});



