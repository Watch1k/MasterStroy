/* Common JS */
$(document).ready(function(){

	// Clear placeholder
	(function() {
		var el = $('input, textarea');
		el.focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'));
			$(this).attr('placeholder','');
		});
		el.blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	}());

	// Slider
	$('.slider').owlCarousel({
		loop: true,
		margin: 100,
		center: true,
		items: 3
	});

	// Custom Navigation Events
	$(document).on('click', '.owl-item', function(){
		var n = $(this).index();
		$('.owl-stage').trigger('to.owl.carousel', n);
	});

	// Counter
	(function(){
		$(window).load(function () {
			$(".counter__main").each(function(index){
				var counter = $(this),
						counterNow = new Date(),
						counterDate = counterNow.setDate(counterNow.getDate() + 2),
						counterValue = Math.round((counterDate - new Date()) / 1000);
				counter.countdown({
					seconds: counterValue,
					callback:function(days,hours,minutes,seconds,total){
						days = (days) ? ((days<10)?""+days:days) : "0:";
						hours = (hours) ? ((hours<10)?"0"+hours:hours) : "00:";
						minutes = (minutes) ? ((minutes<10)?"0"+minutes:minutes) : "00:";
						seconds = (seconds) ? ((seconds<10)?"0"+seconds:seconds) : "00";
						counter.html('<span>' + days + '</span>' + '<span>' + hours + '</span>' + '<span>' + minutes + '</span>' + '<span>' + seconds + '</span>');
					},
					finished: function(){
						// your code here
					}
				});
			});
		});
	}());
	
});