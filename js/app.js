$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.still_ryu').hide();
		$('.ready_ryu').show();
	})
	.mouseleave(function() {
		$('.ready_ryu').hide();
		$('.still_ryu').show();
	})
	.mousedown(function() {
		$('.ready_ryu').hide();
		$('.fire_ryu').show();
		$('.hadouken').show().animate(right)
		//play sound
		//show hadouken and animate it to right of screen
	})
	.mouseup(function() {
		$('.hadouken').hide();
		$('.fire_ryu').hide();
		$('.ready_ryu').show();
		
		//make ryu return

	})

});