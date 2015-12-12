$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.still_ryu').hide();
		$('.ready_ryu').show();
	})
	.mouseleave(function(){
		$('.still_ryu').show();
		$('.ready_ryu').hide();
		
	})
	.mousedown(function(){
		playHadouken();
		$('.ready_ryu').hide();
		$('.fire_ryu').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function(){
				$('.hadouken').hide();
				$('.hadouken').css('left', '650px');
			});
	})
	.mouseup(function(){
		// $('.hadouken').hide();
		$('.fire_ryu').hide();
		$('.ready_ryu').show();
	});

});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}




