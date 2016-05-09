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

	// nav toogle
	$('#menu_toggle').on('click', function () {
		$(this).toggleClass('is-active');
		$('.nav_header').slideToggle();
	});

	// Screen slider
	$('.screen__slider').owlCarousel({
		loop: true,
		items: 1,
		autoplay:true,
		autoplayTimeout:2000,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});

	// Slider
	$('.slider').owlCarousel({
		loop: true,
		center: true,
		items: 3,
		responsive: {
			0: {
				margin: 20,
				items: 2
			},
			480: {
				margin: 50
			},
			768: {
				margin: 100
			}
		}
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

	// Google Map
	function initialize() {
		var mapProp = {
			center:new google.maps.LatLng(51.508742,-0.120850),
			zoom:15,
			scrollwheel: false,
			draggable: true,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		};
		var map=new google.maps.Map(document.getElementById("map"),mapProp);
	}
	google.maps.event.addDomListener(window, 'load', initialize);

	// popup "request"
	$('.popup-request').on('click', function(){
		$('.popup_request').fadeIn();
	});

	// popup
	$(document).bind("click", function (e) {
		if ($(e.target).closest(".popup__in, .popup-request").length === 0){
			$('.popup_request').fadeOut();
		}
	});
	
	// input phone mask
	$('input[name="mail_phone"]').inputmask({"mask": "(999) 999-9999"});

	// Ajax Form Consultation
	(function () {
		var mailConsultation = $('#mailConsultation');
		mailConsultation.submit(function (e) {
			e.preventDefault();
			var post_data = mailConsultation.serialize();

			//Ajax post data to server
			$.post('mailConsultation.php', post_data, function(response){
				if (response.type == 'error'){
					// your code here
				} else {
					// your code here
					$('.popup__help').slideDown();
					setTimeout(function () {
						$('.popup__help').slideUp();
						mailConsultation.trigger('reset');
						$('.popup_request').fadeOut();
					},5000);
				}
			}, 'json');
		});
	}());

	// Ajax Form Delivery
	(function () {
		var mailDelivery = $('.mail');
		mailDelivery.submit(function (e) {
			e.preventDefault();
			var el = $(this);
			var post_data = el.serialize();

			//Ajax post data to server
			$.post('mailDelivery.php', post_data, function(response){
				if (response.type == 'error'){
					// your code here
				} else {
					// your code here
					$('.mail__help').slideDown();
					setTimeout(function () {
						$('.mail__help').slideUp();
						el.trigger('reset');
						$('.popup_request').fadeOut();
					},5000);
				}
			}, 'json');
		});
	}());
	
});